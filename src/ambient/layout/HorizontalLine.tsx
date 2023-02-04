import { useState } from "react";
import { generateAnimationDelay } from "../../util/generateAnimationDelay";
import { generateClassNames } from "../../util/generateClassNames";
import "./HorizontalLine.css";

export interface HorizontalLineProps {
  leftBrace?: boolean;
  rightBrace?: boolean;
}

export const HorizontalLine = ({
  leftBrace = true,
  rightBrace = true,
}: HorizontalLineProps) => {
  const animationDelay = useState(generateAnimationDelay(0, 50))[0];
  return (
    <hr
      className={`horizontal-line fill-in ${generateClassNames({
        "left-brace": leftBrace,
        "right-brace": rightBrace,
      })}`}
      style={animationDelay}
    ></hr>
  );
};