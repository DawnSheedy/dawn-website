import { HorizontalLine } from "../ambient/layout/HorizontalLine";
import { JobList } from "../fragments/JobList/JobList";
import { SkillList } from "../fragments/SkillList/SkillList";
import { InlineLink } from "../general/InlineLink";
import { SlideInAll } from "../general/SlideInAll";
import { JobListing } from "./contentTypes";
import { SkillListRecord } from "./SkillList";

const cwanJobEntry: JobListing = {
  startDate: new Date(2022, 7),
  company: "Clearwater Analytics",
  website: "https://clearwateranalytics.com",
  title: "L2 Software Development Engineer",
  skills: [
    SkillListRecord.java,
    SkillListRecord.javaScript,
    SkillListRecord.typeScript,
    SkillListRecord.stylesheets,
    SkillListRecord.microservices,
    SkillListRecord.rest,
    SkillListRecord.react,
    SkillListRecord.angular,
    SkillListRecord.cypress,
    SkillListRecord.jest,
    SkillListRecord.docker,
    SkillListRecord.nginx,
    SkillListRecord.postgres,
    SkillListRecord.SQL,
    SkillListRecord.kubernetes,
    SkillListRecord.jenkins,
    SkillListRecord.git,
    SkillListRecord.ciCd,
    SkillListRecord.aws,
    SkillListRecord.gcp,
    SkillListRecord.storybook,
    SkillListRecord.webpack,
    SkillListRecord.babel,
    SkillListRecord.agile,
    SkillListRecord.planning,
    SkillListRecord.jira,
    SkillListRecord.confluence,
    SkillListRecord.interviewing,
    SkillListRecord.collaboration,
    SkillListRecord.skillBuilding,
    SkillListRecord.selfDirection,
    SkillListRecord.timeManagement,
    SkillListRecord.linux,
  ],
  description: "Test Description.",
  slug: "clearwater-analytics",
  richContent: [
    {
      heading: "Overview 🛰️",
      paragraphs: ["Test paragraph 1", "test paragraph 2"],
    },
  ],
};

const pressHookJobEntry: JobListing = {
  startDate: new Date(2021, 9),
  endDate: new Date(2022, 7),
  company: "Press Hook",
  website: "https://presshook.com",
  title: "Full Stack Software Engineer",
  skills: [SkillListRecord.java, SkillListRecord.javaScript],
  description: "Test Description.",
  slug: "press-hook",
};

const kinstoneJobEntry: JobListing = {
  startDate: new Date(2016, 8),
  endDate: new Date(2022, 2),
  company: "Kinstone, LLC",
  website: "https://www.linkedin.com/company/kinstone-events",
  title: "Volunteer Software Developer",
  skills: [SkillListRecord.java, SkillListRecord.javaScript],
  description: "Test Description.",
  slug: "kinstone",
};

export const JobHistory = [cwanJobEntry, pressHookJobEntry, kinstoneJobEntry];
