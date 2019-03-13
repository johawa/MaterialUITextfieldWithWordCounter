import React from "react";
import ReactDOM from "react-dom";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

export default class FormDialog extends React.Component {
  state = {
    open: false,
    valid: false,
    inputValue: ""
  };

  onChangeHandler(e) {
    this.setState({
      inputValue: e.target.value
    });

    let inputLength = this.state.inputValue.split("").length;
    inputLength >= 2
      ? this.setState({ valid: true })
      : this.setState({ valid: false });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { inputValue, valid } = this.state;
    let inputLength = inputValue.split("").length;
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Download Track
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Track Usage</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please tell us why you want to Download this Track
            </DialogContentText>
            <br />

            <TextField
              id="component-helper"
              onChange={e => this.onChangeHandler(e)}
              autoFocus
              variant="outlined"
              inputProps={{
                maxLength: 50
              }}
              id="name"
              multiline={true}
              rows={4}
              rowsMax={4}
              placeholder="Description"
              label={`${inputLength} / 50`}
              fullWidth
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>

            <Button
              onClick={this.handleClose}
              color="primary"
              disabled={valid ? false : true}
            >
              Download
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<FormDialog />, rootElement);
