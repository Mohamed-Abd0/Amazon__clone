import React from "react";
import { images } from "../../Pages/Home/SliderImages";
import Carousel from "react-material-ui-carousel";

function Item(props) {
  return (
    <>
      <img className="carousel-image" src={props.item.image} />
    </>
  );
}

const HomePageCarousel = () => {
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
          {images.map((image) => (
            <Item key={image.id} item={image} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default HomePageCarousel;
