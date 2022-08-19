import { About, Hero, Projects, SectionDivider, Techs } from "../components";

export const HomePage = () => {
  
  return (
    <div className="bg-brand-white center flex-col px-16 dark:bg-brand-dark-blue">
      {/* load all colors to dynamic classes work properly */}
      <div className="hidden bg-brand-white bg-brand-purple bg-brand-dark-blue bg-brand-light-black bg-brand-black-blue bg-brand-light-gray"></div>
      <Hero />
      <SectionDivider />
      {/* <Techs /> */}
      {/* <SectionDivider /> */}
      <About />
      <SectionDivider />
      <Projects />
      {/* CONTACT */}
    </div>
  );
};
