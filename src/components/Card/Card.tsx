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
    <div {...props} className={"w-full min-h-[43rem] h-fit max-h-[42rem] flex justify-between flex-col dark:bg-brand-black-blue bg-white drop-shadow-md rounded-xl " + className}>
      {children}
    </div>
  );
};
