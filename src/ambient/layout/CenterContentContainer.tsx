import "./CenterContentContainer.scss";

export interface CenterContentContainerProps {
  children: React.ReactNode;
}

export const CenterContentContainer = ({
  children,
}: CenterContentContainerProps) => {
  return <div className="center-content-container">{children}</div>;
};
