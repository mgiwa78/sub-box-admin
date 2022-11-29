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
import { Form } from "react-bootstrap";

export const AddProductForm = () => {
  const [productCategories, setProductCategories] = useState([]);
  const [productVendors, setProductVendors] = useState([]);

  useEffect(() => {
    if (productCategories.length !== 0) return;

    const productCategoriesData = async function name(params) {
      try {
        const categoriesData = await FetchAllCategories();
        const vendorsData = await FetchAllVendors();

        setProductCategories(categoriesData);
        setProductVendors(vendorsData);
      } catch (error) {}
    };
    productCategoriesData();
  }, [productCategories]);

  const DefformFields = {
    productName: "",
    productCategory: "",
    productDescription: "",
    productUnits: "",
    vendorName: "",
    productVendorID: "",
    productPrice: "",
    productTags: "",
    productImage: "",
    productCategoryName: "",
    subscriptionTypes: "",
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
    productCategoryName,
    productImage,
    subscriptionTypes,
  } = formFields;

  const handleSubmitProduct = async () => {
    const nowDate = new Date();
    const productData = {
      productDescription,
      productName,
      productCategoryID,
      productCategoryName,
      productPrice,
      productUnits,
      productTags,
      vendorName,
      productVendorID,
      productImage,
      subscriptionTypes,
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
        productCategoryName: `${category_name}`,
      });
    }

    if (name === "group1") {
      const all = [...e.target.form].map((option) => {
        return option.checked ? option.value : "";
      });
      return setFormFields({
        ...formFields,
        subscriptionTypes: all,
      });

      // return setFormFields({
      //   ...formFields,
      //   [name]: value,
      //   subscriptionTypes: value,
      // });
    }
    if (name === "vendorName") {
      if (value === "default") return;
      const { vendor_id } = productVendors.find(
        (vendor) => vendor.vendor_name === value
      );
      return setFormFields({
        ...formFields,
        [name]: value,
        productVendorID: `${vendor_id}`,
      });
    }
    if (name === "productImage") {
      const [files] = e.target.files;
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
        <div encType="multipart/form-data" className="addProductForm">
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
                  <option key="default" value="default">
                    Select Category Name
                  </option>
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
            <div className="addProductLeft">
              <label>Subscription Type</label>
              <Form>
                <Form.Check
                  onChange={(e) => handleFormChange(e)}
                  inline
                  label="1 month"
                  name="group1"
                  value={1}
                  type="checkbox"
                  id={`inline-checkbox-1`}
                />
                <Form.Check
                  inline
                  label="3 months"
                  onChange={(e) => handleFormChange(e)}
                  name="group1"
                  type="checkbox"
                  id={`inline-checkbox-2`}
                  value={3}
                />
                <Form.Check
                  inline
                  onChange={(e) => handleFormChange(e)}
                  label="6 months"
                  name="group1"
                  type="checkbox"
                  value={6}
                  id={`inline-checkbox-2`}
                />
              </Form>
            </div>
          </div>
          <div className="addProductUpload">
            <input
              onChange={(e) => handleFormChange(e)}
              type="file"
              name="productImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
