import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Card from '../../components/Cards/Card'
import Container from '../../components/Container';
import classes from './Blogpage.module.scss'

function Blogpage() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function fetchBlogs() {
            const { data } = await axios.get('/api/blogs/')
            setBlogs(data);
        }
        fetchBlogs();   
    }, [])

    return (
        <div className={classes.container}>
            <div className={classes.currentBlog}>
                <div className={classes.currentBlog__img}>
                    <img src="recordedSessions.jpg" />
                </div>
                <div className={classes.currentBlog__content}>
                    <p className={classes.currentBlog__content__uploadedTime}>29 july, 2021</p>
                    <h2 className={classes.currentBlog__content__title}>Six steps to conduct a successful usability test</h2>
                    <p className={classes.currentBlog__content__tag}>Quality Assurance</p>
                    <p className={classes.currentBlog__content__desc}>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </p>
                    <a className={classes.currentBlog__content__link}>Contine Reading</a>
                </div>
            </div>

            <div className={classes.nextBlog}>
                <div className={classes.nextBlog__img}>
                    <img src="guidedProjects.jpg" />
                </div>
                <div className={classes.nextBlog__content}>
                    <p className={classes.nextBlog__content__uploadedTime}>29 july, 2021</p>
                    <h2 className={classes.nextBlog__content__title}>Six steps to conduct a successful usability test</h2>
                    <p className={classes.nextBlog__content__tag}>Quality Assurance</p>
                    <p className={classes.nextBlog__content__desc}>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </p>
                    <a className={classes.nextBlog__content__link}>Contine Reading</a>
                </div>
            </div>

            <div className={classes.nextBlog}>
                <div className={classes.nextBlog__img}>
                    <img src="guidedProjects.jpg" />
                </div>
                <div className={classes.nextBlog__content}>
                    <p className={classes.nextBlog__content__uploadedTime}>29 july, 2021</p>
                    <h2 className={classes.nextBlog__content__title}>Six steps to conduct a successful usability test</h2>
                    <p className={classes.nextBlog__content__tag}>Quality Assurance</p>
                    <p className={classes.nextBlog__content__desc}>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </p>
                    <a className={classes.nextBlog__content__link}>Contine Reading</a>
                </div>
            </div>
        </div>
    )
}

export default Blogpage
