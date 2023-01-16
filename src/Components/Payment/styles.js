import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "80vw",
    margin: "0 auto",
  },
  container: {
    position: "relative",
    height: "100vh",
  },
  checkoutContainer: {
    position: "absolute",
    width: "100%",
  },
  orderSummary: {
    position: "absolute",
  },
  activeStep: {
    color: "#c45500",
  },
  paperStyle: {
    margin: "5px 0 20px 40px",
  },
  
}));
