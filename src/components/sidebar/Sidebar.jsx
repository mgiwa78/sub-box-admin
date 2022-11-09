import "./sidebar.css";
import { Report } from "@mui/icons-material";
import CategoryIcon from "@mui/icons-material/Category";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarMenu">
        <div className="topLeft">
          <span className="logo">SubBox</span>
        </div>
        <h3 className="sidebarTitle">Menu</h3>
      </div>
      <div className="sidebarMenu">
        <ul className="sidebarList">
          <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
          </Link>
          {/* 
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li> */}
        </ul>
        <ul className="sidebarList">
          <Link to="/vendors" className="link">
            <li className="sidebarListItem">
              <PersonOutlineIcon className="sidebarIcon" />
              Vendors
            </li>
          </Link>
          <Link to="/products" className="link">
            <li className="sidebarListItem">
              <StorefrontIcon className="sidebarIcon" />
              Products
            </li>
          </Link>
          <Link to="/add_product" className="link">
            <li className="sidebarListItem">
              <AddShoppingCartIcon className="sidebarIcon" />
              Add Product
            </li>
          </Link>
          <Link to="/add_vendor" className="link">
            <li className="sidebarListItem">
              <AddBusinessIcon className="sidebarIcon" />
              Add Vendor
            </li>
          </Link>

          <Link to="/categories" className="link">
            <li className="sidebarListItem">
              <CategoryIcon className="sidebarIcon" />
              Categories
            </li>
          </Link>
          <Link to="/add_category" className="link">
            <li className="sidebarListItem">
              <CategoryIcon className="sidebarIcon" />
              Add Category
            </li>
          </Link>
          {/* <li className="sidebarListItem">
              <AttachMoneyIcon className="sidebarIcon" />
              Transactions
            </li> */}
          {/* <li className="sidebarListItem">
              <BarChartIcon className="sidebarIcon" />
              Reports
            </li> */}
        </ul>
      </div>
    </div>
  );
}
