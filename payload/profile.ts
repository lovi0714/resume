import { faBlog, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faYoutube, faBlogger } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '이호인',
    small: '(Hoin Lee)',
  },
  contact: [
    {
      title: 'lovi0714@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/lovi0714',
      link: 'https://github.com/lovi0714',
      icon: faGithub,
    },
    {
      title: 'https://velog.io/@lovi0714',
      link: 'https://velog.io/@lovi0714',
      icon: faBlogger,
    },
  ],
  notice: {
    title: '안녕하세요. 반갑습니다! 😀',
    icon: faBell,
  },
};

export default profile;
