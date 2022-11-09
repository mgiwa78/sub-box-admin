import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import UserList from "./pages/vendorList/vendor-list";
import User from "./pages/ViewVendor/ViewVendor";
import NewUser from "./pages/new-vendor/new-vendor";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/viewproduct/viewproduct";
import NewProduct from "./pages/newProduct/NewProduct";
import AddProductForm from "./components/add-product-form/add-product-form";
import AddVendorForm from "./components/add-vendor-form/add-vendor-form";
import Landing from "./components/landing/landing";
import Header from "./components/header/header";
import VendorList from "./pages/vendorList/vendor-list";
import Vendor from "./pages/ViewVendor/ViewVendor";
import { AddCategoryForm } from "./components/add-category/add-category";
import Categories from "./components/category/categoryList";
import ViewVendor from "./pages/ViewVendor/ViewVendor";
import ViewProduct from "./pages/viewproduct/viewproduct";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app_view">
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/vendors" element={<VendorList />} />
          <Route path="/view_vendor/:vendorId" element={<ViewVendor />} />
          <Route path="/new_vendor" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<ViewProduct />} />
          <Route path="/add_product" element={<AddProductForm />} />
          <Route path="/add_vendor" element={<AddVendorForm />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/add_category" element={<AddCategoryForm />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
