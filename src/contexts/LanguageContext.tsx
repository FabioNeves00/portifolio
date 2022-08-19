import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { DEFAULT_LANG_VALUE } from "../constants";
import { useLocalStorage } from "../hooks";

type PropsLanguageContext = {
  language: "pt" | "en";
  setLanguage: Dispatch<SetStateAction<"pt" | "en">>;
};

export const LanguageContext =
  createContext<PropsLanguageContext>(DEFAULT_LANG_VALUE);

export const LanguageContextProvider = (props: any) => {
  const [language, setLanguage] = useState(DEFAULT_LANG_VALUE.language);
  const [session_language, setSessionLanguage] = useLocalStorage<"pt" | "en">(
    "language",
    DEFAULT_LANG_VALUE.language
  );

  useEffect(() => {
    if (session_language) {
      setLanguage((prev) => (prev = session_language));
    }
  }, []);

  useEffect(() => {
    setSessionLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};
