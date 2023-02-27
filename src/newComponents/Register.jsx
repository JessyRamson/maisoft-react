import React, { useState } from "react";
import {
  Stack,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Link,
} from "@mui/material";
import image from "../images/app-image.png";
import image1 from "../images/applogo.png";
import "./Register.css";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpass, setConpass] = useState("");
  const [tnc, setTnc] = useState(false);
  console.log(firstname);
  console.log(lastname);
  console.log(email);
  console.log(password);
  console.log(conpass);
  console.log(tnc);

  const handleFn = (e) => {
    setFirstname(e.target.value);
  };

  const handleLn = (e) => {
    setLastname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const handleConpass = (e) => {
    setConpass(e.target.value);
  };

  const handleCheck = (e) => {
    setTnc(e.target.checked);
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
              label="Firstname"
              variant="standard"
              type="text"
              className="input"
              value={firstname}
              onChange={handleFn}
            />
            <TextField
              label="Lastname"
              variant="standard"
              type="text"
              className="input"
              value={lastname}
              onChange={handleLn}
            />
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
              onChange={handlePass}
            />
            <TextField
              label="Confirm password"
              variant="standard"
              type="password"
              className="input"
              value={conpass}
              onChange={handleConpass}
            />
            <FormControl>
              <FormControlLabel
                label="I agree with terms and conditions"
                control={<Checkbox checked={tnc} onChange={handleCheck} />}
              />
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              className="input"
              type="submit"
            >
              Register
            </Button>
          </form>
          <Typography variant="body1">
            Already have an account ?{" "}
            <Link underline="none" href="#">
              Log in
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

export default Register;
