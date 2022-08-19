import './styles'
import { HomePage } from "./pages";
import { Header } from "./components";
import { GlobalContext } from "./contexts";

export function App() {

  return (
    <>
      <GlobalContext>
        <Header/>
        <HomePage/>
      </GlobalContext>
    </>
  );
}
