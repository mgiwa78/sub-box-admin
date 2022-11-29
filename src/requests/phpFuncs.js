export const FetchproductDataAsync = async (formdata) => {
  let data = new FormData();
  data.append(formdata.key, formdata.value);
  try {
    const AllEmpData = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {},
      body: data,
    })
      .then((response) => response.json())
      .then((dat) => dat);
    return AllEmpData;
  } catch (error) {
    alert(error);
  }
};

export const FetchProductById = async (productid) => {
  let formdata = new FormData();
  const action = { key: "REQUEST", value: "FETCH_PRODUCT_BY_ID" };
  formdata.append(action.key, action.value);
  formdata.append("product_id", productid);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {},
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);
    return Data;
  } catch (error) {
    throw new Error(error);
  }
};

export const UpdateproductDataWithId = async (productData) => {
  let formdata = new FormData();
  const action = { key: "ACTION", value: "UPDATE_PRODUCT_BY_ID" };
  formdata.append(action.key, action.value);

  formdata.append("product_category_id", productData.productCategoryID);
  formdata.append("product_vendor_id", productData.productVendorID);
  formdata.append("product_vendor_name", productData.productVendorName);
  formdata.append("product_description", productData.productDescription);
  formdata.append("product_price", productData.productPrice);
  formdata.append("product_name", productData.productName);
  formdata.append("date_Added", productData.dateAdded);
  formdata.append("product_units", productData.productUnits);
  formdata.append("product_tags", productData.productTags);
  formdata.append("product_image", productData.productImage);
  formdata.append("product_id", productData.productID);
  productData.newImg
    ? formdata.append("new_img", "true")
    : formdata.append("new_img", "false");
  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    return Data;
  } catch (error) {
    alert(error);
  }
};
export const CreateNewProduct = async (productData) => {
  console.log(productData);
  let formdata = new FormData();
  const action = { key: "REQUEST", value: "ADD_NEW_PRODUCT" };
  formdata.append(action.key, action.value);

  formdata.append("product_category_id", productData.productCategoryID);
  formdata.append("product_category_name", productData.productCategoryName);

  formdata.append("product_vendor_id", productData.productVendorID);
  formdata.append("product_vendor_name", productData.vendorName);
  formdata.append("product_description", productData.productDescription);
  formdata.append("product_price", productData.productPrice);
  formdata.append("product_name", productData.productName);
  formdata.append("date_Added", productData.dateAdded);
  formdata.append("product_units", productData.productUnits);
  formdata.append("product_tags", productData.productTags);
  formdata.append("product_image", productData.productImage);
  formdata.append(
    "subscription_types",
    productData.subscriptionTypes.join("-")
  );
  // formdata.append("vendor_id", productData.vendorName);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    return Data;
  } catch (error) {
    throw new Error(error);
  }
};

export const CreateNewvendor = async (vendorData) => {
  console.log(vendorData);
  let formdata = new FormData();
  const action = { key: "REQUEST", value: "ADD_NEW_VENDOR" };
  formdata.append(action.key, action.value);

  formdata.append("vendor_category_id", vendorData.vendorCategoryID);
  formdata.append("vendor_description", vendorData.vendorDescription);
  formdata.append("vendor_name", vendorData.vendorName);
  formdata.append("vendor_tags", vendorData.vendorTags);
  formdata.append("date_Added", vendorData.dateAdded);
  formdata.append("vendor_image", vendorData.vendorImage);
  formdata.append("vendor_contact", vendorData.vendorContact);
  formdata.append("vendor_email", vendorData.vendorEmail);
  formdata.append("vendor_address", vendorData.vendorAddress);
  formdata.append("vendor_category", vendorData.vendorCategory);

  // formdata.append("vendor_id", productData.vendorName);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    console.log(Data);

    return Data;
  } catch (error) {
    throw new Error(error);
  }
};
export const Updatevendor = async (vendorData) => {
  console.log(vendorData);
  let formdata = new FormData();
  const action = { key: "REQUEST", value: "UPDATE_VENDOR" };
  formdata.append(action.key, action.value);

  formdata.append("vendor_category_id", vendorData.vendorCategoryID);
  formdata.append("vendor_description", vendorData.vendorDescription);
  formdata.append("vendor_name", vendorData.vendorName);
  formdata.append("vendor_tags", vendorData.vendorTags);
  formdata.append("date_Added", vendorData.dateAdded);
  formdata.append("vendor_image", vendorData.vendorImage);
  formdata.append("vendor_contact", vendorData.vendorContact);
  formdata.append("vendor_email", vendorData.vendorEmail);
  formdata.append("vendor_address", vendorData.vendorAddress);
  formdata.append("vendor_category", vendorData.vendorCategory);
  formdata.append("Vendor_id", vendorData.VendorID);
  vendorData.newImg
    ? formdata.append("new_img", "true")
    : formdata.append("new_img", "false");
  // formdata.append("vendor_id", productData.vendorName);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    console.log(Data);

    return Data;
  } catch (error) {
    throw new Error(error);
  }
};
export const CreateNewCategory = async (categoryData) => {
  console.log(categoryData);
  let formdata = new FormData();
  const action = { key: "REQUEST", value: "ADD_NEW_CATEGORY" };
  formdata.append(action.key, action.value);

  formdata.append("category_description", categoryData.categoryDescription);
  formdata.append("category_name", categoryData.categoryName);
  formdata.append("date_added", categoryData.dateAdded);

  // formdata.append("vendor_id", productData.vendorName);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    console.log(Data);

    return Data;
  } catch (error) {
    throw new Error(error);
  }
};
export const FetchAllVendors = async () => {
  let formdata = new FormData();
  const action = { key: "REQUEST", value: "FETCH_ALL_VENDORS" };
  formdata.append(action.key, action.value);

  // formdata.append("vendor_id", productData.vendorName);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    console.log(Data);

    return Data;
  } catch (error) {
    throw new Error(error);
    console.log(error);
  }
};

