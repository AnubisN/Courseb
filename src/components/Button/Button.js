import React from 'react'
import './Button.scss'

function Button(props) {
    const myClasss = `button__${props.type}`
    return (
        <button className={myClasss} >
            {props.children}
        </button>
    )
}

export default Button
