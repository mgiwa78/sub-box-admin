import "./categoryList.css";
import { DataGrid } from "@mui/x-data-grid";
import DatasetIcon from "@mui/icons-material/Dataset";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import Topbar from "../topbar/Topbar";
import { FetchAllCategories, FetchAllcategorys } from "../../requests/phpFuncs";
import { useEffect, useState } from "react";

export default function Categories() {
  const [categorysData, setcategorysData] = useState([]);

  useEffect(() => {
    try {
      const handleFetchAllcategorys = async function name(params) {
        const Pdata = await FetchAllCategories();
        console.log(Pdata);
        setcategorysData(Pdata);
      };
      handleFetchAllcategorys();
    } catch (error) {
      alert(error);
    }
  }, []);

  const handleDelete = (id) => {
    return;
    setcategorysData(categorysData.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    { field: "category_name", headerName: "category Name", width: 200 },

    {
      field: "category_price",
      headerName: "category Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/category/" + params.row.id}>
              <button className="categoryListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="categoryListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="categoryList">
      <DataGrid
        getRowId={(row) => row.category_id}
        rows={categorysData}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
      />
    </div>
  );
}
