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
        
        <Typography style={{ fontWeight: "bold" }}>Country/region</Typography>
        <TextField
          id="outlined-size-small"
          className={classes.textField} 
          variant="outlined"
          size="small"
          margin="normal"
          placeholder="Enter your country/region"
          InputLabelProps={{shrink: true}}
          onChange={(e) => setCountry(e.target.value)}
        ></TextField>
        
        <Typography style={{ fontWeight: "bold" }}>Full name </Typography>
        <TextField
          id="outlined-size-small"
          className={classes.textField} 
          variant="outlined"
          size="small"
          margin="normal"
          placeholder="Enter your full name"
          onChange={(e) => setName(e.target.value)}
        ></TextField>

        <Typography style={{ fontWeight: "bold" }}>Mobile number</Typography>
        <TextField
          id="outlined-size-small"
          className={classes.textField} 
          variant="outlined"
          size="small"
          margin="normal"
          placeholder="Your 10 digit phone number"
          onChange={(e) => setAddress(e.target.value)}
        ></TextField>
      
        <Typography style={{ fontWeight: "bold" }}>Street name</Typography>
        <TextField
          id="outlined-size-small"
          className={classes.textField} 
          variant="outlined"
          size="small"
          margin="normal"
          placeholder="Start typing your address to get suggestions"

          onChange={(e) => setAddress(e.target.value)}
        ></TextField>

        <Typography style={{ fontWeight: "bold" }}>City/Area</Typography>
        <TextField
          id="outlined-size-small"
          className={classes.textField} 
          variant="outlined"
          size="small"
          margin="normal" 
          onChange={(e) => setCity(e.target.value)}
        ></TextField>

        <Typography style={{ fontWeight: "bold" }}>Postcode</Typography>
        <TextField
          id="outlined-size-small"
          className={classes.textField} 
          variant="outlined"
          size="small"
          margin="normal"
          placeholder="Enter your area postcode"
          onChange={(e) => setZip(e.target.value)}
        ></TextField>
      </Grid>
    </form>
  );
};

export default FormFields;
