import React from 'react'
import classes from './index.module.scss'
import { AiFillStar } from 'react-icons/ai';

function TestimonialCard({ testimo }) {
    const {comment, image, rating, userName, currentJob} = testimo;
    return (
        <div className={classes.testimonial__card}>
            <div className={classes.testimonial__card__content}>
                <div className={classes.testimonial__card__content__stars}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <p className={classes.testimonial__card__content__description}>
                    {comment}
                </p>
                <div className={classes.testimonial__card__content__users}>
                    <div className={classes.testimonial__card__content__users__img}>
                        <img src={`${image}`}/>
                    </div>
                    <div className={classes.testimonial__card__content__users__description}>
                        <p className={classes.testimonial__card__content__users__description__name}>
                            {userName}
                        </p>
                        <p className={classes.testimonial__card__content__users__description__profession}>
                            {currentJob}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
