
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
      maxWidth: '100%',
      maxHeight: '100%',
      height: 'auto',
      // backgroundColor: 'white',
      borderRadius: 0,
     paddingBottom: 20
      
      
    },
    media: {
      paddingTop: '56.25%', // 16:9
      paddingRight: '56.25%',
      backgroundSize: 'contain',
    },
    media1: {
      height: 'auto',
      maxHeight: '50%',
      width: 'auto',
      maxWidth: '250',
      padding: 10
    },

    cardHeader: {
      paddingLeft: 15, 
      paddingBottom: 15, 
      paddingTop: 15, 
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold'
    },
    
    cardActions: {
      display: 'flex',
      justifyContent: 'space-between',
      textAlign: 'right',
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
      height: 400,
      borderRadius: 0,
      whiteSpace: 'normal'
    },
    swiperImage: {
      padding: 10,
      margin: 10,
      width: 'auto',
    height: 'auto',
    maxWidth: 270,
    maxHeight: 200,
    verticalAlign: 'middle'
    },
    swipeSlide: {
      alignContent: 'center',
      flexShrink: 10,
    },
    swiper: {
      marginLeft: 50
    },

    
  }));