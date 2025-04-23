import "./LoudSubtitle.scss";

interface LoudSubtitleProps {
  children: React.ReactNode;
}

export const LoudSubtitle = ({
  children,
  ...rest
}: LoudSubtitleProps & React.HTMLProps<HTMLHeadingElement>) => {
  return (
    <h2 className="loud-subtitle" {...rest}>
      {children}
    </h2>
  );
};
