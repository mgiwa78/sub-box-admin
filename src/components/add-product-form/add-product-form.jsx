import { Link } from "react-router-dom";
import "./add-product-form.css";
import Chart from "../chart/Chart";
import { productData } from "../../dummyData";

import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import {
  CreateNewProduct,
  FetchAllCategories,
  FetchAllVendors,
} from "../../requests/phpFuncs";
import { useEffect, useState } from "react";
import Button from "../button/button";
import { convertImageTobBase64 } from "../../utils/imageutils";

export const AddProductForm = () => {
  const [productCategories, setProductCategories] = useState([]);
  const [productVendors, setProductVendors] = useState([]);

  useEffect(() => {
    if (productCategories.length !== 0) return console.log(productCategories);

    const productCategoriesData = async function name(params) {
      try {
        const categoriesData = await FetchAllCategories();
        const vendorsData = await FetchAllVendors();

        console.log("noe");
        setProductCategories(categoriesData);
        setProductVendors(vendorsData);
      } catch (error) {}
    };
    productCategoriesData();
  }, [productCategories]);

  const DefformFields = {
    productName: "dd",
    productCategory: "",
    productDescription: "ddd",
    productUnits: "2",
    vendorName: "",
    productVendorID: "dd",
    productPrice: "33",
    productTags: "dd",
    productImage: "dd",
  };

  const [formFields, setFormFields] = useState(DefformFields);

  const {
    productCategory,
    productCategoryID,
    productDescription,
    productName,
    productUnits,
    productTags,
    productPrice,
    vendorName,
    productVendorID,
    productVendorName,
    productImage,
  } = formFields;

  const handleSubmitProduct = async () => {
    const nowDate = new Date();
    const productData = {
      productDescription,
      productName,
      productCategoryID,
      productPrice,
      productUnits,
      productTags,
      vendorName,
      productVendorID,
      productVendorName,
      productImage,
      dateAdded: nowDate,
    };

    if (!productData) return;
    try {
      const rep = await CreateNewProduct(productData);
      if (rep) {
        setFormFields(DefformFields);
        alert("Product Added");
      }
    } catch (error) {
      alert("error adding product");
    }
  };

  const handleFormChange = (e) => {
    const { value, name } = e.target;

    if (name === "productCategory") {
      const { category_id, category_name } = productCategories.find(
        (category) => category.category_name === value
      );
      return setFormFields({
        ...formFields,
        [name]: value,
        productCategoryID: `${category_id}`,
        productVendorName: `${category_name}`,
      });
    }
    if (name === "vendorName") {
      if (value === "default") return;
      const { vendor_id } = productVendors.find(
        (vendor) => vendor.vendor_name === value
      );
      console.log(vendor_id);
      return setFormFields({
        ...formFields,
        [name]: value,
        productVendorID: `${vendor_id}`,
      });
    }
    if (name === "productImage") {
      const [files] = e.target.files;
      console.log(files);
      return setFormFields({
        ...formFields,
        [name]: value,
        productImage: files,
      });
    }
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="addProduct">
      <div className="addProductTitleContainer">
        <h1 className="addProductTitle">Add Product</h1>

        <Button onClickAction={handleSubmitProduct} name="Create Product" />
      </div>
      <div className="addProductflx">
        <form encType="multipart/form-data" className="addProductForm">
          <div className="addProductFormBody">
            <div className="addProductLeft">
              <div className="addProductItem">
                <label>Product Name</label>
                <input
                  onChange={(e) => handleFormChange(e)}
                  name="productName"
                  value={productName}
                  type="text"
                  placeholder="Enter Product Name"
                />
              </div>
              <div className="addProductItem">
                <label>Category</label>
                <select
                  onChange={(e) => handleFormChange(e)}
                  name="productCategory"
                  value={productCategory}
                >
                  {productCategories?.map((category) => (
                    <option
                      key={category.category_id}
                      value={category.category_name}
                    >
                      {category.category_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="addProductItem">
                <label>Tags</label>
                <input
                  onChange={(e) => handleFormChange(e)}
                  name="productTags"
                  value={productTags}
                  type="text"
                  placeholder="Enter Product Tags"
                />
              </div>
              <div className="addProductItem"></div>
              <div className="addProductItem">
                <label>Product Description</label>
                <input
                  onChange={(e) => handleFormChange(e)}
                  name="productDescription"
                  type="text"
                  value={productDescription}
                  placeholder="Enter Product Description"
                />
              </div>
            </div>
            <div className="addProductLeft">
              <div className="addProductItem">
                <label>Amount Per Units</label>
                <input
                  onChange={(e) => handleFormChange(e)}
                  value={productUnits}
                  name="productUnits"
                  type="number"
                  placeholder="Enter Product Unit"
                />
              </div>
              <div className="addProductItem">
                <label>Price Per Units</label>
                <input
                  onChange={(e) => handleFormChange(e)}
                  value={productPrice}
                  name="productPrice"
                  type="number"
                  placeholder="Enter Product Price"
                />
              </div>
              <div className="addProductItem">
                <label>Vendor Name</label>
                <select
                  onChange={(e) => handleFormChange(e)}
                  name="vendorName"
                  value={vendorName}
                >
                  <option key="default" value="default">
                    Select Vendor Name
                  </option>
                  {productVendors?.map((vendor) => (
                    <option key={vendor.vendor_id} value={vendor.vendor_name}>
                      {vendor.vendor_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="addProductUpload">
            <input
              onChange={(e) => handleFormChange(e)}
              type="file"
              name="productImage"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
