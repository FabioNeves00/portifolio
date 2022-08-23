import { HTMLAttributes, ReactNode } from "react";

interface TagContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export const TagContainer = ({children, className, ...props}: TagContainerProps) => {
  return (
    <div {...props} className={"flex w-full flex-wrap gap-2 center px-8 max-h-22 overflow-auto " + className}>{children}</div>
  )
}
