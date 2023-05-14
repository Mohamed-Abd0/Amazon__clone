import { Box, Modal, Paper, Typography } from "@material-ui/core";
import useStyles from "../styles";
import FormFields from "./FormFields";

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
              cursor: "pointer",
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
              <FormFields />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Modal>
  );
};

export default ShippingModal;
