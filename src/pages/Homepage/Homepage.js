import React, {useState, useEffect} from 'react'
import Button from '../../components/Button/Button'
import Card from '../../components/Cards/Card'
import classes from './Homepage.module.scss'
import TestimonialSlider from './testimonialSlider'
import FAQSection from './faqSection'
import WhyCoursebSection from './whyCourseb'
import coursebReasons from '../../data/whyCourseb';
import axios from 'axios'
import PopularCourses from './popularCourse'

function Homepage() {
    const [courses, setCourses] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [testimonials, setTestimonials] = useState([]);


    useEffect(() => {
        async function fetchCourses() {
            const { data } = await axios.get('/api/courses/')
            setCourses(data);
        }

        async function fetchFAQs() {
            const { data } = await axios.get('/api/faqs/')
            setFaqs(data);
        }

        async function fetchTestimonials() {
            const { data } = await axios.get('/api/testimonials/')
            setTestimonials(data);
        }

        fetchCourses();
        fetchFAQs();
        fetchTestimonials();
    }, [])

    return (
        <div className={classes.container}>
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

            <PopularCourses courses = {courses} />
            <WhyCoursebSection coursebReasons={coursebReasons} />
            <FAQSection faqs = {faqs} />
            <TestimonialSlider testimonials={testimonials} />
        </div>
    )
}

export default Homepage
