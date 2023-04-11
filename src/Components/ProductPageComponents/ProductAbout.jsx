import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";

import { db } from "../../firebase";
import { getFirestore, collection, getDocs, QuerySnapshot } from "firebase/firestore";

const ProductAbout = () => {

  const [aboutItem, setAboutItem] = useState([]);

  useEffect(() => {
    const fetchAboutItem = async () => {
      const snapshot = await db.collection("products").get();
      const aboutItemData = snapshot.docs.map((doc) => doc.data());
      setAboutItem(aboutItemData)
    };
    fetchAboutItem(); 
  }, [])
  


  const renderingList = () => (
    <ul style={{ listStyle: "disc" }}>
      {aboutItem.map((li, idx) => (
        <li key={idx}>
          <Typography
            variant="body2"
            color="text.gray"
            sx={{ fontSize: "12px" }}
          >
            {li}
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
