import { useContext } from "react";
import { ThemeContext } from "../../../contexts";

export const LogoBrand = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center items-center">
      {theme === "dark" ? (
        <img
          src="/brand-logo/darkmode_logo.png"
          alt="Fabio Neves"
          title="Fabio Neves"
          className="min-w-24 w-24"
        />
      ) : (
        <img
          src="/brand-logo/lightmode_logo.png"
          alt="Fabio Neves"
          title="Fabio Neves"
          className="min-w-24 w-24"
        />
      )}
    </div>
  );
};
