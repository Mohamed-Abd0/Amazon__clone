import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: { 
    margin: "0",
  },
  container: {
    display: "flex",
    justifyContent: 'space-between', 
  },
  checkoutContainer: { 
    width: '71%',
  },
  orderSummary: { 
    width: '27%',
    paddingTop: "1rem",
  },
  activeStep: {
    color: "#c45500",
  }, 

  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 'auto',
    margin: '50px',
    overFlowY: "auto",
  },

  boxStyle: {
    outline: 'none',
    marginTop: "1rem",
    width: '45%',
    position: "relative",  
    background: "#fff",  
    borderRadius: '8px',
    border: '1px solid #D5D9D9', 
    boxShadow: '0 0 14px 0 rgba(15,17,17,.5)', 
    '&:focus': {
      border: 'none !important'
    },
  },




  //orderSummary
  card: {    
    borderRadius: "7px",
    border: "1px solid rgba(0, 0, 0, 0.12)",
  },
  cardContainer: { 
    display: 'flex' ,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '1rem 1.2rem 0 1rem ',
  },
  cardBtn: {  
    padding:'1rem 2rem !important',
  },
  cardTextCenter: {
    fontSize: '13px!important',
    lineHeight: '16px!important',
    textAlign: 'center',
  },
  cardDetails: {
    width: '100%',
    padding: '5px 0',
    display: 'flex' ,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row', 
  },
  cardTextLeft: {
    fontSize: '12px!important',
    lineHeight: '17px!important',
    textAlign: 'left',
  },
  cardTextRight: {
    fontSize: '12px!important',
    lineHeight: '17px!important',
    textAlign: 'right',
  },

  cardFooter: {
    padding: '15px 20px',
    backgroundColor: '#F0F2F2',
    textAlign: 'left',
    borderTop:"1px solid rgba(0, 0, 0, 0.12)",
  },
  cardFooterText: {
    fontSize: '12px',
    lineHeight: '17px',
    color: '#007185',
    cursor: 'pointer',
    '&:hover': {
      color: '#e47911',
      textDecoration: 'underline',
    },
  },
  atfocus: {
    '&:focus-within': {
      border: '1px solid #007185',
      boxShadow: "0 0 0 3px #C8F3FA",
    },
  },

  formHeader: {
    fontSize: '14px !important', 
    fontWeight: 'bold',
  },

  formInput: {
    width: '100%',
    height: '31px',
    display: 'inline-block',
    textAlign:'left',
    border: '1px solid #888C8C',
    borderRadius: '5px',
    padding: '5px',
    marginBottom: '5px',
    backgroundColor: '#fff',
    '&:focus': {
      outline: 'none',
      backgroundColor: '#F7FEFF',
      border: '1px solid #007185 !important',
      boxShadow: "0 0 0 3px #C8F3FA !important",
    },
  },

}));
