
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";







const ProductAbout = () => {

  
  const {product} = useSelector(({ProductSlice}) => ProductSlice)
  const lengActive = useSelector(({leng}) => leng)

  // extranct product propertes from the product obj
  const productPropertes = product.ProductProperties


  const renderingList = () => (
    <ul style={{ listStyle: "disc" }}>
      {productPropertes.map((li, index) => (
        <li key={index}>
          <Typography
            variant="body2"
            color="text.gray"
            sx={{ fontSize: "12px" }}
          >
            {li[`${lengActive.lang}`]}
          </Typography>
        </li>
      ))}
    </ul>
  );

  return (
    <Box sx={{ pt: 1 }}>
      <Typography variant="body2" sx={{ fontWeight: "600" }}>
        about this item
      </Typography>
      <Box sx={{ pl: "20px" }}>{renderingList()}</Box>
    </Box>
  );
};

export default ProductAbout;
