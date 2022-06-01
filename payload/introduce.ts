// import { link } from 'fs';
import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하십니까! 입사지원자 이호인입니다.',
    '저는 체육을 전공했습니다. 졸업 후 진로를 고민하던 중 자신이 노력한 만큼 대우를 받을 수 있다는 개발자의 이야기를 듣고 관심이 생겨 도전하게 되었습니다.',
    '처음엔 코뮤니티라는 까페에서 진행하는 2주 자바 과정, 노마드 코더의 자바스크립트 과정을 직접 해보면서 적성에 맞는지 확인했습니다.',
    '옳고 그름이 명확한 것이 매력적이었고 생각처럼 안 풀려서 답답하면서도 밤새가며 하는 스스로의 모습에 더 도전해보고 싶어졌습니다.',
    '쌍용 교육센터에서 6개월 간 교육을 들으며 기본적인 java, jsp, oracle, spring, myBatis 등을 배웠고 총 4번의 프로젝트를 경험했습니다.',
    '프로젝트를 진행하면서 에러 해결하는 과정과 해결했을 때 성취감이 좋았습니다. 또 관련 없는 전공이지만 운동했던 경험이 상황이 잘 안 풀리더라도 남들보다 더 열심히 참고 할 수 있었던 것 같고, 팀 단위 협업이 중요한 프로젝트 활동이 저에게 잘 맞았던 것 같습니다.',
    '교육센터 수료 후에는 조금 더 욕심이 생겨 멘토가 있는 스터디를 통해 코드 리뷰를 받으며 공부 중입니다. 언어도 중요하지만 컴퓨터 기본 지식과 네트워크 지식 등의 필요성을 느껴 공부하고 있고, 국비 과정 수료할 땐 기능 구현에 급급했지만 이번엔 꼭 선택의 이유를 찾아 정리해두려고 노력하고 있습니다.',
    '현재 12월부터 600여 개의 커밋과 40여 개의 포스팅을 진행했고, PR을 진행할 때도 적용한 이유들을 꾸준히 기록하려고 노력하고 있습니다.',
  ],
  sign: 'Lee Hoin',
  // sign: packageJson.author.name,
  // latestUpdated: '2022-06-01',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
