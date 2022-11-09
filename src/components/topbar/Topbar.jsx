import React from "react";
import "./topbar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import LanguageIcon from "@mui/icons-material/Language";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SubBox</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsOffIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
