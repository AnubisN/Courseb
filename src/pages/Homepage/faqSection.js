import React from 'react'
import classes from './Homepage.module.scss'
import FAQCard from '../../components/faqCard'

function FAQSection() {
    return (
        <section className={classes.faqs}>
            <h2 className={classes.section__title}>Frequently Asked <span>Questions</span></h2>
                
            <div className={classes.faqs__container}>
                <FAQCard />
                <FAQCard />
                <FAQCard />
                <FAQCard />
                <FAQCard />
            </div>
        </section>
    )
}

export default FAQSection
