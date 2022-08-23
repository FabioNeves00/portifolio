import { HTMLAttributes, ReactNode } from "react";

interface DescriptionProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}
export const Description = ({
  children,
  className,
  ...props
}: DescriptionProps) => {
  return (
    <div className="h-32 overflow-auto">
      <p {...props} className={"subtitle text-center w-fit " + className}>
        {children}
      </p>
    </div>
  );
};
