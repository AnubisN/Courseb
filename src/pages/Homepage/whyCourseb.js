import React from 'react'
import WhyCourseb from '../../components/whyCourseb'
import classes from './Homepage.module.scss'

function WhyCoursebSection({ coursebReasons }) {
    return (
        <section className={classes.reasons}>
            <h2 className={classes.section__title}>Why <span>Courseb?</span></h2>
                <div className={classes.reasons__container}>
                    <WhyCourseb 
                        title="Live Interaction"
                        image = "liveInteraction.jpg"
                        description= "Ask questions, and resolve confusions, via virtual interactions with your trainers and peers.Ask questions, and resolve confusions, via virtual interactions with your trainers and peers.Ask questions, and resolve confusions, via virtual interactions with your trainers and peers."
                        isReversed={false}
                        />
                    <WhyCourseb 
                        title="Internship"
                        image = "internship.jpg"
                        description= "Ask questions, and resolve confusions, via virtual interactions with your trainers and peers.Ask questions, and resolve confusions, via virtual interactions with your trainers and peers.Ask questions, and resolve confusions, via virtual interactions with your trainers and peers."
                        isReversed={true}
                        />

                    <WhyCourseb 
                        title="Guided Projects"
                        image = "guidedProjects.jpg"
                        description= "Ask questions, and resolve confusions, via virtual interactions with your trainers and peers.Ask questions, and resolve confusions, via virtual interactions with your trainers and peers.Ask questions, and resolve confusions, via virtual interactions with your trainers and peers."
                        isReversed={false}
                        />

                    <WhyCourseb 
                        title="Recorded Sessions"
                        image = "recordedSessions.jpg"
                        description= "Ask questions, and resolve confusions, via virtual interactions with your trainers and peers.Ask questions, and resolve confusions, via virtual interactions with your trainers and peers.Ask questions, and resolve confusions, via virtual interactions with your trainers and peers."
                        isReversed={true}
                        />
                    
                 </div>
        </section>
    )
}

export default WhyCoursebSection
