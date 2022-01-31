import React from 'react';
import classes from './alert.module.scss'

function Alert({message,variant}) {
  return <div className={classes.container} style={{background: variant == 'danger' ? '#d9534f' : '#5cb85c'}}>
      <p>{message}</p>
  </div>;
}

export default Alert;
