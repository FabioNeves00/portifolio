import { useContext, useState } from "react";
import { Repository } from "../../../@types";
import {
  PROJECTS_DESCRIPTION_TEXT,
  PROJECTS_TITLE_TEXT,
  REPOSITORIES,
} from "../../../constants";
import { LanguageContext } from "../../../contexts";
import * as Card from "../../Card";
import { TextDivider } from "../../Dividers";

export const Projects = () => {
  const { language } = useContext(LanguageContext);
  const [repositories, setRepositories] = useState<Repository[]>(REPOSITORIES);

  return (
    <main
      id="projects"
      className="flex flex-col center gap-2 mt-12 w-full h-fit pb-12 "
    >
      <h1 className="title w-full gap-2 flex flex-col justify-center items-center">
        {PROJECTS_TITLE_TEXT[language]}
        <TextDivider color="light-gray" />
      </h1>
      <p className="subtitle w-full text-center p-2 md:p-8">
        {PROJECTS_DESCRIPTION_TEXT[language]}
      </p>
      <div>

      </div>
      <div className="w-[80%] grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {repositories.map((repo) => {
          return (
            <Card.Card>
              <Card.Typography>
                <Card.Image url={repo.image!} />
                <Card.Title>{repo.title}</Card.Title>
                <Card.Description>
                  {repo.description[language]}
                </Card.Description>
              </Card.Typography>
              <div className="w-full center flex-col">
                <Card.TagContainer>
                  <Card.Tag>{repo.type}</Card.Tag>
                  {repo.stacks.map((stack) => (
                    <Card.Tag>{stack}</Card.Tag>
                  ))}
                </Card.TagContainer>
                <div className="w-full center flex-col md:flex-row gap-2">
                  <Card.Button url={repo.source}>
                    Repositorio
                  </Card.Button>
                  {repo.link && (
                    <Card.Button url={repo.link}>Pagina</Card.Button>
                  )}
                </div>
              </div>
            </Card.Card>
          );
        })}
      </div>
    </main>
  );
};
