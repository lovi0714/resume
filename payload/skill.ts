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
      title: 'javascript',
    },
    {
      title: 'HTML/CSS',
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
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
      title: 'redis',
    },
    {
      title: 'Jenkins',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
};

export default skill;
