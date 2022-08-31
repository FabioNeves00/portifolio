import { useEffect } from "react";
import { About, Hero, Projects, SectionDivider, Techs } from "../components";
import ReactGA from 'react-ga';

export const HomePage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  },[])
  return (
    <div className="bg-brand-white center flex-col md:px-16 dark:bg-brand-dark-blue overflow-hidden md:overflow-auto">
      {/* load all colors to tailwind dynamic classes work properly */}
      <div className="hidden bg-brand-white bg-brand-purple bg-brand-dark-blue bg-brand-light-black bg-brand-black-blue bg-brand-light-gray"></div>
      <Hero />
      <SectionDivider />
      <Techs />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      {/* CONTACT */}
    </div>
  );
};
