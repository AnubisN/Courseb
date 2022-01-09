import React from 'react'
import classes from './container.module.scss'

function Container(props) {
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    )
}

export default Container
