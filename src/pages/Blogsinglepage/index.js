import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import classes from './blogsinglepage.module.scss';
import { useParams } from 'react-router-dom';
import { listBlogDetail } from '../../actions/blogActions';
import Alert from '../../components/Alert/Alert'
import Loader from '../../components/Loader/loader';

function BlogSinglePage() {
    let params = useParams();
    const dispatch = useDispatch()
    const blogDetails = useSelector(state => state.blogDetails)
    const { loading, error, blog} = blogDetails
    const { user } = blog

    useEffect(() => {
        dispatch(listBlogDetail(params.id))
    },[dispatch, params])

    let actualDate = String(new Date(blog.createdAt)).split(" ");

    return (
        <>
        {
            loading ? <Loader />
            : error ? <Alert message={error} variant='danger'/>
            :
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
                        <img src={`${user.profilePicture}`} />
                    </div>
                    <div className={classes.blog__container__description__author__details}>
                        <p>Written by</p>
                        <p className={classes.blog__container__description__author__details__name}>{user.username == "courseb" ? "Courseb" : user.first_name + " " + user.last_name}</p>
                        <p>{user.username == "courseb" ? "Admin" : user.job}</p>
                    </div>
                </div>
            </div>
        </section>
        }    
        </>
    )
}

export default BlogSinglePage
