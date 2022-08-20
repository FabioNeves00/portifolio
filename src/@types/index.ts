export type Repository = {
  title: string;
  source: string;
  link?: string;
  descriptionPT: string;
  descriptionEN: string;
  image?: string;
  stack: string[];
  type: "Front-end" | "Back-end" | "Fullstack";
};