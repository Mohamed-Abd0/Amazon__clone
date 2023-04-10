import { Fragment, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { getactiveLeng } from '../../Store/nav_slice/lengRedusers'
import cart from '../../assets/cart.png';
import words from '../../leng.json'
// import { incrementCartItem } from "../../../Store/nav_slice/cartRedusers";

const LangChoose = ({ setShowDilog, setShowCanvas, category }) => {
  const ref = useRef();
  const inputRef = useRef();
  const dispatch = useDispatch();
  const lengActive = useSelector((state) => state.leng);
  const activeLeng = lengActive.lang;

  const signInStatus = useSelector((state) => state.nameUserSlice);
  // console.log(signInStatus.status);
  const itemCart = useSelector((state) => state.cartItemNumber);
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
    // console.log();
  }, []);

  // console.log(activeLeng);
  const focusInput = (ev) => {
    inputRef.current.classList.add("border-active");
    setShowDilog(true);
  };

  const blurInput = () => {
    setShowDilog(false);
    inputRef.current.classList.remove("border-active");
  };

  // console.log(activeLeng);
  return (
    <div
      className={
        "top-nav flex items-center md:h-[60px] maxmd:flex-wrap maxmd:justify-between "
      }
    >
    

      <div
        ref={inputRef}
        className="input-search relative md:flex-1 maxmd:order-1 maxmd:w-full flex items-center  h-11 group border-2 border-transparent mt-2 rounded-lg"
      >
       
        <div className="input flex-1 h-full relative">
          <input
            onFocus={(ev) => focusInput(ev.target)}
            onBlur={(ev) => blurInput(ev.target)}
            type={"text"}
            className="w-full outline-none h-full group-focus:border-mainColor"
          />
          <div className="search-result absolute w-full bg-white top-full left-0 rounded-b-md shadow-md hidden"></div>
        </div>
        <div className="icon-search flex items-center justify-center bg-[#febd69] hover:bg-[#f3a847] border-2 border-transparent focus:border-mainColor   h-full w-11 cursor-pointer rtl:rounded-l-md ltr:rounded-r-md">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="right  flex items-center ltr:ml-4 rtl:mr-4 ">
        <div
          onMouseOver={() => setShowDilog(true)}
          onMouseLeave={() => setShowDilog(false)}
          className="h-full flex group items-center  uppercase text-white text-sm hover-item relative maxmd:hidden"
        >
          <Link to={"#"} className="leng-top flex cursor-pointer">
            <img
              alt="fleg"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png"
              className="w-7"
            />
            <span className="mx-2">{activeLeng}</span>
            <span className="fa-solid fa-caret-down text-[#ccc]"></span>
          </Link>
          <div className="leng-drop-down absolute w-52 bg-white left-0 top-[90%] text-[#444] text-xs p-2 rounded-md shadow-md hidden group-hover:block z-[99999999999]">
            <i className="fa-solid fa-caret-up absolute -top-4 left-[30%] text-white text-xl"></i>

            <div className="flex items-center justify-between capitalize ">
              <span>{langWordsActive.ChangeLanguage}</span>
              <Link className="text-[#007185]" to={"#"}>
                {langWordsActive.LearnMore}
              </Link>
            </div>

            <div className="all-leng py-4 " ref={ref}>
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
            <div className="currency border-y border-[#e7e7e7] capitalize text-xs py-4">
              <div className="flex items-center justify-between mt-2">
                <span>{langWordsActive.ChangeCurrency}</span>
                <Link className="ltr:ml-1 rtl:mr-1 text-[#007185]" to={"#"}>
                  {langWordsActive.LearnMore}
                </Link>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span>$ - USD - {langWordsActive.USDollar}</span>
                <Link className="ltr:ml-1 rtl:mr-1 text-[#007185]" to={"#"}>
                  {" "}
                  {langWordsActive.change}
                </Link>
              </div>
            </div>
            <div className="flex items-start mt-4">
              <img
                alt="fleg"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png"
                className="w-7 ltr:mr-3 rtl:ml-3"
              />
              {langWordsActive.shoppingOn} Amazon.com
            </div>
            <div className="text-center mt-4">
              <Link
                to={"/"}
                className="capitalize text-[#0066C0] hover:underline"
              >
                {langWordsActive.changeLeng}
              </Link>
            </div>
          </div>
        </div>

      
       
       
      </div>
    </div>
  );
};

export default LangChoose;
