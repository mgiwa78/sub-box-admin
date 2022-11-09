import { Link } from "react-router-dom";
import "./add-vendor-form.css";
import Chart from "../chart/Chart";
import { VendorData } from "../../dummyData";

import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
  RadioButtonChecked,
} from "@mui/icons-material";
import Button from "../button/button";
import { useEffect, useState } from "react";
import { CreateNewvendor, FetchAllCategories } from "../../requests/phpFuncs";

export const AddVendorForm = () => {
  const DefformFields = {
    vendorName: "",
    vendorCategory: "",
    vendorDescription: "",
    vendorUnits: "",
    vendorImage: "",
    vendorVendorID: "",
    vendorTags: "",
    vendorContact: "",
    vendorEmail: "",
    vendorAddress: "",
  };

  const [formFields, setFormFields] = useState(DefformFields);
  const [productCategories, setProductCategories] = useState([]);

  const {
    vendorCategory,
    vendorCategoryID,
    vendorDescription,
    vendorTags,
    vendorName,
    vendorImage,
    vendorContact,
    vendorEmail,
    vendorAddress,
  } = formFields;

  const handleSubmitvendor = async () => {
    const nowDate = new Date();
    const vendorData = {
      vendorDescription,
      vendorName,
      vendorCategoryID,
      vendorCategory,
      vendorTags,
      vendorContact,
      vendorEmail,
      vendorAddress,
      dateAdded: nowDate,
      ...(vendorImage !== "" && { vendorImage }),
    };

    if (!vendorData) return;
    try {
      const rep = await CreateNewvendor(vendorData);
      alert("Vendor Created ");
      handleClearFormFields();
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (productCategories.length !== 0) return console.log(productCategories);
    const productCategoriesData = async function name(params) {
      const data = await FetchAllCategories();
      setProductCategories(data);

      return data;
    };
    productCategoriesData();
  }, [productCategories]);

  const handleFormChange = (e) => {
    const { value, name } = e.target;
    if (name === "vendorCategory") {
      const { category_id } = productCategories.find(
        (category) => category.category_name === value
      );
      return setFormFields({
        ...formFields,
        [name]: value,
        vendorCategoryID: `${category_id}`,
      });
    }
    if (name === "vendorImage") {
      const [files] = e.target.files;
      console.log(files);
      return setFormFields({
        ...formFields,
        vendorImage: files,
      });
    }

    setFormFields({ ...formFields, [name]: value });
  };

  const handleClearFormFields = () => {
    setFormFields({ ...DefformFields });
  };
  return (
    <div className="addVendor">
      <div className="addVendorTitleContainer">
        <h1 className="addVendorTitle">Add Vendor</h1>
        <Button onClickAction={handleSubmitvendor} name="Add Vendor" />
      </div>
      <div className="addVendorContainer">
        <form className="addVendorForm">
          <div className="addVendorFormBody">
            <div className="addVendorLeft">
              <div className="addVendorItem">
                <label>Vendor Name</label>
                <input
                  onChange={(e) => handleFormChange(e)}
                  name="vendorName"
                  value={vendorName}
                  type="text"
                  placeholder="Enter vendor name"
                />
              </div>
              <div className="addVendorItem">
                <label>Category</label>
                <select
                  className="addVendorItemSelect"
                  onChange={(e) => handleFormChange(e)}
                  name="vendorCategory"
                  value={vendorCategory}
                >
                  {productCategories.map((category) => (
                    <option
                      key={category.category_id}
                      value={category.category_name}
                    >
                      {category.category_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="addVendorItem">
                <label>Vendor Email</label>
                <input
                  onChange={(e) => handleFormChange(e)}
                  name="vendorEmail"
                  value={vendorEmail}
                  type="text"
                  placeholder="Enter vendor email"
                />
              </div>
              <div className="addVendorItem">
                <label>Vendor Contact</label>
                <input
                  onChange={(e) => handleFormChange(e)}
                  name="vendorContact"
                  value={vendorContact}
                  type="number"
                  placeholder="Enter contact number"
                />
              </div>
            </div>
            <div className="addVendorLeft">
              <div className="addVendorItem">
                <label>Tags</label>
                <input
                  onChange={(e) => handleFormChange(e)}
                  value={vendorTags}
                  name="vendorTags"
                  type="text"
                  placeholder="Tags unique to category"
                />
              </div>
              <div className="addVendorItem">
                <label>Vendor Description</label>
                <input
                  name="vendorDescription"
                  value={vendorDescription}
                  onChange={(e) => handleFormChange(e)}
                  type="text"
                  placeholder="vendor description"
                />
              </div>
              <div className="addVendorItem">
                <label>Vendor Address</label>
                <input
                  onChange={(e) => handleFormChange(e)}
                  value={vendorAddress}
                  name="vendorAddress"
                  type="text"
                  placeholder="Enter vendor address"
                />
              </div>
            </div>
          </div>
          <div className="addVendorRight">
            <div className="addVendorUpload">
              <input
                onChange={(e) => handleFormChange(e)}
                type="file"
                name="vendorImage"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVendorForm;
