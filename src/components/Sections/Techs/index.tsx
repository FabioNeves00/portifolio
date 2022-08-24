import { useContext } from "react";

import cssLogo from "/techs/css-3.svg";
import nestJsLogo1 from "/techs/nestjs.svg";
import nextJsLogo1 from "/techs/next-js.svg";
import nextJsLogo2 from "/techs/nextjs-2.svg";
import nodejsLogo from "/techs/nodejs-1.svg";
import reactLogo from "/techs/react-2.svg";
import redisLogo from "/techs/redis.svg";
import tailwindLogo from "/techs/tailwind-css-2.svg";
import typescriptLogo from "/techs/typescript.svg";
import jwtLogo from "/techs/jwt-3.svg";
import mongodbLogo from "/techs/mongodb-icon-1.svg";
import prismaLogo from "/techs/prisma-2.svg";
import vueJsLogo from "/techs/vue-9.svg";
import dockerLogo from "/techs/docker-3.svg";
import postgresLogo from "/techs/postgresql.svg";
import javascriptLogo from "/techs/logo-javascript.svg";

const tech_logos = [
  cssLogo,
  nestJsLogo1,
  nextJsLogo1,
  nextJsLogo2,
  nodejsLogo,
  reactLogo,
  redisLogo,
  tailwindLogo,
  typescriptLogo,
  jwtLogo,
  mongodbLogo,
  prismaLogo,
  vueJsLogo,
  dockerLogo,
  postgresLogo,
  javascriptLogo
];

import {
  TECHS_TITLE_TEXT,
  TECHS_DESCRIPTION_TEXT,
} from "../../../constants";
import { LanguageContext } from "../../../contexts";
import { TextDivider } from "../../Dividers";

export const Techs = () => {
  const { language } = useContext(LanguageContext);

  const generateLogos = () => {
    const array = [];

    for (let i = 0; i < 20 ; i++) {
      array.push(
        tech_logos[Math.floor(Math.random() * (tech_logos.length - 0) + 0)]
      );
    }

    return array;
  };

  return (
    <main id="techs" className="flex flex-col gap-2  mt-12 w-full h-fit pb-12 relative">
      <h1 className="title w-full gap-2 flex flex-col justify-center items-center z-2">
        {TECHS_TITLE_TEXT[language]}
        <TextDivider color="light-gray" />
      </h1>
      <p className="subtitle w-full text-center p-2 md:p-8 z-2">
        {TECHS_DESCRIPTION_TEXT[language]}
      </p>
      <div className="flex flex-col w-full items-center	absolute gap-8 z-1 translate-x-[-120%]">
        <div className="flex center gap-12 animate-logoTechs">
          {generateLogos().map((logo) => {
            return (
              <img src={logo} alt="" className="w-20 rotate-45 opacity-[0.03] grayscale" />
            );
          })}
        </div>
        <div className="flex center gap-12 animate-logoTechs2">
          {generateLogos().map((logo) => {
            return (
              <img src={logo} alt="" className="w-20 rotate-45 opacity-[0.03] grayscale" />
            );
          })}
        </div>
        <div className="flex center gap-12 animate-logoTechs3">
          {generateLogos().map((logo) => {
            return (
              <img src={logo} alt="" className="w-20 rotate-45 opacity-[0.03] grayscale" />
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-evenly md:justify-center flex-wrap mt-5 select-none">
        <span className="text-6xl md:text-8xl text-brand-purple m-5">{'['}</span>
        <div className="center gap-2">
          <img src={typescriptLogo} alt="typescript" title="Typescript" className="w-16 md:w-20"/>
          <span className="text-6xl md:text-8xl text-brand-purple mr-5">{','}</span>
        </div>
        <div className="center gap-2">
          <img src={nestJsLogo1} alt="NestJS" title="NestJS" className="w-16 md:w-20"/>
          <span className="text-6xl md:text-8xl text-brand-purple mr-5">{','}</span>
        </div>
        <div className="center gap-2">
          <img src={dockerLogo} alt="Docker" title="Docker" className="w-16 md:w-20"/>
          <span className="text-6xl md:text-8xl text-brand-purple mr-5">{','}</span>
        </div>
        <div className="center gap-2">
          <img src={nodejsLogo} alt="NodeJS" title="NodeJS" className="w-16 md:w-20"/>
          <span className="text-6xl md:text-8xl text-brand-purple mr-5">{','}</span>
        </div>
        <div className="center gap-2">
          <img src={postgresLogo} alt="PostgreSQL" title="PostgreSQL" className="w-16 md:w-20"/>
          <span className="text-6xl md:text-8xl text-brand-purple mr-5">{','}</span>
        </div>
        <div className="center gap-2">
          <img src={prismaLogo} alt="Prisma" title="Prisma" className="w-16 md:w-20"/>
          <span className="text-6xl md:text-8xl text-brand-purple mr-5">{','}</span>
        </div>
        <div className="center gap-2">
          <img src={mongodbLogo} alt="MongoDB" title="MongoDB" className="w-16 md:w-20"/>
          <span className="text-6xl md:text-8xl text-brand-purple mr-5">{','}</span>
        </div>
        <div className="center gap-2">
          <img src={jwtLogo} alt="JSON Web Token" title="JSON Web Token" className="w-16 md:w-20"/>
          <span className="text-6xl md:text-8xl text-brand-purple mr-5">{','}</span>
        </div>
        <div className="center gap-2">
          <img src={redisLogo} alt="Redis" title="Redis" className="w-16 md:w-20"/>
        </div>
        <span className="text-6xl md:text-8xl text-brand-purple m-5">{']'}</span>
      </div>
    </main>
  );
};
