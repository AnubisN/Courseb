import React from 'react'
import classes from './courseSingle.module.scss'
import { AiFillStar } from 'react-icons/ai';
import Button from '../../components/Button/Button';
import Container from '../../components/Container';

function CourseSinglePage() {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.container__img}>
                    <img src="python.jpg" alt="Course Image" />
                </div>
                <div className={classes.container__img__cover}>
                    <Container>
                        <div className={classes.course__container}>
                            <h2 className={classes.course__container__title}>Python: From Zero to Hero</h2>
                            
                            <div className={classes.course__container__reviews}>
                                <div className={classes.course__container__reviews__stars}>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                                <div className={classes.course__container__reviews__numberOfRatings}>
                                    <p>| 1000 ratings</p>
                                </div>
                            </div>
                            <p className={classes.course__container__price}>Rs.10000</p>
                            <Button 
                                className={classes.button}
                                type="primary__body"
                            >
                            Enroll Now
                            </Button>
                        </div>

                    </Container>
                </div>

               <Container>
                   <div className={classes.course__content}>
                        <h2 className={classes.course__content__title}>Course Description</h2>
                        <p className={classes.course__content__description}>
                            Machine learning is the science of getting computers to act without being explicitly programmed. In the past decade, machine learning has given us self-driving cars, practical speech recognition, effective web search, and a vastly improved understanding of the human genome. Machine learning is so pervasive today that you probably use it dozens of times a day without knowing it. Many researchers also think it is the best way to make progress towards human-level AI. In this class, you will learn about the most effective machine learning techniques, and gain practice implementing them and getting them to work for yourself. More importantly, you'll learn about not only the theoretical underpinnings of learning, but also gain the practical know-how needed to quickly and powerfully apply these techniques to new problems. Finally, you'll learn about some of Silicon Valley's best practices in innovation as it pertains to machine learning and AI.

                            This course provides a broad introduction to machine learning, datamining, and statistical pattern recognition. Topics include: (i) Supervised learning (parametric/non-parametric algorithms, support vector machines, kernels, neural networks). (ii) Unsupervised learning (clustering, dimensionality reduction, recommender systems, deep learning). (iii) Best practices in machine learning (bias/variance theory; innovation process in machine learning and AI). The course will also draw from numerous case studies and applications, so that you'll also learn how to apply learning algorithms to building smart robots (perception, control), text understanding (web search, anti-spam), computer vision, medical informatics, audio, database mining, and other areas.
                        </p>
                   </div>

                   <div className={classes.course__content__skills}>
                     <h2 className={classes.course__content__title}>Skills gained</h2>
                     <ul>
                         <li>Become a web developer</li>
                         <li>Learn the theory behind machine learning</li>
                         <li>Apply learned thoeries </li>
                     </ul>
                   </div>

                   <div className={classes.course__content__requirements}>
                     <h2 className={classes.course__content__title}>Requirements</h2>
                     <ul>
                         <li>You will need a PC with internet connection</li>
                         <li>Programming knowledge of python</li>
                         <li>Basic HTML, CSS knowledge</li>
                     </ul>
                   </div>

                   <div className={classes.course__content}>
                    <h2 className={classes.course__content__title}>Instructor</h2>
                    <div className={classes.course__instructor}>
                        <div className={classes.course__instructor__img}>
                            <img src="amyGoldberg.jpg" />
                        </div>
                        <div className={classes.course__instructor__details}>
                            <p className={classes.course__instructor__details__name}>Amy Maharjan</p>
                            <p className={classes.course__instructor__details__status}>Senior Backend Developer, LearpFrog</p>
                        </div>
                    </div>
                   </div>

                   <div className={classes.course__content}>
                        <h2 className={classes.course__content__title}>Reviews</h2>

                        <div className={classes.course__review__section}>
                            <div className={classes.review__container}>
                                <div className={classes.review__container__user__img}>
                                    <img src="amyGoldberg.jpg" />
                                </div>

                                <div className={classes.review__container__user__content}>
                                    <p className={classes.review__container__user__content__name}>Nilam Khatri</p>
                                    <div className={classes.review__container__user__content__reviews}>
                                        <div className={classes.review__container__user__content__reviews__star}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        </div>
                                        <div className={classes.review__container__user__content__reviews__timeline}>
                                            <p>a month ago</p>
                                        </div>
                                    </div>
                                    <p className={classes.review__container__user__content__reviews__desc}>
                                    Hi, This is one of the best Adobe XD course in udemy.
                                    He is not teaching but after finishing this course we are ready to do real projects. 
                                    That's the magic of this men, Thank you sir.
                                    </p>
                                </div>
                            </div>
                            <div className={classes.review__container}>
                                <div className={classes.review__container__user__img}>
                                    <img src="amyGoldberg.jpg" />
                                </div>

                                <div className={classes.review__container__user__content}>
                                    <p className={classes.review__container__user__content__name}>Nilam Khatri</p>
                                    <div className={classes.review__container__user__content__reviews}>
                                        <div className={classes.review__container__user__content__reviews__star}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        </div>
                                        <div className={classes.review__container__user__content__reviews__timeline}>
                                            <p>a month ago</p>
                                        </div>
                                    </div>
                                    <p className={classes.review__container__user__content__reviews__desc}>
                                    Hi, This is one of the best Adobe XD course in udemy.
                                    He is not teaching but after finishing this course we are ready to do real projects. 
                                    That's the magic of this men, Thank you sir.
                                    </p>
                                </div>
                            </div>
                            <div className={classes.review__container}>
                                <div className={classes.review__container__user__img}>
                                    <img src="amyGoldberg.jpg" />
                                </div>

                                <div className={classes.review__container__user__content}>
                                    <p className={classes.review__container__user__content__name}>Nilam Khatri</p>
                                    <div className={classes.review__container__user__content__reviews}>
                                        <div className={classes.review__container__user__content__reviews__star}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        </div>
                                        <div className={classes.review__container__user__content__reviews__timeline}>
                                            <p>a month ago</p>
                                        </div>
                                    </div>
                                    <p className={classes.review__container__user__content__reviews__desc}>
                                    Hi, This is one of the best Adobe XD course in udemy.
                                    He is not teaching but after finishing this course we are ready to do real projects. 
                                    That's the magic of this men, Thank you sir.
                                    </p>
                                </div>
                            </div>
                            <Button 
                                className={classes.button}
                                type="secondary"
                            >
                            More Reviews
                            </Button>
                        </div>
                   </div>
                
               </Container>
            </div>   
        </>
    )
}

export default CourseSinglePage
