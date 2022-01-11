import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Card from '../../components/Cards/Card'
import Container from '../../components/Container';
import classes from './Blogpage.module.scss'
import CurrentBlog from './currentBlog';
import NextBlog from './nextBlog';

function Blogpage() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function fetchBlogs() {
            const { data } = await axios.get(`/api/blogs/`)
            setBlogs(data);
        }
        fetchBlogs();   
    }, [])

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Blogs</h2>
            {
                blogs.map((blog,i) => (
                    (i == 0) 
                    ? <CurrentBlog key={blog._id} blog={blog}/>
                    : <NextBlog key={blog._id} blog={blog} />
                ))
            }
        </div>
    )
}

export default Blogpage
