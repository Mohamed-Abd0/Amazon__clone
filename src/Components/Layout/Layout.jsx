import { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";

// import {ThemeProvider } from "@mui/material";
// import { lightTheme } from "../../Theme/Theme";

import classes from "./Layout.module.css";
import Header from "./Header.jsx";
import { Modal} from "../../Modal";
import CartMenu from "../ReuseableComponets/CartMenu";
import CheckoutHeader from "./CheckoutHeader";

//==================================================================================


const Layout = () => {
  const HeaderFn = () => {
    const location = useLocation();

    return (
      <div>
        {location.pathname === "/payment" ? <CheckoutHeader /> : <Header />}
      </div>
    );
  }



  return (
    <Fragment>
      {/* <ThemeProvider theme={lightTheme}> */}
      <HeaderFn />
      <main className={classes.main}>
        <CartMenu />
        <Outlet />
      </main>
      <Modal />
      {/* </ThemeProvider> */}
    </Fragment>
  );
};

export default Layout;
