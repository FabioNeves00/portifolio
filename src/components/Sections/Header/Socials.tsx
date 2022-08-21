import { List, ListItem } from '../../List'
import GithubLogo from "/techs/github-logo.svg";
import LinkedinLogo from "/techs/linkedin-logo.svg";
import { BASE_LINKEDIN_LINK, BASE_PERSONAL_GITHUB_LINK } from '../../../constants';

export const Socials = () => {
  return (
    <div className="flex items-center gap-12">
        <List className="gap-4">
          <ListItem href={BASE_PERSONAL_GITHUB_LINK}>
            <img
              src={GithubLogo}
              alt="github"
              title="Github"
              className="min-w-10 w-10 dark:invert invert-0 rounded hover:bg-slate-500 hover:invert hover:dark:invert-0"
            />
          </ListItem>
          <span className="h-10 w-[1.4px] bg-black dark:invert"></span>
          <ListItem href={BASE_LINKEDIN_LINK}>
            <img
              src={LinkedinLogo}
              alt="linkedin"
              title="LinkedIn"
              className="min-w-10 w-10 dark:invert invert-0 rounded hover:bg-slate-500 hover:invert hover:dark:invert-0"
            />
          </ListItem>
        </List>
        
      </div>
  )
}
