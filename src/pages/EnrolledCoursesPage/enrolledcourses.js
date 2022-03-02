import React, {useState, useEffect} from 'react';
import classes from './enrolledcourses.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { listEnrolledCourses } from '../../actions/courseActions';
import Alert from '../../components/Alert/Alert';
import Loader from '../../components/Loader/loader';
import { useNavigate } from 'react-router-dom';
import EnrolledCourse from '../../components/EnrolledCourse/enrolledCourse';
import DropdownButton from '../../components/DropdownButton/dropdownButton';
import { ENROLLED_COURSE_SORT_BY_RATING,ENROLLED_COURSE_SORT_BY_ENROLLED_DATE } from '../../constants/courseConstants';

function EnrolledCourses() {
    let navigate = useNavigate();
    const [selected, setSelected] = useState("Sort By")
    const enrolledCourses = useSelector(state => state.enrolledCourses)
    const {error, loading, courses} = enrolledCourses
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const dispatch = useDispatch()
    useEffect(() => {
        if(!userInfo) {
            navigate("/login");
        }
        else if(selected === "Rating") {
            dispatch({type:ENROLLED_COURSE_SORT_BY_RATING})
        }
        else if(selected === "Enrolled Date") {
            dispatch({type:ENROLLED_COURSE_SORT_BY_ENROLLED_DATE})
        }
        else {
            dispatch(listEnrolledCourses())
        }
    }, [dispatch,selected])
    return (
      <section className={classes.container}>
          {loading && <Loader />}
          {error && <Alert message={error} variant='danger'/>}
          {
              courses.length > 0 && <DropdownButton selected={selected} setSelected={setSelected} />
          }
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
