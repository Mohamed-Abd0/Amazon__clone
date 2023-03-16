import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { Field, FieldArray, Form, Formik } from "formik";
import React, { Fragment, useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const schema = Yup.object().shape({
  ProductProperties: Yup.array()
    .of(
      Yup.object().shape({
        ar: Yup.string().required("Required"),
        en: Yup.string().required("Required"),
      })
    )
    .required()
    .min(1, ""),
  technicalProperties: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.object().shape({
          ar: Yup.string().required("Required"),
          en: Yup.string().required("Required"),
        }),
        value: Yup.object().shape({
          ar: Yup.string().required("Required"),
          en: Yup.string().required("Required"),
        }),
      })
    )
    .required()
    .min(1, ""),
  category: Yup.array().required().of(Yup.string().required()),
  count: Yup.number().required("").min(1),
  price: Yup.number().required("").min(3),
  seller: Yup.array().of(Yup.string().required()).required(),
  minTitle: Yup.object().shape({
    ar: Yup.string().required("Required"),
    en: Yup.string().required("Required"),
  }),
  description: Yup.object().shape({
    ar: Yup.string().required("Required"),
    en: Yup.string().required("Required"),
  }),
  ShippingFree: Yup.string().required(),
  ShippingValue: Yup.number(),
  discount: Yup.string().required(),
  discountValue: Yup.number(),
});

