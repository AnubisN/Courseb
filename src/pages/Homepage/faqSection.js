import React from 'react'
import classes from './Homepage.module.scss'
import FAQCard from '../../components/faqCard'

function FAQSection({ faqs }) {
    return (
        <section className={classes.faqs}>
            <h2 className={classes.section__title}>Frequently Asked <span>Questions</span></h2>
                
            <div className={classes.faqs__container}>
                {
                    faqs.map(faq => (
                        <FAQCard key={faq._id}  faq={faq}/>
                    ))
                }
            </div>
        </section>
    )
}

export default FAQSection
