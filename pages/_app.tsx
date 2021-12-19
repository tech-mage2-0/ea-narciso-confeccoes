import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/GlobalStyles";
import Theme from "../src/styles/GlobalTheme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
