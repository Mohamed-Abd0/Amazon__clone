
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
    root: {
      // maxWidth: 345, original width style
      maxWidth: '100%',
      height: '100%'
      // zIndex: 'tooltip'
    },
    media: {
      paddingTop: '56.25%', // 16:9
      paddingRight: '56.25%',
      // paddingTop: '56.25%'
      backgroundSize: 'contain',
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
     }
   
  }));