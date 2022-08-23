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
    <p
      {...props}
      className={
        "subtitle w-full h-[112px] break-words overflow-auto text-center p-3 " +
        className
      }
    >
      {children}
    </p>
  );
};
