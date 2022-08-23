import { HTMLAttributes, ReactNode } from "react";

interface TagContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export const TagContainer = ({children, className, ...props}: TagContainerProps) => {
  return (
    <div {...props} className={"flex flex-row flex-wrap gap-2 max-w-[20rem] p-2 " + className}>{children}</div>
  )
}
