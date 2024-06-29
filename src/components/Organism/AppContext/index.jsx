import { createContext, useContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "service";

export const AppContext = createContext({});
export const useSession = () => useContext(AppContext);

export default function AppContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = "alisson";

  const storage = getAllLocalStorage();

  useEffect(() => {
    if(!storage) return;

    const { login } = JSON.parse(storage);
    setIsLoggedIn(login);
  }, []);

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  )
};