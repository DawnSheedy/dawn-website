import React from "react";
import { useNavigate } from "react-router-dom";
import './InlineLink.css'

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

  return (
    <a className="inline-link" href={href} onClick={clickHandler}>
      {children}
    </a>
  );
};
