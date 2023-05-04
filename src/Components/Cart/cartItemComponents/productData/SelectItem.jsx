import { MenuItem, Select } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import updateProductQty from "../../../../Firebase-APIS/Product/updateProductQty";

const useStyles = makeStyles((theme) => ({
  select: {
    width: "80px !important",
    padding: "1px 1px 1px 5px !important",
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

const SelectItem = ({ item, deleteFromCartHandler }) => {
  const classes = useStyles();
   
  const Qty = item.qty; 
  
  console.log(Qty)
  const [selectedQty, setSelectedQty] = useState(Qty)

  const updateQty = (e) => {
    console.log(' this is the event', e)
    const newQty = e.target.value;
    setSelectedQty(newQty);
    updateProductQty(item.id, newQty);
  }

  const renderQuantityValue = () => {
    return `Qty: ${selectedQty}`;
  };

  console.log(selectedQty)
  return (
    <Select
      className={classes.select}
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="quantity" 
      renderValue={renderQuantityValue}
      inputProps={{ "aria-label": "Without label" }}
      value={selectedQty}
      onChange={updateQty}
    >
      <MenuItem value="" onClick={deleteFromCartHandler}>
        <em>0 (Delete)</em>
      </MenuItem>
      <MenuItem value={1}>1</MenuItem>
      <MenuItem value={2}>2</MenuItem>
      <MenuItem value={3}>3</MenuItem>
      <MenuItem value={4}>4</MenuItem>
      <MenuItem value={5}>5</MenuItem>
      <MenuItem value={6}>6</MenuItem>
      <MenuItem value={7}>7</MenuItem>
      <MenuItem value={8}>8</MenuItem>
      <MenuItem value={9}>9</MenuItem>
      <MenuItem value={10}>10</MenuItem>
    </Select>
  );
};

export default SelectItem;
