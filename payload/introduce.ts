// import { link } from 'fs';
import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하십니까! 백엔드 개발자를 꿈꾸는 이호인이라고 합니다.',
    '쌍용 교육센터에서 6개월(896H) 과정의 교육을 들으며 기본적인 java, jsp, oracle, spring, myBatis 등을 배웠고 총 4번의 프로젝트를 경험했습니다.',
    '프로젝트를 진행하면서 에러 해결하는 과정과 해결했을 때 성취감이 좋았습니다. ',
    '또 힘들게 운동했던 경험 덕분에 상황이 잘 안 풀리더라도 남들보다 더 열심히 참고 할 수 있었고, 팀 단위 협업이 중요한 프로젝트 활동도 저에게 잘 맞았습니다.',
    '교육센터 수료 후에는 조금 더 욕심이 생겨 멘토가 있는 스터디를 통해 코드 리뷰를 받으며 공부 중입니다. ',
    '국비 과정 수료할 땐 기능 구현에 급급했지만 이번엔 느리더라도 제대로 이해하고 정리하는 것이 목표입니다.',
    '현재 12월부터 650여 개의 커밋과 40여 개의 포스팅을 진행했고, PR을 진행할 때도 적용한 이유들을 꾸준히 기록하려고 노력 중입니다.',
    '팀에서 같이 일하고 싶은 사람이 되는 것이 목표입니다.',
  ],
  sign: 'Lee Hoin',
  // sign: packageJson.author.name,
  // latestUpdated: '2022-07-18',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
