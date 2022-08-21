import { useContext } from "react";
import { MobileNavBarContext } from "../../../contexts";

export const Hamburguer = () => {
  const {menuState, setMenuState} = useContext(MobileNavBarContext)

  return (
    <div className="flex items-center justify-end w-full">
      <button className="outline-none mobile-menu-button" onClick={() => setMenuState(prev => !prev)}>
        <svg
          className="w-10 h-1w-10 text-brand-purple"
          x-show="!showMenu"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  );
};
