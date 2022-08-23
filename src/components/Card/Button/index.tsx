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
        "center bg-brand-purple drop-shadow-lg w-36 h-12 my-12 rounded-2xl text-lg p-2 text-brand-white dark:text-brand-black-blue font-semibold hover:bg-opacity-60 " +
        className
      }
    >
      {children}
    </a>
  );
};
