import { Grid, TextField, Typography, makeStyles } from "@material-ui/core"; 


const useStyles = makeStyles({
  textField: {
    width: "100%",
    marginBottom: "10px",
    height: '30px',
    fontSize:'1rem',
  },
});


const FormFields = ({
  name,
  setName,
  address,
  setAddress,
  city,
  setCity,
  country,
  setCountry,
  zip,
  setZip,
  formError,
  setFormError, 
  SubmitHandler,
}) => {
const classes = useStyles();


  return (
    <form
      onSubmit={SubmitHandler}
      id="modal-modal-title"
      style={{ margin: "10px 10px 20px" }}
    >
      {formError && <Typography color="error">{formError}</Typography>}
      <Grid container style={{ padding: "0 20px" }}>
        <TextField
          id="outlined-size-small"
          className={classes.textField}
          label="Country/region"
          variant="outlined"
          size="small"
          margin="normal"
          onChange={(e) => setCountry(e.target.value)}
        ></TextField>

        <TextField
          id="outlined-size-small"
          className={classes.textField}
          label="Full name (First and Last name)"
          variant="outlined"
          size="small"
          margin="normal"
          onChange={(e) => setName(e.target.value)}
        ></TextField>

        <TextField
          id="outlined-size-small"
          className={classes.textField}
          label="Mobile number"
          variant="outlined"
          size="small"
          margin="normal"
          onChange={(e) => setAddress(e.target.value)}
        ></TextField>

        <TextField
          id="outlined-size-small"
          className={classes.textField}
          label="Street name"
          variant="outlined"
          size="small"
          margin="normal"
          onChange={(e) => setAddress(e.target.value)}
        ></TextField>

        <TextField
          id="outlined-size-small"
          className={classes.textField}
          label="City/Area"
          variant="outlined"
          size="small"
          margin="normal"
          onChange={(e) => setCity(e.target.value)}
        ></TextField>

        <TextField
          id="outlined-size-small"
          className={classes.textField}
          label="Zip/Postal code"
          variant="outlined"
          size="small"
          margin="normal"
          onChange={(e) => setZip(e.target.value)}
        ></TextField>
      </Grid>
    </form>
  );
};

export default FormFields;
