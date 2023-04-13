import React from "react";
import ProductRating from "./ProductRating";
import words from "../../leng.json";
import { useSelector } from "react-redux";
import { Box, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({

  title: {
    lineHeight: "1.3",
  },
  rating: {
    display: "flex",
    columnGap: 2,
    rowGap: 0.5,
    flexWrap: "wrap",
    alignItems: "center",
  },

}));

const ProductTitle = () => {
  console.log("ProductTitle is runing")
  const classes = useStyles();
  const { product } = useSelector(({ ProductSlice }) => ProductSlice);
  const lengActive = useSelector(({ leng }) => leng);
  const activWrods = words[`${lengActive.lang}`];

  const description = product.description[`${lengActive.lang}`];
  const brand = product.brand[lengActive.lang];
  const rating = product.comments.length;

  return (
    <Box>
      <Typography variant="h6" className={classes.title}>
        {description}
      </Typography>
      <Link variant="body2" underline="hover">
        {`${activWrods.brand}: ${brand}`}
      </Link>
      <Box className={classes.rating}>
        <ProductRating max={5} />
        <Link variant="subtitle2" underline="hover" >
          {`${rating} ${activWrods.rating}`}
        </Link>
        <span style={{ margin: "0 5px" }}>|</span>
        <Link variant="subtitle2" underline="hover" >
          {`${0} ${activWrods.askedQuestions}`}
        </Link>
      </Box>
    </Box>
  );
};

export default ProductTitle;
