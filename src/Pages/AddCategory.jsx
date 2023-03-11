import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
const formScame = Yup.object({
  category: Yup.string().required("Required").min(3),
});
export const AddCategory = () => {
  const formik = useFormik({
    initialValues: {
      category: "",
    },
    validationSchema: formScame,
    onSubmit: (values, { resetForm }) => {
      const washingtonRef = doc(db, "category", "IjcIcmJzA3qlFATugZm0");
      async function addCategoryToFirebase() {
        await updateDoc(washingtonRef, {
          data: arrayUnion(values.category),
        });
      }

      addCategoryToFirebase().then((sec) => {
        resetForm();
        alert("تم اضافة القسم بنجاح");
      });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <input
          type="text"
          placeholder="ادخل اسم القسم المراد اضافته"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          className={
            formik.errors.category && formik.touched.category
              ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full placeholder:text-2xl error-Input"
              : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full placeholder:text-2xl"
          }
        />
      </div>
      <button
        type="submit"
        className="mx-auto p-3 px-12 bg-green-700 text-white rounded-md block mt-8 "
      >
        اضافة قسم
      </button>
    </form>
  );
};
