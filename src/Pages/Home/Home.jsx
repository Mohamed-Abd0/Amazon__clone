import { React, useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import {Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import words from "../../leng.json";
import { getProductsByGategory } from "../../Firebase-APIS/FirebaseFunctions";
import PaginatedItems from "../../Components/ReuseableComponets/PaginatedItems";
const Home = () => {
  const [products, setProduct] = useState([]);
  const categoryType = useParams();
  
  // Active lang
  const lengActive = useSelector((state) => state.leng);
  const activeLeng = lengActive.lang;
  const langWordsActive = words[`${lengActive.lang}`];
  console.log(`categoryType.${activeLeng}`)
  useEffect(() => {
    getProductsByGategory(`category.${activeLeng}`, categoryType.type).then(
      (data) => {
        setProduct(data);
      }
    );
  }, [categoryType]);


  return (
    <>
      {products.length === 0 ? (
        <>
          <Typography
            variant="h1"
            align="center"
            style={{ fontSize: 30, paddingTop: 50, fontWeight: "bold" }}
          >
            {`${categoryType.type}`}
          </Typography>
          <Typography
            variant="h1"
            align="center"
            style={{ fontSize: 30, paddingTop: 50, fontWeight: "bold" }}
          >
            {langWordsActive.noProductsIn} {categoryType.type}
          </Typography>
        </>
      ) : (
        <>
          <Typography
            variant="h1"
            align="center"
            style={{ fontSize: 30, paddingTop: 50, fontWeight: "bold" }}
          >
            {`${categoryType.type}`}
          </Typography>
          <PaginatedItems itemsPerPage={1} data={products} />
        </>
      )}

    </>
  );
};
export default Home;
