import React from 'react'
import Button from '../Button/Button'
import classes from "./Card.module.scss"
import { AiFillStar } from 'react-icons/ai';

function Card() {
    return (
        <div className={classes.card}>
            <div className={classes.card__image}>
                <img src="./webDevelopment.jpg"/>
            </div>
            <div className={classes.card__content}>
                <h3 className={classes.card__content__title}>
                    Web Design Fundamentals
                </h3>
                <p className={classes.card__content__desc}>
                Our latest web deisgn tips, insights, and resources are provided through out the web so the user can get easier with it...
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
    )
}

export default Card
