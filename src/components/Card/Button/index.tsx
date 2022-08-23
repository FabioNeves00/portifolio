import { HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  className?: string;
  url: string;
}

export const Button = ({ url, children, className, ...props }: ButtonProps) => {
  return (
    <a
      href={url}
      {...props}
      className={
        "h-12 center text-brand-white bg-brand-purple font-semibold text-lg " +
        className
      }
    >
      {children}
    </a>
  );
};
