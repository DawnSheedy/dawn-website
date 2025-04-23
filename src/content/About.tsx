import { SectionHeading } from "../components/SectionHeading/SectionHeading";

const yearsSinceStart = new Date().getFullYear() - 2021;

export const About = () => {
  return (
    <section aria-labelledby="about-section-heading">
      <SectionHeading id="about-section-heading">About Me</SectionHeading>
      <p>
        I'm Dawn Sheedy, a professional software engineer specializing in
        full-stack web development. I have about {yearsSinceStart} years of
        professional working experience, but I've had a vested interest in
        technology for as long as I can remember.
      </p>
      <br />
      <p>
        Since July 2022, I've worked for Clearwater Analytics in Seattle, WA. My
        current job title is Software Development Engineer III.
      </p>
    </section>
  );
};
