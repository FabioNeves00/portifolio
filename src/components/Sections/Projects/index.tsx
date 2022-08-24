import { useContext, useEffect, useState } from "react";
import { Repository } from "../../../@types";
import {
  PROJECTS_DESCRIPTION_TEXT,
  PROJECTS_TITLE_TEXT,
  REPOSITORIES,
} from "../../../constants";
import { LanguageContext } from "../../../contexts";
import { useRepoSearch } from "../../../hooks";
import * as Card from "../../Card";
import { TextDivider } from "../../Dividers";
import { SearchBar } from "../../Inputs";

export const Projects = () => {
  const { language } = useContext(LanguageContext);
  const [searchResults, search] = useRepoSearch(REPOSITORIES)

  useEffect(() => {
    search('')
  }, [])
  

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
      <SearchBar search={search} />
      <div className="w-[80%] flex flex-wrap gap-11 justify-center">
        {searchResults.map((repo) => (
          <Card.Card>
            <Card.Typography>
              <img src={repo.image} alt={repo.title} />
              <Card.Title>{repo.title}</Card.Title>
              <Card.Description>{repo.description[language]}</Card.Description>
            </Card.Typography>
            <Card.TagContainer>
                <Card.Tag>{repo.type}</Card.Tag>
              {repo.stacks.map((stack) => (
                <Card.Tag>{stack}</Card.Tag>
              ))}
            </Card.TagContainer>
            <div className="center">
              <Card.Button
                url={repo.source}
                className={`${
                  repo.link ? "w-1/2 rounded-bl-md" : "w-full rounded-b-md"
                }`}
              >
                Github Repo
              </Card.Button>
              {repo.link && (
                <div className="h-12 w-[2px] bg-brand-light-black"></div>
              )}
              {repo.link && (
                <Card.Button url={repo.link} className="w-1/2 rounded-br-md">
                  Website
                </Card.Button>
              )}
            </div>
          </Card.Card>
        ))}
      </div>
    </main>
  );
};
