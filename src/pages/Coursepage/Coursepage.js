import React, {useState, useEffect} from 'react'
import axios from 'axios'
import classes from './course.module.scss'
import ReactPaginate from 'react-paginate';
import Card from '../../components/Cards/Card'
import { AiFillCaretDown, AiFillCaretLeft, AiFillCaretRight  } from 'react-icons/ai'


function Coursepage() {
    const [courses, setCourses] = useState([]); 
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        async function fetchCourses() {
            const { data } = await axios.get('/api/courses/')
            setCourses(data);
        }

        fetchCourses();
    }, [])

    const coursePerPage = 6;
    const pagesVisited = pageNumber * coursePerPage;

    const displayCourses = courses
        .slice(pagesVisited, pagesVisited + coursePerPage)
        .map(course => (
            <Card key={course._id} course={course} />
        ))
    
    const pageCount = Math.ceil(courses.length / coursePerPage)
    
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <div className={classes.container}>
            <div className={classes.course__categories}>
                <p>Categories</p>
                <div className={classes.course__categories__icon}>
                 <AiFillCaretDown />
                </div>
            </div>
            <div className={classes.course__container}>
               {displayCourses}
            </div>

            <ReactPaginate 
                previousLabel={<AiFillCaretLeft />}
                nextLabel = {<AiFillCaretRight />}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={classes.paginationBttns}
                previousLinkClassName={classes.previousBttn}
                nextLinkClassName={classes.nextBttn}
                disabledClassName={classes.paginationDisabled}
                activeClassName={classes.paginationActive}
            />
        </div>
    )
}

export default Coursepage
