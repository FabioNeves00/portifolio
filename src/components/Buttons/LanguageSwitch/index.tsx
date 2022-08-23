import { useContext } from "react";
import { LanguageContext } from "../../../contexts";
import BR from "/flags/Flag_of_Brazil.svg";
import US from "/flags/Flag_of_the_United_States.svg";

export const LanguageSwitch = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <button
      className="w-12 h-12 text-2xl bg-brand-purple rounded-full flex justify-center items-center"
      title={language}
      onClick={() => setLanguage((prev) => (prev === "pt" ? "en" : "pt"))}
    >
      {language === "pt" ? (
        <img
          src={BR}
          alt="Brazilian Portuguese"
          title="Brazilian Portuguese"
          className="min-w-7 w-7"
        />
      ) : (
        <img
          src={US}
          alt="United States English"
          title="United States English"
          className="min-w-7 w-7"
        />
      )}
    </button>
  );
};
