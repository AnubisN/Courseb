import React from 'react'
import Button from '../Button/Button'
import classes from "./Card.module.scss"
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom'

function BlogCard({ blog }) {
    const { category, name, image, description } = blog;
    return(
        <div className={classes.blogCard}>
            <div className={classes.card__image}>
                <img src={`${image}`}/>
            </div>
            <div className={classes.card__content}>
                <p className={classes.card__tag}>
                    {category}
                </p>
                <h3 className={classes.card__content__title}>
                    {name}
                </h3>
                <p className={classes.card__content__desc}>
                    {description.slice(0,110) + "...."}
                </p>
            </div>
        </div>
    )
}

function CourseCard({ course }) {
    const {_id, name, description, isAvailable, image, price} = course;
    return (
        <Link className={classes.courseLink} to={`/courses/${_id}`}>
            <div className={ classes.card}>
                <div className={classes.card__image}>
                    <img src={`${image}`}/>
                </div>
                <div className={classes.card__content}>
                    <h3 className={classes.card__content__title}>
                        {name}
                    </h3>
                    <p className={classes.card__content__desc}>
                        {description.slice(0,70) + "....."}
                    </p>
                    <div className={classes.card__content__stars}>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                    </div>
                    <Button type="primary__small__body">
                            Learn More   
                    </Button>
                </div>
            </div>
        </Link>
    )
}

function Card({ blogCard, course, blog }) {
    if(blogCard) {
        return <BlogCard blog={blog}/>
    }
    return <CourseCard course={course}/>
    
}

export default Card
