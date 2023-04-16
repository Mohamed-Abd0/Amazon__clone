import { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";

import classes from "./Layout.module.css";
import Header from "./Header.jsx";
import { Modal } from "../Modal";
import CheckoutHeader from "./CheckoutHeader";

const Layout = () => {
  const location = useLocation();

  // select the nav will appear depend on the route
  let header;
  if (location.pathname === "/signin" || location.pathname === "/signup") {
    header = null;
  } else {
    header = location.pathname === "/payment" ? <CheckoutHeader /> : <Header />;
  }

  return (
    <Fragment>
      {header}
      <main className={classes.main}>
        <Outlet />
      </main>
      <Modal />
    </Fragment>
  );
};

export default Layout;
