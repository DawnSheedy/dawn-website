import { LoudSubtitle } from "../components/LoudSubtitle/Subtitle";
import { LoudTitle } from "../components/LoudTitle/LoudTitle";
import "./Content.scss";

export const MainHeading = () => {
  return (
    <div className="main-heading-container">
      <LoudTitle>Hi, I'm Dawn.</LoudTitle>
      <LoudSubtitle>Seattle-based Software Engineer</LoudSubtitle>
    </div>
  );
};
