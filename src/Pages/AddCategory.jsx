import React, { useState } from "react";
import { Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
const formScame = Yup.object({
  category: Yup.object().shape({
    ar: Yup.string().required("Required").min(3),
    en: Yup.string().required("Required").min(3),
  }),
});

export const AddCategory = () => {
  const [addBtn, setAddBtn] = useState(true);
  async function addCategoryToFirebase(cat) {
    const washingtonRef = doc(db, "category", "IjcIcmJzA3qlFATugZm0");
    await updateDoc(washingtonRef, {
      data: arrayUnion(cat),
    });
  }

  return (
    <div>
      <Formik
        initialValues={{ category: { ar: "", en: "" } }}
        validationSchema={formScame}
        onSubmit={(values, { resetForm }) =>
          setTimeout(() => {
            setAddBtn(false);
            addCategoryToFirebase(values.category).then((sec) => {
              resetForm();
              alert("تم اضافة القسم بنجاح");
              setAddBtn(true);
            });
          }, 0)
        }
        render={({ values }) => (
          <Form>
            <div className="row">
              <Field name="category.en">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <input
                    type="text"
                    placeholder="ادخال اسم القسم  باللغة الانجليزية"
                    {...field}
                    className={
                      meta.touched && meta.error
                        ? "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full error-Input "
                        : "border border-[#eee] p-2 px-8 rounded-lg outline-none w-full"
                    }
                  />
                )}
              </Field>
              <Field name="category.ar">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <input
                    type="text"
                    placeholder="ادخال اسم القسم  باللغة العربية"
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
            <button
              type="submit"
              className="mx-auto p-3 px-12 bg-green-700 text-white rounded-md block mt-8 "
              disabled={!addBtn ? true : false}
            >
              {!addBtn ? "جارى اضافة القسم" : "اضافة قسم"}
            </button>
          </Form>
        )}
      />
    </div>
  );
};
