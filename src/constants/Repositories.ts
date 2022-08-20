export const BASE_PERSONAL_GITHUB_LINK = "https://github.com/FabioNeves00/";
export const BASE_LINKEDIN_LINK = "https://www.linkedin.com/in/fabio-neves-55b2831b5/";
export const BASE_PANELINHA_GITHUB_LINK = "https://github.com/Little-Panela/";
export const BASE_GETA_GITHUB_LINK = "https://github.com/GETA-organization/";

export const REPOSITORIES: Repository[] = [
  {
    title: "StudyNotes",
    source: BASE_PERSONAL_GITHUB_LINK + "StudyNotes",
    descriptionPT:
      "Site para anotações para estudos, baseado no processo de aprendizagem por cartas",
    descriptionEN:
      "Website for notes for studies, based on the learning process by cards",
    stack: ["NextJS", "Typescript", "MongoDB", "Tailwind"],
    type: "Fullstack",
    image: "./StudyNotesBanner.svg",
  },
  {
    title: "FroggyChat",
    source: BASE_PERSONAL_GITHUB_LINK + "FroggyChat",
    descriptionPT: "Website de batepapo em tempo real com temática de sapos.",
    descriptionEN: "Frog-themed real-time chat website.",
    stack: ["ReactJS", "Javascript", "SocketIO", "ExpressJS"],
    link: "https://froggychats2.netlify.app/",
    type: "Fullstack",
    image: "./FroggyChatBanner.png",
  },
  {
    title: "CalcResistance",
    source: BASE_PERSONAL_GITHUB_LINK + "Resistores",
    descriptionPT:
      "Website para o calculo de resistencia de resistores atraves de diversos metodos.",
    descriptionEN:
      "Website for calculating resistor resistance using various methods.",
    stack: ["HTML", "Javascript", "CSS", "Electron"],
    type: "Fullstack",
    image: "./CalcResistanceBanner.png",
    link: "https://fabioneves00.github.io/Resistores/",
  },
  {
    title: "Denver",
    source: BASE_GETA_GITHUB_LINK + "denver",
    descriptionPT:
      "O Denver é um site feito para os pais de crianças com autismo aprenderem a como cuidar de seus filhos, e ajuda-los a entender como eles pensam.",
    descriptionEN:
      "Denver is a website designed for parents of children with autism to learn how to care for their children, and help them understand how they think.",
    stack: ["VueJS", "NodeJS", "ExpressJS", "JWT", "Squelize"],
    type: "Front-end",
    image: "./LogoGeta.png",
  },
  {
    title: "PanelinhaCLI",
    source: BASE_PANELINHA_GITHUB_LINK + "panelinha-cli",
    descriptionPT:
      'Uma cli para os memPTos da organização "Panelinha" poderem criar seus projetos de forma padronizada.',
    descriptionEN:
      'A cli for the members of the "Panelinha" organization to create their projects in a standardized way.',
    stack: ["Typescript", "NodeJS"],
    type: "Back-end",
    image: "./LogoPanelinha.png",
  },
  {
    title: "AutoDrops",
    source: BASE_PANELINHA_GITHUB_LINK + "AutoDrops",
    descriptionPT:
      "O AutoDrops é um kit de sistema de irrigação que foi desenvolvido para solucionar o problema de irrigação nas hortas suspensas na Ilha das Onças.",
    descriptionEN:
      "AutoDrops is an irrigation system kit that was developed to solve the problem of irrigation in suspended gardens on Ilha das Onças.",
    stack: ["C"],
    type: "Back-end",
    link: "https://github.com/Little-Panela/AutoDrops/blob/master/README.md",
    image: "./LogoAutoDrops.png",
  },
  {
    title: "PI-Plataform",
    source: BASE_PANELINHA_GITHUB_LINK + "PI-Plataform",
    descriptionPT:
      "Um site para a votação e exposição dos projetos, de engenharia e ciência da computação, da Computação Amostra 2022 - Amazon Hacking, feito a pedido do CESUPA (Centro Universitário do Estado do Pará)",
    descriptionEN:
      "A website for voting and displaying engineering and computer science projects from Computação Amostra 2022 - Amazon Hacking, made at the request of CESUPA (Centro Universitário do Estado do Pará)",
    stack: [
      "ReactJS",
      "Typescript",
      "ExpressJS",
      "Redis",
      "MongoDB",
      "Styled-Components",
      "Docker",
    ],
    type: "Fullstack",
    link: "https://pi.omnicesupa.com/",
    image: "./PIPlataformBanner.png",
  },
];
