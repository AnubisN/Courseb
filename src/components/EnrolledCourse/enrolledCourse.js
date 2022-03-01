import React, {useState, useEffect, useRef} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import classes from  './../../pages/EnrolledCoursesPage/enrolledcourses.module.scss'
import ReviewModal from '../ReviewModal/reviewModal'

function EnrolledCourse({ course }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isModelOpen, setIsModelOpen] = useState(false)
    const ref = useRef();

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
          if(isMenuOpen && ref.current && !ref.current.contains(e.target)) {
            setIsMenuOpen(false);
          }
        };
        document.addEventListener("click", checkIfClickedOutside);
        return () => {
          document.removeEventListener("click",checkIfClickedOutside);
        }
      }, [isMenuOpen])

    return (
        <div key={course._id} className={classes.course}>
            <div className={classes.course__info}>
                <div className={classes.course__info__img}>
                    <img src={`${course.course.image}`} alt={`${course.course.name}`}/>
                </div>

                <div className={classes.course__info__title}>
                    <h3><Link to={`/coursepost/${course.course._id}`}>{course.course.name}</Link></h3>
                    <p>Enrolled on: {course.createdAt}</p>
                </div>
            
            </div>
            <div className={classes.menu} ref={ref}>
                <AiOutlineMenu onClick={()=> setIsMenuOpen(!isMenuOpen)} />
                <div className={classes.menu__container}>
                    {
                        isMenuOpen && (
                            <ul className={classes.menu__container__ul}>
                                <li onClick={() => setIsModelOpen(!isModelOpen)}>Rate Course</li>
                            </ul>
                        )    
                    }
                </div>
            </div>
            {
                isModelOpen && <ReviewModal course={course} onClose = {() => setIsModelOpen(false)} />
            }
        </div>
    )
}

export default EnrolledCourse