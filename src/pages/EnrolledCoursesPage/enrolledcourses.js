import React, {useState, useEffect} from 'react';
import classes from './enrolledcourses.module.scss'
import { AiOutlineMenu } from 'react-icons/ai'
import axios from 'axios';
import { token } from '../Profilepage/token'

function EnrolledCourses() {
    const [enrolledCourses, setEnrolledCourses] = useState([])
    useEffect(() => {
        const config = {
            headers: {
                "Authorization": "Bearer " + token
            }
        }
        async function fetchData() {
            const { data } = await axios.get(`api/users/getEnrolledCourses/6/`, config)
            let newArr = data.res;
            let dataArr = []
            newArr.map(el => 
                dataArr.push(...el)
            )
            setEnrolledCourses(dataArr)
        }
        fetchData();   
    }, [])
    return (
      <section className={classes.container}>
          {
              enrolledCourses.length == 0 ?
              <h2>You have not enrolled to any courses</h2>
              :
              enrolledCourses.map((course,idx) => (
                <div key={course._id} className={classes.course}>
                    <div className={classes.course__info}>
                        <div className={classes.course__info__img}>
                            <img src={`${course.image}`} alt={`${course.name}`}/>
                        </div>

                        <div className={classes.course__info__title}>
                            <h3>{course.name}</h3>
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
