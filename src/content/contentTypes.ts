export enum SkillCategory {
    PROGRAMMING,
    LIBRARIES,
    DEPLOYMENTS,
    BUSINESS,
    MISC
}

export interface Skill {
    skillName: string;
    category: SkillCategory
}

export interface RichContentSection {
    heading: string;
    paragraphs: string[];
}

export interface JobListing {
    startDate: Date;
    endDate?: Date;
    company: string;
    website: string;
    title: string;
    skills: Skill[]
    description: string;
    slug: string;
    richContent?: RichContentSection[]
}