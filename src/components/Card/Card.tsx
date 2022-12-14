import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Card = ({
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <div {...props} className={"bg-white dark:bg-brand-black-blue drop-shadow-md rounded-lg w-[23rem] md:w-[21rem] h-[37.5rem] flex flex-col justify-between gap-9" + className}>
      {children}
    </div>
  );
};
