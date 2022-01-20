import React from 'react'
import classes from './Blogpage.module.scss'
import { Link } from 'react-router-dom';

function CurrentBlog({ blog }) {
    const { _id, category, name, image, description, createdAt } = blog;
    let actualDate = String(new Date(createdAt)).split(" ");
    return (
        <div className={classes.currentBlog}>
        <div className={classes.currentBlog__img}>
            <img src={`${image}`} />
        </div>
        <div className={classes.currentBlog__content}>
            <p className={classes.currentBlog__content__uploadedTime}>{actualDate[2] + ' ' + actualDate[1] + ', ' + actualDate[3]}</p>
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
