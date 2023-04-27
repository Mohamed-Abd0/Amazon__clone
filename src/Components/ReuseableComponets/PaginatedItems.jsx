import { Grid, Pagination, PaginationItem } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import ProductDetailsCard from "../../Components/ReuseableComponets/ProductDetailsCard";
// import useStyles from "../../Pages/Home/styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .Mui-selected": {
      color: "#fff",
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    "& .MuiPaginationItem-page:hover": {
      backgroundColor: theme.palette.grey[300],
    },
    "& .MuiPaginationItem-page.Mui-selected:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    "& .MuiPaginationItem-page": {
      // borderRadius: "0",
    },
    "& .MuiPaginationItem-ellipsis": {
      color: theme.palette.text.primary,
    },
    "& .Mui-disabled": {
      color: theme.palette.text.disabled,
    },
  },
}));

const PaginatedItems = ({itemsPerPage, data}) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  // Calculate the total number of pages:
  const totalData = data.length;
  const totalPages = Math.ceil(totalData / itemsPerPage);
  console.log({totalData}, {totalPages})
  // Filter the products to display only those that correspond to the current page:
  const indexOfLastProduct = currentPage * itemsPerPage;
const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
console.log({currentProducts})
  return (
    <>
      <Container maxWidth="xl">
      <Grid container justify="center" spacing={4}>
      {currentProducts.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Link to={"/product/" + product.id}
                style={{ textDecoration: "none" }}>
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
      onChange={(event, page) => setCurrentPage(page)}
      classes={{ root: classes.root }}
      renderItem={(item) => {
        if (item.type === "previous") {
          return (
            <PaginationItem
              component={"button"}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              {...item}
            >
              Previous
            </PaginationItem>
          );
        } else if (item.type === "next") {
          return (
            <PaginationItem
              component={"button"}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              {...item}
            >
              Next
            </PaginationItem>
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
}

export default PaginatedItems