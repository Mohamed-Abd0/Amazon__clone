import { Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { Box } from "@mui/material";

const SwiperContainer = (props) => {
  const { breakPoints, children } = props;

  const mapingElements = () =>
    Children.map(children, function (element) {
      return <SwiperSlide key={element.id}>{element}</SwiperSlide>;
    });

  return (
    <Box


    
      sx={{
        ".swiper-button-next::after , .swiper-button-prev::after": {
          fontSize: "18px",
          color: "white",
          py: 1.4,
          px: 1.5,
          borderRadius: "8px",
          bgcolor: "background.main",
        },
      }}
    >
      <Swiper
        loop={true}
        breakpoints={breakPoints}
        navigation={true}
        modules={[Navigation]}
      >
        {mapingElements()}
      </Swiper>
    </Box>
  );
};

export default SwiperContainer;
