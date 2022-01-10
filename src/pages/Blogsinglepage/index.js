import React, {useState, useEffect} from 'react'
import classes from './blogsinglepage.module.scss';
import axios from 'axios'
import { useParams } from 'react-router-dom';

function BlogSinglePage() {
    let params = useParams();
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        async function fetchBlog() {
            const { data } = await axios.get(`/api/blogs/${params.id}`)
            setBlog(data);
        }
        fetchBlog();   
    },[])

    return (
        <>
            <section className={classes.blog__container}>
                <div className={classes.blog__container__title}>
                    <p className={classes.blog__container__title__release__date}>
                        Published January 25, 2021
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
