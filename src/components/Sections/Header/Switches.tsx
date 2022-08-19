import { LanguageSwitch, DarkModeSwitch } from "../../Buttons";

export const Switches = () => {
  return (
    <div className="flex gap-4">
      <LanguageSwitch />
      <DarkModeSwitch />
    </div>
  );
};
