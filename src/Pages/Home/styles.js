
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
      // height: '100%',
      background: '#fff',
      overflow: 'hidden',
      borderRadius: 0,
      boxShadow: 'none',
      
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'space-between'
    },
    media: {
      paddingTop: '56.25%', // 16:9
      paddingRight: '56.25%',
      backgroundSize: 'contain',
    },
    media1: {
      // height: 'auto',
      // maxHeight: '50%',
      width: 'auto',
      maxWidth: '250',
      paddingLeft: 10,
      paddingRight: 10
    },

    cardHeader: {
      padding: 15,
      fontSize: 21,
      // lineHeight: 27.3,
      color: 'black',
      fontWeight: 'bold',
      whiteSpace: 'normal',
      fontWeight: 'bolder',
      fontFamily: `'Alexandria', sans-serif`
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
      // height: 400,
      // borderRadius: 0,
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