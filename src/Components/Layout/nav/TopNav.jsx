import { useEffect, useRef, useState } from "react";
import {useSelector , useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { getactiveLeng } from "../../../Store/nav_slice/lengRedusers";
import cart from "../../../assets/cart.png"
import words from "../../../leng.json"


const TopNav = ({setShowDilog , setShowCanvas}) => {

    const ref = useRef() ; 
    const inputRef = useRef() ; 
    const dispatch = useDispatch() ; 
    const lengActive = useSelector((state) => state) ; 
    dispatch(getactiveLeng())
    const langWordsActive = words[`${lengActive.leng.lang }`] ; 
    console.log(langWordsActive.deleverTo)
    // using symantic variables
    const [leng , setLeng] = useState([ {name : "english - en" , dir : "ltr" , short : "en"} , {name : "العربية - ar" , dir : "rtl" , short : "ar"}   ]) ; 
    
    // change the language and direction
    const handleChangeLueng = (ev) => {
        localStorage.setItem("dir" , ev.getAttribute("direction") ) ; 
        localStorage.setItem("lengActive" , ev.getAttribute("short-name-leng") ) ;
        window.location.reload() ; 
    }
    useEffect(() => {
        const activeLeng = lengActive.leng.lang ; 
        const activeDir = lengActive.leng.dir ; 
        document.querySelector("html").dir = activeDir ; 
        document.querySelector("html").lang = activeLeng ;
        // the ref is ambigous
        [...ref.current.children].forEach(e=> {
            if(activeLeng == e.getAttribute("short-name-leng")) {
                e.querySelector("input").setAttribute("checked" , "") ;
                e.classList.add("text-mainColor") ; 
                e.classList.add("font-bold") ; 
            }
        })
    } , [])

    const focusInput = (ev) => {
        inputRef.current.classList.add("border-active")
        setShowDilog(true) ; 
    }
    
    const blurInput = () => {
        setShowDilog(false)
        inputRef.current.classList.remove("border-active")
    }

    return ( 
        <div className= {"top-nav flex items-center md:h-[60px] maxmd:flex-wrap maxmd:justify-between" } >
        <div className="left flex  md:items-center ">
            <div className="open-menu md:hidden ltr:mr-2 rtl:ml-2">
                <i onClick={() => setShowCanvas(true)} className="fa-solid fa-bars text-2xl text-white cursor-pointer"></i>
            </div>
            <div  className = {`logo w-28 hover-item `}>
                <Link to={"/"} className = "w-full h-full">
                    <img className="w-full h-full" src={logo} /> 
                </Link>
            </div>
            <div className="flex items-center text-white hover-item cursor-pointer maxmd:hidden ltr:mr-4 rtl:ml-4 ">
                <i className="fa-solid fa-location-dot ltr:mr-2 rtl:ml-2 "></i>
                <div className="">
                    <p className="text-[#ccc] text-[12px]">{langWordsActive.deleverTo}</p>
                    <p className="capitalize  font-bold">{langWordsActive.country}</p>
                </div>
            </div>
        </div>

        <div ref={inputRef} className="input-search relative md:flex-1 maxmd:order-1 maxmd:w-full flex items-center  h-11 group border-2 border-transparent mt-2 rounded-lg">
            <div className="select-cat h-full" >
                <select className="select-category focus:border-mainColor border-2  h-full text-[#0F1111] bg-[#f3f3f3]  border-[#f3f3f3] capitalize outline-none ltr:rounded-l-md rtl:rounded-r-md">
                    <option value={"cat1"}>all</option>
                    <option value={"cat2"}>cat1</option>
                    <option value={"cat3"}>cat1</option>
                    <option value={"cat3"}>cat1</option>
                    <option value={"cat3"}>cat1</option>
                    <option value={"cat3"}>cat1</option>
                    <option value={"cat3"}>cat1</option>
                    <option value={"cat3"}>cat1</option>
                    <option value={"cat3"}>cat1</option>
                </select>
            </div>
            <div className="input flex-1 h-full relative">
                <input  onFocus={(ev) => focusInput(ev.target)} onBlur = {(ev) => blurInput(ev.target)} type={"text"} className = "w-full outline-none h-full group-focus:border-mainColor"/>
                <div className="search-result absolute w-full bg-white top-full left-0 rounded-b-md shadow-md hidden"></div>
            </div>
            <div className="icon-search flex items-center justify-center bg-[#febd69] hover:bg-[#f3a847] border-2 border-transparent focus:border-mainColor   h-full w-11 cursor-pointer rtl:rounded-l-md ltr:rounded-r-md">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <div className="right  flex items-center ltr:ml-4 rtl:mr-4 ">
            <div onMouseOver={() => setShowDilog(true)} onMouseLeave = {() => setShowDilog(false)} className="h-full flex group items-center  uppercase text-white text-sm hover-item relative maxmd:hidden">
                <Link to={"#"} className="leng-top flex cursor-pointer">
                    <img alt="fleg" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png" className="w-7"/> 
                    <span className="mx-2">en</span>
                    <span className="fa-solid fa-caret-down text-[#ccc]"></span>
                </Link>
                <div className="leng-drop-down absolute w-52 bg-white left-0 top-[90%] text-[#444] text-xs p-2 rounded-md shadow-md hidden group-hover:block">
                    <i className="fa-solid fa-caret-up absolute -top-4 left-[30%] text-white text-xl"></i>
                    
                    <div className="flex items-center justify-between capitalize ">
                        <span>{langWordsActive.ChangeLanguage}</span>
                        <Link className="text-[#007185]" to={"#"}>{langWordsActive.LearnMore}</Link>
                    </div>

                    <div className="all-leng py-4 " ref={ref} >
                    
                        {leng.map((e , i) => {
                            return (
                                i == 0 ? 
                                <div key={i} direction = {e.dir} short-name-leng = {e.short}  onClick={(item) => handleChangeLueng(item.target)}  className="leng cursor-pointer flex items-center text-xs mt-4 border-b border-[#e7e7e7] pb-4"> 
                                    <input type={"radio"} name = "select-leng"   className="accent-[#f44336] ltr:mr-2 rtl:ml-2 "/>
                                    {e.name}
                                </div>
                                : 
                                (<div key={i} direction = {e.dir} short-name-leng = {e.short}  onClick={(item) => handleChangeLueng(item.target)}  className="leng cursor-pointer flex items-center text-xs mt-2 group hover:text-mainColor z-20"> 
                                    <input  type={"radio"} name = "select-leng"  className="accent-[#444] ltr:mr-2 rtl:ml-2 group-hover:accent-[#f44336]"/>
                                    {e.name}
                                </div>)
                                
                            )
                        })}
                    
                        </div>
                        <div className="currency border-y border-[#e7e7e7] capitalize text-xs py-4">
                        <div className="flex items-center justify-between mt-2" >
                            <span>Change currency </span>
                            <Link className="ltr:ml-1 rtl:mr-1 text-[#007185]" to={"#"}> Learn more</Link>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <span>$ - USD - US Dollar</span>
                            <Link className="ltr:ml-1 rtl:mr-1 text-[#007185]" to={"#"}> change</Link>
                        </div>
                    </div>
                    <div className="flex items-start mt-4">
                        <img alt="fleg" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png" className="w-7 ltr:mr-3 rtl:mr-3"/> 
                        You are shopping on Amazon.com
                    </div>
                    <div className="text-center mt-4" >
                        <Link to={"#"} className = "capitalize text-[#0066C0]">Change country/region.</Link>
                    </div>
                </div>
            </div>

            <div onMouseOver={() => setShowDilog(true)} onMouseLeave = {() => setShowDilog(false)} className="relative ltr:ml-3 rtl:m-3 hover-item group sing-in maxmd:hidden ">
                <Link to={"#"} className = "text-white">
                    <p className="text-xs ">Hello, sign in</p>
                    <p className="">Account & Lists <span className="fa-solid fa-caret-down text-[#ccc]"></span> </p> 
                </Link>

                <div className="account-drop-down absolute w-96 bg-white -left-40 top-[90%] text-[#444] text-xs p-2 rounded-md shadow-md hidden  group-hover:block">
                    <i className="fa-solid fa-caret-up absolute -top-4 left-[74%] text-white text-xl"></i>

                    <div className="sing-in-btn text-center">
                        <Link to={"#"} className = "  block w-48 mx-auto p-2 duration-200 rounded border border-t-[#c89411] border-r-[#b0820f] border-b-[#99710d] hover:!bg-gradient-to-t from-[#f6da95] to-[#ecb21f]" style={{backgroundImage: "-webkit-linear-gradient(top,#f8e3ad,#EEBA37)"}}>sign in</Link>
                    </div>
                    <p className="text-center my-2 text-xs">New customer? <Link to={"#"} className="text-[#05a]">Start here.</Link></p>

                    <div className="flex items-start justify-between px-6 pt-6 border-t border-[#eee]">
                        <div className="left w-1/2 border-r border-[#ccc] ">
                            <h3 className="capitalize font-bold text-lg">Your Lists</h3>
                            <ul className="w-full">
                                <li className="hover:text-mainColor text-[#444] my-3">
                                    <Link to={"#"} className = "block">create</Link>
                                </li>
                            
                            </ul>
                        </div>
                        <div className="right w-1/2 ltr:pl-6 rtl:pr-6">
                            <h3 className="capitalize font-bold text-lg">Your Account</h3>
                            <ul>
                                <li className="hover:text-mainColor text-[#444] my-3">
                                    <Link to={"#"} className = "block">create</Link>
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ltr:ml-3 rtl:m-3 hover-item maxmd:hidden">
                <Link to={"#"} className = "text-white">
                    <p className="text-xs">Returns</p>
                    <p className="text-sm font-bold"> & Orders</p>
                </Link>
            </div>
            <div className="ltr:ml-3 rtl:m-3 hover-item maxmd:flex">
            <Link to={"sign-in"} className="md:hidden flex items-center text-white ltr:mr-3 rtl:ml-3 ">
                <span className="text-[#ccc] text-sm">sign in <span className="fa-solid fa-chevron-right text-xs ltr:mr-1 rtl:ml-1"></span></span>
                <span className="fa-solid fa-user text-3xl"></span>
            </Link>
            <Link to={"#"} className = "text-white flex items-end">
                <div className="images relative w-12">
                <img src={cart} alt="cart" className="w-full h-full"/>
                <span className="cart-number text-mainColor text-xs absolute top-[51%] left-[60%] -translate-x-1/2 -translate-y-1/2 font-bold">
                0
                </span>
                </div>
            
                    <span className="text-xs maxmd:hidden">Carts</span>
                </Link>
            </div>
        </div>
    </div>

     );
}
 
export default TopNav;