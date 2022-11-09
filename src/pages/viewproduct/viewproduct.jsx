import { Link, useParams } from "react-router-dom";
import "./viewproduct.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";

import PublishIcon from "@mui/icons-material/Publish";
import { useEffect, useState } from "react";
import {
  FetchProductById,
  FetchUniqueproductData,
  UpdateproductDataWithId,
} from "../../requests/phpFuncs";

export default function ViewProduct() {
  const params = useParams();

  const productDefs = {
    productName: "",
    productID: "",
    productUnits: "",
    productPrice: "",
    productImage: "",
  };
  const [productFormFields, setProductFormFields] = useState(productDefs);
  const { productName, productID, productUnits, productPrice, productImage } =
    productFormFields;

  useEffect(() => {
    const productDataFectch = async () => {
      try {
        const data = await FetchProductById(Number(params.productId));
        setProductFormFields({
          ...productFormFields,
          productName: data?.product_name,
          productID: data?.product_id,
          productUnits: data?.unit,
          productPrice: data?.product_price,
          productImage: data?.product_images,
        });
        console.log(data);
      } catch (error) {
        alert(error);
      }
    };
    productDataFectch();
  }, []);

  const handleSubmitproduct = async (e) => {
    e.preventDefault();
    const newproductData = {
      productName,
      productID,
      productUnits,
      productPrice,
      productImage,
      ...(productFormFields.newImg && { newImg: productFormFields.newImg }),
    };
    console.log(newproductData);
    if (!newproductData) return;
    try {
      const rep = await UpdateproductDataWithId(newproductData);
      alert("product Created ");
      handleClearFormFields();
    } catch (error) {
      alert(error);
    }
  };

  const handleClearFormFields = () => {
    setProductFormFields({ ...productDefs });
  };

  const handleFormChange = (e) => {
    const { value, name } = e.target;
    // if (name === "productCategory") {
    //   const { category_id } = productCategories.find(
    //     (category) => category.category_name === value
    //   );
    //   return setProductFormFields({
    //     ...productFormFields,
    //     [name]: value,
    //     productCategoryID: `${category_id}`,
    //   });
    // }
    if (name === "productImage") {
      const [files] = e.target.files;
      console.log(files);
      return setProductFormFields({
        ...productFormFields,
        newImg: true,
        productImage: files,
      });
    }

    setProductFormFields({ ...productFormFields, [name]: value });
  };
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={"http://localhost/ecom-back/upload/" + productImage}
              alt=""
              className="productInfoImg"
            />
            <span className="productName">{productName}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{productID}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">0</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">units:</span>
              <span className="productInfoValue">{productUnits}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Price:</span>
              <span className="productInfoValue">{productPrice}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple AirPod" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={"http://localhost/ecom-back/upload/" + productImage}
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <PublishIcon />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
