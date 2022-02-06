import React, {useState, useEffect} from 'react';
import classes from './enrolledcourses.module.scss'
import { AiOutlineMenu } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { listEnrolledCourses } from '../../actions/courseActions';
import Alert from '../../components/Alert/Alert';
import Loader from '../../components/Loader/loader';
import { useNavigate, Link } from 'react-router-dom';

function EnrolledCourses() {
    let navigate = useNavigate();
    const enrolledCourses = useSelector(state => state.enrolledCourses)
    const {error, loading, courses} = enrolledCourses
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const dispatch = useDispatch()
    useEffect(() => {
        if(!userInfo) {
            navigate("/login");
        }
        dispatch(listEnrolledCourses())
    }, [dispatch])
    return (
      <section className={classes.container}>
          {loading && <Loader />}
          {error && <Alert message={error} variant='danger'/>}
          {
              courses.length == 0 ?
              <h2>You have not enrolled to any courses</h2>
              :
              courses.map((course,idx) => (
                <div key={course._id} className={classes.course}>
                    <div className={classes.course__info}>
                        <div className={classes.course__info__img}>
                            <img src={`${course.course.image}`} alt={`${course.course.name}`}/>
                        </div>

                        <div className={classes.course__info__title}>
                            <h3><Link to={`/coursepost/${course.course._id}`}>{course.course.name}</Link></h3>
                        </div>
                    
                    </div>
                    <div className={classes.menu}>
                        <AiOutlineMenu />
                    </div>
                </div>
              ))
          }
      </section>
  )
}

export default EnrolledCourses;
