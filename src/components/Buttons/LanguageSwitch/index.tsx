import { useContext } from "react";
import { LanguageContext } from "../../../contexts";

export const LanguageSwitch = () => {
  const {language, setLanguage} = useContext(LanguageContext)

  return (
    <button
      className="w-12 h-12 text-2xl bg-brand-purple rounded-full flex justify-center items-center hover:bg-opacity-60"
      title={language}
      onClick={() => setLanguage(prev => prev === 'pt' ? "en" : "pt")}
    >
      {language === 'pt' ? "🇧🇷" : "🇺🇸"}
    </button>
  );
};
