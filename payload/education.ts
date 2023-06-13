import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '경기대학교',
      subTitle: '레저스포츠 전공',
      startedAt: '2013-03',
      endedAt: '2021-02',
    },
    {
      title: '죽전고등학교',
      subTitle: '인문계',
      startedAt: '2010-03',
      endedAt: '2013-02',
    },
    {
      title: '쌍용교육센터',
      subTitle: '자바 기반 AWS 클라우드 활용 Full-Stack 개발자 양성 과정 수료',
      startedAt: '2021-11',
      endedAt: '2022-04',
    },
  ],
};

export default education;
