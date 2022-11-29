import { useEffect, useState } from "react";
import { FetchAllProducts } from "../../requests/phpFuncs";
import "./widgetLg.css";

export default function WidgetLg() {
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
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Products</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Image</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Product</th>
            <th className="widgetLgTh">Vendor</th>
          </tr>
          {productsData
            .filter((_, index) => index < 4)
            .map((item, index) => (
              <tr className="widgetLgTr">
                <td className="widgetLgUser">
                  <img
                    src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="widgetLgImg"
                  />
                </td>
                <td className="widgetLgAmount">{item.product_name}</td>

                <td className="widgetLgDate">{item.date.slice(4, 15)}</td>
                <td className="widgetLgAmount">${item.product_price}</td>
                <td className="widgetLgAmount">
                  {item.vendor_id ? item.vendor_id : ""}
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
