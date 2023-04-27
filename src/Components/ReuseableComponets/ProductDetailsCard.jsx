import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, CardActions, Typography} from '@material-ui/core';
import { Rating } from "@material-ui/lab";
import LinesEllipsis from 'react-lines-ellipsis'
import useStyles from '../../Pages/Home/styles';
import words from "../../leng.json";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import {useLocation} from 'react-router-dom';
const ProductDetailsCard = ({product}) => {
    const classes = useStyles();
    const lengActive = useSelector((state) => state.leng);
    const activeLeng = lengActive.lang;
    const langWordsActive = words[`${lengActive.lang}`];
    const location = useLocation();
  return (
    <>
      <Card
        className={classes.root}
        style={{
          border: "1px solid #CBCECD",
          backgroundColor: "#FFFFFF",
          height: "100%",
        }}
      >
        <CardMedia
          className={classes.media}
          image={product.mainImg}
          title={product.minTitle[activeLeng]}
        />
        <CardContent align="left">
          <div className={classes.cardContent}>
            <Typography
              gutterBottom
              component="h2"
              align="left"
              overflow="hidden"
            >
              <LinesEllipsis
                text={product?.minTitle[activeLeng]}
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
              value={product?.reting.mainRating}
              precision={0.5}
              readOnly
            ></Rating>
            {product.count}
          </Typography>
          <Typography gutterBottom variant="body1" component="h2" align="left">
            <Box sx={{ span: { fontSize: "12px" }, display: "flex" }}>
              <span style={{ marginLeft: "10px" }}> {langWordsActive.EGP}</span>
              <Typography variant="h4" sx={{ mt: "-3px" }}>
                {Math.floor(product.price)}
              </Typography>
              <span>
                {(product.price - Math.floor(product.price)).toFixed(2) * 100}
              </span>
            </Box>
          </Typography>
          {product.count < 10 && (
            <Typography
              style={{ color: "red", fontWeight: "bold", fontSize: 12 }}
            >
              {langWordsActive.only} {product.count}{" "}
              {langWordsActive.leftInStock}.
            </Typography>
          )}
        </CardContent>
        <CardActions className={classes.cardActions}>
          {/* <AddShoppingCartIcon /> */}
        </CardActions>
        {location.pathname === "/" && product.discount === true && (
          <>
              <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignSelf: "center",
                          backgroundColor: "white",
                        }}
                      >
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
              {product.discountValue} {langWordsActive.off}{" "}
              {langWordsActive.copoun}
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
          </>
        )}
      </Card>
    </>
  );
};

export default ProductDetailsCard;
