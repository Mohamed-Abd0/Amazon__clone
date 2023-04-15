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
import Signin from "../src/Pages/Signin";
import SignUp from "./Pages/SignUp";
import Payment from "./Pages/Payment";
import NotFound from "../src/Pages/NotFound";
import Product from "../src/Pages/Product";
import Category from "./Components/Category/Category";
import AddProduct2 from "./Pages/Home/AddProduct2";
import { AddCategory } from "./Pages/AddCategory";
import { useSelector } from "react-redux";

function App() {
  // get the login state from the store to protect the routes
  const islogin = useSelector((state) => state.loginSlice.islogin);
  console.log(islogin ? "you are authentecated" : "you are not authentecated");

  const username = useSelector((state) => state.userDataSlice.name);
  console.log(username);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Category />} />
        <Route path="/category/:type" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/addProduct" element={<AddProduct2 />} />
        <Route path="/addCategory" element={<AddCategory />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
