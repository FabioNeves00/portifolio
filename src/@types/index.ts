export type Repository = {
  title: string;
  source: string;
  link?: string;
  description: {
    pt: string;
    en: string;
  }
  image?: string;
  stacks: string[];
  type: "Frontend" | "Backend" | "Fullstack";
};