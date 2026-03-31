import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '이호인',
  },
  contact: [
    {
      title: 'lovi0714@gmail.com',
      link: 'mailto:lovi0714@gmail.com',
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
  ],
};

export default profile;
