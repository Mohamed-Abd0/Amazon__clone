import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Canvas = ({showCanvas , setShowCanvas}) => {
  const [showlayer, setShowLayer] = useState(false);
  const [allSection, setAllSecions] = useState([
    {
    title: {
      ar: "الأجهزة والمحتوى الرقمي",
      en: "Devices and digital content",
    },
    links: [
      {
        text: "amazon music",
        subPage: {
          title: { ar: "تيار الموسيقى", en: "music stream" },
          link: [
            { text: "Amazon Music غير محدود", url: "#" },
            { text: "فتح مشغل ويب", url: "#" },
          ],
        },
      },
      {
        text: "قارئات Kindle الإلكترونية والكتب",
        subPage: {
          title: { ar: "قارئات Kindle الإلكترونية والكتب", en: "Kindle e-readers and books" },
          link: [
            { text: "Amazon Music غير محدود", url: "#" },
            { text: "فتح مشغل ويب", url: "#" },
          ],
        },
      },
    ],
  } , 

  {
    title: {
      ar: "تسوق حسب القسم ",
      en: "Shop by department",
    },
    links: [
      {
        text: "الكترونيات",
        subPage: {
          title: { ar: "تيار الموسيقى", en: "music stream" },
          link: [
            { text: "Amazon Music غير محدود", url: "#" },
            { text: "فتح مشغل ويب", url: "#" },
          ],
        },
      },
    ],
  } ], 
  );


  const [layerTwo , setLayerTwo] = useState({
    title : {en : "" , ar : ""} , 
    link: [
      { text: "", url: "#" },
    ],

  })
  const lengNow = useSelector((state) => state.leng.lang);

  const handleLayTwo = (ev) => {
    setShowLayer(true)
    allSection.map(e=> {
        if(e.title[lengNow] == ev.target.getAttribute("title")) {
            e.links.map(link => {
                if(link.text == ev.target.getAttribute("text")) {
                  setLayerTwo(link.subPage)
                }
            })
        }
    })
  }
  return (
    <Fragment>
    
    <div onClick={() => setShowCanvas(false)} className= {showCanvas ? "overlay-Canvas w-full h-full bg-black/80  absolute top-0 left-0 z-40 "  : "overlay-Canvas w-full h-full bg-black/80  absolute top-0 left-0 z-40 hidden"  }></div>
    <div className= {showCanvas ? "Canvas w-[360px] maxmd:w-[300px] bg-white h-screen fixed top-0  rtl:right-0 ltr:left-0 z-50 duration-500 " : "Canvas w-[360px] bg-white h-screen fixed top-0  rtl:right-[-200%] ltr:left-[-200%] z-50 duration-500 " } >
      <i onClick={() => setShowCanvas(false)} className="fa-solid fa-xmark close-canvas absolute rtl:-left-10 ltr:-right-10 top-6 text-3xl font-bold text-white cursor-pointer"></i>
      <Link
        to={"#"}
        className="sign-in-canves bg-[#232f3e] text-white flex items-center text-2xl h-[50px] px-6 ltr:justify-end font-bold sticky top-0"
      >
        <span>مرحباً. تسجيل الدخول</span>
        <i className="fa-solid fa-circle-user text-2xl mx-3"></i>
      </Link>
      <div className="allSections relative overflow-scroll h-full">
        {allSection.map((e , i) => {
            return (
                <div key={i} className="sec sec1" >
                    <h2 className="title-sec">{e.title[lengNow]}</h2>
                    {e.links.map((x,c) => {
                        return (
                            <div key={Math.random()*1000000} onClick={ (ev) =>  handleLayTwo(ev)} title = {e.title[lengNow]} text = {x.text} className="flex items-center justify-between cursor-pointer hover:bg-[#cccccc7c] p-3 px-6 text-lg">
                                <i className="fa-solid fa-chevron-left rtl:order-1"></i>
                                <h5 className="text-[#111] text-sm">{x.text}</h5>
                            </div>

                        )
                    })}
                </div>

            )
        })}

        <div
          className={
            showlayer
              ? "absolute left-0 top-0 duration-300 z-[10] bg-white w-full h-screen overflow-hidden"
              : "absolute duration-300 left-0 top-0 z-[-10] bg-white w-0 h-0 overflow-hidden" +
                ""
          }
        >
          <div
            onClick={() => setShowLayer(false)}
            className="flex items-center cursor-pointer ltr:justify-end  text-xl px-6 border-b border-[#ccc] pb-3"
          >
            <span>الصفحة الرئيسية</span>
            <i className="fa-solid fa-arrow-right mx-3 rtl:order-[-1]"></i>
          </div>
          <h3 className="text-xl font-bold px-6 my-3">{layerTwo.title.ar}</h3>
          <div className="all-links">
              {layerTwo.link.map((e,i)=> {
                return (
                  <Link key={i} to={e.url}  className="flex items-center justify-between cursor-pointer hover:bg-[#cccccc7c] p-3 px-6 text-lg">
                    <h5 className="text-[#111] text-lg">{e.text}</h5>
                  </Link>
                )
              })}
            </div>
        </div>
      </div>
    </div>
    </Fragment>

  );
};

export default Canvas;
