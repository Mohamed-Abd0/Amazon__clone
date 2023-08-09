import { Grid, Pagination, PaginationItem } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductDetailsCard from "../../Components/ReuseableComponets/ProductDetailsCard";
// import useStyles from "../../Pages/Home/styles";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import words from "../../leng.json";
const useStyles = makeStyles((theme) => ({
  pagination: {
    border: "1px solid #ccc", // set the border style and color
    borderRadius: theme.shape.borderRadius,
    "& .MuiPagination-root": {
      // border: "thick double #32a1ce"
    },

    "& .Mui-selected": {
      outline: "1px solid #808080",
      backgroundColor: "red",
      borderRadius: "0",
    },
    "& .MuiPaginationItem-page:hover": {
      backgroundColor: theme.palette.grey[300],
    },
    "& .MuiPaginationItem-page.Mui-selected:hover": {
      borderRadius: "0",
    },
    "& .MuiPaginationItem-ellipsis": {
      color: theme.palette.text.primary,
    },
    "& .Mui-disabled": {
      color: theme.palette.text.disabled,
    },
    "& .MuiPaginationItem-root": {
      height: 48, // set the height of the pagination item
      width: 48, // set the width of the pagination item
      margin: "0 1px", // add some margin between the items
      "&:hover": {
        backgroundColor: "#f5f5f5", // set the background color for the hover effect
        borderRadius: "0",
      },
    },
  },
}));

const PaginatedItems = ({ itemsPerPage, data }) => {
  const classes = useStyles();
    // Active lang
    const lengActive = useSelector((state) => state.leng);
    const activeLeng = lengActive.lang;
    const langWordsActive = words[`${lengActive.lang}`];
  const [currentPage, setCurrentPage] = useState(1);
  // Calculate the total number of pages:
  const totalData = data.length;
  const totalPages = Math.ceil(totalData / itemsPerPage);
  console.log({ totalData }, { totalPages });
  // Filter the products to display only those that correspond to the current page:
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      <Container maxWidth="xl">
        <Grid container justify="center" spacing={4}>
          {currentProducts.map((product) => {
            return (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Link
                  to={"/product/" + product.id}
                  style={{ textDecoration: "none" }}
                >
                  <ProductDetailsCard product={product} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Box
        justifyContent={"center"}
        alignment="center"
        display="flex"
        sx={{ margin: "20px 0px" }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          showFirstButton={true}
          showLastButton={true}
          onChange={(event, page) => setCurrentPage(page)}
          classes={{ root: classes.pagination }}
          renderItem={(item) => {
            if (item.type === "previous") {
              return (
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: currentPage === 1 ? "not-allowed" : "pointer",
                    color: currentPage === 1 ? "#808080" : "#000",
                    fontSize: "14px",
                    fontWeight: "bold",
                    outline: "none",
                    paddingLeft: '20px',
                    paddingRight: '20px'
                  }}
                >
                  {langWordsActive.previous}
                </button>
              );
            } else if (item.type === "next") {
              return (
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor:
                      currentPage === totalPages ? "not-allowed" : "pointer",
                    color: currentPage === totalPages ? "#808080" : "#000",
                    fontSize: "14px",
                    fontWeight: "bold",
                    outline: "none",
                    paddingLeft: '20px',
                    paddingRight: '20px'
                  }}
                >
                  {langWordsActive.next}
                </button>
              );
            } else {
              return (
                <PaginationItem
                  component={"button"}
                  onClick={() => setCurrentPage(item.page)}
                  selected={currentPage === item.page}
                  {...item}
                >
                  {item.page}
                </PaginationItem>
              );
            }
          }}
        />
      </Box>
    </>
  );
};

export default PaginatedItems;
