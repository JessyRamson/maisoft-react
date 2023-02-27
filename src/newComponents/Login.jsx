import React, { useState } from "react";
import {
  Stack,
  TextField,
  Button,
  Grid,
  Typography,
  Link,
} from "@mui/material";
import image from "../images/app-image.png";
import image1 from "../images/applogo.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  console.log(password);
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Stack>
      <Grid container>
        <Grid item md={7} className="register">
          <div className="logoContainer">
            <img src={image1} alt="logo" className="image1" />
          </div>
          <form>
            <TextField
              label="Email"
              variant="standard"
              type="email"
              className="input"
              value={email}
              onChange={handleEmail}
            />
            <TextField
              label="Password"
              variant="standard"
              type="password"
              className="input"
              value={password}
              onChange={handlePassword}
            />

            <Button
              variant="contained"
              color="primary"
              className="input"
              type="submit"
            >
              Login
            </Button>
            <Link underline="none" href="#">
              Forgot password ?
            </Link>
          </form>
          <Typography variant="body1">
            Do not have an account ?
            <Link href="#" underline="none">
              Register
            </Link>
          </Typography>
        </Grid>
        <Grid item md="auto">
          <div className="imageContainer">
            <img src={image} alt="coverPic" className="image" />
          </div>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Login;