const AddProduct2 = () => {
  // raf
  const selectSeler = useRef();
  // raf
  //states
  const [categoryOnline, setCategoryOnline] = useState([]);
  const [Sallers, setSallers] = useState([]);
  const [mainImg, setMainImg] = useState({});
  const [images, setImages] = useState([]);
  const [mainImgUrl, setMainImgUrl] = useState("");
  const [imagesUrl, setimagesUrl] = useState([]);
  const [val, setVal] = useState({});
  const [addBtn, setAddBtn] = useState(true);
  //states

  //   functions
  async function getCategory() {
    const req = doc(db, "category", "IjcIcmJzA3qlFATugZm0");
    const citySnapshot = await getDoc(req);
    return citySnapshot.data();
  }

  async function getSallers() {
    const querySnapshot = await getDocs(collection(db, "ShippingCompany"));
    const cityList = querySnapshot.docs.map((doc) => [doc.data(), doc.id]);
    return cityList;
  }

  function getMainImgUrl(item) {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `images/${item.name}`);

      const uploadTask = uploadBytesResumable(storageRef, item)
        .then((sec) => {
          return getDownloadURL(sec.ref).then((url) => {
            resolve(url);
            // setMainImgUrl(url);
          });
        })
        .catch((err) => reject(Error("error send data")));
    });
  }

  function getImgasUrl(items) {
    let newItems = [...items];
    return new Promise((resolve, reject) => {
      let allUrls = [];

      // for (let i = 0; i < newItems.length; i++) {
      newItems.forEach((e) => {
        const storageRef = ref(storage, `images/${e.name}`);
        const uploadTask = uploadBytesResumable(storageRef, e).then((sec) => {
          getDownloadURL(sec.ref)
            .then((url) => {
              return allUrls.push(url);
            })
            .then((secc) => {
              resolve(allUrls);
            })
            .catch((er) => reject(Error("Error send data")));
        });
      });
      // }
    });
  }

  async function sendDataToFirebase(values) {
    const docRef = await addDoc(collection(db, "products"), {
      ...values,
    });
  }

  //   functions

  useEffect(() => {
    // get getCategory and set values for state
    getCategory().then((data) => {
      setCategoryOnline(data.data);
    });
    getSallers().then((data) => {
      setSallers(data);
    });
  }, []);

  return (
    <div className="container">
      <Formik
        initialValues={{
          ProductProperties: [],
          category: "",
          count: "",
          price: "",
          shipCompany: { ar: "امازون", en: "amazon" },
          reting: {
            five: 0,
            four: 0,
            three: 0,
            two: 0,
            one: 0,
            mainRating: 0,
          },
          comments: [
            // { stars: 1, name: "mohmed", idUser: "1", imgUse: "url", text: "" },
          ],
          seller: "",
          minTitle: { ar: "", en: "" },
          description: { ar: "", en: "" },
          ShippingFree: "",
          ShippingValue: "",
          discount: "",
          discountValue: "",
          technicalProperties: [],
        }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) =>
          setTimeout(() => {
            [...selectSeler.current.children].map((e) => {
              if (values.seller.includes(e.innerHTML)) {
                values.sellerID = e.getAttribute("value2");
              }
            });
            getMainImgUrl(mainImg);
            setAddBtn(false);
            // console.log();
            getImgasUrl(images).then((sec) => {
              values.images = sec;
              console.log(values);
              getMainImgUrl(mainImg).then((main) => {
                values.mainImg = main;
                sendDataToFirebase(values)
                  .then((sec) => {
                    setAddBtn(true);
                    setimagesUrl([]);
                    setMainImgUrl("");
                    alert("تم اضافة المنتج بنجاح");
                    resetForm();
                    window.location.reload();
                  })
                  .catch((err) => {
                    alert("حدث مشكلة اثناء رفع المنتج");
                  });
              });
            });
          }, 0)
        }
        render={({ values }) => (
          <Form>
            {/* Category */}
            <div className="row">
              <Field name={`category`}>
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <select
                    onChange={(e) =>
                      (values.category = e.target.value.split("-"))
                    }
                    className={
                      meta.touched && meta.error
                        ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                        : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                    }
                  >
                    <option value="">اختار القسم </option>
                    {categoryOnline.map((e) => {
                      return (
                        <option key={e.ar} value={`${e.ar}-${e.en}`}>
                          {e.ar}
                        </option>
                      );
                    })}
                  </select>
                )}
              </Field>

              {/* count */}

              <Field name={`count`}>
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <input
                    type="number"
                    required={true}
                    min={1}
                    placeholder="ادخال عدد العناصر المتوفرة فى المخزن"
                    {...field}
                    className={
                      meta.touched && meta.error
                        ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                        : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                    }
                  />
                )}
              </Field>
              <Field name={`price`}>
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <input
                    type="number"
                    placeholder="ادخال السعر"
                    required={true}
                    min={1}
                    {...field}
                    className={
                      meta.touched && meta.error
                        ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                        : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                    }
                  />
                )}
              </Field>
            </div>
            <div className="row">
              <Field name={`seller`}>
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <select
                    ref={selectSeler}
                    onChange={(e) =>
                      (values.seller = e.target.value.split("-"))
                    }
                    className={
                      meta.touched && meta.error
                        ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                        : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                    }
                  >
                    <option value="">اختار البائع </option>
                    {Sallers.map((e) => {
                      return (
                        <option
                          key={e[1]}
                          value={`${e[0].name.ar}-${e[0].name.en}`}
                          value2={e[1]}
                        >
                          {e[0].name.ar}
                        </option>
                      );
                    })}
                  </select>
                )}
              </Field>
            </div>
            <div className="row">
              <Field name={`minTitle.en`}>
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <input
                    type="text"
                    placeholder="ادخال العنوان الرئيسى باللغة الانجليزية"
                    {...field}
                    className={
                      meta.touched && meta.error
                        ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                        : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                    }
                  />
                )}
              </Field>
              <Field name={`minTitle.ar`}>
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <input
                    type="text"
                    placeholder="ادخال العنوان الرئيسى باللغة العربية"
                    {...field}
                    className={
                      meta.touched && meta.error
                        ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                        : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                    }
                  />
                )}
              </Field>
            </div>
            <div className="row">
              <Field name={`description.en`}>
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <input
                    type="text"
                    placeholder="ادخال الوصف  باللغة الانجليزية"
                    {...field}
                    className={
                      meta.touched && meta.error
                        ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                        : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                    }
                  />
                )}
              </Field>
              <Field name={`description.ar`}>
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <input
                    type="text"
                    placeholder="ادخال الوصف  باللغة العربية"
                    {...field}
                    className={
                      meta.touched && meta.error
                        ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                        : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                    }
                  />
                )}
              </Field>
            </div>
            <div className="row">
              <Field name={`minImg`}>
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <input
                    type="file"
                    // {...field}
                    onChange={(e) => setMainImg(e.target.files[0])}
                    className={
                      meta.touched && meta.error
                        ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                        : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                    }
                  />
                )}
              </Field>
              <Field name={`images`}>
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <input
                    type="file"
                    multiple={true}
                    // placeholder="ادخال الوصف  باللغة العربية"
                    // {...field}
                    onChange={(e) => setImages(e.target.files)}
                    className={
                      meta.touched && meta.error
                        ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                        : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                    }
                  />
                )}
              </Field>
            </div>
            <div className="row">
              <Field name={`ShippingFree`}>
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <select
                    {...field}
                    // onChange={(e) => setShippingFreeState(e.target.value)}
                    className={
                      meta.touched && meta.error
                        ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                        : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                    }
                  >
                    <option value="">هل هناك شحن مجانى</option>
                    <option value="true">نعم</option>
                    <option value="false">لا</option>
                  </select>
                )}
              </Field>
              {values.ShippingFree == "false" && (
                <Field name={`ShippingValue`}>
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => (
                    <input
                      type="number"
                      placeholder="ادخال قيمة الشحن"
                      {...field}
                      required={true}
                      min={1}
                      className={
                        meta.touched && meta.error
                          ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                          : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                      }
                    />
                  )}
                </Field>
              )}
            </div>
            <div className="row">
              <Field name={`discount`}>
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <select
                    {...field}
                    // onChange={(e) => setShippingFreeState(e.target.value)}
                    className={
                      meta.touched && meta.error
                        ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                        : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                    }
                  >
                    <option value="">هل هناك خصم </option>
                    <option value="true">نعم</option>
                    <option value="false">لا</option>
                  </select>
                )}
              </Field>
              {values.discount == "true" && (
                <Field name={`discountValue`}>
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => (
                    <input
                      type="number"
                      placeholder="ادخال قيمة الخصم"
                      {...field}
                      required={true}
                      min={1}
                      className={
                        meta.touched && meta.error
                          ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                          : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                      }
                    />
                  )}
                </Field>
              )}
            </div>
            {/* ProductProperties */}

            <FieldArray
              name="ProductProperties"
              render={(arrayHelpers) => (
                <div>
                  {values.ProductProperties.map((friend, index) => (
                    <div className="row" key={index}>
                      <h3 className="text-center text-2xl my-3">{index + 1}</h3>
                      <Field name={`ProductProperties[${index}].en`}>
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => (
                          <input
                            type="text"
                            placeholder="ادخال قيمة الخاصية بالانجليزية"
                            {...field}
                            className={
                              meta.touched && meta.error
                                ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                                : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                            }
                          />
                        )}
                      </Field>

                      <Field name={`ProductProperties[${index}].ar`}>
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => (
                          <input
                            type="text"
                            placeholder="ادخال قيمة الخاصية بالعربية"
                            {...field}
                            className={
                              meta.touched && meta.error
                                ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                                : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                            }
                          />
                        )}
                      </Field>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                        className="w-1/4 bg-red-500 hover:bg-red-800 duration-300 p-2 text-white rounded-md"
                      >
                        حذف الخاصية
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => arrayHelpers.push({ en: "", ar: "" })}
                    className="w-1/4 bg-green-500 hover:bg-green-800 duration-300 p-2 text-white rounded-md"
                  >
                    اضافة خواص جديدة
                  </button>
                </div>
              )}
            />

            <FieldArray
              name="technicalProperties"
              render={(arrayHelpers) => (
                <div className="mt-8">
                  {values.technicalProperties.map((friend, index) => (
                    <Fragment key={index}>
                      <div className="row">
                        <h3 className="text-center text-2xl my-3">
                          {index + 1}
                        </h3>
                        <Field name={`technicalProperties[${index}].name.en`}>
                          {({
                            field, // { name, value, onChange, onBlur }
                            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                            meta,
                          }) => (
                            <input
                              type="text"
                              placeholder="ادخال اسم الخاصية باللغة الانجليزية  "
                              {...field}
                              className={
                                meta.touched && meta.error
                                  ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                                  : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                              }
                            />
                          )}
                        </Field>
                        <Field name={`technicalProperties[${index}].name.ar`}>
                          {({
                            field, // { name, value, onChange, onBlur }
                            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                            meta,
                          }) => (
                            <input
                              type="text"
                              placeholder="ادخال اسم الخاصية باللغة العربية"
                              {...field}
                              className={
                                meta.touched && meta.error
                                  ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                                  : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                              }
                            />
                          )}
                        </Field>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                          className="w-1/4 bg-red-500 hover:bg-red-800 duration-300 p-2 text-white rounded-md"
                        >
                          حذف الخاصية
                        </button>
                      </div>
                      <div className="row">
                        <h3 className="text-center text-2xl my-3">
                          {index + 1}
                        </h3>
                        <Field name={`technicalProperties[${index}].value.en`}>
                          {({
                            field, // { name, value, onChange, onBlur }
                            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                            meta,
                          }) => (
                            <input
                              type="text"
                              placeholder="ادخال قيمة الخاصية بالانجليزية"
                              {...field}
                              className={
                                meta.touched && meta.error
                                  ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                                  : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                              }
                            />
                          )}
                        </Field>
                        <Field name={`technicalProperties[${index}].value.ar`}>
                          {({
                            field, // { name, value, onChange, onBlur }
                            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                            meta,
                          }) => (
                            <input
                              type="text"
                              placeholder="ادخال قيمة الخاصية بالعربية"
                              {...field}
                              className={
                                meta.touched && meta.error
                                  ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                                  : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                              }
                            />
                          )}
                        </Field>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                          className="w-1/4 bg-red-500 hover:bg-red-800 duration-300 p-2 text-white rounded-md"
                        >
                          حذف الخاصية
                        </button>
                      </div>
                    </Fragment>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({
                        name: { ar: "", en: "" },
                        value: { ar: "", en: "" },
                      })
                    }
                    className="w-1/4 bg-green-500 hover:bg-green-800 duration-300 p-2 text-white rounded-md"
                  >
                    اضافة خواص تقنية جديدة
                  </button>
                </div>
              )}
            />
            <button
              type="submit"
              className="mx-auto p-3 px-12 bg-green-700 text-white rounded-md block mt-8 "
              disabled={!addBtn ? true : false}
            >
              {!addBtn ? "جارى رفع المنتج" : "رفع المنتج"}
            </button>
          </Form>
        )}
      />
    </div>
  );
};

export default AddProduct2;
