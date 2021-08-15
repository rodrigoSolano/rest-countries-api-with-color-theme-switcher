import { createGlobalStyle } from "styled-components";
import RouterApp from "./router/RouterApp";
import { theme } from "./theme/Theme";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { CountriesProvider } from "./context/CountriesContext";

const GlobalStyle = createGlobalStyle`  
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *{
    transition: background 0.5s ease;
  }
  
  h1,h2,h3,h4,h5,h6 {
    margin : 0;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Nunito Sans', sans-serif;
    background:  ${(props) => props.theme.colors.backgroundBody};
  }
`;

function App() {
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    getTheme();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      if (theme === "0") {
        setThemeIndex(0);
      } else if (theme === "1") {
        setThemeIndex(1);
      }
    } else {
      setThemeIndex(0);
      saveTheme(0);
    }
  };

  const changeTheme = () => {
    if (themeIndex === 0) {
      setThemeIndex(1);
      saveTheme(1);
    } else {
      setThemeIndex(0);
      saveTheme(0);
    }
  };

  const saveTheme = (index) => {
    localStorage.setItem("theme", index);
  };

  return (
    <CountriesProvider>
      <ThemeProvider theme={theme[themeIndex]}>
        <RouterApp changeTheme={changeTheme} themeIndex={themeIndex} />
        <GlobalStyle />
      </ThemeProvider>
    </CountriesProvider>
  );
}

export default App;
