import { React, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { Grid, Typography, Button, Box } from "@material-ui/core";
import "react-loading-skeleton/dist/skeleton.css";
import useStyles from "../../Pages/Home/styles";
import menClothes from "../../assets/men-clothes.jpg";
import KitchenAppliances from "../../assets/Kitchen-appliances.jpg";
import makeup from "../../assets/makeUp.jpg";
import cameraAccessories from "../../assets/cameraAccessories.jpg";
import cameraDeals from "../../assets/cameraDeals.jpg";
import kitchen from "../../assets/Kitchen.jpg";
import homeTools from "../../assets/toolsHome.jpg";
import TodaysDealsCard from "../ReuseableComponets/TodaysDealsProductDetailsCard";
import { useSelector, useDispatch } from "react-redux";
import words from "../../leng.json";
import GridSkeleton from "../ReuseableComponets/GridSkeleton";
// Active Language selector
import { getactiveLeng } from "../../Store/nav_slice/lengRedusers";
import HomePageCarousel from "../ReuseableComponets/HomePageCarousel";
import { suggestProductsBP } from "../../Constants/Constants";
import MainSwiperContainer from "../ReuseableComponets/MainSwiperContainer";
import CategoryDetails from "../ReuseableComponets/CategoryDetails";
import ProductDetailsCard from "../ReuseableComponets/ProductDetailsCard";

const Category = () => {
  const classes = useStyles();
  const [products, setProduct] = useState([]);
  const [randomDoc, setRandomDoc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // Active lang
  const dispatch = useDispatch();
  const lengActive = useSelector((state) => state.leng);
  const activeLeng = lengActive.lang;
  console.log("activeLeng", activeLeng);
  const langWordsActive = words[`${lengActive.lang}`];

  const getProducts = async () => {
    try {
      await getDocs(collection(db, "products")).then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProduct(products);
        const randomIndex = Math.floor(Math.random() * products.length);
        setRandomDoc(products[randomIndex]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // setIsLoading(true);
      setTimeout(() => {
      dispatch(getactiveLeng());
      getProducts();
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <GridSkeleton />
        </>
      ) : (
        <>
          <HomePageCarousel />
          {/* Main Container */}
          <Container maxWidth="l" style={{ background: "#E2E6E6" }}>
            {/* Main Grid */}
            <Grid container justify="center" spacing={2}>
              {/* Gategories Grid */}
              <Grid className="main-grid" container spacing={2}>
                {/*  MakeUp */}
                <CategoryDetails
                  name={langWordsActive.makeUp}
                  image={makeup}
                  title={`${langWordsActive.makeUp} | ${langWordsActive.newArrivals}`}
                />

                {/*  Men's fashion */}
                <CategoryDetails
                  name={langWordsActive.menFasion}
                  image={menClothes}
                  title={`${langWordsActive.menFasion} | ${langWordsActive.discount}  70%`}
                />

                {/* Save big with coupons */}
                <CategoryDetails
                  name={langWordsActive.computer}
                  image={KitchenAppliances}
                  title={`${langWordsActive.kitchenAppliances} | ${langWordsActive.installments}`}
                />
                {/* Display a random product */}
                {randomDoc && (
                  <Grid item key={randomDoc?.id} xs={12} sm={6} md={3} sx={{ backgroundColor: "white" }}>
                    <Link to={"/product/" + randomDoc.id}>
                      <ProductDetailsCard product={randomDoc} />
                      {/* copoun  */}
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignSelf: "center",
                          backgroundColor: "white",
                        }}
                      >
                        {randomDoc.discount === true && (
                          <Button
                            className="coupon"
                            style={{
                              backgroundColor: "#E57A00",
                              width: 120,
                              height: 30,
                              justifyContent: "center",
                              borderRadius: "4px",
                              fontSize: 10,
                              textAlign: "center",
                              fontWeight: "bold",
                              color: "white",
                              // paddingTop: '20px',
                              marginRight: 40,
                              marginBottom: "20px",
                            }}
                          >
                            {langWordsActive.EGP}
                            {randomDoc.discountValue} {langWordsActive.off}{" "}
                            {langWordsActive.copoun}
                          </Button>
                        )}
                        <Button
                          variant="contained"
                          size="small"
                          style={{
                            background: "#ffa41c",
                            border: "1px solid #ff8f00",
                            borderRadius: "20px",
                            boxShadow: "0 2px 5px 0 hsl(180deg 5% 84% / 50%)",
                            color: "#0f1111",
                            // textAlign: 'center'
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          {langWordsActive.seeMore}
                        </Button>
                      </Box>
                    </Link>
                  </Grid>
                )}
                {/* Security Camera */}
                <CategoryDetails
                  name={" لابتوب"}
                  image={cameraDeals}
                  title={`${langWordsActive.securityCameras} |
                  ${langWordsActive.starting} 250 ${langWordsActive.EGP}`}
                />
                {/* Music Instruments */}
                <CategoryDetails
                  name={" لابتوب"}
                  image={homeTools}
                  title={`${langWordsActive.musicalInstruments} |
                  ${langWordsActive.WideSelection}`}
                />
                {/* Camera Accessories */}
                <CategoryDetails
                  name={" لابتوب"}
                  image={cameraAccessories}
                  title={`${langWordsActive.cameraAccessories} |
                  ${langWordsActive.discount} 10%`}
                />
                {/* Kitchen essentials  */}
                <CategoryDetails
                  name={" لابتوب"}
                  image={kitchen}
                  title={`${langWordsActive.KitchenEssentials} |
                  ${langWordsActive.discount} 15%`}
                />
              </Grid>
              {/* Today's Deals Using Swiper MUI */}
              <Grid
                className={classes.paper}
                item
                xs={12}
                style={{ background: "#fff", maxHeight: "auto" }}
              >
                <Typography className={classes.cardHeader}>
                  {langWordsActive.todaysDeals}
                </Typography>
                <MainSwiperContainer breakPoints={suggestProductsBP}>
                  {products.map((product) => (
                    <Box key={product.id}>
                      <Link  to={"/product/" + product.id}>
                        <TodaysDealsCard product={product} />
                      </Link>
                    </Box>
                  ))}
                </MainSwiperContainer>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
};

export default Category;
