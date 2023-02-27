import React, { Component } from "react";
import { Typography, Button, Stack } from "@mui/material";

class ClassClick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "This is my first text using react material ui",
      color: "red",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      text: "This is my modified text using an event listener",
    });
  }

  render() {
    return (
      <Stack>
        <Stack>
          <Typography variant="h4" color="secondary">
            {this.state.text}
          </Typography>
        </Stack>
        <Stack>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.clickHandler}
          >
            Change text
          </Button>
        </Stack>
      </Stack>
    );
  }
}

export default ClassClick;
