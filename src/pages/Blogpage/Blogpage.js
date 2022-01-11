import axios from 'axios';
import React, {useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import Card from '../../components/Cards/Card'
import Container from '../../components/Container';
import classes from './Blogpage.module.scss'
import CurrentBlog from './currentBlog';
import NextBlog from './nextBlog';

function Blogpage() {
    const [blogs, setBlogs] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        async function fetchBlogs() {
            const { data } = await axios.get(`/api/blogs/`)
            setBlogs(data);
        }
        fetchBlogs();   
    }, [])

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
    )
}

export default Blogpage
