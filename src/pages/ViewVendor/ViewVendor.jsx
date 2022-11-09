import { Link, useParams } from "react-router-dom";
import "./ViewVendor.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import {
  CreateNewvendor,
  FetchAllCategories,
  FetchVendorById,
  Updatevendor,
} from "../../requests/phpFuncs";

export default function ViewVendor() {
  const [vendorData, setVendorData] = useState([]);

  const params = useParams();

  const vendorDataFields = {
    vendorName: "",
    vendorCategory: "",
    vendorDescription: "",
    vendorUnits: "",
    vendorImage: "",
    VendorID: "",
    vendorTags: "",
    date: "",
    vendorContact: "",
    vendorAddress: "",
    vendorCategoryID: "",
    vendorEmail: "",
  };
  const [VendorCategories, setVendorCategories] = useState([]);

  const [vendorFormFields, setFormFields] = useState(vendorDataFields);
  const {
    vendorName,
    vendorCategory,
    vendorDescription,
    vendorImage,
    VendorID,
    vendorTags,
    date,
    vendorContact,
    vendorAddress,
    vendorEmail,
    vendorCategoryID,
  } = vendorFormFields;
  useEffect(() => {
    const VendorDataFectch = async () => {
      try {
        const data = await FetchVendorById(Number(params.vendorId));
        setFormFields({
          ...vendorFormFields,
          date: data?.data_created,
          VendorID: data?.vendor_id,
          vendorCategory: data?.vendor_category,
          vendorDescription: data?.vendor_description,
          vendorCategoryID: data?.vendor_category_id,
          vendorName: data?.vendor_name,
          vendorImage: data?.vendor_profile_img,
          vendorTags: data?.vendor_tags,
          vendorContact: data?.vendor_contact,
          vendorAddress: data?.vendor_address,
          vendorEmail: data?.vendor_email,
        });
      } catch (error) {
        alert(error);
      }
    };
    VendorDataFectch();
  }, []);

  useEffect(() => {
    if (VendorCategories.length !== 0) return;
    const vendorCategoriesData = async function name(params) {
      const data = await FetchAllCategories();
      setVendorCategories(data);

      return data;
    };
    vendorCategoriesData();
  }, [VendorCategories]);

  const handleSubmitvendor = async (e) => {
    e.preventDefault();
    const newVendorData = {
      vendorDescription,
      vendorName,
      vendorCategoryID,
      vendorCategory,
      vendorTags,
      vendorContact: Number(vendorContact),
      vendorEmail,
      vendorAddress,
      VendorID: Number(VendorID),
      dateAdded: date,
      vendorImage,
      ...(vendorFormFields.newImg && { newImg: vendorFormFields.newImg }),
    };
    console.log(newVendorData);
    if (!newVendorData) return;
    try {
      const rep = await Updatevendor(newVendorData);
      alert("Vendor Created ");
      handleClearFormFields();
    } catch (error) {
      alert(error);
    }
  };

  const handleClearFormFields = () => {
    setFormFields({ ...vendorDataFields });
  };

  const handleFormChange = (e) => {
    const { value, name } = e.target;
    if (name === "vendorCategory") {
      const { category_id } = VendorCategories.find(
        (category) => category.category_name === value
      );
      return setFormFields({
        ...vendorFormFields,
        [name]: value,
        vendorCategoryID: `${category_id}`,
      });
    }
    if (name === "vendorImage") {
      const [files] = e.target.files;
      console.log(files);
      return setFormFields({
        ...vendorFormFields,
        newImg: true,
        vendorImage: files,
      });
    }

    setFormFields({ ...vendorFormFields, [name]: value });
  };

  return (
    <div className="vendor">
      <div className="vendorTitleContainer">
        <h1 className="vendorTitle">Edit vendor</h1>
      </div>
      {console.log(vendorFormFields)}
      {vendorFormFields.vendorName !== "" ? (
        <div className="vendorContainer">
          <div className="vendorShow">
            <div className="vendorShowTop">
              <img
                src={"http://localhost/ecom-back/upload/" + vendorImage}
                alt=""
                className="vendorShowImg"
              />
              <div className="vendorShowTopTitle">
                <span className="vendorShowvendorname">{vendorName}</span>
                <span className="vendorShowvendorTitle">{vendorCategory}</span>
              </div>
            </div>
            <div className="vendorShowBottom">
              <span className="vendorShowTitle">Vendor Details</span>
              <div className="vendorShowInfo">
                <PermIdentity className="vendorShowIcon" />
                <span className="vendorShowInfoTitle">{vendorName}</span>
              </div>
              <div className="vendorShowInfo">
                <CalendarToday className="vendorShowIcon" />
                <span className="vendorShowInfoTitle">{date}</span>
              </div>
              <span className="vendorShowTitle">Contact Details</span>
              <div className="vendorShowInfo">
                <PhoneAndroid className="vendorShowIcon" />
                <span className="vendorShowInfoTitle">{vendorContact}</span>
              </div>
              <div className="vendorShowInfo">
                <MailOutline className="vendorShowIcon" />
                <span className="vendorShowInfoTitle">{vendorEmail}</span>
              </div>
            </div>
          </div>
          <div className="vendorUpdate">
            <span className="vendorUpdateTitle">Edit</span>
            <form className="vendorUpdateForm">
              <div className="vendorUpdateLeft">
                <div className="vendorUpdateItem">
                  <label>Vendor Name</label>
                  <input
                    type="text"
                    onChange={(e) => handleFormChange(e)}
                    placeholder="annabeck99"
                    className="vendorUpdateInput"
                    value={vendorName}
                    name="vendorName"
                  />
                </div>

                <div className="vendorUpdateItem">
                  <label>Email</label>
                  <input
                    onChange={(e) => handleFormChange(e)}
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="vendorUpdateInput"
                    value={vendorEmail}
                    name="vendorEmail"
                  />
                </div>
                <div className="vendorUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    onChange={(e) => handleFormChange(e)}
                    placeholder="90 123 456 67"
                    className="vendorUpdateInput"
                    name="vendorContact"
                    value={vendorContact}
                  />
                </div>
                <div className="vendorUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="Address"
                    onChange={(e) => handleFormChange(e)}
                    className="vendorUpdateInput"
                    name="vendorAddress"
                    value={vendorAddress}
                  />
                </div>
              </div>
              <div className="vendorUpdateLeft">
                <div className="addVendorItem">
                  <label>Category</label>
                  <select
                    className="addVendorItemSelect"
                    onChange={(e) => handleFormChange(e)}
                    name="vendorCategory"
                    value={vendorCategory}
                  >
                    {VendorCategories.map((category) => (
                      <option
                        key={category.category_id}
                        value={category.category_name}
                      >
                        {category.category_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="vendorUpdateItem">
                  <label>Vendor Tags</label>
                  <input
                    onChange={(e) => handleFormChange(e)}
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="vendorUpdateInput"
                    value={vendorTags}
                    name="vendorTags"
                  />
                </div>
                <div className="vendorUpdateItem">
                  <label>Descrition</label>
                  <input
                    type="text"
                    onChange={(e) => handleFormChange(e)}
                    placeholder="90 123 456 67"
                    className="vendorUpdateInput"
                    name="vendorDescription"
                    value={vendorDescription}
                  />
                </div>
              </div>
              <div className="vendorUpdateRight">
                <div className="vendorUpdateUpload">
                  <img
                    className="vendorUpdateImg"
                    src={"http://localhost/ecom-back/upload/" + vendorImage}
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="vendorUpdateIcon" />
                  </label>
                  <input
                    onChange={(e) => handleFormChange(e)}
                    type="file"
                    name="vendorImage"
                    id="file"
                    style={{ display: "none" }}
                  />
                </div>
                <button
                  onClick={(e) => handleSubmitvendor(e)}
                  className="vendorUpdateButton"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
