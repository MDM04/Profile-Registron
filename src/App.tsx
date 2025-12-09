import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./router/routes";
import { GlobalStyle } from "./global/global";
import { defaultTheme } from "./global/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  );
}
