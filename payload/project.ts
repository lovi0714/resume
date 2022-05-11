import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '쌍용교육센터 final project [CPMS]',
      startedAt: '2022-03',
      endedAt: '2022-04',
      where: '쌍용교육센터',
      descriptions: [
        {
          content: '리스크 관리',
          weight: 'MEDIUM',
          descriptions: [
            { content: '프로젝트 관리 시스템 중 리스크 관리 부분을 맡아서 진행' },
            { content: '게시판 형식으로 CRUD 구현 ' },
            { content: '파일 업로드, 파일 다운로드 구현 ' },
          ],
        },
        {
          content: '실시간 채팅 구현',
          weight: 'MEDIUM',
          descriptions: [
            { content: '웹 소켓 사용, 실시간 대화가 가능하도록 구현' },
            {
              content: '부서별 채팅방을 만들어 해당 채팅방끼리만 대화 가능하게 구현',
            },
          ],
        },
        { content: '프로젝트 주소', href: 'https://github.com/lovi0714/final-project' },
      ],
    },
    {
      title: 'BoardStudy',
      startedAt: '2022-04',
      where: 'Study 진행 중',
      descriptions: [
        { content: '스프링 부트를 활용한 게시판 만들기' },
        { content: 'CI/CD 구축을 통한 자동화, 슬랙을 통한 모니터링' },
        { content: '깃 플로우를 통한 협업 (develop, feature, release, master, hotfix)' },
        { content: 'redis로 session 관리 코드 작성' },
        { content: 'lucy-filter를 활용한 XSS 방어 코드 작성' },
        { content: '프로젝트 주소', href: 'https://github.com/boardStudy/BoardStudy' },
      ],
    },
  ],
};

export default project;
