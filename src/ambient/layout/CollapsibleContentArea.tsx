import { useEffect, useRef, useState } from "react";
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
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const current = contentRef.current;
    if (!current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContentHeight(entry.contentRect.height+16);
      }
    });
    resizeObserver.observe(contentRef.current);
    return () => resizeObserver.disconnect();
  }, [contentRef]);

  return (
    <div
      className={generateClassNames({
        "collapsible-content-area": true,
        collapsed,
      })}
      style={{ maxHeight: `${collapsed ? 0 : contentHeight}px` }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
};
