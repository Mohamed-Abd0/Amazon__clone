import { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";

import classes from "./Layout.module.css";
import Header from "./Header.jsx";
import { Modal } from "../../Modal";
import CheckoutHeader from "./CheckoutHeader";

const Layout = () => {
  const HeaderFn = () => {
    const location = useLocation();

    return (
      <div>
        {location.pathname === "/payment" ? <CheckoutHeader /> : <Header />}
      </div>
    );
  };

  return (
    <Fragment>
      <HeaderFn />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Modal />
    </Fragment>
  );
};

export default Layout;
