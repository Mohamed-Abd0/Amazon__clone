import React from "react";
import { Stack, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";

import ProductTitle from "./ProductContent/ProductTitle";
import ProductPrice from "./ProductContent/ProductPrice";
import ProductTable from "./ProductContent/ProductTable";
import ProductAbout from "./ProductContent/ProductAbout";

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "capitalize",
    "& h6": {
      fontSize: "1.2rem",
      fontWeight: "700",
      [theme.breakpoints.down("md")]: {
        fontSize: "1rem",
        fontWeight: "400",
      },
    },
    "& a": {
      color: theme.palette.text.teal,
    },
    "& a:hover": {
      color: theme.palette.text.darkOrange,
    },
    "& > div": {
      borderBottom: `1px solid ${theme.palette.border.lightGray} !important`,
      paddingBottom: `${theme.spacing(3)} !important`,
    },
  },
}));

const ProductContent = () => {
  console.log("ProductContent is runing");
  const classes = useStyles();

  return (
    <Stack className={classes.root}>
      <ProductTitle />
      <Divider />
      <ProductPrice />
      <Divider />
      <ProductTable />
      <Divider />
      <ProductAbout />
    </Stack>
  );
};

export default ProductContent;
