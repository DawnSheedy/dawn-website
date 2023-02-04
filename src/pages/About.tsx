import { InlineLink } from "../general/InlineLink";
import { SlideInAll } from "../general/SlideInAll";
import { HorizontalLine } from "../ambient/layout/HorizontalLine";
import "./Pages.css";
import { JobList } from "../fragments/JobList/JobList";
import { SkillList } from "../fragments/SkillList/SkillList";

export const About = () => {
  return (
    <div className="page-container">
      <SlideInAll>
        <h2>Hi, I'm Dawn 🌄</h2>
        <HorizontalLine leftBrace={false} />
        <p>
          I'm a Software Engineer with 4+ years of experience specializing in
          web application development. I take pride in writing clean,
          documented, and reusable code. I love taking on challenges and working
          with others who are as passionate about technology as I am.
        </p>
        <p>
          I'm physically based in Seattle, WA. I'm always looking for
          interesting new opportunities. If you'd like to reach out to me,{" "}
          <InlineLink href="/home/contact" local>
            I can be contacted here.
          </InlineLink>
        </p>
        <h2>Work Experience 🚧</h2>
        <HorizontalLine leftBrace={false} />
        <p>
          I've been writing code since I was 13 years old, working
          collaboratively since 2016, and working professionally since 2021.
          Here are some specifics, click one for more details:
        </p>
        <JobList></JobList>
        <h2>Skills 🧠</h2>
        <HorizontalLine leftBrace={false} />
        <p>
          I have a passion for Front End development (I just love to see designs
          come to life), but I have a well rounded skillset and thrive in both
          Front End and Full Stack environments. At the end of the day,
          delivering a quality product is what brings me fulfillment.
        </p>
        <p>Here are some specific skills of mine:</p>
        <SkillList />
        <h2>Resume 📝</h2>
        <HorizontalLine leftBrace={false} />
        <p>
          Everything you need to know about me can be found on this site, or{" "}
          <InlineLink href="https://www.linkedin.com/in/dawnshee">
            my LinkedIn.
          </InlineLink>{" "}
          However, if you want a copy of my Resume,{" "}
          <InlineLink href="/resume">you can click here.</InlineLink>
        </p>
        <h2>Interests & Projects 👁️</h2>
        <HorizontalLine leftBrace={false} />
        <p>
          In my free time, you'll catch me playing games, listening to music,
          and working on{" "}
          <InlineLink href="/home/projects" local>
            various cool projects.
          </InlineLink>
        </p>
        <p>
          I play primarily play Apex Legends, Etterna, and sometimes osu. My
          favorite artists are CHVRCHES, ODESZA, Justice, Magdalena Bay, and
          Porter Robinson.
        </p>
      </SlideInAll>
    </div>
  );
};
