import "./CenterContentContainer.scss";

export interface CenterContentContainerProps {
  children: React.ReactNode;
}

/**
 * Container for centering content in the middle of the view
 */
export const CenterContentContainer = ({
  children,
}: CenterContentContainerProps) => {
  return <div className="center-content-container">{children}</div>;
};
