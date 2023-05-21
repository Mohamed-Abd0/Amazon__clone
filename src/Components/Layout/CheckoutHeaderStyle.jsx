import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "0 1rem 0 1rem",
    width: "100%",
  },
  main: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-evenly", 
    height: "4.5rem",
    background: "linear-gradient(to bottom, #fff, #ededed)",
    textAlign: "center",
    boxShadow: " 0px 1px 0px #a6a5a5",
  },

  imgContainer: {
    width: "10%",
    display: "flex",
    alignContent: "center", 
    float: "left",
    height: "45%",
    marginTop: "2rem",
  },
  logo: {
    height: "100%",
  },
  textcontainer: {
    display: "flex",
    justifyContent: "center", 
    width: "80%",
    padding: '0.8rem 0 0.3rem 0', 
    textAlign: "left",
  },
  headerText: {
    fontSize: "1.5rem",
    fontWeight: "400", 
    paddingTop: '1rem',
  },
  span: {
    color: "#007185",
    fontSize: "1.4rem",
  },
}));

export default useStyles;
