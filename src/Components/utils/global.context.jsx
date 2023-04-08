import { createContext } from "react";
import { useState } from "react";

export const initialState = {
  themes: {
    lightTheme: {
      backgroundHome: "white",
      backgroundNavbar: "black",
      colorNavbar: "white",
      color: "black",
      colorCard: "white",
      backgroundCard: "grey",
    },
    darkTheme: {
      backgroundHome: "black",
      backgroundNavbar: "white",
      color: "green",
    },
  },
  favs: setFavsLocalData(),
  dentists: {},
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [Theme, setTheme] = useState(initialState.themes.lightTheme);

  const handleThemeChange = () => {
    if (Theme === initialState.themes.lightTheme) {
      setTheme(initialState.themes.darkTheme);
    } else {
      setTheme(initialState.themes.lightTheme);
    }
  };

  const [Favs, setFavs] = useState(initialState.favs);

  return (
    <GlobalContext.Provider value={{ Theme, handleThemeChange, Favs, setFavs }}>
      {children}
    </GlobalContext.Provider>
  );
};

function setFavsLocalData() {
  let favs = JSON.parse(localStorage.getItem("dentistsFav"));
  return favs != null ? favs : [];
}
