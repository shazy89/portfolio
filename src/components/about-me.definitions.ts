const softwareSkillIcons = [
  'javascript',
  'typescript',
  'react',
  'react-native',
  'redux',
  'express-js',
  'node-js',
  'mongo',
  'css',
] as const
export type SoftwareSkill = typeof softwareSkillIcons[number]

const languages = ['English', 'Macedonian', 'Turkish', 'Serbian'] as const
export type Language = typeof languages[number]

const personalSkills = ['Leadership, Organization, Creativity, Team Work, UX/UI Design, Requirements Gathering']
export type PersonalSkill = typeof personalSkills[number]

type Skill = {
  icon: SoftwareSkill
  skill: string
}

export type AboutMeData = {
  aboutJson: {
    email: string
    about_me: string
    software_skills: Skill[]
    languages: Language[]
    personal_skills: PersonalSkill[]
  }
}
