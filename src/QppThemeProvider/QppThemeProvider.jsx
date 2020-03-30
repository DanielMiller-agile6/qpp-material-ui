import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import componentThemes from "./components";
import globalTheme from "./globalTheme";

const theme = createMuiTheme({
  overrides: {
    ...componentThemes
  },
  ...globalTheme
});

const QppThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default QppThemeProvider;
