import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import words from "../../../leng.json";

const useStyles = makeStyles((theme) => ({
  freeReturns: {
    color: theme.palette.text.teal,
    fontWeight: 300,
  },
}));

const SellingInformation = () => {
  const classes = useStyles();
  const lengActive = useSelector(({ leng }) => leng);
  const activWords = words[`${lengActive.lang}`];

  // Translated words
  const freeReturns = activWords.freeReturns;
  const priceIncludeVAT = activWords.priceIncludeVAT;

  return (
    <Stack spacing={0.5}>
      <Box>
        <Typography variant="body2" className={classes.freeReturns}>
          {freeReturns}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" className={classes.priceIncludeVAT}>
          {priceIncludeVAT}
        </Typography>
      </Box>
    </Stack>
  );
};

export default SellingInformation;
