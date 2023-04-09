import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { useDispatch, useSelector } from "react-redux";
import words from '../../leng.json'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Active lang
  const dispatch = useDispatch();
  const lengActive = useSelector((state) => state.leng);
  const activeLeng = lengActive.lang;
  console.log("activeLeng", activeLeng);
  const langWordsActive = words[`${lengActive.lang}`];
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <Zoom in={isVisible}>
      <Fab
        sx={{
          height: "9% !important",
          width: "100%",
          backgroundColor: "#485768",
          borderRadius: 0,
          boxShadow: 0,
          padding: 0,
          '&:hover': {
            backgroundColor: '#5f7287 !important',
        }
        }}
        onClick={handleBackToTop}
        className="back-to-top-button"
        // size="small"
      >
        <span
          style={{
            padding: "15px 0",
            lineHeight: 2,
            fontSize: 13,
            color: "white",
          }}
        >
          {langWordsActive.backToTop}
        </span>
      </Fab>
    </Zoom>
  );
};

export default BackToTopButton;
