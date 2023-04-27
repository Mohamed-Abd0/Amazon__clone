import { MenuItem, Select } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  select: {
    width: "80px",
    padding: "1px",
    margin: 0,
    borderRadius: "10px",
    background: "#F0F2F2",
    "&:hover": {
      border: "0px",
      backgroundColor: "#E3E6E6",
      cursor: "pointer",
    },
    "&:focus": {
      border: "1px solid rgba(255,255,255)",
      boxShadow: "0 2px 5px rgba(15,17,17,.15)",
    },
    "& .MuiSelect-select": {
      padding: 0,
      margin: 0,
      fontSize: "13px",
    },
    "& .MuiSelect-icon": {
      marginTop: 0,
      marginBottom: 0,
    },
  },
  menuItem: {
    padding: 0,
    margin: 0,
  },
}));

const SelectItem = ({ renderQuantityValue }) => {
  const classes = useStyles();

  return (
    <Select
      className={classes.select}
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="quantity"
      renderValue={renderQuantityValue}
      inputProps={{ "aria-label": "Without label" }}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  );
};

export default SelectItem;
