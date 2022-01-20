import React from 'react'
import classes from './Blogpage.module.scss'
import { Link } from 'react-router-dom'

function NextBlog({ blog }) {
    const { _id,category, name, image, description, createdAt } = blog;
    let actualDate = String(new Date(createdAt)).split(" ");
    return (
        <div className={classes.nextBlog}>
        <div className={classes.nextBlog__img}>
            <img src={`${image}`} />
        </div>
        <div className={classes.nextBlog__content}>
            <p className={classes.nextBlog__content__uploadedTime}>{actualDate[2] + ' ' + actualDate[1] + ', ' + actualDate[3]}</p>
            <h2 className={classes.nextBlog__content__title}>{name}</h2>
            <p className={classes.nextBlog__content__tag}>{category}</p>
            <p className={classes.nextBlog__content__desc}>
                {description.slice(0,500) + '...'}
            </p>
            <Link className={classes.currentBlog__content__link} to={`/blogs/${_id}`}>Contine Reading</Link>
        </div>
    </div>
    )
}

export default NextBlog
