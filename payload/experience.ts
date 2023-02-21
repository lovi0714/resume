import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '와이즈넛',
      position: '기술지원팀',
      startedAt: '2022-10',
      descriptions: ['검색엔진 SF-1 유지/관리 업무'],
      skillKeywords: ['Linux', 'JSP', 'Java', 'ORACLE', 'MYSQL', 'html', 'css', 'javascript'],
    },
    {
      title: '쌍용교육센터',
      position: '교육생',
      startedAt: '2021-11',
      endedAt: '2022-04',
      descriptions: ['자바 기반 AWS 클라우드 활용 Full-Stack 개발자 양성 과정 수료'],
      skillKeywords: [
        'Java',
        'ORACLE',
        'JSP',
        'Spring',
        'myBatis',
        'html',
        'css',
        'javascript',
        'jquery',
      ],
    },
  ],
};

export default experience;
