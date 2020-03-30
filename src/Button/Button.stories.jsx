import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

export default {
  title: "Button",
  component: Button
};

const DemoButton = withStyles({
  root: {
    marginRight: "4px"
  }
})(Button);

export const DefaultButton = () => (
  <>
    <DemoButton>Text</DemoButton>
    <DemoButton variant="contained">Contained</DemoButton>
    <DemoButton variant="outlined">Outlined</DemoButton>
    <br />
    <br />
    <DemoButton size="small">Text (small)</DemoButton>
    <DemoButton size="small" variant="contained">
      Contained (small)
    </DemoButton>
    <DemoButton size="small" variant="outlined">
      Outlined (small)
    </DemoButton>
    <br />
    <br />
    <DemoButton size="large">Text (large)</DemoButton>
    <DemoButton size="large" variant="contained">
      Contained (large)
    </DemoButton>
    <DemoButton size="large" variant="outlined">
      Outlined (large)
    </DemoButton>
  </>
);

export const PrimaryButton = () => (
  <>
    <DemoButton color="primary">Text</DemoButton>
    <DemoButton color="primary" variant="contained">
      Contained
    </DemoButton>
    <DemoButton color="primary" variant="outlined">
      Outlined
    </DemoButton>
  </>
);

export const SecondaryButton = () => (
  <>
    <DemoButton color="secondary">Text</DemoButton>
    <DemoButton color="secondary" variant="contained">
      Contained
    </DemoButton>
    <DemoButton color="secondary" variant="outlined">
      Outlined
    </DemoButton>
  </>
);

export const DisabledButton = () => (
  <>
    <DemoButton disabled>Disabled Text</DemoButton>
    <DemoButton disabled variant="contained">
      Disabled Contained
    </DemoButton>
    <DemoButton disabled variant="outlined">
      Disabled Outlined
    </DemoButton>
  </>
);
