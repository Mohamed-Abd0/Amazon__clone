import { Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { Box } from "@mui/material";

const MainSwiperContainer = (props) => {
  const { breakPoints, children } = props;

  const mapingElements = () =>
    Children.map(children, function (element) {
      return <SwiperSlide key={element.id}>{element}</SwiperSlide>;
    });

  return (
    <Box
      sx={{
        ".swiper-button-next::after, .swiper-button-prev::after": {
          backgroundColor: "trasparent", 
          color: "transparent",
        },
        ".swiper-button-next:hover::after, .swiper-button-prev:hover::after": {
          position: "absolute",
          backgroundColor: "#fff",
          height: "100px",
          lineHeight: "100px",
          width: "45px",
          textAlign: "center",
          boxShadow: "0 1px 3px #888",
          color: "#000",
          backgroundColor: "white", // Change the background color on hover
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

export default MainSwiperContainer;
