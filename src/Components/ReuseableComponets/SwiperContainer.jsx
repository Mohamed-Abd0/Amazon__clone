import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import { CardContent, CardMedia, Card } from "@mui/material";
import { Typography } from "@mui/material";

const SwiperContainer = (props) => {
  const { products, breakPoints } = props;

  const navigate = useNavigate();

  const productsRendering = () =>
    products.map((product) => (
      <SwiperSlide
        key={product.id}
        onClick={() => navigate(`/product/${product.id}`)}
        style={{ cursor: "pointer" }}
      >
        <Card sx={{ boxShadow: "none" }}>
          <CardMedia
            src={product?.productImgs[0].src}
            component="img"
            sx={{
              minWidth: "200px",
              maxHeight: "200px",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
          <CardContent>
            <Typography variant="body2">
              {product?.productDetails.title}
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
    ));

  return (
    <Swiper loop={true} breakpoints={breakPoints}>
      {productsRendering()}
    </Swiper>
  );
};

export default SwiperContainer;
