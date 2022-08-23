import { HTMLAttributes, ReactNode } from "react";

interface TagProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export const Tag = ({children, className, ...props}: TagProps) => {
  return (
    <div {...props} className={"text-brand-white bg-brand-light-black rounded-full p-4 h-8 center " + className}>{children}</div>
  )
}
