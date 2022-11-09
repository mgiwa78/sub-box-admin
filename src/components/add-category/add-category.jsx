import { Link } from "react-router-dom";
import "./add-category.css";

import { CreateNewCategory } from "../../requests/phpFuncs";
import { useState } from "react";
import Button from "../button/button";
import { Publish } from "@mui/icons-material";

export const AddCategoryForm = () => {
  const DefformFields = {
    categoryDescription: "",
    categoryName: "",
  };

  const [formFields, setFormFields] = useState(DefformFields);

  const { categoryDescription, categoryName } = formFields;

  const handleSubmitCategory = async () => {
    const nowDate = new Date();
    const categoryData = {
      categoryDescription,
      categoryName,
      dateAdded: nowDate,
    };

    if (categoryDescription === "" || categoryName === "" || !categoryData)
      return alert("Invalid Fields ");
    try {
      const rep = await CreateNewCategory(categoryData);
      if (rep) alert("Category created sucessfully");
    } catch (error) {
      alert("Error creating category ");
    }
  };

  const handleFormChange = (e) => {
    const { value, name } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="addCategory">
      <div className="addCategoryTitleContainer">
        <h1 className="addCategoryTitle">Add New Category</h1>

        <Button onClickAction={handleSubmitCategory} name="Create Category" />
      </div>
      <div className="addCategoryflx">
        <form className="addCategoryForm">
          <div className="addCategoryFormBody">
            <div className="addCategoryLeft">
              <div className="addCategoryItem">
                <label>Category Name</label>
                <input
                  onChange={(e) => handleFormChange(e)}
                  name="categoryName"
                  value={categoryName}
                  type="text"
                  placeholder="annabeck99"
                />
              </div>

              <div className="addCategoryItem"></div>
              <div className="addCategoryItem">
                <label>Category Description</label>
                <input
                  onChange={(e) => handleFormChange(e)}
                  name="categoryDescription"
                  type="text"
                  value={categoryDescription}
                  placeholder="Description"
                />
              </div>
            </div>
            <div className="addCategoryLeft"></div>
          </div>
          <div className="addCategoryRight">
            <div className="addCategoryUpload">
              <img
                className="addCategoryImg"
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <label htmlFor="file">
                <Publish className="addCategoryIcon" />
              </label>
              <input
                onChange={(e) => handleFormChange(e)}
                type="file"
                id="file"
                style={{ display: "none" }}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryForm;
