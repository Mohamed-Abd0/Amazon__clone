import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
<<<<<<< HEAD
import Home from "../src/Pages/Home";
=======
import Home from "../src/Pages/Home/Home";
>>>>>>> fd8a1e56b154f605d18716ae32ef5933950f6fd0
import Layout from "../src/Components/Layout/Layout";
import Cart from "../src/Pages/Cart";
import LogIn from "../src/Pages/LogIn";
import Payment from "./Pages/Payment";
import NotFound from "../src/Pages/NotFound";
import Product from "../src/Pages/Product";
<<<<<<< HEAD
import { AddProduct } from "./Pages/AddProduct";
import { AddCategory } from "./Pages/AddCategory";
// AddCategory
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <NotFound />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "/product/:productId", element: <Product /> },
//       { path: "/cart", element: <Cart /> },
//       { path: "/login", element: <LogIn /> },
//       { path: "/payment", element: <Payment /> },
//       // { path: "/addProduct", element: <Payment /> },
//     ],
//   },

//   { path: "admin", children: [{ index: true, element: <AddProduct /> }] },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
=======
import Category from "./Components/Category/Category";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Category />} />
      <Route path="/category/:type" element={<Home />} />
>>>>>>> fd8a1e56b154f605d18716ae32ef5933950f6fd0
      <Route index element={<Home />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/payment" element={<Payment />} />
<<<<<<< HEAD
      <Route path="/addProduct" element={<AddProduct />} />
      <Route path="/addCategory" element={<AddCategory />} />
=======
>>>>>>> fd8a1e56b154f605d18716ae32ef5933950f6fd0
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
