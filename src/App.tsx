import './styles'
import { HomePage } from "./pages";
import { Header } from "./components";
import { GlobalContext } from "./contexts";
import ReactGA from 'react-ga';

ReactGA.initialize(import.meta.env.VITE_VERCEL_TRACKING_ID)

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
