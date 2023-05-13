import React from "react";
import useStyles from "../../styles";

const FormInput = ({ type, id, placeholder }) => {
  const classes = useStyles();
  return (
    <div >
      <input className={classes.formInput} type={type} id={id} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
