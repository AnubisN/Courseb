import React from 'react'
import classes from './whyCourseb.module.scss'

function WhyCourseb() {
    return (
        <div className={classes.whyCourseb__container}>
            <div className={classes.whyCourseb__container__description}>
                <h2 className={classes.whyCourseb__container__description__title}>Live Interaction</h2>
                <p className={classes.whyCourseb__container__description__desc}>Ask questions, and resolve confusions, via virtual interactions with your trainers and peers.Ask questions, and resolve confusions, via virtual interactions with your trainers and peers.Ask questions, and resolve confusions, via virtual interactions with your trainers and peers.</p>
            </div>
            <div className={classes.whyCourseb__container__description__img}>
                <img src="liveInteraction.jpg"/>
            </div>
        </div>
    )
}

export default WhyCourseb
