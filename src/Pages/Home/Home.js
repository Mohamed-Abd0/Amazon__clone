import {React, useState, useEffect} from 'react';
// import { commerce } from '../../Library/commerce';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Box, Grid, Card, CardMedia, CardContent, CardActions, Typography} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, getScopedCssBaselineUtilityClass } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Rating } from "@material-ui/lab";
import LinesEllipsis from 'react-lines-ellipsis'
import useStyles from "./styles";
import { db } from '../../firebase';
import {collection, doc, getDocs} from "firebase/firestore";


function Item(props)
{
  return (
      <>
        <img className='carousel-image' src={props.item.image} />
      </>
  )
}

const Home = () => {
  const classes = useStyles();
  const [products, setProduct] = useState([]);

  //   ***** MUI carousel *******
  const images = [
    {
        id: 1,
        image: 'https://m.media-amazon.com/images/I/71a1nX9Kf0L._SX3000_.jpg'
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/71L163zeb-L._SX3000_.jpg"
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/71-y-2g-q9L._SX3000_.jpg"
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/61cSQbI3+mL._SX3000_.jpg"
    }
]
  


    //   *********** commerceJS *******************
  // const getProduct = async () => {

  // const {data} = await commerce.products.list();
  // console.log("data", data)
  // setProduct(data);
   
  // };


    // *********** API *******************
  // const getProduct = async () => {
  //    const response = await fetch (`https://fakestoreapi.com/products`)
  //    const data = await response.json();
  //    setProduct(data);
  //    console.log(data);
  // };


  // useEffect(() => {
  //   getProduct();
  //   } , []);   


  //  Firebase ***************
  const usersCollectionRef = collection(db, "products");

  useEffect (() => {
    const getProducts = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log("data", data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      setProduct(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getProducts();
  }, [])

    
    return (
      <>
      <div  className='home-image'>
      
       <Carousel animation="slide" autoPlay={true} cycleNavigation timeout={30}>
            { 
              images.map( (image) => <Item key={image.id} item={image} /> )
            }
        </Carousel>
        </div>
        <Container  maxWidth="xl"> 
          <Grid container justify='center' spacing={4}>
          {products.map((product) => {
            return (
              
                <Grid   className='main-grid' item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Link to={'/product/' + product.id}  style={{textDecoration: 'none'}}>
                  <Card className={classes.root}>
                    <CardMedia className={classes.media} image={product.image} title = {product.title} />
                    <CardContent  align= "left" >
                      <div className={classes.cardContent}>
                        <Typography gutterBottom  component="h2"  align="left" overflow="hidden" >
                        <LinesEllipsis
                          text= {product.title}
                          maxLine='2'
                          lineHeight='16'
                          
                          ellipsis='...'
                          trimRight
                          basedOn='letters'
                        />
                        </Typography>
                      </div>
                      <Typography variant="body1" style={{fontSize: 13}}> 
                      <Rating className={classes.rating}
                          size="small"
                          justify='left'
                          // ratind should come from API
                          value={product.rate}
                          precision={0.5} 
                          readOnly
                        >
                        </Rating>
                        {product.count} reviews</Typography>
                        <Typography gutterBottom variant="body1" component="h2"  align="left"  >
                        <Box sx={{ fontWeight: 'bold', m: 1 }}> ${product.price}</Box>
                        </Typography>
                        </CardContent>
                         <CardActions  className={classes.cardActions} >
                        {/* <AddShoppingCartIcon /> */}
                    </CardActions>
                   </Card>
                 </Link>
                </Grid>
             );
           })}
       </Grid>

      </Container>
     </>
    );
    }
   
export default Home;



