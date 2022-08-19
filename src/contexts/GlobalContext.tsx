import { HamburguerMenuContextProvider } from "./HamburguerMenuContext";
import { LanguageContextProvider } from "./LanguageContext";
import { ThemeContextProvider } from "./ThemeContext";

export const GlobalContext = ({ children }: any) => {
  return (
    <HamburguerMenuContextProvider>
      <ThemeContextProvider>
        <LanguageContextProvider>{children}</LanguageContextProvider>
      </ThemeContextProvider>
    </HamburguerMenuContextProvider>
  );
};
