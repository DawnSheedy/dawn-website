import { LoudSubtitle } from "../components/LoudSubtitle/LoudSubtitle";
import { LoudTitle } from "../components/LoudTitle/LoudTitle";
import "./Content.scss";

export const MainHeading = () => {
  return (
    <div className="main-heading-container">
      <LoudTitle>HI, I'M DAWN.</LoudTitle>
      <LoudSubtitle>Seattle-based Software Engineer</LoudSubtitle>
    </div>
  );
};
