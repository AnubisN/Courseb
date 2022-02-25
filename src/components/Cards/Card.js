import React from 'react'
import Button from '../Button/Button'
import classes from "./Card.module.scss"
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import Rating from '../Rating/rating';

function CourseCard({ course }) {
    const {_id, name, description, image, rating, numReviews} = course;
    return (
        <Link className={classes.courseLink} to={`/courses/${_id}`}>
            <div className={ classes.card}>
                <div className={classes.card__image}>
                    <img src={`${image}`}/>
                </div>
                <div className={classes.card__content}>
                    <h3 className={classes.card__content__title}>
                        {name.slice(0,40) + "...."}
                    </h3>
                    <p className={classes.card__content__desc}>
                        {description.slice(0,65) + "....."}
                    </p>
                    <div className={classes.card__content__stars}>
                        <Rating value={rating} text={`${numReviews} reviews`} color={'#FFA500'} />
                    </div>
                    <Button type="primary__small__body">
                        <Link to={`/courses/${_id}`}>
                            Learn More   
                        </Link>
                    </Button>
                </div>
            </div>
        </Link>
    )
}

function Card({ course }) {
    return <CourseCard course={course}/>
    
}

export default Card
