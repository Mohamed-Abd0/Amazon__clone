import {React, useState, useEffect, useCallback} from 'react';
import {collection, getDocs} from "firebase/firestore";
import { db } from '../../firebase';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import {Grid, Card, CardMedia, CardContent, Typography, Button, Box} from '@material-ui/core';
import {Zoom, Fab, CardActions} from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import LinesEllipsis from 'react-lines-ellipsis';
import { Rating } from "@material-ui/lab";
import Carousel from 'react-material-ui-carousel';
import useStyles from '../../Pages/Home/styles';
import men1 from '../Category/CategoryImages/men1.jpeg';
import decor from '../Category/CategoryImages/decor.jpg';
import coupon from '../Category/CategoryImages/coupon.jpg'
import women from '../Category/CategoryImages/women.jpeg'
import training from '../Category/CategoryImages/training.jpg'
import sport from '../Category/CategoryImages/sport.jpg'
import home from '../Category/CategoryImages/home.jpg'
import deals from '../Category/CategoryImages/deals.jpg'
import { images } from '../../Pages/Home/SliderImages'

// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import  { Navigation, Pagination, Scrollbar, A11y} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Item(props)
{
  return (
      <>
        <img className='carousel-image' src={props.item.image} />
      </>
  )
}

const Category = () => {
  const classes = useStyles();
  const [products, setProduct] = useState([]);
  const [randomDoc, setRandomDoc] = useState([]);
  const productsCollectionRef = collection(db, "products");
  // ScrollTrigger setup
  const trigger = useScrollTrigger({
    // Number of pixels needed to scroll to toggle `trigger` to `true`.
    threshold: 100,
  })
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  // Get data from firebase Database
  useEffect (() => {
      const getProducts = async () => {
        const data = await getDocs(productsCollectionRef);
        // console.log("data", data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        setProduct(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        const documents = data.docs.map((doc) => doc.data());
        const randomIndex = Math.floor(Math.random() * documents.length);
        setRandomDoc(documents[randomIndex]);
      }
        getProducts();
    }, []);
  
  console.log("::::", randomDoc) 
    
  return (
    <>
      {/*  Main Slider */}
      <div className="home-image">
        <Carousel
          animation="slide"
          autoPlay={true}
          cycleNavigation
          timeout={30}
        >
          {images.map((image) => (
            <Item key={image.id} item={image} />
          ))}
        </Carousel>
      </div>

      {/* Main Container */}
      <Container maxWidth="l" style={{ background: "#E2E6E6" }}>
        <Grid container justify="center" spacing={2}>
          <Grid className="main-grid" container spacing={2}>
            {/*  Women's fashion */}
            <Grid className={classes.paper} item xs={4} md={3}>
              <Link to="category/ملابس حريمى">
                <Card className={classes.root}>
                  <Typography className={classes.cardHeader}>
                    Women's fashion
                  </Typography>
                  <img className={classes.media1} src={men1} title="" alt="" />
                  <CardActions className={classes.cardActions}>
                    <Button size="small">See more</Button>
                  </CardActions>
                </Card>
              </Link>
            </Grid>
            {/*  Men's fashion */}
            <Grid className={classes.paper} item xs={4} md={3}>
              <Link to="category/men">
                <Card className={classes.root}>
                  <Typography className={classes.cardHeader}>
                    Men's fashion
                  </Typography>
                  <img className={classes.media1} src={men1} title="" alt="" />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" >
                      see more
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
            {/* Save big with coupons */}
            <Grid className={classes.paper} item xs={4} md={3}>
              <Link to="category/men">
                <Card className={classes.root}>
                  <Typography className={classes.cardHeader}>
                    Save big with coupons
                  </Typography>
                  <img
                    className={classes.media1}
                    src={coupon}
                    title="men"
                    alt="men"
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary"  component="p">
                      see more
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>

            <Grid item key={randomDoc.id} xs={12} sm={6} md={4} lg={3}>
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
                          text={randomDoc.mainTitle}
                          maxLine="2"
                          lineHeight="16"
                          ellipsis="..."
                          trimRight
                          basedOn="letters"
                        />
                      </Typography>
                    </div>
                    <Typography variant="body1" style={{ fontSize: 13 }}>
                      <Rating
                        className={classes.rating}
                        size="small"
                        justify="left"
                        // ratind should come from API
                        value={randomDoc.rate}
                        precision={0.5}
                        readOnly
                      ></Rating>
                      {randomDoc.count} reviews
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
                          {Math.floor(randomDoc.price)}
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
                        fontSize: 11,
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
                      Shop now
                    </Button>
                  </Box>
                </Card>
              </Link>
            </Grid>

            {/*   Deals Card */}
            {products.map((product) => {
              if (product.price === 20) {
                return (
                  <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Link to={"/product/" + product.id}>
                      <Card className={classes.root}>
                        <Typography className={classes.cardHeader}>
                          Today's deals
                        </Typography>
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
                                marginRight: 20,
                              }}
                            >
                              Up to 22% off
                            </span>
                            <span
                              style={{
                                color: "#CC0C39",
                                alignItems: "center",
                                fontSize: 12,
                                textAlign: "center",
                                fontWeight: "bold",
                                padding: 5,
                                marginRight: 20,
                              }}
                            >
                              Top deal
                            </span>
                          </Typography>

                          <Typography variant="body2" overflow="hidden">
                            <LinesEllipsis
                              text={product.mainTitle}
                              maxLine="2"
                              lineHeight="16"
                              fontSize="8"
                              ellipsis="..."
                              trimRight
                              basedOn="letters"
                            />
                          </Typography>
                        </CardContent>
                      </Card>
                    </Link>
                  </Grid>
                );
              }
            })}
            <Grid className={classes.paper} item xs={4} md={3}>
              <Link to="category/decor">
                <Card className={classes.root}>
                  <Typography className={classes.cardHeader}>
                    Shop our Home décor
                  </Typography>
                  <img className={classes.media1} src={decor} title="" alt="" />
                  <CardActions>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      see more
                    </Typography>
                  </CardActions>
                </Card>
              </Link>
            </Grid>

            <Grid className={classes.paper} item xs={4} md={3}>
              <Link to="category/decor">
                <Card className={classes.root}>
                  <Typography className={classes.cardHeader}>
                    Shop easy smart home
                  </Typography>
                  <img className={classes.media1} src={home} title="" alt="" />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      see more
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>

            <Grid className={classes.paper} item xs={4} md={3}>
              <Link to="category/decor">
                <Card className={classes.root}>
                  <Typography className={classes.cardHeader}>
                    Shop our Sports & Outdoors
                  </Typography>
                  <img className={classes.media1} src={sport} title="" alt="" />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      see more
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          </Grid>
          {/*  Swiper MUI */}
          <Grid
            className={classes.paper}
            item
            xs={12}
            style={{ background: "#fff", maxHeight: "auto" }}
          >
            <Typography className={classes.cardHeader}>
              Best Sellers in Clothing & Accessories
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
              {products.map((product) => (
                <SwiperSlide className={classes.swipeSlide} key={product.id}>
                  <Link to={"/product/" + product?.id}>
                    <img
                      className={classes.swiperImage}
                      src={product?.mainImg}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
          <Zoom in={trigger}>
            <Box
              role="presentation"
              // Place the button in the bottom right corner.
              sx={{
                position: "fixed",
                bottom: 32,
                right: 32,
                zIndex: 1,
              }}
            >
              <Fab
                sx={{
                  position: "fixed",
                  bottom: 32,
                  right: 32,
                  zIndex: 1,
                  backgroundColor: "#485768",
                }}
                onClick={scrollToTop}
                size="small"
                aria-label="Scroll back to top"
              >
                <KeyboardArrowUp
                  sx={{
                    fontSize: "bold",
                    color: "white",
                  }}
                />
              </Fab>
            </Box>
          </Zoom>
        </Grid>
      </Container>
    </>
  );
}

export default Category