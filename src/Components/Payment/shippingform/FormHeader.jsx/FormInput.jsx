import { useState } from "react"; 
import useStyles from "../../styles";

const FormInput = ({
  type,
  id,
  placeholder,
  backgroundColor,
  boxShadow,
  width, 
  borderColor,
  onChange, 
}) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');

  const inputHandler = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    console.log(newValue);
    if(onChange)  {onChange(newValue)}
  }

  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={classes.formInput}
      style={{ backgroundColor, boxShadow, width , borderColor}} 
      value={inputValue}
      onChange={inputHandler}
    />
  );
};

export default FormInput;
