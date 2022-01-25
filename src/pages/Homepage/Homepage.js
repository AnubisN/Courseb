import React, {useState, useEffect} from 'react'
import Button from '../../components/Button/Button'
import classes from './Homepage.module.scss'
import TestimonialSlider from './testimonialSlider'
import FAQSection from './faqSection'
import WhyCoursebSection from './whyCourseb'
import coursebReasons from '../../data/whyCourseb';
import PopularCourses from './popularCourse'
import { useDispatch, useSelector } from 'react-redux'
import { listCourse } from '../../actions/courseActions'
import { listFAQs } from '../../actions/faqActions'
import { listTestimonials } from '../../actions/testimonialActions'

function Homepage() {
    const coursesList = useSelector(state => state.courseList)
    const { error, loading, courses} = coursesList 
    const faqList = useSelector(state => state.faqList)
    const { faqs } = faqList 
    const testimonialList = useSelector(state => state.testimonialList)
    const { testimonials } = testimonialList 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listCourse())
        dispatch(listFAQs())
        dispatch(listTestimonials())
    }, [dispatch])

    return (
        <>
        {
            loading ? <h2>Loading...</h2>
                : error ? <h3>{error}</h3>
                :    <>
                        <section className={classes.container}>
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
                            </section>
                    
                        <PopularCourses courses = {courses} />
                        <WhyCoursebSection coursebReasons={coursebReasons} />
                        <FAQSection faqs = {faqs} />
                        <TestimonialSlider testimonials={testimonials} />
                    </>
        }
        </>
       
    )
}

export default Homepage
