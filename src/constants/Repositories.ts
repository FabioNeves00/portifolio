import { Repository } from "../@types";

export const BASE_PERSONAL_GITHUB_LINK = "https://github.com/FabioNeves00/";
export const BASE_LINKEDIN_LINK =
  "https://www.linkedin.com/in/fabio-neves-55b2831b5/";
export const BASE_PANELINHA_GITHUB_LINK = "https://github.com/Little-Panela/";
export const BASE_GETA_GITHUB_LINK = "https://github.com/GETA-organization/";

export const REPOSITORIES: Repository[] = [
  {
    id: 0,
    title: "StudyNotes",
    source: BASE_PERSONAL_GITHUB_LINK + "StudyNotes",
    description: {
      pt: "Site para anotações para estudos, baseado no processo de aprendizagem por cartas",
      en: "Website for notes for studies, based on the learning process by cards",
    },
    stacks: ["NextJS", "Typescript", "MongoDB", "Tailwind"],
    type: "Fullstack",
    image: "./banners/StudyNotesBanner.png",
  },
  {
    id: 1,
    title: "FroggyChat",
    source: BASE_PERSONAL_GITHUB_LINK + "FroggyChat",
    description: {
      pt: "Website de batepapo em tempo real com temática de sapos.",
      en: "Frog-themed real-time chat website.",
    },
    stacks: ["ReactJS", "Javascript", "SocketIO", "ExpressJS"],
    link: "https://froggychats2.netlify.app/",
    type: "Fullstack",
    image: "./banners/FroggyChatBanner.png",
  },
  {
    id: 2,
    title: "CalcResistance",
    source: BASE_PERSONAL_GITHUB_LINK + "Resistores",
    description: {
      pt: "Website para o calculo de resistencia de resistores atraves de diversos metodos.",
      en: "Website for calculating resistor resistance using various methods.",
    },
    stacks: ["HTML", "Javascript", "CSS", "Electron"],
    type: "Fullstack",
    image: "./banners/CalcResistanceBanner.png",
    link: "https://fabioneves00.github.io/Resistores/",
  },
  {
    id: 3,

    title: "Denver",
    source: BASE_GETA_GITHUB_LINK + "denver",
    description: {
      pt: "O Denver é um site feito para os pais de crianças com autismo aprenderem a como cuidar de seus filhos, e ajuda-los a entender como eles pensam.",
      en: "Denver is a website designed for parents of children with autism to learn how to care for their children, and help them understand how they think.",
    },

    stacks: ["VueJS", "NodeJS", "ExpressJS", "JWT", "Squelize"],
    type: "Frontend",
    image: "./banners/GetaBanner.png",
  },
  {
    id: 4,

    title: "PanelinhaCLI",
    source: BASE_PANELINHA_GITHUB_LINK + "panelinha-cli",
    description: {
      pt: 'Uma cli para os membros da organização "Panelinha" poderem criar seus projetos de forma padronizada.',
      en: 'A cli for the members of the "Panelinha" organization to create their projects in a standardized way.',
    },
    stacks: ["Typescript", "NodeJS"],
    type: "Backend",
    image: "./banners/PanelinhaBanner.png",
  },
  {
    id: 5,

    title: "AutoDrops",
    source: BASE_PANELINHA_GITHUB_LINK + "AutoDrops",
    description: {
      pt: "O AutoDrops é um kit de sistema de irrigação que foi desenvolvido para solucionar o problema de irrigação nas hortas suspensas na Ilha das Onças.",
      en: "AutoDrops is an irrigation system kit that was developed to solve the problem of irrigation in suspended gardens on Ilha das Onças.",
    },
    stacks: ["C"],
    type: "Backend",
    image: "./banners/AutoDropsBanner.png",
  },
  {
    id: 6,

    title: "PI-Plataform",
    source: BASE_PANELINHA_GITHUB_LINK + "PI-Plataform",
    description: {
      pt: "Um site para a votação e exposição dos projetos, de engenharia e ciência da computação, da Computação Amostra 2022 - Amazon Hacking, feito a pedido do CESUPA (Centro Universitário do Estado do Pará)",
      en: "A website for voting and displaying engineering and computer science projects from Computação Amostra 2022 - Amazon Hacking, made at the request of CESUPA (Centro Universitário do Estado do Pará)",
    },
    stacks: [
      "ReactJS",
      "Typescript",
      "ExpressJS",
      "Redis",
      "MongoDB",
      "StyledComp...",
      "Docker",
    ],
    type: "Fullstack",
    link: "https://pi.omnicesupa.com/",
    image: "./banners/PIPlataformBanner.png",
  },{
    id: 7,

    title: "Portifolio",
    source: BASE_PERSONAL_GITHUB_LINK + "portifolio",
    description: {
      pt: "O site que você atualmente está presente, criado para introduzi-lo ao meu trabalho e minhas habilidades.",
      en: "The website you are currently on, created to introduce you to my work and my skills.",
    },
    stacks: [
      "ReactJS",
      "Typescript",
      "Tailwind",
      "Vite",
    ],
    type: "Frontend",
    link: "https://portifolio.fabioneves.software/",
    image: "./banners/PortifolioBanner.png",
  },
];
