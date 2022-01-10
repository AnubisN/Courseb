import React from 'react'
import Container from '../../components/Container'
import classes from './gallery.module.scss'

function Gallerpage() {
    return (
        <div className={classes.container}>
            <div className={classes.box}>
                <div className={classes.dream}>
                    <img src="liveInteraction.jpg" />
                    <img src="recordedSessions.jpg" />
                    <img src="guidedProjects.jpg" />
                    <img src="internship.jpg" />
                </div>
                
                <div className={classes.dream}>
                    <img src="liveInteraction.jpg" />
                    <img src="recordedSessions.jpg" />
                    <img src="guidedProjects.jpg" />
                    <img src="internship.jpg" />
                </div>

                <div className={classes.dream}>
                    <img src="liveInteraction.jpg" />
                    <img src="recordedSessions.jpg" />
                    <img src="guidedProjects.jpg" />
                    <img src="internship.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Gallerpage
