import React from "react";
import { Breadcrumbs, Link, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import words from "../../leng.json";

const Breadcrumb = () => {
  const { product } = useSelector(({ ProductSlice }) => ProductSlice);
  const lengActive = useSelector(({ leng }) => leng);
  const activWrods = words[`${lengActive.lang}`];

  const home = activWrods.home;
  const category = product.category[`${lengActive.lang}`];
  // const title = product.minTitle[`${lengActive.lang}`];

  return (
    <Breadcrumbs
      sx={{ fontSize: "15px" , my: "10px"}}
      separator="›"
      aria-label="breadcrumb"
    >
      <Link
        underline="hover"
        key="1"
        color="inherit"
        href="/"
        itemProp="item"
        fontSize="inherit"
      >
        {home}
      </Link>
      <Link
        underline="hover"
        key="2"
        color="inherit"
        fontSize="inherit"
        href={`/category/${category}`}
      >
        {category}
      </Link>
      {/* <Typography color="text.primary" fontSize="inherit">
        {title}
      </Typography> */}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
