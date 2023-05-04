import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

const SelectInput = ({ label, values, id }) => {
  const [selectedShipping, setSelectedShipping] = useState(values[0]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="label">{label}</InputLabel>
        <Select
          labelId="label"
          id={id}
          value={selectedShipping}
          label={label}
          MenuProps={{ id: "quantaty-menu" }}
          onChange={({ target }) => setSelectedShipping(target.value)}
        >
          {values.map((e, i) => (
            <MenuItem value={e} key={i}>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectInput;
