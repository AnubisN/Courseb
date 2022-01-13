import React, {useState} from 'react'
import classes from './index.module.scss'
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineClose } from 'react-icons/ai'

function FAQCard({ faq }) {
    const [open, setOpen] = useState(false);

    const { question, answer } = faq;
    return (
        <section>
            <div className={classes.faqCard}>
                <div className={classes.faqCard__container}>
                    <div className={classes.faqCard__container__content}>
                        <h3 className={classes.faqCard__title}>
                            {question}
                        </h3>
                        {
                            (open) 
                            ? <p>{answer}</p>
                            : null
                        }
                    </div>
                    <div className={classes.faqCard__container__content__icon}>
                        {
                            (open)
                            ? <AiOutlineArrowUp onClick={() => setOpen(!open)} />
                            : <AiOutlineArrowDown onClick={() => setOpen(!open)} />
                        }
                    </div>
                    
                </div>
                
            </div>
        </section>
    )
}

export default FAQCard
