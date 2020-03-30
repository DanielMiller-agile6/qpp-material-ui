import React from "react";
import { addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import QppThemeProvider from "../src/QppThemeProvider";

const themeDecorator = storyFn => (
  <QppThemeProvider>{storyFn()}</QppThemeProvider>
);

addDecorator(themeDecorator);
addDecorator(withA11y);
