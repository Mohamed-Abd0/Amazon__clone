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

import { useDispatch, useSelector } from 'react-redux';
import words from "../../leng.json";
import Footer from '../../Components/Footer/Footer';


const Home = () => {
  const classes = useStyles();
  const [products, setProduct] = useState([]);
  const productsCollectionRef = collection(db, "products");
  const categoryType = useParams();
  const queryResults = [];
   // Active lang
   const lengActive = useSelector((state) => state.leng);
   const activeLeng = lengActive.lang;
  //  console.log("activeLeng", activeLeng);
  //  const langWordsActive = words[`${lengActive.lang}`];

  // ********** Firebase query ***************
    const getProducts = async () => {
      const q = query(productsCollectionRef, where("category", "array-contains", categoryType.type));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        queryResults.push({ ...doc.data(), id: doc.id}) 
        setProduct(queryResults);
        });  
        console.log("query", queryResults)
      return queryResults
    } 
  
    useEffect (() => {
    getProducts();
  }, [categoryType])
  
 console.log("queryResults", queryResults)
    
    return (
      <>
       
        <Typography variant="h1"   align='center' style={{fontSize: 30, paddingTop: 50, fontWeight: 'bold'}}>
          {categoryType.type}
        </Typography>
        {/* <Typography variant="h1"   align='center' style={{fontSize: 20, paddingBottom: 50}}>
          Featured categories
        </Typography> */}
        <Container  maxWidth="xl"> 
          <Grid container justify='center' spacing={4}>
          {products.map((product) => {
            return (
                <Grid  className='main-grid' item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Link to={'/product/' + product.id}  style={{textDecoration: 'none'}}>
                  <Card className={classes.root} style={{border: "1px solid #CBCECD", backgroundColor: '#FFFFFF'}}>
                    <CardMedia className={classes.media} image={product.mainImg} title = {product.title} />
                    <CardContent  align= "left" >
                      <div className={classes.cardContent}>
                        <Typography gutterBottom  component="h2"  align="left" overflow="hidden" >
                          <LinesEllipsis
                            text= {product?.minTitle[activeLeng]}
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
                          {product.count} 
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
                        {product.count < 10 &&
                        <Typography  style={{color: 'red', fontWeight: 'bold', fontSize: 12}}>
                          Only {product.count} left in stock.
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
      <Footer/>
      </>
    );
    }
export default Home;