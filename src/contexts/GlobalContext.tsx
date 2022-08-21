import { MobileNavBarContextProvider } from "./MobileNavBarContext";
import { LanguageContextProvider } from "./LanguageContext";
import { ThemeContextProvider } from "./ThemeContext";

export const GlobalContext = ({ children }: any) => {
  return (
    <MobileNavBarContextProvider>
      <ThemeContextProvider>
        <LanguageContextProvider>{children}</LanguageContextProvider>
      </ThemeContextProvider>
    </MobileNavBarContextProvider>
  );
};
