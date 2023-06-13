import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '와이즈넛',
      position: '기술지원 1팀',
      startedAt: '2022-10',
      endedAt: '2023-06',
      descriptions: [
        '검색엔진 SF-1 유지/관리 업무',
        'linux 환경에서 작업 가능할 정도의 기본 지식 습득',
        '다수의 트러블 슈팅 경험 (80회 이상 건수 처리)',
      ],
      skillKeywords: ['Linux', 'JSP', 'Java', 'ORACLE', 'MYSQL', 'javascript'],
    },
  ],
};

export default experience;
