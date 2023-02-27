import React from "react";
import { Stack } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ForumIcon from "@mui/icons-material/Forum";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LogoutIcon from "@mui/icons-material/Logout";
import "./NavMenu.css";

function NavMenu() {
  return (
    <Stack className="navigation">
      <nav>
        <ul>
          <li>
            <div></div>
            {/* <BarChartIcon fontSize="small" />*/}
            <a href="#a">
              <BarChartIcon fontSize="small" className="" />
              Dashboard
            </a>
          </li>
          <li>
            <div>
              <MailOutlineIcon fontSize="small" />
            </div>

            <a href="#a">Inbox</a>
          </li>
          <li>
            <div>
              <InventoryIcon fontSize="small" />
            </div>

            <a href="#a">Products</a>
          </li>
          <li>
            <div>
              <ReceiptIcon fontSize="small" />
            </div>
            {/*<ReceiptIcon fontSize="small" /> */}
            <a href="#a">Invoices</a>
          </li>
          <li>
            <div>
              <PersonOutlineIcon fontSize="small" />
            </div>
            {/*<PersonOutlineIcon fontSize="small" /> */}
            <a href="#a">Employees</a>
          </li>
          <li>
            <div>
              <ForumIcon fontSize="small" />
            </div>
            {/* <ForumIcon fontSize="small" /> */}
            <a href="#a">Chat Room</a>
          </li>
          <li>
            <div>
              <CalendarMonthIcon fontSize="small" />
            </div>
            {/* <CalendarMonthIcon fontSize="small" />*/}
            <a href="#a">Calendar</a>
          </li>
        </ul>
        <ul>
          <li>
            <div className="icon">
              <LogoutIcon fontSize="small" />
            </div>
            {/*<LogoutIcon fontSize="small" /> */}
            <a href="#a">Logout</a>
          </li>
        </ul>
      </nav>
    </Stack>
  );
}

export default NavMenu;
