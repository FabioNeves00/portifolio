import { useContext, useState } from "react";
import { Repository } from "../../../@types";
import {
  PROJECTS_DESCRIPTION_TEXT,
  PROJECTS_TITLE_TEXT,
  REPOSITORIES,
} from "../../../constants";
import { LanguageContext } from "../../../contexts";
import { TextDivider } from "../../Dividers";

export const Projects = () => {
  const { language } = useContext(LanguageContext);
  const [repositories, setRepositories] = useState<Repository[]>(REPOSITORIES)

  return (
    <main className="flex flex-col gap-2  mt-12 w-full h-fit pb-12 ">
      <h1 className="title w-full gap-2 flex flex-col justify-center items-center">
        {PROJECTS_TITLE_TEXT[language]}
        <TextDivider color="light-gray" />
      </h1>
      <p className="subtitle w-full text-center p-2 md:p-8">
        {PROJECTS_DESCRIPTION_TEXT[language]}
      </p>
      <div>
        repo
      </div>
    </main>
  );
};
