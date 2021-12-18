import React from 'react'
import classes from './whyCourseb.module.scss'

function WhyCourseb({ title, description, image, isReversed }) {
    return (
        <div className= { isReversed ? classes.whyCourseb__container__reverse : classes.whyCourseb__container}>
            <div className={classes.whyCourseb__container__description}>
                <h2 className={classes.whyCourseb__container__description__title}>{title}</h2>
                <p className={classes.whyCourseb__container__description__desc}>{description}</p>
            </div>
            <div className={classes.whyCourseb__container__description__img}>
                <img src={image}/>
            </div>
        </div>
    )
}

export default WhyCourseb
