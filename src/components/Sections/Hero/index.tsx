import { useContext } from "react";
import { HERO_BUTTON_TEXT, HERO_DESCRIPTION_TEXT, HERO_WELCOME_TEXT } from "../../../constants";
import { LanguageContext } from "../../../contexts";
import { BackgroundAnimation } from "../../BackgroundAnimation";

export const Hero = () => {
  const { language } = useContext(LanguageContext);
  return (
    <main className="grid grid-cols-2 grid-rows-1 h-screen">
      <div className="z-[2] col-start-1 col-span-2 row-start-1 flex flex-col gap-9 justify-center">
        <h1 className="title">
          {HERO_WELCOME_TEXT[language]}
        </h1>
        <p className="subtitle">
          {HERO_DESCRIPTION_TEXT[language]}
        </p>
        <a href="#techs" className="center select-none cursor-pointer bg-gradient-to-br from-brand-purple to-brand-white dark:to-brand-dark-blue rounded-xl drop-shadow-lg w-60 h-14 text-brand-black-blue dark:text-brand-white font-medium text-xl hover:brightness-75">{HERO_BUTTON_TEXT[language]}</a>
      </div>
      <div className="col-start-2 row-start-1">
        <BackgroundAnimation />
      </div>
    </main>
  );
};