// import { link } from 'fs';
import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '저의 목표는 팀에서 같이 일하고 싶은 사람이 되는 것 입니다.',
    '계속 발전하는 사람이 되겠습니다.',
    '감사합니다 😀',
  ],
  sign: 'Lee Hoin',
  // sign: packageJson.author.name,
  // latestUpdated: '2022-07-18',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
