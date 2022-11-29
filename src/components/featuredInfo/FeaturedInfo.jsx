import "./featuredInfo.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useEffect, useState } from "react";
import { FetchAllProducts } from "../../requests/phpFuncs";

export default function FeaturedInfo() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    try {
      const handleFetchAllProducts = async function name(params) {
        const Pdata = await FetchAllProducts();
        setProductsData(Pdata);
      };
      handleFetchAllProducts();
    } catch (error) {
      alert(error);
    }
  }, []);
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Products</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{productsData.length}</span>
          {/* <span className="featuredMoneyRate">
            +5 <ArrowUpwardIcon className="featuredIcon negative" />
          </span> */}
        </div>
        <span className="featuredSub">Current availbable products</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₦4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownwardIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Active Subcriptions</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">0</span>
          <span className="featuredMoneyRate">
            +0 <ArrowDownwardIcon className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
