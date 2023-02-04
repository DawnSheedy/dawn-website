import { JobListing } from "./contentTypes";
import { SkillListRecord } from "./SkillList";

const cwanJobEntry: JobListing = {
    startDate: new Date(2022, 7),
    company: "Clearwater Analytics",
    website: "https://clearwateranalytics.com",
    title: "L2 Software Development Engineer",
    skills: [SkillListRecord.java, SkillListRecord.javaScript],
    description: "Test Description.",
    responsibilities: ['Test Entry 1', 'Test Entry 2'],
    slug: 'clearwater-analytics'
}

const pressHookJobEntry: JobListing = {
    startDate: new Date(2021, 9),
    endDate: new Date(2022, 7),
    company: "Press Hook",
    website: "https://presshook.com",
    title: "Full Stack Software Engineer",
    skills: [SkillListRecord.java, SkillListRecord.javaScript],
    description: "Test Description.",
    responsibilities: ['Test Entry 1', 'Test Entry 2'],
    slug: 'press-hook'
}

const kinstoneJobEntry: JobListing = {
    startDate: new Date(2016, 8),
    endDate: new Date(2022, 2),
    company: "Kinstone, LLC",
    website: "https://www.linkedin.com/company/kinstone-events",
    title: "Volunteer Software Developer",
    skills: [SkillListRecord.java, SkillListRecord.javaScript],
    description: "Test Description.",
    responsibilities: ['Test Entry 1', 'Test Entry 2'],
    slug: 'kinstone'
}

export const JobHistory = [cwanJobEntry, pressHookJobEntry, kinstoneJobEntry]