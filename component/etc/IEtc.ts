import { ICommon } from '../common/ICommon';

export declare namespace IEtc {
  export interface Payload extends ICommon.Payload {
    list: Item[];
  }

  export interface Item {
    category: 'CERTIFICATION' | 'TRAINING';
    title: string;
    subTitle: string;
    startedAt: string;
    endedAt?: string;
  }
}
