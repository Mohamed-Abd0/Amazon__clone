import { Grid, Box, Checkbox, Divider, Typography } from "@mui/material";
import React from "react";
import UnderLineSpan from "../../ReuseableComponets/UnderLineSpan";
import { useDispatch , useSelector } from "react-redux";
import { deleteFromCart, addToSavedItems , selectItem } from "../../../Store/CartSlice";
import SelectItem from "./productData/SelectItem";
import { makeStyles } from "@material-ui/core/styles";
import words from "../../../leng.json"

const useStyles = makeStyles(() => ({
  container: {
    justifyContent: "space-between",
    marginTop: "20px",
    fontSize: "14px",
  },

  checkBox:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img:{
    width:"220px",
    flexGrow:"grow",
  }
}));




const ProductData = ({ item }) => {
  const classes = useStyles();

  const lengActive = useSelector(({leng})=> leng);
  const activeWords = words[`${lengActive.lang}`]

  // translated words 
  const inStock = activeWords.inStock;
  const eligibleForFree = activeWords.eligibleForFree;
  const delet = activeWords.delete;
  const saveForLater = activeWords.saveForLater;
  const share = activeWords.share;
  const EGP = activeWords.EGP;


  // ____ Product Data ____
  const mainImg = item.mainImg;
  const minTitle = item.minTitle[`${lengActive.lang}`];
  const price = item.price;
  const selectItemStatus = item.selected;



  const dispatch = useDispatch();

  const deleteFromCartHandler = () => {
    dispatch(deleteFromCart(item));
  };

  const savedLaterHandler = () => {
    dispatch(addToSavedItems(item));
    dispatch(deleteFromCart(item));
  };

  const selecHandler = () => { 

    const selectedStatus = !item.selected
    console.log(selectedStatus);
    dispatch(selectItem({...item, selected: selectedStatus}));
  };


  return (
    <Grid container className={classes.container} spacing={1} sx={{bgcolor: "#fff"}}>
      {/* image */}
      <Grid item className={classes.imageContainer}  container xs={12} md={3}>
        <Grid item className={classes.checkBox} sx={2}>
          <Checkbox
            checked={selectItemStatus}
            onChange={selecHandler}
            color="default"
            sx={{
              margin: "0",
              padding: "0",
              "&.Mui-checked": {
                color: "#007185",
              },
            }}
          />
        </Grid>
        <Grid item className={classes.img} sx={10}>
          <img  src={mainImg} alt="" />
        </Grid>
      </Grid>

      {/* details */}
      <Grid item  xs={12} md={7}>
        {/* ____TiTle____ */}
        <Box className="flex justify-between maxmd:mt-4 overflow-hidden " >
          <Typography
            variant="subTitle1"
            sx={{ fontSize: "18px", lineHeight: "1.3rem" }}
          >
            {minTitle}
          </Typography>
        </Box>

        {/* ____Stock____ */}
        <Box sx={{ fontSize: "12px", lineHeight: "16px", margin: "8px 0" }}>
          <Typography variant="caption" sx={{ color: "#007600" }}>
            {inStock}
          </Typography>
          <br />
          <Typography variant="caption" sx={{ color: "#565959" }}>
            {eligibleForFree}
          </Typography>
        </Box>

        <div className="flex flex-row flex-wrap space-x-5 items-center ">
          <div className="relative">
            <SelectItem
              product={item}
              deleteFromCartHandler={deleteFromCartHandler}
            />
          </div>

          <Divider orientation="vertical" flexItem />

          <UnderLineSpan actionFun={deleteFromCartHandler}>
            {delet}
          </UnderLineSpan>

          <Divider orientation="vertical" flexItem />

          <UnderLineSpan actionFun={savedLaterHandler}>
            {saveForLater}
          </UnderLineSpan>

          <Divider orientation="vertical" flexItem />

          <UnderLineSpan>{share}</UnderLineSpan>
        </div>
      </Grid>

      {/* Price */}
      <Grid item xs={12} md={2} sx={{textAlign: "end"}}>
        <Typography
          variant="subTitle2"
          sx={{ fontSize: "18px", fontWeight: "600"  }}
        >
           {price} { EGP}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductData;
