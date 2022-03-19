import React from 'react'
import classes from './Footer.module.scss'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className={classes.footer__container}>
            <div className={classes.footer__container__row}>
                <div className={classes.footer__container__col}>
                    <h2 className={classes.footer__container__col__logo}>Courseb</h2>
                    <p>We strive to provide high quality courses focused on programming skills</p>
                </div>
                <div className={classes.footer__container__col}>
                    <h3>Company</h3>
                    <ul className={classes.footer__container__col__ul}>
                        <li><Link to="/blogs">Blog</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                    </ul>
                </div>
                <div className={classes.footer__container__col}>
                    <h3>More Info</h3>
                    <ul className={classes.footer__container__col__ul}>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
                <div className={classes.footer__container__col}>
                    <h3>We Accept</h3>
                    <div className={classes.footer__container__logo}>
                        <img src="/esewa.png" />
                    </div>

                    <div className={classes.footer__container__logo}>
                        <img src="/khalti.png" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
