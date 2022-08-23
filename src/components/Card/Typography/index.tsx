import { HTMLAttributes, ReactNode } from "react";

interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Typography = ({
  children,
  className,
  ...props
}: TypographyProps) => {
  return (
    <div {...props} className={"flex flex-col gap-5 " + className}>
      {children}
    </div>
  );
};
