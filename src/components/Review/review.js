import React from 'react'
import classes from '../../pages/Coursesinglepage/courseSingle.module.scss'
import Rating from '../Rating/rating'

function diff_year_month_day(dt1, dt2) 
 {
 
    let time =(dt2.getTime() - dt1.getTime()) / 1000;
    let year  = Math.abs(Math.round((time/(60 * 60 * 24))/365.25));
    let month = Math.abs(Math.round(time/(60 * 60 * 24 * 7 * 4)));
    let days = Math.abs(Math.round(time/(3600 * 24)));

    if (year >= 1)
        return year + " year ago"
    
    if (month >= 1) 
        return  month + " month ago"

    return  days + " day ago"
   
 }

function Review({ review }) {
    const { user, name, rating, createdAt, comment } = review
    let actualDate = new Date(createdAt);
    let todayDate = new Date();
    const newTime = diff_year_month_day(actualDate,todayDate)
    return (
        <div className={classes.review__container}>
            <div className={classes.review__container__user__img}>
                <img src={`${user.profilePicture}`} />
            </div>

            <div className={classes.review__container__user__content}>
                <p className={classes.review__container__user__content__name}>{name}</p>
                <div className={classes.review__container__user__content__reviews}>
                    <div className={classes.review__container__user__content__reviews__star}>
                        <Rating value={rating}  color={'#FFA500'} />
                    </div>
                    <div className={classes.review__container__user__content__reviews__timeline}>
                        <p> | {newTime}</p>
                    </div>
                </div>
                {
                    comment && <p className={classes.review__container__user__content__reviews__desc}>
                        {comment}
                    </p>
                }
            </div>
        </div>
    )
}

export default Review