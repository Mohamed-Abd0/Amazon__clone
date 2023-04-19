import { Box, Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import words from "../../leng.json";
import useStyles from '../../Pages/Home/styles';

const TodaysDealsProductDetailsCard = ({product}) => {
  console.log({product})
  const classes = useStyles();
  const lengActive = useSelector((state) => state.leng);
  const activeLeng = lengActive.lang;
  const langWordsActive = words[`${lengActive.lang}`];
  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product?.mainImg} 
          alt={product?.minTitle[activeLeng]}
          title={product?.minTitle[activeLeng]}
        />
        {/* <img src={product.mainImg} /> */}
        <CardContent align="left">
          <Typography style={{ marginBottom: 9 }}>
            <span
              style={{
                background: "#CC0C39",
                boxShadow: "0 2px 5px 0 hsl(180deg 5% 84% / 50%)",
                color: "white",
                fontSize: 12,
                fontWeight: "bold",
                padding: 5,
                marginRight: 5,
              }}
            >
              {langWordsActive.discount} {`${product.discountValue}%`}
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
            <Typography variant="subtitle2">
              {product.minTitle[activeLeng]}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default TodaysDealsProductDetailsCard;
