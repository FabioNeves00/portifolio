import { useContext } from "react";
import { HamburguerMenuContext } from "../../../contexts";

export const CloseMobileNavBar = () => {

    const { menuState, setMenuState } = useContext(HamburguerMenuContext);

  return (
    <button onClick={() => setMenuState(prev => !prev)} className="text-brand-purple">X</button>
  )
}
