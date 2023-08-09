
import { Box, Rating, IconButton } from "@mui/material";
import { useSelector } from "react-redux";



const ProductRating = ({ max }) => {
  

  const {product} = useSelector(({ProductSlice}) => ProductSlice);

  let mainRating = product.reting.mainRating;

  

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Rating
        sx={{ label: { color: "background.secondary" } }}
        name="read-only"
        readOnly
        value={mainRating}
        max={max}
        precision={0.1}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
        size="small"
      />
      <IconButton sx={{ p: "0", ml: 0.5 }}>
        {/* <ExpandMoreIcon sx={{ fontSize: "1.2rem" }} /> */}
      </IconButton>
    </Box>
  );
};

export default ProductRating;
