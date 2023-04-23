import { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";

import classes from "./Layout.module.css";
import Header from "./Header.jsx";
import { Modal } from "../Modal";
import CheckoutHeader from "./CheckoutHeader";
import Footer from "../Footer/Footer";

const Layout = () => {
  const location = useLocation();

  // sellect the nave will appear depend on the route
  let header, footer;
  if (location.pathname === "/signin" || location.pathname === "/signup") {
    header = null;
    footer = null;
  } else {
    header = location.pathname === "/payment" ? <CheckoutHeader /> : <Header />;
    footer = location.pathname === "/payment" ? null : <Footer/>;
  }

  return (
    <Fragment>
      {header}
      <main className={classes.main}>
        <Outlet />
      </main>
      {footer}
      {/* <Modal /> */}
    </Fragment>
  );
};

export default Layout;
