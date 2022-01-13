import React from 'react'
import classes from './Homepage.module.scss'
import Card from '../../components/Cards/Card'
import { Link } from 'react-router-dom'

function PopularCourses({ courses }) {
    return (
        <>
        <h2 className={classes.section__title__course}>Our Popular <span>Courses</span></h2>
        <section className={classes.popular__courses}>
            <div className={classes.popular__courses__container}>
                <div className={classes.popular__courses__container__card}>
                    {
                        courses.map(course => (
                            <Card key={course._id} course={course} />
                        ))
                    }
                    {
                        courses.map(course => (
                            <Card key={course._id} course={course} />
                        ))
                    }
                </div>
                <div className={classes.popular__courses__container__card__viewMore}>
                        <Link to="/courses">
                            View More
                        </Link>
                </div>
            </div>
        </section>
    </>
    )
}

export default PopularCourses
