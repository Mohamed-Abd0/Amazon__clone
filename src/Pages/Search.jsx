import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { and, collection, getDocs, or, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { Rating } from "@material-ui/lab";

export const Search = () => {
  const { cat, text } = useParams();
  const [searchData, setSearchData] = useState([]);
  const activeLang = useSelector((state) => state.leng.lang);
  useEffect(async () => {
    const citiesRef = collection(db, "products");
    text.split(" ").map(async (e) => {
      const q = query(
        citiesRef,
        and(
          or(
            where("minTitle.ar", "array-contains", e),
            where("minTitle.en", "array-contains", e)
          ),
          or(where("category.ar", "==", cat), where("category.en", "==", cat))
        )
      );
      const querySnapshot = await getDocs(q);
      const cityList = querySnapshot.docs.map((doc) => [doc.data(), doc.id]);
      setSearchData(cityList);
    });
  }, [cat, text]);

  return (
    <div className="p-2">
      <div className="bg-white shadow-md p-1">
        اكثر من {searchData.length} نتيجة بحث لـ "{text}"
      </div>

      <div className="">
        {searchData.length == 0 && (
          <p className="text-center text-2xl mt-4">لا توجد منتجات بهذا الاسم</p>
        )}

        <div className="">
          <h3 className="my-4 text-xl font-bold ">النتائج</h3>

          {searchData.map((e) => {
            return (
              <div key={e[1]} className="flex  card gap-4 h-[230px] mb-4">
                <div className="img w-[240px] h-[230px] flex-shrink-0">
                  <Link to={`/product/${e[1]}`}>
                    <img
                      className="w-full h-full"
                      src={e[0].mainImg}
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="content flex flex-col justify-evenly">
                  <Link to={`/product/${e[1]}`}>
                    <h3
                      className="text-ellipsis text-lg hover:text-mainColor duration-150   overflow-hidden line-clamp-2"
                      style={{ webkitBoxOrient: "vertical" }}
                    >
                      {[...e[0].minTitle[`${activeLang}`]].join(" ")}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-2 mt-2 rating">
                    <div>
                      <Rating
                        name="half-rating-read"
                        defaultValue={e[0].reting.mainRating}
                        precision={0.5}
                        readOnly
                        className="text-sm"
                      />
                    </div>
                    <div className="text-[#007185] hover:text-mainColor text-sm">
                      {e[0].comments.length}
                    </div>
                  </div>

                  <h3 className="price mt-2">
                    <sup className="text-xl">$</sup>
                    <span className="text-2xl">{e[0].price}</span>
                  </h3>
                  <h3 className="shipping mt-2 flex items-center gap-2 text-sm">
                    <span className="">
                      {e[0].ShippingFree == "true" ? "التوصيل مجانى" : "150 $"}
                    </span>
                    {e[0].ShippingFree == "false" && (
                      <span className="">التوصيل</span>
                    )}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
