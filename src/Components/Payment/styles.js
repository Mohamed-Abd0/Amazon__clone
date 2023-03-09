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
  footer: {
    width: "100%",
    backgroundColor: "#F0F2F2",
    padding: "15px 30px 15px",
  },

  boxStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", 
    background: "#fff",
    borderRadius: "10px",
    boxShadow: 24,
    overflow: "hidden",
  },
}));
