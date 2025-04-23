import { SectionHeading } from "../components/SectionHeading/SectionHeading";

export const History = () => {
  return (
    <section aria-labelledby="contact-section-heading">
      <SectionHeading id="contact-section-heading">
        Resumé & Contact Info
      </SectionHeading>
      <p>
        My resumé can be found{" "}
        <a href="/public/Dawn Sheedy 2025.pdf" aria-label="link to resumé">
          here.
        </a>{" "}
        Note that this version has my email and phone number redacted.
      </p>
      <br />
      <p>
        The best way to reach me personally is through{" "}
        <a href="https://www.linkedin.com/in/dawnshee/" aria-label="link to linkedin">my LinkedIn.</a>
      </p>
    </section>
  );
};
