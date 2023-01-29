import { SlideInAll } from "../general/SlideInAll";
import { HorizontalLine } from "../ambient/layout/HorizontalLine";
import "./Pages.css";
import { IconButton } from "../general/IconButton";

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
          <IconButton
            href="https://www.linkedin.com/in/dawnshee"
            text="LinkedIn"
          ></IconButton>
          <IconButton
            href="mailto:contact@dawnsheedy.com"
            text="Email"
          ></IconButton>
        </div>
        <p className="mono quote">Note: I'm currently based in Seattle, WA.</p>
        <h2>Other Contact Info 📱</h2>
        <HorizontalLine leftBrace={false} />
        <p>
          Are you looking to reach me or collaborate in a non-professional
          context? If so, you can find my social media below. Keep in mind I'm
          not highly active.
        </p>
        <div className="row-container">
          <IconButton
            href="https://twitter.com/dawnshee_"
            text="Twitter"
          ></IconButton>
          <IconButton
            href="https://instagram.com/dawn.shee"
            text="Instagram"
          ></IconButton>
        </div>
        <p>
          I'm also on Discord. However, I do not directly give out my username.
          Please contact initially through a different channel.
        </p>
        <p className="mono quote">
          Note: Thoughts and opinions expressed on my social media accounts are
          mine and mine alone. They do not represent the interests of my past or
          present employers.
        </p>
      </SlideInAll>
    </div>
  );
};
