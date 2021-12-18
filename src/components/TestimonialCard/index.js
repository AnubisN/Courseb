import React from 'react'
import classes from './index.module.scss'
import { AiFillStar } from 'react-icons/ai';

function TestimonialCard() {

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
                    Very good product at the end and iam surprised by the effort providedy by th team Very good product at the end and iam surprised by the effort providedy by th team
                </p>
                <div className={classes.testimonial__card__content__users}>
                    <div className={classes.testimonial__card__content__users__img}>
                        <img src="amyGoldberg.jpg"/>
                    </div>
                    <div className={classes.testimonial__card__content__users__description}>
                        <p className={classes.testimonial__card__content__users__description__name}>
                            Amy Goldberg
                        </p>
                        <p className={classes.testimonial__card__content__users__description__profession}>
                            UI / UX Designer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
