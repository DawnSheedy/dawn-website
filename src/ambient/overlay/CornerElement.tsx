import { generateClassNames } from "../../util/generateClassNames";
import "./CornerElement.scss";

interface CornerElementTopProps {
  top: true;
  bottom?: false | undefined;
}

interface CornerElementBottomProps {
  bottom: true;
  top?: false | undefined;
}

type CornerElementVerticalProps =
  | CornerElementTopProps
  | CornerElementBottomProps;

interface CornerElementLeftProps {
  left: true;
  right?: false | undefined;
}

interface CornerElementRightProps {
  right: true;
  left?: false | undefined;
}

type CornerElementHorizontalProps =
  | CornerElementLeftProps
  | CornerElementRightProps;

interface CornerElementGeneralProps {
  onClick?: () => void;
  disableBorder?: boolean;
  children?: React.ReactNode;
}

export type CornerElementProps = CornerElementHorizontalProps &
  CornerElementVerticalProps &
  CornerElementGeneralProps;

/**
 * A corner element in the document
 */
export const CornerElement = ({
  top,
  left,
  right,
  bottom,
  disableBorder,
  children,
  onClick,
}: CornerElementProps) => {
  const classNameDef = disableBorder ? {} : { top, left, right, bottom };

  if (!onClick)
    return (
      <div
        onClick={onClick}
        className={generateClassNames({
          "corner-element mono-flashy flicker-in scale-in": true,
          ...classNameDef,
        })}
        style={{ cursor: onClick ? "pointer" : "auto" }}
      >
        {children}
      </div>
    );

  return (
    <button
      onClick={onClick}
      className={generateClassNames({
        "corner-element mono-flashy flicker-in scale-in": true,
        ...classNameDef,
      })}
      style={{ cursor: "pointer" }}
    >
      {children}
    </button>
  );
};
