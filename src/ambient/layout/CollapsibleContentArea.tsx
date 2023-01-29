import { generateClassNames } from "../../util/generateClassNames";
import "./CollapsibleContentArea.css";

export interface CollapsibleContentAreaProps {
  collapsed?: boolean;
  children: React.ReactNode;
}

export const CollapsibleContentArea = ({
  collapsed,
  children,
}: CollapsibleContentAreaProps) => {
  return (
    <div
      className={generateClassNames({
        "collapsible-content-area": true,
        collapsed,
      })}
    >
      {children}
    </div>
  );
};
