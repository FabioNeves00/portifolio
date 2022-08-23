import { HTMLAttributes, ReactNode } from "react";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
    className?: string;
}

export const Title = ({children, className, ...props}: TitleProps) => {
  return (
    <h1 {...props} className={"title text-2xl text-brand-light-black dark:text-brand-white center w-full " + className}>{children}</h1>
  )
}
