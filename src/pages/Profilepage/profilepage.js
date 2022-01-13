import React from 'react'
import classes from './profilepage.module.scss'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { RiLockFill } from 'react-icons/ri'
import Button from '../../components/Button/Button'

function ProfilePage() {
    return (
        <section>
            <div className={classes.container}>
                <div className={classes.container__box}>
                    <div className={classes.container__box__profile__tab}>
                        <div className={classes.container__box__profile__tab__userContent}>
                            <div className={classes.container__box__profile__tab__userContent__img}>
                                <img src="liveInteraction.jpg"/>
                                <h3>Kiran Acharya</h3>
                            </div>

                            <div className={classes.container__box__profile__tab__settings}>
                                <div className={classes.container__box__profile__tab__settings__accountNav}>
                                    <AiFillHome />
                                    <a>Account</a>
                                </div>
                                <div className={classes.container__box__profile__tab__settings__passwordNav}>
                                    <RiLockFill />
                                    <Link className={classes.link} to="/changePassword">Password</Link>
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div className={classes.container__box__profile__tab__content}>
                        <h2>Account Settings</h2>
                        <div className={classes.container__box__profile__tab__content__formBx}>
                            <form>
                                <div className={classes.flex}>
                                    <div className={classes.form__input}>
                                        <span>First Name</span>
                                        <input type="text" name="" />
                                    </div>
                                    <div className={classes.form__input}>
                                        <span>Last Name</span>
                                        <input type="text" name="" />
                                    </div>
                                </div>
                                
                                <div className={classes.flex}>
                                    <div className={classes.form__input}>
                                        <span>Email</span>
                                        <input type="text" name="" />
                                    </div>
                                    <div className={classes.form__input}>
                                        <span>Phone Number</span>
                                        <input type="text" name="" />
                                    </div>
                                </div>
                                
                                <div className={classes.flex}>
                                    <div className={classes.form__input}>
                                        <span>Address</span>
                                        <input type="text" name="" />
                                    </div>
                                    <div className={classes.form__input}>
                                        <span>Job</span>
                                        <input type="text" name="" />
                                    </div>
                                </div>
                               
                               <div className={classes.flex}>
                                    <div className={classes.form__input__file}>
                                        <span>Upload new profile picture</span>
                                        <input type="file" name="" />
                                    </div>
                               </div>

                               <div className={classes.flex}>
                                    <div className={classes.form__input__file}>
                                    <Button className={classes.button} type="primary__small">
                                        Save Changes    
                                    </Button>
                                    </div>
                               </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfilePage
