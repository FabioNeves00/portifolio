import cssLogo from "/css-3.svg";
import nestJsLogo1 from "/nestjs.svg";
import nextJsLogo1 from "/next-js.svg";
import nextJsLogo2 from "/nextjs-2.svg";
import nodejsLogo from "/nodejs-1.svg";
import reactLogo from "/react-2.svg";
import redisLogo from "/redis.svg";
import tailwindLogo from "/tailwind-css-2.svg";
import typescriptLogo from "/typescript.svg";
import jwtLogo from "/jwt-3.svg";
import mongodbLogo from "/mongodb-icon-1.svg";
import prismaLogo from "/prisma-2.svg";
import vueJsLogo from "/vue-9.svg";
import dockerLogo from "/docker-3.svg";

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

import styles from "./style.module.css"

export const Techs = () => {
  
  const generateLogos = () => {
    const array = []
    for (let i = 0; i < 50; i++) {
      array.push(tech_logos[Math.floor(Math.random() * (tech_logos.length - 0) + 0)])
    }

    return array
  }
  return (
    <div id="tech" className={styles.container}>
        {generateLogos().map((logo) => {
          return (
          <img src={logo} alt="" className="w-20 rotate-45 opacity-20" />
          )
        })}
    </div>
  );
};
