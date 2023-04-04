import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Box, Rating, IconButton } from "@mui/material";
import { productContent } from "./../../Data/TestData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {doc, getDoc} from "firebase/firestore";
import {db} from "../../firebase";


const ProductRating = ({ max }) => {
  const { productId } = useParams();

  const [productDetails, setProductDetails] = useState(null);
  const [value, setValue] = useState(null);

  useEffect(() => {
    async function fetchProductDetails() {
      const productRef = doc(db, "products", productId);
      const productDoc = await getDoc(productRef);

      if (productDoc.exists()) {
        setProductDetails(productDoc.data());
        setValue(productDoc.data());
      } else {
        console.log("No such document!")
      }
    }

    fetchProductDetails()
  }, [productId])
  

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Rating
        sx={{ label: { color: "background.secondary" } }}
        name="read-only"
        readOnly
        value={value}
        max={max}
        precision={0.1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        size="small"
      />
      <IconButton sx={{ p: "0", ml: 0.5 }}>
        <ExpandMoreIcon sx={{ fontSize: "1.2rem" }} />
      </IconButton>
    </Box>
  );
};

export default ProductRating;
