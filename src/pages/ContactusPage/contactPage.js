import React from 'react'
import classes from './contact.module.scss'

function ContactUsPage() {
    return (
        <section>
            <div className={classes.container}>
                <div className={classes.container__contactInfo}>
                    <div>
                        <h2>Contact Info</h2>
                        <ul className={classes.container__contactInfo__info}>
                            <li>
                                <span><img src="location.png"/></span>
                                <span>2912 Meadowbrook Road<br/>
                                    Los Angeles, CA <br/>
                                    90017
                                </span>
                            </li>
                            <li>
                                <span><img src="mail.png"/></span>
                                <span>lorem@ipsum.com</span>
                            </li>
                            <li>
                                <span><img src="call.png"/></span>
                                <span>310-286-1623</span>
                            </li>
                        </ul>
                    </div>

                    <ul className={classes.container__contactInfo__sci}>
                        <li><a><img src="1.png"/></a></li>
                        <li><a><img src="2.png"/></a></li>
                        <li><a><img src="3.png"/></a></li>
                        <li><a><img src="4.png"/></a></li>
                        <li><a><img src="5.png"/></a></li>
                    </ul>
                </div>
                <div className={classes.container__contactForm}>
                    <h2>Send a Message</h2>
                    <div className={classes.container__contactForm__formBox}>
                        <div className={classes.container__contactForm__formBox__inputBox__w50}>
                            <input text="text" required/>
                            <span>First Name</span>
                        </div>
                        <div className={classes.container__contactForm__formBox__inputBox__w50}>
                            <input text="text" required/>
                            <span>Last Name</span>
                        </div>
                        <div className={classes.container__contactForm__formBox__inputBox__w50}>
                            <input text="email" required/>
                            <span>Email Address</span>
                        </div>
                        <div className={classes.container__contactForm__formBox__inputBox__w50}>
                            <input text="text" required/>
                            <span>Mobile Number</span>
                        </div>
                        <div className={classes.container__contactForm__formBox__inputBox__w100}>
                            <textarea required></textarea>
                            <span>Write your message here...</span>
                        </div>
                        <div className={classes.container__contactForm__formBox__inputBox__w50}>
                            <input text="text" required/>
                            <span>First Name</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsPage
