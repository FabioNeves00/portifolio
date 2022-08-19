import { useContext } from "react";
import {
  NAV_ABOUT_TEXT,
  NAV_PROJECTS_TEXT,
  NAV_TECH_TEXT,
} from "../../../constants";
import { LanguageContext } from "../../../contexts";
import { List, ListItem } from "../../List";

type NavListProps = {
  collumn?: boolean;
};

export const NavList = ({ collumn }: NavListProps) => {
  const { language } = useContext(LanguageContext);

  return (
    <nav className={"flex items-center ml-56"}>
      <List collumn={collumn}>
        <ListItem animate href="#tech">
          <span className="text-brand-purple">{"{"}&nbsp;</span>
          {NAV_TECH_TEXT[language]}
          <span className="text-brand-purple">&nbsp;{"};"}</span>
        </ListItem>
        <ListItem animate href="#about">
          <span className="text-brand-purple">{"{"}&nbsp;</span>
          {NAV_ABOUT_TEXT[language]}
          <span className="text-brand-purple">&nbsp;{"};"}</span>
        </ListItem>
        <ListItem animate href="#projects">
          <span className="text-brand-purple">{"{"}&nbsp;</span>
          {NAV_PROJECTS_TEXT[language]}
          <span className="text-brand-purple">&nbsp;{"};"}</span>
        </ListItem>
      </List>
    </nav>
  );
};
