import { Skill, SkillCategory } from "./contentTypes";

/**
 * Master set of skills used across content types such as projects and employment history.
 */
export const SkillListRecord: Record<string, Skill> = {
    // Programming Related Skills
    javaScript: { skillName: 'JavaScript', category: SkillCategory.PROGRAMMING },
    typeScript: { skillName: 'TypeScript', category: SkillCategory.PROGRAMMING },
    python: { skillName: 'Python', category: SkillCategory.PROGRAMMING },
    java: { skillName: 'Java', category: SkillCategory.PROGRAMMING },
    cSharp: { skillName: 'C#', category: SkillCategory.PROGRAMMING },
    stylesheets: { skillName: 'CSS/SASS/SCSS', category: SkillCategory.PROGRAMMING },
    websockets: { skillName: 'Websockets', category: SkillCategory.PROGRAMMING },
    microservices: { skillName: 'Microservices', category: SkillCategory.PROGRAMMING },
    rest: { skillName: 'RESTful APIs', category: SkillCategory.PROGRAMMING },

    // Libraries
    react: { skillName: 'React', category: SkillCategory.LIBRARIES },
    angular: { skillName: 'Angular', category: SkillCategory.LIBRARIES },
    django: { skillName: 'Django', category: SkillCategory.LIBRARIES },
    drf: { skillName: 'Django Rest Framework', category: SkillCategory.LIBRARIES },
    express: { skillName: 'Express', category: SkillCategory.LIBRARIES },
    socketIO: { skillName: 'Socket.IO', category: SkillCategory.LIBRARIES },
    cypress: { skillName: 'Cypress', category: SkillCategory.LIBRARIES },
    jest: { skillName: 'Jest', category: SkillCategory.LIBRARIES },
    unity: { skillName: 'Unity', category: SkillCategory.LIBRARIES },
    alexa: { skillName: 'Alexa API', category: SkillCategory.LIBRARIES },
    twitch: { skillName: 'Twitch API', category: SkillCategory.LIBRARIES },

    // Deployments
    docker: { skillName: 'Docker', category: SkillCategory.DEPLOYMENTS },
    nginx: { skillName: 'Nginx', category: SkillCategory.DEPLOYMENTS },
    postgres: { skillName: 'Postgres', category: SkillCategory.DEPLOYMENTS },
    SQL: { skillName: 'SQL', category: SkillCategory.DEPLOYMENTS },
    kubernetes: { skillName: 'Kubernetes', category: SkillCategory.DEPLOYMENTS },
    jenkins: { skillName: 'Jenkins', category: SkillCategory.DEPLOYMENTS },
    git: { skillName: 'Git', category: SkillCategory.DEPLOYMENTS },
    ciCd: { skillName: 'CI/CD', category: SkillCategory.DEPLOYMENTS },
    heroku: { skillName: 'Heroku', category: SkillCategory.DEPLOYMENTS },
    aws: { skillName: 'AWS', category: SkillCategory.DEPLOYMENTS },
    gcp: { skillName: 'Google Cloud Platform', category: SkillCategory.DEPLOYMENTS },
    azure: { skillName: 'Azure', category: SkillCategory.DEPLOYMENTS },
    storybook: { skillName: 'Storybook', category: SkillCategory.DEPLOYMENTS },
    webpack: { skillName: 'Webpack', category: SkillCategory.DEPLOYMENTS },
    babel: { skillName: 'Babel', category: SkillCategory.DEPLOYMENTS },

    // Business
    agile: { skillName: 'Agile', category: SkillCategory.BUSINESS },
    planning: { skillName: 'Planning', category: SkillCategory.BUSINESS },
    jira: { skillName: 'Jira', category: SkillCategory.BUSINESS },
    confluence: { skillName: 'Confluence', category: SkillCategory.BUSINESS },
    interviewing: { skillName: 'Interviewing', category: SkillCategory.BUSINESS },
    collaboration: { skillName: 'Collaboration', category: SkillCategory.BUSINESS },
    skillBuilding: { skillName: 'Skill Building', category: SkillCategory.BUSINESS },
    selfDirection: { skillName: 'Self-Direction', category: SkillCategory.BUSINESS },
    timeManagement: { skillName: 'Time Management', category: SkillCategory.BUSINESS },

    // Misc
    linux: { skillName: 'Linux/Unix', category: SkillCategory.MISC },
    arduino: { skillName: 'Arduino', category: SkillCategory.MISC },
    reverseEngineering: { skillName: 'Reverse Engineering', category: SkillCategory.MISC },
    afterEffects: { skillName: 'Adobe After Effects', category: SkillCategory.MISC },
    photoShop: { skillName: 'Adobe Photoshop', category: SkillCategory.MISC },
    hardwareMod: { skillName: 'Hardware Modification', category: SkillCategory.MISC },
    dmx: { skillName: 'DMX Protocol', category: SkillCategory.MISC },
}