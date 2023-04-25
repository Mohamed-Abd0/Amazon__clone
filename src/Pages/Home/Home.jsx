import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import words from "../../leng.json";
import Footer from "../../Components/Footer/Footer";
import ProductDetailsCard from "../../Components/ReuseableComponets/ProductDetailsCard";
import { getProductsByGategory } from "../../Firebase-APIS/FirebaseFunctions";
const Home = () => {
  const [products, setProduct] = useState([]);
  const categoryType = useParams();
  // Active lang
  const lengActive = useSelector((state) => state.leng);
  const activeLeng = lengActive.lang;
  const langWordsActive = words[`${lengActive.lang}`];

  useEffect(() => {
    getProductsByGategory(`category.${activeLeng}`, categoryType.type).then(
      (data) => {
        setProduct(data);
      }
    );
  }, [categoryType]);

  // console.log("queryResults", queryResults);

  return (
    <>
      {products.length === 0 ? (
        <>
          <Typography
            variant="h1"
            align="center"
            style={{ fontSize: 30, paddingTop: 50, fontWeight: "bold" }}
          >
            {categoryType.type}
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
            {categoryType.type}
          </Typography>
          <Container maxWidth="xl">
            <Grid container justify="center" spacing={4}>
              {products.map((product) => {
                return (
                  <Grid
                    className="main-grid"
                    item
                    key={product.id}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                  >
                    <Link
                      to={"/product/" + product.id}
                      style={{ textDecoration: "none" }}
                    >
                      <ProductDetailsCard product={product} />
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </>
      )}

      <Footer />
    </>
  );
};
export default Home;
