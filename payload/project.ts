import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '업무 보고 자동화 및 도메인 지식 축적 체계 구축',
      startedAt: '2026-03',
      where: '코리아엑스퍼트(주)',
      descriptions: [
        {
          content: '업무 보고 프로세스 자동화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '기존 PPT 기반 업무 보고 및 수작업 취합 프로세스를 Notion 자동화로 전환 (대상 약 25명)',
            },
            {
              content:
                '팀원 PPT를 개별 열어 복사·정리하던 관리자 취합 작업을 제거하고, Notion 자동 취합 + 코멘트 방식으로 개선',
            },
            { content: 'Claude API를 활용하여 보고 초안 및 취합 초안 자동 생성 기능 구현' },
          ],
        },
        {
          content: '도메인 지식 축적 체계 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '축적된 업무 데이터를 기반으로 Claude API를 활용한 도메인 지식 초안 자동 생성 체계 구축',
            },
          ],
        },
        {
          content: '성과',
          weight: 'BOLD',
          descriptions: [
            { content: '관리자 수작업 취합 업무 제거 — Notion 자동 취합으로 전환' },
            { content: 'Claude API 연동으로 보고·취합·지식 초안 작성 자동화' },
            { content: '1개 팀 대상 테스트 예정' },
          ],
        },
      ],
    },
    {
      title: '롯데손해보험 고지정보 자동입력',
      startedAt: '2026-01',
      endedAt: '2026-02',
      where: '롯데손해보험',
      descriptions: [
        {
          content: '고지정보 자동입력 기능 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '질병별 공통질문·추가질문으로 구성된 고지정보를 수기 입력에서 사고이력 데이터 기반 자동입력으로 전환하는 기능 개발',
            },
            { content: '현업과 직접 커뮤니케이션하며 요구사항 정리 및 기능 반영' },
            { content: '개발부터 테스트, 운영 반영까지 단독 수행' },
          ],
        },
        {
          content: '공통 질문 응답에 따른 추가 질문 제어 및 유효성 검증 로직 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '공통 질문 응답에 따라 추가 질문을 동적으로 제어' },
            { content: '유효성 검증을 통해 알맞은 답변만 입력되도록 처리' },
          ],
        },
        {
          content: '성과',
          weight: 'BOLD',
          descriptions: [
            { content: '자동입력 도입으로 현업 건당 입력 시간 50% 이상 단축' },
            { content: '기존 잘못된 입력으로 인한 심사 반려 케이스를 유효성 검증 로직으로 차단' },
          ],
        },
      ],
    },
    {
      title: 'DB생명 질병심사 기능 개선',
      startedAt: '2025-09',
      endedAt: '2025-12',
      where: 'DB생명',
      descriptions: [
        {
          content: '질병심사 기능 대응 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '기존 2,400만 건 테이블에 신규 상품 데이터 4,500만 건 추가 필요 — 단일 테이블 구조의 한계를 판단하여 LIST 파티션 재설계 제안 및 적용',
            },
            {
              content:
                '상품 코드 기반 LIST 파티션으로 분리하여, 기존 소스 및 쿼리 수정을 최소화하면서 구조 전환',
            },
            { content: '데이터 적재 전 중복·정합성 검증 수행' },
          ],
        },
        {
          content: '성과',
          weight: 'BOLD',
          descriptions: [
            { content: '6,900만 건 규모 테이블을 상품 단위로 분리하여 유지보수성 확보' },
            { content: '신규 상품 추가 시 파티션 추가만으로 대응 가능한 확장 구조 확보' },
            { content: '기존 쿼리 변경 없이 구조 전환 완료' },
          ],
        },
      ],
    },
    {
      title: 'KB Life 질병심사 기능 개선',
      startedAt: '2025-07',
      endedAt: '2025-08',
      where: 'KB Life',
      descriptions: [
        {
          content: '질병심사 기능 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '신규 건강 상품 출시에 따라 5년/10년 시나리오 판을 분리하여 질병심사 기능 개발',
            },
            {
              content:
                '신정원 데이터 및 기존 심사 소스 분석부터 시작하여, 기존 구조를 재활용한 설계로 개발 기간 단축',
            },
            { content: '현업 커뮤니케이션 지원을 받으며, 개발부터 운영 반영까지 수행' },
          ],
        },
        {
          content: '성과',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '사전 도메인 지식 없이 투입되어, 소스 분석부터 운영 반영까지 2주 내 완료 — 상품 출시 일정 납기 준수',
            },
          ],
        },
      ],
    },
    {
      title: '하나생명 제3보험 시스템 구축 (청약심사 자동화)',
      startedAt: '2024-08',
      endedAt: '2025-06',
      where: '하나생명',
      descriptions: [
        {
          content: '콘텐츠 배포 기능',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '개발계 → 테스트계 → 운영계 콘텐츠 배포 기능 설계 및 개발 (약 250만 건 규모)',
            },
            { content: '선택적 배포, 결재, 예약 배포 기능 구현' },
            { content: '단건 SELECT → 1,000건 배치 처리 전환으로 대용량 배포 성능 대폭 단축' },
            {
              content:
                '솔루션 전체 콘텐츠가 한 화면에 로딩되는 구조로 인해 초기 로딩이 느린 문제를 비동기 처리로 개선',
            },
          ],
        },
        {
          content: '게시판 / 통계 화면',
          weight: 'MEDIUM',
          descriptions: [
            { content: '요구사항에 맞춰 기존 게시판 화면 커스터마이징' },
            { content: '심사 결과를 각 특성에 맞게 총 6개 화면으로 구성하여 제공' },
          ],
        },
        {
          content: '성과',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '250만 건 규모 배포를 단건 → 배치 처리로 전환하여 처리 시간 대폭 단축, DB 부하 감소',
            },
            { content: 'DBA 의존 없이 현업이 직접 배포·운영할 수 있는 무중단 배포 체계 구축' },
          ],
        },
      ],
    },
    {
      title: 'The KE 프로파일 및 장비 관리 시스템',
      startedAt: '2024-03',
      endedAt: '2024-07',
      where: '코리아엑스퍼트(주)',
      descriptions: [
        {
          content: '사내 인력·장비 관리 시스템 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '이력서 수정 승인, 관리자 메뉴, 사용자 권한 관리, 로그 관리(AOP, Logback) 개발',
            },
            { content: '실시간 서버 자원 모니터링 기능 구현' },
            { content: 'Docker Compose + Jenkins 기반 빌드·배포 환경을 주도하여 구축' },
          ],
        },
      ],
    },
  ],
};

export default project;
