// import { link } from 'fs';
import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하십니까',
    '백엔드 개발자가 되기 위해 노력 중인 이호인이라고 합니다.',
    '국비교육과정을 통하여 웹 개발 기초 소양을 쌓았고 수료 후에도 스프링 스터디와 멘토링을 통하여 조금 더 발전하고자 하였습니다.',
    '그 후에 기술지원 1팀에서 다양한 환경의 사이트들을 응대하며 다수의 트러블 슈팅을 경험한 것을 기반으로 문제 해결 능력을 기를 수 있었습니다.',
    '저의 목표는 팀에서 같이 일하고 싶은 팀원이 되는 것 입니다.',
    '계속 발전하는 사람이 되겠습니다.',
    '감사합니다. 😀',
  ],
  sign: 'Lee Hoin',
  // sign: packageJson.author.name,
  // latestUpdated: '2022-07-18',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
