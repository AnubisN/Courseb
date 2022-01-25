import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import classes from './courseSingle.module.scss'
import { AiFillStar } from 'react-icons/ai';
import Button from '../../components/Button/Button';
import Container from '../../components/Container';
import { useParams } from 'react-router-dom';
import { listCourseDetails } from '../../actions/courseActions';

function CourseSinglePage() {
    let params = useParams();
    const dispatch = useDispatch()
    const courseDetails = useSelector(state => state.courseDetails)
    const { loading, error, course} = courseDetails

    useEffect(() => {
        dispatch(listCourseDetails(params.id))
    },[dispatch, params])

    return (
        <>
            {
                   loading ? <h2>Loading...</h2>
                   : error ? <h3>{error}</h3>
                   :<div className={classes.container}>
                    <div className={classes.container__img}>
                        <img src={`${course.image}`} alt="Course image" />
                    </div>
                    <div className={classes.container__img__cover}>
                        <Container>
                            <div className={classes.course__container}>
                                <h2 className={classes.course__container__title}>{course.name}</h2>
                                
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
                                <p className={classes.course__container__price}>{"Rs. "+ course.price}</p>
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
                                {course.description}
                            </p>
                        </div>
    
                        <div className={classes.course__content__skills}>
                            <h2 className={classes.course__content__title}>Skills gained</h2>
                            <ul>
                                { 
                                    course.skills 
                                    ? course.skills.split(".").map(el => 
                                        (el.length != 0) ? <li>{el}</li> : null) 
                                    : null
                                }
                            </ul>
                        </div>
    
                        <div className={classes.course__content__requirements}>
                            <h2 className={classes.course__content__title}>Requirements</h2>
                            <ul>
                            { 
                                course.requirements 
                                ? course.requirements.split(".").map(el => 
                                        (el.length != 0) ? <li>{el}</li> : null) 
                                : null
                            }
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
            }
        </>
    )
}

export default CourseSinglePage
