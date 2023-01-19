import {React, useState, useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';
import Container from '@mui/material/Container';
import { Box, Grid, Card, CardMedia, CardContent, CardActions, Typography} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import { Rating } from "@material-ui/lab";
import LinesEllipsis from 'react-lines-ellipsis'
import useStyles from "./styles";
import { db } from '../../firebase';
import {collection, getDocs, query, where} from "firebase/firestore";
import { images } from './SliderImages';

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
  const productsCollectionRef = collection(db, "products");
  const categoryType = useParams();
  const res = [];
  //     *********** API *******************
  // const getProduct = async () => {
  //    const response = await fetch (`https://fakestoreapi.com/products`)
  //    const data = await response.json();
  //    setProduct(data);
  //    console.log(data);
  // };
  // useEffect(() => {
  //   getProduct();
  //   } , []);   

    // ********** Firebase Setup ***************
    

    // useEffect (() => {
    //   const getProducts = async () => {
    //     const data = await getDocs(productsCollectionRef);
    //     console.log("data", data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    //     setProduct(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    //   }
    //   getProducts();
    // }, []);
 
  console.log("******", categoryType.type)
  // ********** Firebase query ***************

  
    const getProducts = async () => {
     
      const q = query(productsCollectionRef, where("category", "==", categoryType.type));
      const querySnapshot = await getDocs(q);
      // console.log(querySnapshot.docs)
      querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
        // console.log(doc.data())
        
        res.push({ ...doc.data(), id: doc.id}) 
        setProduct(res);
      });
        
    return res
   
  } 
  
    useEffect (() => {
    getProducts();
  }, [categoryType])
  
 console.log(res)
    
    return (
      <>
      {/* <div  className='home-image'>
       <Carousel animation="slide" autoPlay={true} cycleNavigation timeout={30}>
            { 
              images.map( (image) => <Item key={image.id} item={image} /> )
            }
        </Carousel>
        </div> */}

        <Typography variant="h2"   align='center' style={{fontSize: 20}}>
          {categoryType.type}
        </Typography>
        <Typography variant="h1"   align='center' style={{fontSize: 20}}>
           Featured categories
        </Typography>
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
                          {product.count} reviews
                        </Typography>
                        <Typography gutterBottom variant="body1" component="h2"  align="left"  >
                          <Box  sx={{ span: { fontSize: "12px" }, display: "flex"}}>
                            <span style={{ marginLeft: "10px" }}> $</span>
                            <Typography variant="h4" sx={{ mt: "-3px" }}>
                              {Math.floor(product.price)}
                            </Typography>
                            <span>{(product.price - Math.floor(product.price)).toFixed(2) * 100}</span>
                          </Box>
                        </Typography>
                         {product.stock < 10 &&
                        <Typography  style={{color: 'red', fontWeight: 'bold', fontSize: 12}}>
                          Only {product.stock} left in stock.
                        </Typography>
                         }
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



