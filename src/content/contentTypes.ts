export enum SkillCategory {
    TECH,
    INTERPERSONAL,
    BUSINESS,
    MISC
}

export interface Skill {
    skillName: string;
    category: SkillCategory
}

export interface JobListing {
    startDate: Date;
    endDate?: Date;
    company: string;
    website: string;
    title: string;
    skills: Skill[]
    description: string;
    responsibilities: string[];
    slug: string;
}