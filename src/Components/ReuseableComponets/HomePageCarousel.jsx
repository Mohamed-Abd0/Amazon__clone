import React from "react";
import { images } from "../../Pages/Home/SliderImages";
import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";

function Item(props) {
  return (
    <>
      <img className="carousel-image" src={props.item.image} />
    </>
  );
}

const HomePageCarousel = () => {
  const lengActive = useSelector((state) => state.leng);
  const activeLeng = lengActive.lang;
  console.log(activeLeng)
  // const active= 'ar'
  return (
    <>
      {/*  Main Slider */}
      <div className="home-image">
        <Carousel
          animation="slide"
          autoPlay={true}
          cycleNavigation
          timeout={30}
          indicators={false}
        >
          {images[activeLeng].map((image) => (
            <Item key={image.id} item={image} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default HomePageCarousel;
