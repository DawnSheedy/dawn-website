import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { generateAnimationDelay } from "../../util/generateAnimationDelay";
import { getRandomNumber } from "../../util/randomNumberGen";
import "./VoidBlock.css";

export const VoidBlock = () => {
  const location = useLocation();

  const animationDelay = useState(generateAnimationDelay(100, 750))[0]
  const [width, setWidth] = useState(getRandomNumber(50, 80));

  useEffect(() => {
    setWidth(getRandomNumber(50, 80));
  }, [location]);

  return (
    <div
      className="void-block shift-in-directional"
      style={{
        maxWidth: `${width}%`,
        animationDuration: "1s",
        ...animationDelay,
      }}
    ></div>
  );
};
