import React from 'react'
import Card from '../../components/Cards/Card'
import classes from './Blogpage.module.scss'

function Blogpage() {
    return (
        <section className={classes.blogpage}>
            <div className={classes.blogpage__container}>
                <h2 className={classes.blogpage__title}>Blog</h2>
                <p className={classes.blogpage__description}>Out latest blogs and events are available here</p>
            </div>
            <section className={classes.blogpage__card__container}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </section>
    )
}

export default Blogpage
