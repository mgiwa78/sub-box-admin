import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import DatasetIcon from "@mui/icons-material/Dataset";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import { FetchAllProducts } from "../../requests/phpFuncs";

export default function ProductList() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    try {
      const handleFetchAllProducts = async function name(params) {
        const Pdata = await FetchAllProducts();
        console.log(Pdata);
        setProductsData(Pdata);
      };
      handleFetchAllProducts();
    } catch (error) {
      alert(error);
    }
  }, []);

  const handleDelete = (id) => {
    return;
    setProductsData(productsData.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "Product Image",
      headerName: "Product Image",
      width: 200,
      renderCell: (params) => {
        console.log(params);
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={
                `http://localhost/ecom-back/upload/` + params.row.product_images
              }
              alt=""
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "product_name", headerName: "Product Name", width: 200 },

    {
      field: "product_price",
      headerName: "Product Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.product_id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        getRowId={(row) => row.product_id}
        rows={productsData}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
      />
    </div>
  );
}
