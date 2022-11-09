import "./vendor-list.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Delete } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { FetchAllProducts, FetchAllVendors } from "../../requests/phpFuncs";

export default function VendorList() {
  const [vendorData, setVendorData] = useState([]);
  const handleFetchVendors = async () => {
    return await FetchAllVendors();
  };

  useState(async () => {
    if (vendorData.length !== 0) return;
    const vendorsData = await handleFetchVendors();
    setVendorData(vendorsData);
  }, []);

  const handleDelete = (id) => {
    setVendorData(vendorData.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "product_id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Profile",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="vendorListvendor">
            <img
              className="vendorListImg"
              src={
                `http://localhost/ecom-back/upload/` +
                params.row.vendor_profile_img
              }
              alt=""
            />
          </div>
        );
      },
    },
    { field: "vendor_name", headerName: "Name", width: 200 },
    { field: "vendor_description", headerName: "Description", width: 200 },
    { field: "vendor_category_id", headerName: "Category", width: 150 },

    {
      field: "data_created",
      headerName: "Date Created",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        console.log(params.row);
        return (
          <>
            <Link to={"/view_vendor/" + params.row.vendor_id}>
              <button className="vendorListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="vendorListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="vendorList">
      <DataGrid
        getRowId={(row) => row.vendor_id}
        rows={vendorData}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        className="vendorTable"
        vendoresizeContainer={true}
      />
    </div>
  );
}
