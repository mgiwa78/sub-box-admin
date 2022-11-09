import React, { useEffect, useState } from "react";
import "./header.css";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import LanguageIcon from "@mui/icons-material/Language";
import { useLocation, useNavigate } from "react-router-dom";
import { String_Utils_Capitalize } from "../../utils/stringUtils";

export default function Header() {
  const loc = useLocation();

  const [headerPath, setHeaderPath] = useState("DashBoard");

  const updateHeaderPath = (curLocObg) => {
    const locationPath = curLocObg.pathname;
    if (locationPath === "/") return setHeaderPath("Dashboard");
    const parsedString = String_Utils_Capitalize(
      locationPath.replace("/", "").split("_").join(" ")
    );
    setHeaderPath(parsedString);
  };

  useEffect(() => {
    updateHeaderPath(loc);
  }, [loc]);

  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="topLeft">
          <span className="headerTitle">{headerPath}</span>
        </div>
        <div className="topRight">
          <div className="headerIconContainer">
            <NotificationsOffIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="headerIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="headerIconContainer">
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
