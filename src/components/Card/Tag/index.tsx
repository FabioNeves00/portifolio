import { HTMLAttributes, ReactNode } from "react";

interface TagProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export const Tag = ({children, className, ...props}: TagProps) => {
  return (
    <div {...props} className={"p-[0.4rem] bg-brand-light-black text-brand-white rounded-full " + className}>{children}</div>
  )
}
