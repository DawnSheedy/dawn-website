import { useNavigate } from "react-router-dom";
import { generateAnimationDelay } from "../util/generateAnimationDelay";
import { generateClassNames } from "../util/generateClassNames";
import "./Button.scss";

export interface ButtonProps {
  text?: string;
  active?: boolean;
  onClick?: () => void;
  href?: string;
  internalHref?: string;
  children?: React.ReactNode;
}

/**
 * Button component
 */
export const Button = ({
  text,
  onClick,
  active,
  href,
  internalHref,
  children,
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
        {children}
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
