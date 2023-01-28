import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Stack, Box, Typography, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { increment, decrement } from "../../Store/ProductSlice";

const ProductQuantaty = () => {
  const [value, setValue] = useState(1);

  const { amount } = useSelector(({ ProductSlice }) => ProductSlice);

  return (
    <Box sx={{ "#quantaty": { py: "8px" } }}>
      <TextField
        type="number"
        id="quantaty"
        label="quantaty"
        variant="outlined"
        value={value}
        fullWidth={true}
        onChange={({ target }) => setValue(target.value)}
        onBlur={({ target }) =>
          (!target.value || target.value === "0") && setValue(1)
        }
      />
    </Box>
  );
};

export default ProductQuantaty;
