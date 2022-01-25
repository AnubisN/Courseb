import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import classes from './blogsinglepage.module.scss';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { listBlogDetail } from '../../actions/blogActions';

function BlogSinglePage() {
    let params = useParams();
    const dispatch = useDispatch()
    const blogDetails = useSelector(state => state.blogDetails)
    const { loading, error, blog} = blogDetails


    useEffect(() => {
        dispatch(listBlogDetail(params.id))
    },[dispatch, params])

    let actualDate = String(new Date(blog.createdAt)).split(" ");

    return (
        <>
            <section className={classes.blog__container}>
                <div className={classes.blog__container__title}>
                    <p className={classes.blog__container__title__release__date}>
                        Published on {actualDate[2] + ' ' + actualDate[1] + ', ' + actualDate[3]}
                    </p>
                    <h1 className={classes.blog__container__title__h2}>
                        {blog.name}
                    </h1>
                </div>

                <div className={classes.blog__container__image}>
                    <img src={`${blog.image}`} />
                </div>

                <div className={classes.blog__container__description}>
                    <p>{blog.description}</p>
                   
                    <div className={classes.blog__container__description__author}>
                        <div className={classes.blog__container__description__author__img}>
                            <img src="logo.png" />
                        </div>
                        <div className={classes.blog__container__description__author__details}>
                            <p>Written by</p>
                            <p className={classes.blog__container__description__author__details__name}>Coursly Nepal</p>
                            <p>Admin</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogSinglePage
