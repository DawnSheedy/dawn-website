import "./LoudTitle.scss";

interface LoudTitleProps {
  children: React.ReactNode;
}

export const LoudTitle = ({ children, ...rest }: LoudTitleProps & React.HTMLProps<HTMLHeadingElement>) => {
  return <h1 className="loud-title" {...rest}>{children}</h1>;
};
