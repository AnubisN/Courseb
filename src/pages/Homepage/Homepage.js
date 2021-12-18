import React from 'react'
import Button from '../../components/Button/Button'
import Card from '../../components/Cards/Card'
import classes from './Homepage.module.scss'
import TestimonialSlider from './testimonialSlider'
import FAQSection from './faqSection'
import WhyCoursebSection from './whyCourseb'
import coursebReasons from '../../data/whyCourseb';

function Homepage() {
    return (
        <div className={classes.borderbox}>
            <div className={classes.hero__container}>
                <div className={classes.hero__container__content}>
                    <h1 className={classes.hero__container__content__title}>Learn job ready <br/> courses online</h1>
                    <p>Learn new skills with the colleague like you <br />and apply for the job</p>
                    <Button className={classes.button} type="primary__body">
                        Explore Courses    
                    </Button>
                </div>
                <div className={classes.hero__container__img}>
                    <img src="girl.png"/>
                </div>
            </div>

            <section className={classes.popular__courses}>
                    <h2 className={classes.section__title__course}>Our Popular <span>Courses</span></h2>
                    <div className={classes.popular__courses__container}>
                        <div className={classes.popular__courses__container__card}>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                        <div className={classes.popular__courses__container__card__viewMore}>
                                <a>
                                    View More
                                </a>
                        </div>
                    </div>
            </section>

            <WhyCoursebSection coursebReasons={coursebReasons} />
            <FAQSection />

            <section className={classes.testimonials}>
                <h2 className={classes.section__title}><span>Testimonials</span></h2>
                    <TestimonialSlider />
            </section>
        </div>
    )
}

export default Homepage
