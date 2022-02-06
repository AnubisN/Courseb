import React, { useEffect, useState } from 'react';
import classes from './coursepost.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { coursePostsAction } from '../../actions/courseActions';
import Loader from '../../components/Loader/loader';
import Alert from '../../components/Alert/Alert';
import Container from '../../components/Container';

function CoursePostPage() {
    let params = useParams();
    let navigate = useNavigate();
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const enrolledCourses = useSelector(state => state.enrolledCourses)
    const [message, setMessage] = useState('');
    const coursePosts = useSelector(state => state.coursePosts)
    const {loading, error, posts} = coursePosts
    const dispatch = useDispatch()

    useEffect(() => {
        if(!userInfo) {
            navigate("/login")
        }
        dispatch(coursePostsAction(params.id))
    },[dispatch, params, userInfo]);

    return(
        <>
        {
            loading ? <Loader />
            : error ? <Alert message={error} variant='danger'/>
            : posts.length == 0 ? <Alert message="No posts currently. Please check later" variant='danger'/> :   
            <div className={classes.container}>
            <div className={classes.container__img}>
                <img src={`${posts.length > 0 ? posts[0].course.image : ''}`} alt="Course image" />
            </div>

            <div className={classes.container__course}>
                <Container>
                    <h2 className={classes.container__course__title}>{posts.length > 0 ? posts[0].course.name : null}</h2>
                </Container>
            </div>

            <div className={classes.post__container}>
                {
                    posts.map(el => (
                        <div key={el.id} className={classes.posts}>
                        <div className={classes.posts__content}>
                            <div className={classes.posts__description}>
                                <p>
                                    {el.description}
                                </p>
                            </div>
                            <div className={classes.posts__detail}>
                                <div className={classes.posts__detail__user}>
                                    <div className={classes.posts__detail__user__img}>
                                        <img src="/logo.png" />
                                    </div>
                                    <div className={classes.post__detail__posted}>
                                        <p><span className={classes.admin}>Courseb</span> |  {String(new Date(el.createdAt)).split(" ")[2] + " " + String(new Date(el.createdAt)).split(" ")[1] + " " + String(new Date(el.createdAt)).split(" ")[3]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }

            </div>
        </div>
        }
        </>
    );
}

export default CoursePostPage;
