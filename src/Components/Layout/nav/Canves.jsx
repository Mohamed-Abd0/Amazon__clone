import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import words from "../../../leng.json";

const Canvas = ({ showCanvas, setShowCanvas, category }) => {
  const [showlayer, setShowLayer] = useState(false);
  const lengActive = useSelector((state) => state.leng);
  const langWordsActive = words[`${lengActive.lang}`];
  // const [allSection, setAllSecions] = useState(["مبيوتاؤ", "لابتبوب"]);
  const lengNow = useSelector((state) => state.leng.lang);
  return (
    <Fragment>
      <div
        onClick={() => setShowCanvas(false)}
        className={
          showCanvas
            ? "overlay-Canvas w-full h-full bg-black/80  absolute top-0 left-0 z-[999999999999999999999] "
            : "overlay-Canvas w-full h-full bg-black/80  absolute top-0 left-0 z-[999999999999999999999] hidden"
        }
      ></div>
      <div
        className={
          showCanvas
            ? "Canvas w-[360px] maxmd:w-[300px] bg-white h-screen fixed top-0  rtl:right-0 ltr:left-0 z-[9999999999999999999999] duration-500 "
            : "Canvas w-[360px] bg-white h-screen fixed top-0  rtl:right-[-200%] ltr:left-[-200%] z-[9999999999999999999999] duration-500 "
        }
      >
        <i
          onClick={() => setShowCanvas(false)}
          className="fa-solid fa-xmark close-canvas absolute rtl:-left-10 ltr:-right-10 top-6 text-3xl font-bold text-white cursor-pointer"
        ></i>
        <Link
          to={"#"}
          className="sign-in-canves bg-[#232f3e] text-white flex items-center text-2xl h-[50px] px-6 justify-center font-bold sticky top-0"
        >
          <span>{langWordsActive.helloSignIn}</span>
          <i className="fa-solid fa-circle-user text-2xl mx-3"></i>
        </Link>
        <div className="allSections relative overflow-scroll h-full">
          {category?.map((e, i) => {
            return (
              <div key={i} className="sec sec1">
                <Link
                  to={`category/${e[`${lengNow}`]}`}
                  className="flex items-center justify-between cursor-pointer hover:bg-[#cccccc7c] p-3 px-6 text-lg"
                >
                  <i className="fa-solid fa-chevron-left rtl:order-1"></i>
                  <h5 className="text-[#111] text-sm">{e[`${lengNow}`]}</h5>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Canvas;
