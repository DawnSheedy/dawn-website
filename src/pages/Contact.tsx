import { SlideInAll } from "../general/SlideInAll";
import { HorizontalLine } from "../ambient/layout/HorizontalLine";
import "./Pages.css";
import { InlineLink } from "../general/InlineLink";
import { Button } from "../general/Button";

export const Contact = () => {
  return (
    <div className="page-container">
      <SlideInAll>
        <h2>Professional Inquries 💼</h2>
        <HorizontalLine leftBrace={false} />
        <p>
          I'm always interested in hearing about exciting new opportunities. If
          you'd like to reach out to me, use the channels below:
        </p>
        <div className="row-container">
          <Button
            href="https://www.linkedin.com/in/dawnshee"
            text="LinkedIn"
          />
          <Button
            href="mailto:contact@dawnsheedy.com"
            text="Email"
          />
        </div>
        <p>For a simplified, PDF copy of my resume{" "}
          <InlineLink href="/resume-dawn-2023.pdf">you can click here.</InlineLink></p>
        <p className="mono quote">Note: I'm currently based in Seattle, WA.</p>
      </SlideInAll>
    </div>
  );
};
