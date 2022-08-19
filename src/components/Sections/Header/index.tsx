import { NavList } from "./NavList";
import { LogoBrand } from "./LogoBrand";
import { Socials } from "./Socials";
import { Switches } from "./Switches";
import { CloseMobileNavBar, Hamburguer } from "../../Buttons";
import { useContext } from "react";
import { HamburguerMenuContext } from "../../../contexts";

export const Header = () => {
  const { menuState, setMenuState } = useContext(HamburguerMenuContext);
  return (
    <>
      <header className="dark:bg-brand-dark-blue p-6 center bg-brand-white">
        <div className="max-w-7xl w-full items-center justify-between hidden md:flex">
          <LogoBrand />
          <NavList />
          <div className="flex gap-16">
            <Socials />
            <Switches />
          </div>
        </div>
      </header>
      <header className="flex md:hidden absolute right-8 top-7 z-10">
        <div className={!menuState ? "absolute right-0" : "hidden"}>
          <Hamburguer />
        </div>
        <div className={menuState ? "absolute right-0" : "hidden"}>
          <CloseMobileNavBar />
          <NavList collumn />
        </div>
      </header>
    </>
  );
};
