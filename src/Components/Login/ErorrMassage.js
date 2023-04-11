import React from 'react'
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import InfoIcon from '@mui/icons-material/Info';
import classes from './ErorrMassege.module.css';

export const Erorrbox = ({ ErorrState , ErorrMassege , password}) => {
    
    if(password){

        if(ErorrState){
            return (
                <div className={classes.errorMassage }>
                    <span> <PriorityHighOutlinedIcon/> </span>
                    <span>{ErorrMassege}</span>
                </div>
            )
        }else{
            return(
                <div className={classes.alert}>
                    <span> <InfoIcon /> </span>
                    <span>Passwords must be at least 6 characters.</span>
                </div>
            )
        }
    }

    
    if(ErorrState && !password){
        return (
          <div className={classes.errorMassage}>
              <span> <PriorityHighOutlinedIcon/> </span>
              <span>{ErorrMassege}</span>
          </div>
        )

    }else{
        return null
    }
    
}
