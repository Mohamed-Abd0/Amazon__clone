import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    height: "12vh",
    background: "linear-gradient(to bottom, #fff, #ededed)",
    margin: " 0  20px ",
    boxShadow: " 0px 1px 0px #a6a5a5",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  root: {
    height: "100%",
    margin: "0 auto",
    textAlign: "center",
  },
  imgContainer: {
    float: "left",
    margin: "35px 5px",
    height: "48px",
  },
  logo: {
    height: "95%",
  },
  textcontainer: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  headerText: {
    fontSize: "1.8rem",
  },
  span: {
    color: "#007185",
    fontSize: "1.4rem",
  },
}));

export default useStyles;
