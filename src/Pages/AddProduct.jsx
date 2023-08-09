import React, { useEffect, useRef, useState } from "react";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useFormik } from "formik";
import * as Yup from "yup";
import { db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getCategory } from "../FirebaseFunctions";

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const formScame = Yup.object({
  category: Yup.string().required("Required"),
  count: Yup.number().required("Required").min(1, "الكمية اقل من 1"),
  shipCompany: Yup.string().required("Required"),
  seller: Yup.string().required("Required"),
  rating: Yup.number().required("Required"),
  mainTitle: Yup.string().required("Required"),
  Description: Yup.string().required("Required"),
  ProductProperties: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  discount: Yup.boolean().required("Required"),
  discountValue: Yup.number(),
  ShippingValue: Yup.number(),
  ShippingFree: Yup.boolean().required("Required"),
  mainImg: Yup.mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "File too large",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
  Images: Yup.mixed().nullable().required("req"),

  // sellerID: Yup.string().required("Required"),
});

export const AddProduct = () => {
  // state
  const [categoryOnline, setCategoryOnline] = useState([]);
  const [ShippingCompany, setShippingCompany] = useState([]);
  const [addBtn, setAddBtn] = useState(true);
  const [imgesLinks, setImgesLinks] = useState([]);
  const [mainImgState, setMainImgState] = useState("");
  // state
  //  raf
  const selectSeler = useRef();
  //  raf

  // functions
  async function getShippingCompany() {
    const querySnapshot = await getDocs(collection(db, "ShippingCompany"));
    const cityList = querySnapshot.docs.map((doc) => [doc.data(), doc.id]);
    return cityList;
  }

  const handleMulteImges = (e) => {
    const newArray = [...e];
    formik.setFieldValue("Images", newArray);
  };

  const handleUploadMulti = (items) => {
    let newItems = [...items];
    let allUrls = [];

    for (let i = 0; i < newItems.length; i++) {
      const storageRef = ref(storage, `images/${newItems[i].name}`);

      const uploadTask = uploadBytesResumable(storageRef, newItems[i]).then(
        (sec) => {
          getDownloadURL(sec.ref).then((url) => {
            allUrls.push(url);
            setImgesLinks(allUrls);
          });
        }
      );
    }
  };

  const uploadOneImg = (item) => {
    const storageRef = ref(storage, `images/${item.name}`);

    const uploadTask = uploadBytesResumable(storageRef, item).then((sec) => {
      getDownloadURL(sec.ref).then((url) => {
        setMainImgState(url);
      });
    });
  };

  const handleSendDataToFirebase = (data) => {
    async function adddDataFirebase(item) {
      const docRef = await addDoc(collection(db, "products"), {
        ...item,
      })
        .then((sec) => {
          setAddBtn(true);
          setImgesLinks([]);
          setMainImgState("");
          formik.resetForm();
          alert("تم اضافة المنتج بنجاح");
          window.location.reload();
        })
        .catch((err) => {
          alert("حدث مشكلة اثناء رفع المنتج");
        });
    }
    if (imgesLinks.length > 0 && mainImgState.length > 0) {
      adddDataFirebase(data);
    }
  };

  // functions

  // get data Firebase
  useEffect(() => {
    getCategory().then((data) => {
      setCategoryOnline(data.data);
    });

    getShippingCompany().then((data) => {
      setShippingCompany(data);
      // console.log(data);
    });
  }, []);

  // listen to images states
  useEffect(() => {
    handleSendDataToFirebase(formik.values);
  }, [imgesLinks, mainImgState]);

  // formik
  const formik = useFormik({
    initialValues: {
      category: "",
      count: "",
      shipCompany: "",
      seller: "",
      rating: "",
      mainTitle: "",
      Description: "",
      ProductProperties: "",
      price: "",
      discount: "",
      discountValue: "",
      ShippingValue: "",
      ShippingFree: "",
      mainImg: "",
      Images: "",
    },
    validationSchema: formScame,
    onSubmit: (values, { resetForm }) => {
      // get sellerID
      [...selectSeler.current.children].map((e) => {
        if (e.innerHTML == values.seller) {
          values.sellerID = e.getAttribute("value2");
        }
      });
      setAddBtn(false);
      handleUploadMulti(values.Images);
      uploadOneImg(values.mainImg);
      handleSendDataToFirebase(values);
    },
  });

  // console.log(formik.values);
  if (imgesLinks.length > 0) {
    formik.values.Images = imgesLinks;
  }
  if (mainImgState.length > 0) {
    formik.values.mainImg = mainImgState;
  }
  return (
    <div className="add-student">
      <form className="add-student-form" onSubmit={formik.handleSubmit}>
        <div className="row">
          <select
            id="category"
            name="category"
            onChange={formik.handleChange}
            value={formik.values.category}
            className={
              formik.touched.category && formik.errors.category
                ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
            }
          >
            <option value="">اختار القسم </option>
            {categoryOnline.map((e) => {
              return (
                <option key={e} value={e}>
                  {e}
                </option>
              );
            })}
          </select>

          <input
            id="Images"
            name="Images"
            onChange={(e) => {
              handleMulteImges(e.target.files);
            }}
            className={
              formik.touched.Images && formik.errors.Images
                ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
            }
            type={"file"}
            multiple={true}
            accept=".png, .jpg, .jpeg"
          ></input>
          {/* <div>{formik.errors.Images}</div> */}
          <input
            id="count"
            name="count"
            onChange={formik.handleChange}
            value={formik.values.count}
            className={
              formik.touched.count && formik.errors.count
                ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
            }
            type={"number"}
            multiple={true}
            placeholder="ادخل الكمية المتاحة"
          ></input>
        </div>

        <div className="row">
          <select
            id="shipCompany"
            name="shipCompany"
            onChange={formik.handleChange}
            value={formik.values.shipCompany}
            className={
              formik.touched.shipCompany && formik.errors.shipCompany
                ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
            }
          >
            <option value="">اختار شركة الشحن </option>
            <option value="امازون">امازون </option>
            {/* <option value="أنثى">أنثى </option> */}
          </select>
          <select
            id="seller"
            name="seller"
            onChange={formik.handleChange}
            value={formik.values.seller}
            ref={selectSeler}
            className={
              formik.touched.seller && formik.errors.seller
                ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
            }
          >
            <option value="">اختار البائع </option>
            {ShippingCompany.map((e) => {
              // console.log(e[0].name);
              return (
                <option key={e} value={e[0].name} value2={e[1]}>
                  {e[0].name}
                </option>
              );
            })}
            {/* <option value="شركة النور<">شركة النور</option>
            <option value="شركة سيجما">شركة سيجما</option> */}
          </select>

          <select
            id="rating"
            name="rating"
            onChange={formik.handleChange}
            value={formik.values.rating}
            className={
              formik.touched.rating && formik.errors.rating
                ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
            }
          >
            <option value="">اختار التقييم </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="row">
          <input
            id="mainTitle"
            name="mainTitle"
            onChange={formik.handleChange}
            value={formik.values.mainTitle}
            className={
              formik.touched.mainTitle && formik.errors.mainTitle
                ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
            }
            type={"text"}
            placeholder="ادخل العنوان الرئيسى"
          ></input>
          <textarea
            id="Description"
            name="Description"
            onChange={formik.handleChange}
            value={formik.values.Description}
            className={
              formik.touched.Description && formik.errors.Description
                ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
            }
            // "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
            type={"text"}
            placeholder="ادخل الوصف"
          ></textarea>
          <textarea
            id="ProductProperties"
            name="ProductProperties"
            onChange={formik.handleChange}
            value={formik.values.ProductProperties}
            className={
              formik.touched.ProductProperties &&
              formik.errors.ProductProperties
                ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
            }
            placeholder="ادخال الخواص"
          ></textarea>
        </div>

        <div className="row">
          <input
            id="select-pic"
            // name="select-pic"
            onChange={(e) => formik.setFieldValue("mainImg", e.target.files[0])}
            // value={formik.values.mobileNumber}
            className={
              formik.touched.mainImg && formik.errors.mainImg
                ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
            }
            type={"file"}
            accept=".png, .jpg, .jpeg"
          ></input>

          <input
            id="price"
            name="price"
            onChange={formik.handleChange}
            value={formik.values.price}
            className={
              formik.touched.price && formik.errors.price
                ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
            }
            type={"number"}
            placeholder="ادخال السعر"
          ></input>
        </div>
        <div className="row">
          <select
            id="discount"
            name="discount"
            onChange={formik.handleChange}
            value={formik.values.discount}
            className={
              formik.touched.discount && formik.errors.discount
                ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
            }
          >
            <option value="">هل هناك خصم ؟ </option>
            <option value="true">نعم</option>
            <option value="false">لا</option>
          </select>
          {formik.values.discount == "true" && (
            <input
              id="discountValue"
              name="discountValue"
              onChange={formik.handleChange}
              value={formik.values.discountValue}
              required={true}
              className={
                formik.touched.discountValue && formik.errors.discountValue
                  ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                  : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
              }
              type={"number"}
              placeholder="قيمة الخصم"
            ></input>
          )}
        </div>
        <div className="row">
          <select
            id="ShippingFree"
            name="ShippingFree"
            onChange={formik.handleChange}
            value={formik.values.ShippingFree}
            className={
              formik.touched.ShippingFree && formik.errors.ShippingFree
                ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
            }
          >
            <option value="">هل هناك شحن مجانى ؟ </option>
            <option value="true">نعم</option>
            <option value="false">لا</option>
          </select>
          {formik.values.ShippingFree == "true" && (
            <input
              id="ShippingValue"
              name="ShippingValue"
              onChange={formik.handleChange}
              value={formik.values.ShippingValue}
              required={true}
              className={
                formik.touched.ShippingValue && formik.errors.ShippingValue
                  ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                  : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
              }
              type={"number"}
              placeholder="قيمة الشحن"
            ></input>
          )}
        </div>
        <button
          type="submit"
          className="mx-auto p-3 px-12 bg-green-700 text-white rounded-md block mt-8 "
          disabled={!addBtn ? true : false}
        >
          {!addBtn ? "جارى رفع المنتج" : "رفع المنتج"}
        </button>
      </form>
    </div>
  );
};
