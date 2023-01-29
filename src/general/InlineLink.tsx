import React from "react";
import { useNavigate } from "react-router-dom";
import "./InlineLink.css";

export interface InlineLinkProps {
  href: string;
  local?: boolean;
  children?: React.ReactNode;
}

export const InlineLink = ({ href, local, children }: InlineLinkProps) => {
  const navigate = useNavigate();

  const clickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (local) {
      event.preventDefault();
      navigate(href);
    }
  };

  const keyDownhandler = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (["Enter", " "].includes(event.key)) {
      // For what we use it for, this cast is safe.
      clickHandler(event as unknown as React.MouseEvent<HTMLAnchorElement>);
    }
  };

  return (
    <a className="inline-link" href={href} onKeyDown={keyDownhandler} onClick={clickHandler}>
      {children}
    </a>
  );
};
