import React from "react";
import { useSelector } from "react-redux";
import { Box, Stack , Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    gap: "10px",
    lineHeight: "20px",
    fontSize: "14px !important",
  },
  title: {
    fontWeight: "700 !important",
  },
  value: {
    fontWeight: "300",
  }
}));



const ProductTable = () => {
  const { product } = useSelector(({ ProductSlice }) => ProductSlice);
  const lengActive = useSelector(({ leng }) => leng);
  const technicalProperties = product.technicalProperties;
  const classes = useStyles();

  return (
    <Box>
      <Stack sx={{ pt: 1 }}>
        {technicalProperties.map((item , index) => (
            <Box className={classes.root} item key={index}>
              <Typography variant="body1" className={classes.title}>
                {item.name[`${lengActive.lang}`]}:
              </Typography>
              <Typography variant="body1" className={classes.value}>
                {item.value[`${lengActive.lang}`]}
              </Typography>
            </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ProductTable;
