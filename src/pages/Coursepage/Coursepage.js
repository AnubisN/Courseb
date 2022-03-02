import React, {useState, useEffect} from 'react'
import classes from './course.module.scss'
import ReactPaginate from 'react-paginate';
import Card from '../../components/Cards/Card'
import { AiFillCaretLeft, AiFillCaretRight  } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { listCourse, listCourseCategory } from '../../actions/courseActions';
import Alert from '../../components/Alert/Alert'
import Loader from '../../components/Loader/loader';
import CourseSort from './courseSort';
import { COURSE_LIST_SORT } from '../../constants/courseConstants';

function Coursepage() {
    const [selected, setSelected] = useState("Sort By")
    const coursesList = useSelector(state => state.courseList)
    const courseCategory = useSelector(state => state.courseCategory)
    const { category } = courseCategory
    const { error, loading, courses, sortedCourses} = coursesList 
    const [message, setMessage] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (selected === "Sort By") {
            dispatch(listCourse())
            dispatch(listCourseCategory())
        }
        else if (selected !== "Sort By") {
            dispatch({type: COURSE_LIST_SORT, payload: selected})
        } 
    }, [dispatch, selected])

    const coursePerPage = 6;
    const pagesVisited = pageNumber * coursePerPage;

    const displayCourses = sortedCourses 
        ? sortedCourses.slice(pagesVisited, pagesVisited + coursePerPage)
        .map(course => (
            <Card key={course._id} course={course} />
        )) 
        : null
    
    const pageCount =  courses ? Math.ceil(courses.length / coursePerPage) : 0
    
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <>
            {
                loading ? <Loader />
                : error ? <Alert message={error} variant='danger'/>
                :  
                <div className={classes.container}>
                <CourseSort selected={selected} setSelected={setSelected} category={category} />
                    <div className={classes.course__container}>
                    {
                        sortedCourses.length === 0 
                            ? <h4 className={classes.missing_title}>Courses for '{selected}' are not currently available</h4>
                            : displayCourses
                    }
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
            }
        </>
    )
}

export default Coursepage
