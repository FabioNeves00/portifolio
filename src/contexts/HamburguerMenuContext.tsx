import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type PropsHamburguerMenuContext = {
  menuState: boolean;
  setMenuState: Dispatch<SetStateAction<boolean>>;
};

export const HamburguerMenuContext =
  createContext<PropsHamburguerMenuContext>({menuState: false, setMenuState: () => {}});

export const HamburguerMenuContextProvider = (props: any) => {
  const [menuState, setMenuState] = useState(false);
  return (
    <HamburguerMenuContext.Provider value={{ menuState, setMenuState }}>
      {props.children}
    </HamburguerMenuContext.Provider>
  );
};
