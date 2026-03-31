import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '코리아엑스퍼트(주)',
      position: '응용테크팀',
      startedAt: '2024-03',
      descriptions: [
        '보험사 질병·청약 심사 자동화 시스템 개발 (Java / Spring Boot)',
        '하나생명, KB Life, DB생명, 롯데손해보험에서 사전심사 관련 프로젝트 수행',
      ],
      skillKeywords: ['Java', 'Spring Boot', 'MySQL', 'Oracle', 'MyBatis', 'Docker', 'Jenkins'],
    },
    {
      title: '와이즈넛',
      position: '기술지원 1팀',
      startedAt: '2022-10',
      endedAt: '2023-06',
      descriptions: [
        '검색엔진 유지관리 업무 수행 (총 118개 사이트 담당)',
        '약 80여 건 이상의 장애 처리 및 추가 작업 수행',
        'Linux 서버 환경에서 장애 대응 및 운영',
        '고객사 직접 대응 및 일정·작업 조율',
      ],
      skillKeywords: ['Linux', 'JSP', 'Java', 'ORACLE', 'MYSQL', 'javascript'],
    },
  ],
};

export default experience;
