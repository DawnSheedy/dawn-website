import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { cancelMotion } from "../../util/cancelMotion";
import { generateAnimationDelay } from "../../util/generateAnimationDelay";
import { getRandomNumber } from "../../util/randomNumberGen";
import "./VoidBlock.scss";

/**
 * A single block in the void area.
 * Automatically resizes on page change (if reduce motion not enabled)
 */
export const VoidBlock = () => {
  const location = useLocation();

  const animationDelay = useState(generateAnimationDelay(100, 750))[0];
  const [width, setWidth] = useState(getRandomNumber(50, 80));

  useEffect(() => {
    if (!cancelMotion()) {
      setWidth(getRandomNumber(50, 80));
    }
  }, [location]);

  return (
    <div
      className="void-block shift-in-directional"
      style={{
        maxWidth: `${width}%`,
        ...animationDelay,
      }}
    ></div>
  );
};
