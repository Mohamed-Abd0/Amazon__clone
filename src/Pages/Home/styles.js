
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
      background: '#fff',
      overflow: 'hidden',
      borderRadius: '0 !important',
      boxShadow: 'none',
      "&.MuiGrid-container ":{
        paddingButton: '90px'
      }, 
    },
    media: {
      paddingTop: '56.25%', // 16:9
      paddingRight: '56.25%',
      backgroundSize: 'contain !important',
    },
    media1: {
      width: 'auto',
      maxWidth: '250',
      paddingLeft: 10,
      paddingRight: 10
    },

    cardHeader: {
      fontFamily: `'Alexandria', sans-serif !important`,
      padding: 15,
      fontSize: 21,
      color: 'black',
      whiteSpace: 'normal',
      fontWeight: 'bolder',
      
    },
    
    cardActions: {
      textAlign: 'left',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 2,
    },
    rating: {
        align: "left" 
    },
    carouselImage: {
      width: '100%',
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: `${theme.spacing.unit * 3}px`,
    },
    paper: {
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing.unit * 2,
    },
  }));