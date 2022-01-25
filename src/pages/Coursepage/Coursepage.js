import React, {useState, useEffect} from 'react'
import classes from './course.module.scss'
import ReactPaginate from 'react-paginate';
import Card from '../../components/Cards/Card'
import { AiFillCaretDown, AiFillCaretLeft, AiFillCaretRight  } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { listCourse } from '../../actions/courseActions';

function Coursepage() {
    const coursesList = useSelector(state => state.courseList)
    const { error, loading, courses} = coursesList 
    const [pageNumber, setPageNumber] = useState(0);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listCourse())
    }, [dispatch])

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
        <>
            {
                loading ? <h2>Loading...</h2>
                : error ? <h3>{error}</h3>
                :  <div className={classes.container}>
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
            }
        </>
    )
}

export default Coursepage
