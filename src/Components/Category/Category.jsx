import { React, useState, useEffect, useCallback } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import {Grid, Card, CardMedia, CardContent, Typography, Button, Box} from "@material-ui/core";
import "react-loading-skeleton/dist/skeleton.css";
import LinesEllipsis from "react-lines-ellipsis";
import { Rating } from "@material-ui/lab";

import useStyles from "../../Pages/Home/styles";
import menClothes from "../../assets/men-clothes.jpg";
import KitchenAppliances from "../../assets/Kitchen-appliances.jpg";
import makeup from "../../assets/makeUp.jpg";
import cameraAccessories from "../../assets/cameraAccessories.jpg";
import cameraDeals from "../../assets/cameraDeals.jpg";
import kitchen from "../../assets/Kitchen.jpg";
import homeTools from "../../assets/toolsHome.jpg";

import { useSelector, useDispatch } from "react-redux";
import words from '../../leng.json';
import GridSkeleton from "../ReuseableComponets/GridSkeleton";
// Active Language selector
import { getactiveLeng } from '../../Store/nav_slice/lengRedusers';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { style } from "@mui/system";
import BackToTopButton from "../ReuseableComponets/BackToTopButton";
import HomePageCarousel from "../ReuseableComponets/HomePageCarousel";
import Footer from "../Footer/Footer";



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
    const timer = setTimeout(() => {
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
         <HomePageCarousel/>
          {/* Main Container */}
          <Container maxWidth="l" style={{ background: "#E2E6E6" }}>
            <Grid container justify="center" spacing={2}>
              <Grid className="main-grid" container spacing={2}>
                {/*  Women's fashion */}
                <Grid className={classes.paper} item xs={12} sm={6} md={3}>
                  <Link to="category/ملابس حريمى">
                    <Card className={classes.root} style={{ height: "100%" }}>
                      <Typography className={classes.cardHeader}>
                        {langWordsActive.makeUp} | {langWordsActive.newArrivals}
                      </Typography>
                      <img
                        className={classes.media1}
                        src={makeup}
                        title="makeup"
                        alt="makeup"
                      />
                      <CardContent>
                        <Typography variant="caption" color="#007185">
                          {langWordsActive.seeMore}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
                {/*  Men's fashion */}
                <Grid className={classes.paper} item xs={12} sm={6} md={3}>
                  <Link to="category/ملابس رجالى">
                    <Card className={classes.root} style={{ height: "100%" }}>
                      <Typography className={classes.cardHeader}>
                        {langWordsActive.menFasion} | {langWordsActive.discount}{" "}
                        70%
                      </Typography>
                      <img
                        className={classes.media1}
                        src={menClothes}
                        title=""
                        alt=""
                      />
                      <CardContent>
                        <Typography
                          variant="caption"
                          color="#007185"
                          component="p"
                        >
                          {langWordsActive.seeMore}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
                {/* Save big with coupons */}
                <Grid className={classes.paper} item xs={12} sm={6} md={3}>
                  <Link to="category/لابتوب">
                    <Card className={classes.root} style={{ height: "100%" }}>
                      <Typography className={classes.cardHeader}>
                        {langWordsActive.kitchenAppliances} |{" "}
                        {langWordsActive.installments}
                      </Typography>
                      <img
                        className={classes.media1}
                        src={KitchenAppliances}
                        title="men"
                        alt="men"
                      />
                      <CardContent>
                        <Typography
                          variant="caption"
                          color="#007185"
                          component="p"
                        >
                          {langWordsActive.seeMore}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>

                {randomDoc && (
                  <Grid item key={randomDoc?.id} xs={12} sm={6} md={3}>
                    <Link to={"/product/" + randomDoc.id}>
                      <Card className={classes.root}>
                        <CardMedia
                          className={classes.media}
                          image={randomDoc.mainImg}
                          title={randomDoc.title}
                        />
                        <CardContent align="left">
                          <div className={classes.cardContent}>
                            <Typography
                              gutterBottom
                              variant="body2"
                              align="left"
                              overflow="hidden"
                            >
                              <LinesEllipsis
                                text={randomDoc?.minTitle[activeLeng]}
                                maxLine="2"
                                lineHeight="16"
                                ellipsis="..."
                                trimLeft
                                basedOn="letters"
                              />
                              {/* <p>{activeLeng === "ar" ? randomDoc.minTitle.ar : randomDoc.minTitle.en}</p> */}
                            </Typography>
                          </div>
                          <Typography variant="body1" style={{ fontSize: 13 }}>
                            <Rating
                              className={classes.rating}
                              size="small"
                              justify="left"
                              // ratind should come from API
                              value={randomDoc?.rate}
                              precision={0.5}
                              readOnly
                            ></Rating>
                            {randomDoc.count}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body1"
                            component="h2"
                            align="left"
                          >
                            <Box
                              sx={{
                                span: { fontSize: "12px" },
                                display: "flex",
                              }}
                            >
                              <span style={{ marginLeft: "10px" }}> $</span>
                              <Typography variant="h4" sx={{ mt: "-3px" }}>
                                {Math.floor(randomDoc?.price)}
                              </Typography>
                              <span>
                                {(
                                  randomDoc.price - Math.floor(randomDoc.price)
                                ).toFixed(2) * 100}
                              </span>
                            </Box>
                          </Typography>
                          {randomDoc.stock < 10 && (
                            <Typography
                              style={{
                                color: "red",
                                fontWeight: "bold",
                                fontSize: 12,
                              }}
                            >
                              Only {randomDoc.stock} left in stock.
                            </Typography>
                          )}
                        </CardContent>
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignSelf: "center",
                          }}
                        >
                          <Button
                            className="coupon"
                            style={{
                              backgroundColor: "#E57A00",
                              width: 115,
                              height: 26,
                              justifyContent: "center",
                              borderRadius: "4px",
                              fontSize: 10,
                              textAlign: "center",
                              fontWeight: "bold",
                              color: "white",
                              // padding: 0,
                              marginRight: 40,
                              marginBottom: "20px",
                            }}
                          >
                            $25 off coupon
                          </Button>
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
                      </Card>
                    </Link>
                  </Grid>
                )}

                <Grid className={classes.paper} item xs={12} sm={6} md={3}>
                  <Link to="category/decor">
                    <Card className={classes.root} style={{ height: "100%" }}>
                      <Typography className={classes.cardHeader}>
                        {langWordsActive.securityCameras} |{" "}
                        {langWordsActive.starting} 250 {langWordsActive.EGP}
                      </Typography>
                      <img
                        className={classes.media1}
                        src={cameraDeals}
                        title=""
                        alt=""
                      />
                      <CardContent>
                        <Typography
                          variant="subtitle2"
                          color="#007185"
                          component="p"
                        >
                          {langWordsActive.seeMore}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>

                <Grid className={classes.paper} item xs={12} sm={6} md={3}>
                  <Link to="category/decor">
                    <Card className={classes.root} style={{ height: "100%" }}>
                      <Typography className={classes.cardHeader}>
                        {langWordsActive.musicalInstruments} |{" "}
                        {langWordsActive.WideSelection}
                      </Typography>
                      <img
                        className={classes.media1}
                        src={homeTools}
                        title=""
                        alt=""
                      />
                      <CardContent>
                        <Typography
                          variant="subtitle2"
                          color="#007185"
                          component="p"
                        >
                          {langWordsActive.seeMore}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>

                <Grid className={classes.paper} item xs={12} sm={6} md={3}>
                  <Link to="category/decor">
                    <Card className={classes.root} style={{ height: "100%" }}>
                      <Typography className={classes.cardHeader}>
                        {langWordsActive.cameraAccessories} |{" "}
                        {langWordsActive.discount} 10%
                      </Typography>
                      <img
                        className={classes.media1}
                        src={cameraAccessories}
                        title="camera Accessories"
                        alt="camera Accessories"
                      />
                      <CardContent>
                        <Typography
                          variant="subtitle2"
                          color="#007185"
                          component="p"
                        >
                          {langWordsActive.seeMore}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>

                {/* Kitchen essentials  */}
                <Grid className={classes.paper} item xs={12} sm={6} md={3}>
                  <Link to="category/decor">
                    <Card className={classes.root} style={{ height: "100%" }}>
                      <Typography className={classes.cardHeader}>
                        {langWordsActive.KitchenEssentials} |{" "}
                        {langWordsActive.discount} 15%
                      </Typography>
                      <img
                        className={classes.media1}
                        src={kitchen}
                        title=""
                        alt=""
                      />
                      <CardContent>
                        <Typography
                          variant="subtitle2"
                          color="#007185"
                          component="p"
                        >
                          {langWordsActive.seeMore}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
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
                <Swiper
                  className={classes.swiper}
                  style={{ background: "#fff" }}
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={10}
                  slidesPerView={5}
                  navigation
                  // pagination={{ clickable: false }}
                  scrollbar={{ draggable: true }}
                >
                  {products.map((product, index) => {
                    console.log("products", product);
                    if (product.discountValue && product.discountValue <= 10) {
                      return (
                        <SwiperSlide
                          className={classes.swipeSlide}
                          key={product.id}
                        >
                          <Link to={"/product/" + product.id}>
                            <Card className={classes.root}>
                              {/* <Typography className={classes.cardHeader}>
                          {langWordsActive.todaysDeals}
                        </Typography> */}
                              <CardMedia
                                className={classes.media}
                                image={product.mainImg}
                                title={product.title}
                              />
                              <CardContent align="left">
                                <Typography style={{ marginBottom: 9 }}>
                                  <span
                                    style={{
                                      background: "#CC0C39",
                                      boxShadow:
                                        "0 2px 5px 0 hsl(180deg 5% 84% / 50%)",
                                      color: "white",
                                      fontSize: 12,
                                      fontWeight: "bold",
                                      padding: 5,
                                      marginRight: 5,
                                    }}
                                  >
                                    {langWordsActive.discount}{" "}
                                    {`${product.discountValue}%`}
                                  </span>
                                  <span
                                    style={{
                                      color: "#CC0C39",
                                      alignItems: "center",
                                      fontSize: 12,
                                      textAlign: "center",
                                      fontWeight: "bold",
                                      padding: 5,
                                      marginRight: 10,
                                    }}
                                  >
                                    {langWordsActive.deal}
                                  </span>
                                </Typography>

                                <Box
                                  fontSize="10"
                                  component="div"
                                  overflow="hidden"
                                  whiteSpace="pre-line"
                                  textOverflow="ellipsis"
                                  height={70}
                                >
                                  <Typography variant="subtitle2" >
                                    {product.minTitle[activeLeng]}
                                  </Typography>
                                  {/* {product.minTitle[activeLeng]} */}
                                </Box>
                              </CardContent>
                            </Card>
                          </Link>
                        </SwiperSlide>
                      );
                    }
                  })}
                </Swiper>
              </Grid>    
            </Grid>
          </Container>
           {/* Bact To Top button */}
              <BackToTopButton/>
          <Footer/>
        </>
      )}
      
    </>
  );
};

export default Category;
