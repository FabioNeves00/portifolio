import { NavList } from "./NavList";
import { LogoBrand } from "./LogoBrand";
import { Socials } from "./Socials";
import { Switches } from "./Switches";
import { CloseMobileNavBar, Hamburguer } from "../../Buttons";
import { useContext } from "react";
import { MobileNavBarContext } from "../../../contexts";

export const Header = () => {
  const { menuState, setMenuState } = useContext(MobileNavBarContext);
  return (
    <>
      <header className="dark:bg-brand-dark-blue p-6 center bg-brand-white">
        <div className="max-w-7xl w-full items-center justify-between hidden md:flex">
          <LogoBrand />
          <NavList className=" ml-32" />
          <div className="flex gap-16">
            <Socials />
            <Switches />
          </div>
        </div>
      </header>
      <header className="md:hidden absolute right-0 top-0 z-10">
        {!menuState ? (
          <div className="absolute right-6 top-6">
            <Hamburguer />
          </div>
        ) : (
          <div className="w-screen h-screen flex flex-col items-end justify-center backdrop-blur-[14px]">
            <CloseMobileNavBar className="w-fit absolute right-6 top-6 text-3xl" />
            <div className="w-screen h-screen center flex-col gap-12">
              <NavList collumn className="justify-center w-screen ml-0 font-bold" />
              <Socials />
              <Switches />
            </div>
          </div>
        )}
      </header>
    </>
  );
};
