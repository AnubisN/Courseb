import React from 'react'
import classes from './index.module.scss'
import { AiOutlineArrowUp } from 'react-icons/ai'

function FAQCard({ faq }) {
    const { question, answer } = faq;
    return (
        <div className={classes.faqCard}>
            <div className={classes.faqCard__container}>
                <div className={classes.faqCard__container__content}>
                    <h3 className={classes.faqCard__title}>
                        {question}
                    </h3>
                    <p className={classes.faqCard__answer}>
                        {answer}
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
