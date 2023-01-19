import {React, useState, useEffect} from 'react';
import {collection, getDocs, query, where} from "firebase/firestore";
import { db } from '../../firebase';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import {Grid, Card, CardMedia, CardContent, Typography, CardActions} from '@material-ui/core';
import ScrollToTop from "react-scroll-to-top";
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
  const productsCollectionRef = collection(db, "products");
  // console.log("Category", categoryType.type);


   useEffect (() => {
      const getProducts = async () => {
        const data = await getDocs(productsCollectionRef);
        console.log("data", data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        setProduct(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      }
      getProducts();
    }, []);

  return (
   <>

     
  {/*  Main Slider */}
  <div  className='home-image'>
    <Carousel animation="slide" autoPlay={true} cycleNavigation timeout={30}>
        { images.map( (image) => <Item key={image.id} item={image} /> )}
    </Carousel>
    </div>

    <Container  maxWidth= "l" style={{ background: '#E2E6E6'}}> 
      <Grid container justify='center' spacing={2}>
      <Grid  className='main-grid' container spacing={2}>
        <Grid  className={classes.paper} item xs={4} md={3}>
          {/* <Paper className={classes.paper}> */}
          <Link to="category/women"> 
            <Card className={classes.root}>
            <Typography className={classes.cardHeader}   >
               Women's fashion
              </Typography>
              <CardMedia
              className={classes.media1}
              image={women}
              title=""
               />
               <CardContent>
               <Typography variant="body2" color="textSecondary" component="p">
                see more
                </Typography>
               </CardContent>
             </Card>
          </Link>
        </Grid>

        <Grid className={classes.paper} item xs={4} md={3}>
          <Link to="category/men"> 
            <Card className={classes.root}>
              <Typography className={classes.cardHeader}   >
                Men's fashion
              </Typography>
              <CardMedia
                className={classes.media1}
                image={men1}
                title=""
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  see more
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        <Grid  className={classes.paper} item xs={4} md={3}>
            <Link to="category/men"> 
              <Card className={classes.root}>
              <Typography className={classes.cardHeader}   >
              Save big with coupons
              </Typography>
              
              <CardMedia
                className={classes.media1}
                image={coupon}
                title=""
              />
               <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  see more
                </Typography>
               </CardContent>
            </Card>
           </Link>
        </Grid>

        <Grid className={classes.paper} item xs={4} md={3}>
          <Link to="category/men"> 
              <Card className={classes.root}>

              <Typography className={classes.cardHeader}   >
                Today's Deals
              </Typography>
                 
                <CardMedia
                  className={classes.media1}
                  image={deals}
                  title="coupon"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    see more
                  </Typography>
                </CardContent>
            </Card>
            </Link>
        </Grid>

        <Grid className={classes.paper} item xs={4} md={3}>
            <Link to="category/decor">
            <Card className={classes.root}>
            
            <Typography className={classes.cardHeader}   >
                 Shop our Home décor store
              </Typography>
              <CardMedia
                className={classes.media1}
                image={decor} 
                title=""
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  see more
                </Typography>
              </CardContent>
             </Card>
            </Link>
        </Grid>

        <Grid   spacing={3} className={classes.paper} item xs={4} md={3}>
        <Link to="category/decor">
            <Card className={classes.root}>
            <Typography className={classes.cardHeader}   >
               New year, new workout
              </Typography>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                <CardMedia
                  className={classes.media1}
                  image={training} 
                  title=""
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                <CardMedia
                  className={classes.media1}
                  image={training} 
                  title=""
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                <CardMedia
                  className={classes.media1}
                  image={training} 
                  title=""
                />
                </Grid>
                <Grid item xs={6} sm={4}>
                <CardMedia
                  className={classes.media1}
                  image={training} 
                  title=""
                />
                </Grid>
              </Grid> 
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                 shop more
                </Typography>
              </CardContent> 
              {/* <CardActions>
        <Button size="small">shop more</Button>
      </CardActions> */}
             </Card>
            </Link>
        </Grid>

        <Grid  className={classes.paper} item xs={4} md={3}>
        <Link to="category/decor">
            <Card className={classes.root}>
            <Typography className={classes.cardHeader}   >
               Shop our Sports & Outdoors store
              </Typography>
              <CardMedia
                className={classes.media1}
                image={sport} 
                title=""
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  see more
                </Typography>
              </CardContent>
             </Card>
            </Link>
        </Grid>

        <Grid  className={classes.paper} item xs={4} md={3}>
        <Link to="category/decor">
            <Card className={classes.root}>
            
              <Typography className={classes.cardHeader}   >
              Shop easy smart home updates
              </Typography>
              <CardMedia
                className={classes.media1}
                image={home} 
                title=""
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  see more
                </Typography>
              </CardContent>
             </Card>
            </Link>
        </Grid>
      </Grid>
{/*  Swiper MUI */}
  <Grid  className={classes.paper}  item xs={12} style={{ background: '#fff', maxHeight: 'auto'}}>
  <Typography className={classes.cardHeader} >
     Best Sellers in Clothing & Accessories
  </Typography>
    <Swiper  
      className= {classes.swiper}
      style={{ background: '#fff'}}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      // pagination={{ clickable: false }}
      scrollbar={{ draggable: true }}
      >
      
        {products.map(product => (
            <SwiperSlide  className={classes.swipeSlide}  key={product.id}>
            <Link to={'/product/' + product?.id}>
              <img  className={classes.swiperImage}  src={product?.image} />
              </Link>
              </SwiperSlide>
        ))}
    </Swiper>
    </Grid> 


    <div>
      <div style={{ marginTop: "100vh" }} />
      <ScrollToTop smooth />
    </div>
  </Grid>
</Container>

</>
  )
}

export default Category