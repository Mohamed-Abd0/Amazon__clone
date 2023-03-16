import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import Layout from "../src/Components/Layout/Layout";
import Cart from "../src/Pages/Cart";
import LogIn from "../src/Pages/LogIn";
import Payment from "./Pages/Payment";
import NotFound from "../src/Pages/NotFound";
import Product from "../src/Pages/Product";
import { AddProduct } from "./Pages/AddProduct";
import { AddCategory } from "./Pages/AddCategory";
import Category from "./Components/Category/Category";
import AddProduct2 from "./Pages/Home/AddProduct2";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Category />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/addProduct" element={<AddProduct2 />} />
      <Route path="/addCategory" element={<AddCategory />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
