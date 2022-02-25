import React from 'react';
import classes from './alert.module.scss'

function Alert({message,variant,width}) {
  return <div className={classes.container} style={width ? {width: '90%',background: variant == 'danger' ? '#d9534f' : '#5cb85c'} : {width: '100%',background: variant == 'danger' ? '#d9534f' : '#5cb85c'}}>
      <p>{message}</p>
  </div>;
}

export default Alert;
