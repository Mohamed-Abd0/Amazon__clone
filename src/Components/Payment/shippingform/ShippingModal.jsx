import { Box, Modal, Paper, Typography } from "@material-ui/core";
import useStyles from "../styles";
import FormHeader from "./FormHeader.jsx/FormHeader";
import FormInput from "./FormHeader.jsx/FormInput";

const ShippingModal = ({ open, onClose }) => {
  const classes = useStyles();
  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper className={classes.boxStyle}>
        <Box
          className={classes.cardFooter}
          style={{
            width: "100%",
            padding: "7px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box style={{ padding: "5px 15px" }}>
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              Enter your shipping addresses
            </Typography>
          </Box>
          <Box
            onClick={onClose}
            style={{
              padding: "5px 15px",
              borderRadius: "5px",
              fontSize: "17px",
              border: "1px solid #007185",
              boxShadow: "0 0 0 3px #C8F3FA",
            }}
          >
            X
          </Box>
        </Box>

        {/* ************************************************************************ */}

        <Box
          className={classes.cardContainer}
          style={{ padding: "10px 90px 10px 20px", textAlign: "left" }}
        >
          <Box style={{ width: "100%" }}>
            <Typography
              variant="subtitle1"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            >
              Add a new address
            </Typography>
            <Box>  
              <Box style={{ margin: "15px 0" }}>
                <FormHeader for="name">Country/region</FormHeader> 
                <FormInput type="text" id="name" name="name" /> 

                <FormHeader for="name">
                  Full name (First and Last name)
                </FormHeader> 
                <FormInput type="text" id="name" name="name" /> 

                <FormHeader for="name">Mobile number</FormHeader>  
                <FormInput
                style={{width: '70%', display: 'inline'}}
                  type="tel"
                  id="name"
                  name="name"
                  placeholder="e.g. 1xxxxxxxxx"
                /> 

                <FormHeader for="name">Street name</FormHeader> 
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. Talaat Harb Street"
                /> 

                <FormHeader for="name">Building name/no</FormHeader> 
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. Princess Tower"
                /> 

                <FormHeader for="name">City/Area</FormHeader> 
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. El Nozha, New Cairo City & Dokki"
                /> 

                <FormHeader for="name">District</FormHeader> 
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                /> 

                <FormHeader for="name">Governorate</FormHeader> 
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                /> 

                <FormHeader for="name">Nearest landmark</FormHeader> 
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. Cairo festival city"
                />
                <br />
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Modal>
  );
};

export default ShippingModal;
