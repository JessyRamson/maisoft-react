import React from "react";
import { Stack, Typography, Button } from "@mui/material";

const FunctionClick = () => {
  function clickHandler() {
    alert("error corrected successfully...");
  }
  return (
    <Stack>
      <Typography variant="body1" color="error">
        Trying to correct my error from up-text
      </Typography>
      <Button variant="outlined" color="error" onClick={clickHandler}>
        Verify
      </Button>
    </Stack>
  );
};

export default FunctionClick;
