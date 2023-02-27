import React from "react";
import {
  Grid,
  Typography,
  FormControl,
  FormControlLabel,
  Switch,
  Button,
  Stack,
  AntSwitch,
} from "@mui/material";
// import {
//   MapsUgcSharp,
//   NotificationsIcon,
//   MapsUgcIcon,
//   RadarIcon,
// } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import RadarIcon from "@mui/icons-material/Radar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import image1 from "../images/applogo.png";
import image2 from "../images/avatar.jpg";
import "./Header.css";
function Header() {
  return (
    <Grid container className="header">
      <Grid item sm="auto" className="header-head">
        <div className="imgContainer">
          <img src={image1} alt="logo" />
        </div>
        <Typography variant="h5">JESSOR</Typography>
      </Grid>
      <Grid item className="rightheader">
        <Button variant="outlined" disableRipple>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography color="black">EN</Typography>
            <Switch
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
              size="small"
            />
            <Typography color="black">FR</Typography>
          </Stack>
        </Button>
        <Stack spacing={1} direction="row">
          <MapsUgcIcon fontSize="small" />
          <RadarIcon fontSize="small" />
          <NotificationsIcon fontSize="small" />
        </Stack>
        <Stack spacing={1} direction="row" className="admininfo">
          <Typography>Jessy Ramson</Typography>
          <ExpandMoreIcon fontSize="small" />
        </Stack>
        <Stack>
          <div className="avatarCont">
            <img src={image2} alt="avatar" className="avatar" />
          </div>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Header;