export const FetchVendorById = async (vendorid) => {
  let formdata = new FormData();
  const action = { key: "REQUEST", value: "FETCH_VENDORS_BY_ID" };
  formdata.append(action.key, action.value);
  formdata.append("vendor_id", vendorid);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {},
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);
    return Data;
  } catch (error) {
    throw new Error(error);
  }
};

export const FetchAllCategories = async () => {
  let formdata = new FormData();
  const action = { key: "REQUEST", value: "FETCH_ALL_CATEGORIES" };
  formdata.append(action.key, action.value);

  // formdata.append("vendor_id", productData.vendorName);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    console.log(Data);

    return Data;
  } catch (error) {
    throw new Error(error);
  }
};
export const FetchAllProducts = async () => {
  let formdata = new FormData();
  const action = { key: "REQUEST", value: "FETCH_ALL_PRODUCTS" };
  formdata.append(action.key, action.value);

  // formdata.append("vendor_id", productData.vendorName);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    console.log(Data);

    return Data;
  } catch (error) {
    throw new Error(error);
  }
};

export const SetDataInDb = async (Alldata) => {
  console.log(Alldata);
  Alldata.forEach(async (productData) => {
    let formdata = new FormData();
    const action = { key: "ACTION", value: 10 };
    formdata.append(action.key, action.value);
    formdata.append("id", productData.id);
    formdata.append("purpose", productData.purpose);
    formdata.append("date", productData.date);
    formdata.append("name", productData.name);
    formdata.append("position", productData.position);
    formdata.append("duration", productData.duration);
    formdata.append("pesRes", productData.personRes);
    formdata.append("priority", productData.priority);
    formdata.append("dept", productData.dept);
    console.log(formdata.has("pesRes"));
    try {
      const Data = await fetch("http://localhost/vms_back/index.php", {
        method: "POST",
        headers: {
          // Accept: "application/json",
          // "Content-Type": "application/json",
        },
        body: formdata,
      })
        .then((response) => response.json())
        .then((data) => data);

      return Data;
    } catch (error) {
      alert(error);
    }
  });
};
export const SetApprovalReqDataInDb = async (Alldata) => {
  Alldata.forEach(async (productData) => {
    console.log(productData);

    let formdata = new FormData();
    const action = { key: "ACTION", value: 21 };
    formdata.append(action.key, action.value);
    formdata.append("approvalId", productData.approvalId);
    formdata.append("purpose", productData.purpose);
    formdata.append("name", productData.name);
    formdata.append("requestedBy", productData.requestedBy);
    formdata.append("dateRequested", productData.dateRequested);
    formdata.append("dueDate", productData.dueDate);
    formdata.append("position", productData.position);
    formdata.append("priority", productData.priority);
    formdata.append("timeLength", productData.timeLength);

    try {
      const Data = await fetch("http://localhost/vms_back/index.php", {
        method: "POST",
        headers: {
          // Accept: "application/json",
          // "Content-Type": "application/json",
        },
        body: formdata,
      })
        .then((response) => response.json())
        .then((data) => data);

      return Data;
    } catch (error) {
      alert(error);
    }
  });
};
export const SetCeckInDataInDb = async (Alldata) => {
  console.log(Alldata);
  Alldata.forEach(async (productData) => {
    let formdata = new FormData();
    const action = { key: "ACTION", value: 11 };
    formdata.append(action.key, action.value);
    formdata.append("id", productData.id);
    formdata.append("purpose", productData.purpose);
    formdata.append("name", productData.name);
    formdata.append("position", productData.position);
    formdata.append("pesRes", productData.personRes);
    formdata.append("checkin", productData.checkIn);
    formdata.append("checkout", productData.checkOut);
    try {
      const Data = await fetch("http://localhost/vms_back/index.php", {
        method: "POST",
        headers: {
          // Accept: "application/json",
          // "Content-Type": "application/json",
        },
        body: formdata,
      })
        .then((response) => response.json())
        .then((data) => data);

      return Data;
    } catch (error) {
      alert(error);
    }
  });
};
export const InsertCeckInDataInDb = async (EmployeeLog) => {
  let formdata = new FormData();
  const action = { key: "ACTION", value: 11 };
  formdata.append(action.key, action.value);
  formdata.append("id", EmployeeLog.id);
  formdata.append("purpose", EmployeeLog.purpose);
  formdata.append("name", EmployeeLog.name);
  formdata.append("position", EmployeeLog.position);
  formdata.append("pesRes", EmployeeLog.personRes);
  formdata.append("checkin", EmployeeLog.checkIn);
  formdata.append("tableId", EmployeeLog.tableId);
  console.log(formdata.has("pesRes"));
  try {
    const Data = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    return Data;
  } catch (error) {
    alert(error);
  }
};
export const InsertCeckOutDataInDb = async (productData) => {
  let formdata = new FormData();
  const action = { key: "ACTION", value: 13 };
  formdata.append(action.key, action.value);
  formdata.append("id", productData.id);
  formdata.append("tableId", productData.tableId);

  formdata.append("checkout", productData.checkOut);
  console.log(productData);
  try {
    const Data = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);
    return Data;
  } catch (error) {
    alert(error);
  }
};
export const FetchCheckInDataInDb = async (formdata) => {
  let data = new FormData();
  data.append(formdata.key, formdata.value);
  try {
    const AllEmpLogData = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {},
      body: data,
    })
      .then((response) => response.json())
      .then((dat) => dat);
    return AllEmpLogData;
  } catch (error) {
    alert(error);
  }
};
export const FetchApprovalsDataInDb = async () => {
  let data = new FormData();
  const action = { key: "ACTION", value: 20 };

  data.append(action.key, action.value);
  try {
    const AllEmpLogData = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {},
      body: data,
    })
      .then((response) => response.json())
      .then((dat) => dat);
    return AllEmpLogData;
  } catch (error) {
    alert(error);
  }
};
export const DeleteApprovalRequest = async (approvalID) => {
  let formdata = new FormData();
  console.log(approvalID);
  const action = { key: "ACTION", value: 22 };

  formdata.append(action.key, action.value);
  formdata.append("approvalID", approvalID);
  try {
    formdata.append("FETCH_product", true);
    const Data = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);
    return Data;
  } catch (error) {
    alert(error);
  }
};
export const AddApprovalReqDataToDb = async (employeeRequestData) => {
  let formdata = new FormData();
  const action = { key: "ACTION", value: 23 };
  console.log(employeeRequestData.dateRequested);
  formdata.append(action.key, action.value);
  formdata.append("purpose", employeeRequestData.purpose);
  formdata.append("name", employeeRequestData.name);
  formdata.append("requestedBy", employeeRequestData.requestedBy);
  formdata.append("dateRequested", employeeRequestData.dateRequested);
  formdata.append("dueDate", employeeRequestData.dueDate);
  formdata.append("position", employeeRequestData.position);
  formdata.append("priority", employeeRequestData.priority);
  formdata.append("timeLength", employeeRequestData.timeLength);

  try {
    const Data = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => true);

    return Data;
  } catch (error) {
    alert(error);
  }
};
export const SetlectproductInDb = async (productLoginData) => {
  let formdata = new FormData();
  const action = { key: "ACTION", value: 30 };
  formdata.append(action.key, action.value);

  formdata.append("productName", productLoginData.productName);
  formdata.append("productPassword", productLoginData.productPassword);
  formdata.append("productType", productLoginData.productType);
  console.log(productLoginData.productType);

  try {
    const Data = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);
    return Data;
  } catch (error) {
    alert(error);
  }
};
