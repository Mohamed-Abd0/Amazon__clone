import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, CardActions, Typography} from '@material-ui/core';
import { Rating } from "@material-ui/lab";
import LinesEllipsis from 'react-lines-ellipsis'
import useStyles from '../../Pages/Home/styles';
import words from "../../leng.json";
import { useSelector } from "react-redux";
const ProductDetailsCard = ({product}) => {
    const classes = useStyles();
    const lengActive = useSelector((state) => state.leng);
    const activeLeng = lengActive.lang;
    const langWordsActive = words[`${lengActive.lang}`];
  return (
    <>
      <Card
        className={classes.root}
        style={{ border: "1px solid #CBCECD", backgroundColor: "#FFFFFF" }}
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
      </Card>
    </>
  );
};

export default ProductDetailsCard;
