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



const SubmitButton = ({ SubmitHandler }) => {
    const classes = useStyles()
  return (
    <Button
      type="submit"
      variant="contained"
      className={classes.submitButton}
      onClick={(e) => SubmitHandler()}
    >
      Use this address
    </Button>
  );
};

export default SubmitButton
