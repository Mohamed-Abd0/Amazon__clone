import {React, useState, useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';
import Container from '@mui/material/Container';
import { Box, Grid, Card, CardMedia, CardContent, CardActions, Typography} from '@material-ui/core';
import { Rating } from "@material-ui/lab";
import LinesEllipsis from 'react-lines-ellipsis'
import useStyles from "./styles";
import { db } from '../../firebase';
import {collection, getDocs, query, where} from "firebase/firestore";

import {useSelector } from 'react-redux';
import words from "../../leng.json";
import Footer from '../../Components/Footer/Footer';
import ProductDetailsCard from '../../Components/ReuseableComponets/ProductDetailsCard';


const Home = () => {
  
  const [products, setProduct] = useState([]);
  const productsCollectionRef = collection(db, "products");
  const categoryType = useParams();
  const queryResults = [];
  console.log(categoryType.type)
   // Active lang
   const lengActive = useSelector((state) => state.leng);
   const activeLeng = lengActive.lang;
   const langWordsActive = words[`${lengActive.lang}`];

  // ********** Firebase query ***************
    const getProducts = async () => {
      const q = query(productsCollectionRef, where(`category.${activeLeng}`, "==", categoryType.type));
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
        <Container  maxWidth="xl"> 
          <Grid container justify='center' spacing={4}>
          {products.map((product) => {
            return (
                <Grid  className='main-grid' item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Link to={'/product/' + product.id}  style={{textDecoration: 'none'}}>
                    <ProductDetailsCard 
                    product={product}/>
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