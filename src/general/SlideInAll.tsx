import React, { Fragment } from "react";
import { generateAnimationDelay } from "../util/generateAnimationDelay";

export interface SlideInAllProps {
  children: React.ReactNode;
}

/**
 * Component that applies a slide in effect to all direct children
 */
export const SlideInAll = ({ children }: SlideInAllProps) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return (
        <div className="shift-in" style={generateAnimationDelay(0, 500)}>
          {React.cloneElement(child)}
        </div>
      );
    }
  });

  return <Fragment>{childrenWithProps}</Fragment>;
};
