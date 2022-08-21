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
];

import styles from "./style.module.css";

export const Techs = () => {
  const generateLogos = () => {
    const array = [];

    for (let i = 0; i < 100; i++) {
      array.push(
        tech_logos[Math.floor(Math.random() * (tech_logos.length - 0) + 0)]
      );
    }

    return array;
  };
  return (
    <main id="techs" className="h-screen">
      <div className={styles.container}>
        <div id={styles.logoTechs} className="flex gap-12">
          {generateLogos().map((logo) => {
            return (
              <img src={logo} alt="" className="w-20 rotate-45 opacity-20" />
            );
          })}
        </div>
        <div id={styles.logoTechs2} className="flex gap-12">
          {generateLogos().map((logo) => {
            return (
              <img src={logo} alt="" className="w-20 rotate-45 opacity-20" />
            );
          })}
        </div>
        <div id={styles.logoTechs3} className="flex gap-12">
          {generateLogos().map((logo) => {
            return (
              <img src={logo} alt="" className="w-20 rotate-45 opacity-20" />
            );
          })}
        </div>
      </div>
    </main>
  );
};
