import React from 'react';
import useStyles from '../../styles';
import { Typography } from '@material-ui/core';


const FormHeader = ({children}) => {
    const classes = useStyles();
  return (
    <Typography variant="subtitle2" className={classes.formHeader}>
      {children}
    </Typography>
  )
}

export default FormHeader
