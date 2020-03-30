import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";

export default {
  title: "Dialog",
  component: Dialog
};

const useDemoModalControl = state => {
  const [open, setOpen] = React.useState(state);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return [open, handleOpen, handleClose];
};

const ExampleDialog = ({ ...props }) => (
  <Dialog aria-labelledby="simple-dialog-title" {...props}>
    <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
    <DialogContent>This is some dialog content</DialogContent>
  </Dialog>
);

const ExampleSignOutDialog = withStyles(theme => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1)
  }
}))(({ classes, open, onClose }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle disableTypography>
      <Typography variant="h6">
        You will be signed out within two minutes
      </Typography>
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent>
      <Typography gutterBottom>
        You have been inactive for thirty minutes. For your security, we will
        sign you out automatically.
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={onClose} color="primary" variant="contained">
        KEEP ME SIGNED IN
      </Button>
      <Button onClick={onClose} variant="text" size="small">
        Sign me out now
      </Button>
    </DialogActions>
  </Dialog>
));

export const BasicDialog = () => {
  const [open, handleOpen, handleClose] = useDemoModalControl(false);

  return (
    <>
      <button onClick={handleOpen}>Open Dialog</button>
      <ExampleDialog open={open} onClose={handleClose} />
    </>
  );
};

export const KnobControlledDialog = () => (
  <ExampleDialog open={boolean("open", false)} onClose={action("onClose")} />
);

export const SignOutDialog = () => {
  const [open, handleOpen, handleClose] = useDemoModalControl(false);
  return (
    <>
      <button onClick={handleOpen}>Open Dialog</button>
      <ExampleSignOutDialog open={open} onClose={handleClose} />
    </>
  );
};
