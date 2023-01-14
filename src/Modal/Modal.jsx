import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import { Box } from "@mui/material";
import { CartMenuSection } from "./";
import { overlayfunc } from "../Store/product_slice/ModalSlice";

const Modal = () => {
  const { overlayState } = useSelector(({ ModalSlice }) => ModalSlice);

  const [viewState, setViewState] = useState(overlayState);

  const action = useDispatch();

  const ParentStyless = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 10,
  };

  const Parent = overlayState && (
    <Box sx={ParentStyless} onClick={() => action(overlayfunc(false))}>
      <CartMenuSection />
    </Box>
  );

  useEffect(() => {
    const root = document.getElementById("modal").previousElementSibling;
    if (overlayState) {
      root.style.overflow = "hidden";
      root.style.height = "100vh";
    } else {
      // root.style.overflow = "auto";
      // root.style.height = "auto"
    }
  }, [overlayState]);

  return createPortal(Parent, document.getElementById("modal"));
};

export default Modal;
