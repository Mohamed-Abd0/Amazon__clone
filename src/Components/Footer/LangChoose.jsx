import {useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Flag from '../../assets/Flag_of_Egypt.png';
import { getactiveLeng } from "../../Store/nav_slice/lengRedusers";
import words from "../../leng.json";


const LangChoose = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const lengActive = useSelector((state) => state.leng);
  const activeLeng = lengActive.lang;

  const signInStatus = useSelector((state) => state.nameUserSlice);
  const langWordsActive = words[`${lengActive.lang}`];
  const [leng, setLeng] = useState([
    { name: "english - en", dir: "ltr", short: "en" },
    { name: "العربية - ar", dir: "rtl", short: "ar" },
  ]);

  const handleChangeLueng = (ev) => {
    localStorage.setItem("dir", ev.getAttribute("direction"));
    localStorage.setItem("lengActive", ev.getAttribute("short-name-leng"));
    window.location.reload();
  };
  useEffect(() => {
    dispatch(getactiveLeng());
    const activeLeng = lengActive.lang;
    const activeDir = lengActive.dir;
    document.querySelector("html").dir = activeDir;
    document.querySelector("html").lang = activeLeng;
    [...ref.current.children].forEach((e) => {
      if (activeLeng == e.getAttribute("short-name-leng")) {
        e.querySelector("input").setAttribute("checked", "");
        e.classList.add("text-mainColor");
        e.classList.add("font-bold");
      }
    });
  }, []);

  return (
    <>
        <div className="h-full flex group items-center   text-white text-sm hover-item relative maxmd:hidden">
          <Link to={"#"} className="leng-top flex cursor-pointer">
            <img alt="fleg" src={Flag} className="w-7" />
            <span className="mx-2 uppercase">{activeLeng}</span>
            <span className="fa-thin fa-globe text-[#ccc]"></span>
          </Link>
          <div className="leng-drop-down absolute w-52 bg-white left-0 top-[90%] text-[#444] text-xs p-2 rounded-md shadow-md hidden group-hover:block z-[99999999999]">
            <i className="fa-solid fa-caret-up absolute -top-4 left-[30%] text-white text-xl"></i>

            <div className="all-leng py-4 uppercase" ref={ref}>
              {leng.map((e, i) => {
                return i == 0 ? (
                  <div
                    key={i}
                    direction={e.dir}
                    short-name-leng={e.short}
                    onClick={(item) => handleChangeLueng(item.target)}
                    className="leng cursor-pointer flex items-center text-xs mt-4 border-b border-[#e7e7e7] pb-4"
                  >
                    <input
                      type={"radio"}
                      name="select-leng"
                      className="accent-[#f44336] ltr:mr-2 rtl:ml-2 "
                    />
                    {e.name}
                  </div>
                ) : (
                  <div
                    key={i}
                    direction={e.dir}
                    short-name-leng={e.short}
                    onClick={(item) => handleChangeLueng(item.target)}
                    className="leng cursor-pointer flex items-center text-xs mt-2 group hover:text-mainColor z-20"
                  >
                    <input
                      type={"radio"}
                      name="select-leng"
                      className="accent-[#444] ltr:mr-2 rtl:ml-2 group-hover:accent-[#f44336]"
                    />
                    {e.name}
                  </div>
                );
              })}
            </div>
            <div className="currency border-y border-[#e7e7e7]  text-xs py-4">
              <div className="flex items-center justify-between mt-2">
                {/* <span>{langWordsActive.ChangeCurrency}</span> */}
                <Link
                  className="ltr:ml-6 rtl:mr-6 items-center  hover:underline text-[#007185]"
                  to={"#"}
                >
                  {langWordsActive.LearnMore}
                </Link>
              </div>
            </div>
            <div className="flex items-start mt-2">
              <img
                alt="fleg"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png"
                className="w-7 ltr:mr-3 rtl:ml-3"
              />
              <span>{langWordsActive.shoppingOn} Amazon.eg</span>
            </div>
            <div className="">
              <Link
                to={"/"}
                className="ltr:ml-6 rtl:mr-6 items-center  hover:underline text-[#007185]"
              >
                {langWordsActive.changeLeng}
              </Link>
            </div>
          </div>
        </div>

        
    </>
  );
};

export default LangChoose;
