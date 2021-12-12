import React from 'react'
import classes from './index.module.scss'
import { AiOutlineArrowUp } from 'react-icons/ai'

function FAQCard() {
    return (
        <div className={classes.faqCard}>
            <div className={classes.faqCard__container}>
                <div className={classes.faqCard__container__content}>
                    <h3 className={classes.faqCard__title}>
                        How do I enroll for the course?
                    </h3>
                    <p className={classes.faqCard__answer}>
                        You just to need make payment for the course during checkout to enroll a course.
                    </p>
                </div>
                <div className={classes.faqCard__container__content__icon}>
                    <AiOutlineArrowUp />
                </div>
                
            </div>
            
        </div>
    )
}

export default FAQCard
