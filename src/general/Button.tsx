import { useNavigate } from "react-router-dom";
import { generateAnimationDelay } from "../util/generateAnimationDelay";
import { generateClassNames } from "../util/generateClassNames";
import "./Button.css";

export interface ButtonProps {
  text: string;
  active?: boolean;
  onClick?: () => void;
  href?: string;
  internalHref?: string;
}

export const Button = ({
  text,
  onClick,
  active,
  href,
  internalHref,
}: ButtonProps) => {
  const navigate = useNavigate();

  if (href)
    return (
      <a
        href={href}
        className={
          "app-button mono-flashy flicker-in " + generateClassNames({ active })
        }
        style={generateAnimationDelay(300, 500)}
        onClick={onClick}
      >
        {text}
      </a>
    );

  const clickHandler = () => {
    if (internalHref) {
      navigate(internalHref);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={
        "app-button mono-flashy flicker-in " + generateClassNames({ active })
      }
      style={generateAnimationDelay(300, 500)}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};
