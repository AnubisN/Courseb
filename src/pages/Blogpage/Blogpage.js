import React, {useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector} from 'react-redux';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import classes from './Blogpage.module.scss'
import CurrentBlog from './currentBlog';
import NextBlog from './nextBlog';
import { listBlogs } from '../../actions/blogActions';

function Blogpage() {
    const blogList = useSelector(state => state.blogList)
    const { error, loading, blogs} = blogList 
    const [pageNumber, setPageNumber] = useState(0);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listBlogs())
    }, [dispatch])

    const blogsPerPage = 3;
    const pagesVisited = pageNumber * blogsPerPage;

    const displayBlogs = blogs
        .slice(pagesVisited, pagesVisited + blogsPerPage)
        .map((blog, i) => {
            return (i == 0) 
            ? <CurrentBlog key={blog._id} blog={blog} />
            : <NextBlog key={blog._id} blog={blog} />
        })
    
    const pageCount = Math.ceil(blogs.length / blogsPerPage)
    
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }


    return (
        <>
            {   loading ? <h2>Loading...</h2>
                : error ? <h3>{error}</h3>
                :
                <div className={classes.container}>
                {displayBlogs}
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

export default Blogpage
