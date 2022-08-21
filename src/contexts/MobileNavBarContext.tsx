import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type PropsMobileNavBarContext = {
  menuState: boolean;
  setMenuState: Dispatch<SetStateAction<boolean>>;
};

export const MobileNavBarContext =
  createContext<PropsMobileNavBarContext>({menuState: false, setMenuState: () => {}});

export const MobileNavBarContextProvider = (props: any) => {
  const [menuState, setMenuState] = useState(false);
  return (
    <MobileNavBarContext.Provider value={{ menuState, setMenuState }}>
      {props.children}
    </MobileNavBarContext.Provider>
  );
};
