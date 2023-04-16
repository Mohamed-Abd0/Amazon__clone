import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import words from "../../../leng.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useSelector } from "react-redux";

const BottomNav = ({ setShowCanvas }) => {
  const lengActive = useSelector((state) => state.leng);
  const langWordsActive = words[`${lengActive.lang}`];

  return (
    <Fragment>
      <div className="bottom-nav bg-[#243242] text-white flex items-center justify-between mt-4">
        <div className="links overflow-hidden">
          <ul className="flex items-center maxmd:hidden">
            <li
              onClick={() => setShowCanvas(true)}
              className="font-bold cursor-pointer hover-item maxmd:hidden"
            >
              <span className="fa-solid fa-bars ltr:mr-1 rtl:ml-1"></span>
              <span>{langWordsActive.all}</span>
            </li>
            <li className="font-bold mx-3 hover-item maxmd:hover:text-mainColor duration-150 maxmd:hover:border-transparent">
              <Link to={"#"}>Today's Deals</Link>
            </li>
            <li className="font-bold mx-3 hover-item maxmd:hover:text-mainColor duration-150 maxmd:hover:border-transparent">
              <Link to={"#"}>Today's Deals</Link>
            </li>
          </ul>
          {/* <Swiper
            breakpoints={{
              200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="w-full md:hidden"
          >
            <SwiperSlide>
              <Link to={"#"}>Today's Deals</Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"#"}>Today's Deals</Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"#"}>Today's Deals</Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"#"}>Today's Deals</Link>
            </SwiperSlide>
          </Swiper> */}
        </div>

        <div className="right hover-item maxmd:hidden">
          <Link className="font-bold" to={"#"}>
            {langWordsActive.ShopHoliday}
          </Link>
        </div>
      </div>
    </Fragment>
  );
};
export default BottomNav;
