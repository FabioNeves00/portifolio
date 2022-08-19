import { Hero, SectionDivider, Techs } from "../components";

export const HomePage = () => {
  
  return (
    <div className="bg-brand-white center flex-col px-16 dark:bg-brand-dark-blue">
      <Hero />
      <SectionDivider />
      <Techs />
      {/* ABOUT ME */}
      {/* PROJECTS */}
      {/* CONTACT */}
    </div>
  );
};
