import React, {useState, useEffect} from 'react';
import classes from './enrolledcourses.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { listEnrolledCourses } from '../../actions/courseActions';
import Alert from '../../components/Alert/Alert';
import Loader from '../../components/Loader/loader';
import { useNavigate, Link } from 'react-router-dom';
import EnrolledCourse from '../../components/EnrolledCourse/enrolledCourse';

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
                <EnrolledCourse course={course} key={idx} />
              ))
          }
      </section>
  )
}

export default EnrolledCourses;
