import { HTMLAttributes, useContext } from "react";
import { MobileNavBarContext } from "../../../contexts";
import X from '/icons/x.svg'

interface CloseMobileNavBarProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const CloseMobileNavBar = ({className, ...props}: CloseMobileNavBarProps) => {

    const { menuState, setMenuState } = useContext(MobileNavBarContext);

  return (
    <button {...props} onClick={() => setMenuState(prev => !prev)} className={"text-brand-purple " + className}>
      <img src={X} alt="" className="w-10"/>
    </button>
  )
}
