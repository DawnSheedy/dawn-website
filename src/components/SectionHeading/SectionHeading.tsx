import "./SectionHeading.scss";

interface SectionHeadingProps {
  children: React.ReactNode;
}

export const SectionHeading = ({
  children,
  ...rest
}: SectionHeadingProps & React.HTMLProps<HTMLHeadingElement>) => {
  return (
    <h3 className="section-heading" {...rest}>
      {children}
    </h3>
  );
};
