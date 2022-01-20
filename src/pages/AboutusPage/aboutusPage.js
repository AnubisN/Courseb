import React from 'react'
import classes from './aboutus.module.scss'

function AboutUs() {
    return (
        <section>
            <div className={classes.header}>
                <h1>Who we are</h1>
                <p>Any question or remarks? Just write us a message!</p>
            </div>

            <div className={classes.container}>
                <div className={classes.container__content}>
                    <h2>Our Mission</h2>
                    <p>
                    Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create.
                    <br />
                    The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.
                    </p>
                </div>
                <div className={classes.container__img}>
                    <img src="liveInteraction.jpg"/>
                </div>
            </div>

            <div className={classes.followUs}>
                <h3>Follow Us</h3>
                <div className={classes.followUs__container}>
                    <a href="www.fb.com">
                        <img src="1.png" /> 
                    </a>
                    <a href="www.fb.com">
                        <img src="2.png" /> 
                    </a>
                    <a href="www.fb.com">
                        <img src="3.png" /> 
                    </a>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
