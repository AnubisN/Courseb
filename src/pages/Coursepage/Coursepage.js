import React, {useState, useEffect} from 'react'
import axios from 'axios'
import classes from './course.module.scss'
import Container from '../../components/Container'
import Card from '../../components/Cards/Card'
import { AiFillCaretDown } from 'react-icons/ai'


function Coursepage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function fetchCourses() {
            const { data } = await axios.get('/api/courses/')
            setCourses(data);
        }

        fetchCourses();
    }, [])


    return (
        <div className={classes.container}>
            <div className={classes.course__categories}>
                <p>Categories</p>
                <div className={classes.course__categories__icon}>
                 <AiFillCaretDown />
                </div>
            </div>
            <div className={classes.course__container}>
                {  courses.map(course => (
                        <Card key={course._id} course={course} />
                    ))
                } 
                 {  courses.map(course => (
                        <Card key={course._id} course={course} />
                    ))
                } 
            </div>
        </div>
    )
}

export default Coursepage
