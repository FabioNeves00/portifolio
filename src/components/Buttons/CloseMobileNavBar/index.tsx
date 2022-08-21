import { HTMLAttributes, useContext } from "react";
import { MobileNavBarContext } from "../../../contexts";

interface CloseMobileNavBarProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const CloseMobileNavBar = ({className, ...props}: CloseMobileNavBarProps) => {

    const { menuState, setMenuState } = useContext(MobileNavBarContext);

  return (
    <button {...props} onClick={() => setMenuState(prev => !prev)} className={"text-brand-purple " + className}>X</button>
  )
}
