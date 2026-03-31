import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { IEtc } from './IEtc';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IEtc.Payload;
type Item = IEtc.Item;

export const Etc = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const certifications = payload.list.filter((item) => item.category === 'CERTIFICATION');
  const trainings = payload.list.filter((item) => item.category === 'TRAINING');

  return (
    <>
      <Section title="CERTIFICATION" items={certifications} />
      <Section title="TRAINING" items={trainings} />
    </>
  );
}

function Section({ title, items }: { title: string; items: Item[] }) {
  if (!items.length) {
    return <></>;
  }

  return (
    <CommonSection title={title}>
      <ItemRows items={items} />
    </CommonSection>
  );
}

function ItemRows({ items }: { items: Item[] }) {
  return (
    <EmptyRowCol>
      {items.map((item, index) => {
        return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
      })}
    </EmptyRowCol>
  );
}

function serialize(item: Item): IRow.Payload {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(item.startedAt, DATE_FORMAT.YYYY_LL).toFormat(
    DATE_FORMAT.YYYY_DOT_LL,
  );
  const title = (() => {
    if (item.endedAt) {
      const endedAt = DateTime.fromFormat(item.endedAt, DATE_FORMAT.YYYY_LL).toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      );
      return `${startedAt} ~ ${endedAt}`;
    }
    return startedAt;
  })();

  return {
    left: {
      title,
    },
    right: {
      title: item.title,
      subTitle: item.subTitle,
    },
  };
}
