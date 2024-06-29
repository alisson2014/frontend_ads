import AppContextProvider from "components/Organism/AppContext";
import AppRouter from "routes";
import { createLocalStorage, getAllLocalStorage } from "service";
import { ResetCss } from "styles/globals";

export default function App() {
  !getAllLocalStorage() && createLocalStorage()
  return (
    <AppContextProvider>
      <ResetCss />
      <AppRouter />
    </AppContextProvider>
  );
};
