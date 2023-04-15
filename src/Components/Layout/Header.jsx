import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BottomNav from "./nav/bottomNav";
import Canvas from "./nav/Canves";
import TopNav from "./nav/TopNav";
import { getCategory } from "../../Firebase-APIS/FirebaseFunctions";

const Nav = () => {
  const [showDiolg, setShowDilog] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const [category, setCatgeory] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("dir") === null) {
      localStorage.setItem("dir", "ltr");
      localStorage.setItem("lengActive", "en");
    }

    getCategory().then((sec) => {
      setCatgeory(sec.data);
    });
  }, []);

  // console.log(category);
  return (
    <Fragment>
      <nav className="bg-[#232f3e] lg:p-2  relative z-[99999999999]">
        <div className="container">
          <TopNav
            category={category}
            setShowDilog={setShowDilog}
            setShowCanvas={setShowCanvas}
          />
          <BottomNav setShowCanvas={setShowCanvas} />
        </div>
        <div className="lg:hidden bg-[#37475A] p-3">
          <Link to={"#"} className="block text-white">
            <span className="fa-solid fa-location-dot ltr:mr-2 rtl:ml-2"></span>
            <span className="">Deliver to Egypt</span>
          </Link>
        </div>
      </nav>
      <div
        className={
          showDiolg
            ? "fixed top-0 h-screen w-full bg-black/40 left-0 z-[999999999] duration-300 "
            : "fixed top-0 h-screen w-full bg-transparent left-0  z-[-10] duration-300"
        }
      ></div>
      <Canvas
        category={category}
        showCanvas={showCanvas}
        setShowCanvas={setShowCanvas}
      />
    </Fragment>
  );
};

export default Nav;
