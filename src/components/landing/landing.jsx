import "./landing.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Outlet } from "react-router-dom";

export default function Landing() {
  return (
    <div className="view">
      <Outlet />
    </div>
  );
}
