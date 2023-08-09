import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { Box, useMediaQuery, Fade } from "@mui/material";
import { CartMenuSection } from ".";
import { allModalsState } from "../../Store/ModalSlice";
import { overlayStyless } from "../../Constants/Constants";

const Modal = () => {
  const { overlayState, cartMenuSectionState } = useSelector(
    ({ ModalSlice }) => ModalSlice
  );

  const matches = useMediaQuery("(min-width:900px)");

  const dispatch = useDispatch();

  const Parent = (
    <Fade in={overlayState} mountOnEnter unmountOnExit>
      <Box
        sx={overlayStyless}
        onClick={() => dispatch(allModalsState(false))}
      ></Box>
    </Fade>
  );

  useEffect(() => {
    const root = document.getElementById("modal").previousElementSibling;
    if (overlayState) {
      root.style.overflow = "hidden";
      root.style.height = "100vh";
    } else {
      root.style.overflow = "inherit";
      root.style.height = "inherit";
    }
  }, [overlayState]);

  useEffect(() => {
    dispatch(allModalsState(false));
  }, [matches, dispatch]);

  return createPortal(Parent, document.getElementById("modal"));
};

export default Modal;
