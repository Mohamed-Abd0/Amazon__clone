import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100vw",
    height: "10vh",
    background: "linear-gradient(to bottom, #fff, #ededed)",
    margin: " 0  25px ",
    textAlign: "center",
    boxShadow: " 0px 1px 0px #a6a5a5",
  },
  imgContainer: {
    float: "left",
    paddingTop: "0.5rem",
    margin: "1.5rem 0 0 1.2rem",
    height: "55%",
    width: "30%",
  },
  logo: {
    height: "100%",
  },
  textcontainer: {
    width: "70%",
    textAlign: "center",
    paddingTop: "1.3rem",
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