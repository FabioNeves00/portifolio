import { HTMLAttributes, ReactNode } from "react"

interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export const Typography = ({children, className, ...props}: TypographyProps) => {
  return (
    <div {...props} className={"p-2 flex flex-col gap-4 " + className}>
        {children}
      </div>
  )
}
