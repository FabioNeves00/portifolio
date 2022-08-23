import { HTMLAttributes, ReactNode } from "react";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
    className?: string;
}

export const Title = ({children, className, ...props}: TitleProps) => {
  return (
    <h1 {...props} className={"text-2xl md:text-3xl text-brand-light-black dark:text-brand-white font-semibold text-center " + className}>{children}</h1>
  )
}
