import { Fragment } from "react";
import { Outlet } from "react-router-dom";

// import {ThemeProvider } from "@mui/material";
// import { lightTheme } from "../../Theme/Theme";

import classes from "./Layout.module.css";
import Header from "./Header.jsx";
import { Modal} from "../../Modal";
import CartMenu from "../ReuseableComponets/CartMenu";
const Layout = () => {
  return (
    <Fragment>
      {/* <ThemeProvider theme={lightTheme}> */}
        <Header />
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