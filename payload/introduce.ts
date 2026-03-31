// import { link } from 'fs';
import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '보험 도메인에서 질병·청약 심사 자동화 시스템을 개발하고 있는 개발자입니다.',
    '하나생명, KB Life, DB생명, 롯데손해보험에서 사전심사 관련 프로젝트를 수행하며, 요구사항 분석부터 운영 반영까지 단독으로 수행한 경험이 있습니다.',
    '사전 도메인 지식 없이 투입된 프로젝트에서도 기존 소스 분석부터 시작하여 단기간 내 기능 개발 및 운영 반영을 완료한 경험이 있습니다.',
    '업무 프로세스 자동화, DB 구조 개선 등 필요한 개선을 직접 제안하고 구현해온 경험이 있습니다.',
  ],
  sign: 'Lee Hoin',
  // sign: packageJson.author.name,
  // latestUpdated: '2022-07-18',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
