import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'Spring',
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
    },
    {
      title: 'Oracle',
    },
    {
      title: 'myBatis',
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'HTML/CSS',
    },
    {
      title: 'javascript',
    },
    {
      title: 'Jquery',
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Linux',
    },
    {
      title: 'Slack',
    },
    {
      title: 'IntelliJ',
    },
    {
      title: 'Eclipse',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Git / Github',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
};

export default skill;
