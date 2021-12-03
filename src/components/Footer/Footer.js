import React from 'react'
import classes from './Footer.module.scss'

function Footer() {
    return (
        <footer className={classes.footer__container}>
            <div className={classes.footer__container__row}>
                <div className={classes.footer__container__col}>
                    <h2 className={classes.footer__container__col__logo}>Courseb</h2>
                    <p>Description</p>
                </div>
                <div className={classes.footer__container__col}>
                    <h3>Company</h3>
                    <ul className={classes.footer__container__col__ul}>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Courses</a></li>
                    </ul>
                </div>
                <div className={classes.footer__container__col}>
                    <h3>More Info</h3>
                    <ul className={classes.footer__container__col__ul}>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Jobs</a></li>
                    </ul>
                </div>
                <div className={classes.footer__container__col}>
                    <h3>We Accept</h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer
