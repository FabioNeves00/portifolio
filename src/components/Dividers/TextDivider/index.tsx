import { HTMLAttributes } from "react";

interface TextDividerProps extends HTMLAttributes<HTMLDivElement> {
  color?: "white" | "purple" | "dark-blue" | "light-black" | "black-blue" | "light-gray";
}

export const TextDivider = ({
  color="purple",
  ...props
}: TextDividerProps) => {
  return (
    <div
      {...props}
      className={`w-1/5 h-[5px] mt-2 rounded-full bg-brand-${color}`}
    ></div>
  );
};
