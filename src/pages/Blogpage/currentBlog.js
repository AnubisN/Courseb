import React from 'react'
import classes from './Blogpage.module.scss'
import { Link } from 'react-router-dom';

function CurrentBlog({ blog }) {
    const { _id, category, name, image, description } = blog;
    return (
        <div className={classes.currentBlog}>
        <div className={classes.currentBlog__img}>
            <img src={`${image}`} />
        </div>
        <div className={classes.currentBlog__content}>
            <p className={classes.currentBlog__content__uploadedTime}>29 july, 2021</p>
            <h2 className={classes.currentBlog__content__title}>{name}</h2>
            <p className={classes.currentBlog__content__tag}>{category}</p>
            <p className={classes.currentBlog__content__desc}>
                {description.slice(0,700) + '...'}
            </p>
            <Link className={classes.currentBlog__content__link} to={`/blogs/${_id}`}>Contine Reading</Link>
        </div>
    </div>
    )
}

export default CurrentBlog
