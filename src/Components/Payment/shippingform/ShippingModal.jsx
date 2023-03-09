import { Box, Grid, Modal, Paper, Typography } from "@material-ui/core";
import useStyles from "../styles";

const ShippingModal = ({ open, onClose, children }) => {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper className={classes.boxStyle}>
        <Grid container spacing={1} >
          <Box className={classes.footer}>
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              Add your addresses
            </Typography>
          </Box>
          <br />
          {children}
        </Grid>
      </Paper>
    </Modal>
  );
};

export default ShippingModal;
