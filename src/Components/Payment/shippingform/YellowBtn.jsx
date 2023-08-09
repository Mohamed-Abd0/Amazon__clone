import { Button, makeStyles } from "@material-ui/core"; 



const useStyles = makeStyles({
  submitButton: {
    backgroundColor: "#f7ca00",
    padding: "5px 10px",
    fontSize: "0.7rem",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#e8bd02",
    },
  },
});



const YellowBtn = ({ children, SubmitHandler, OnAction }) => {
    const classes = useStyles()
  return (
    <Button
      type="submit"
      variant="contained"
      className={classes.submitButton}
      onClick={OnAction}
    > {children}</Button> 
  );
};

export default YellowBtn
