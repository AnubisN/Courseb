import React from 'react'
import classes from './profilepagepassword.module.scss'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { RiLockFill } from 'react-icons/ri'
import Button from '../../components/Button/Button'

function ProfilePagePassword() {
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
                                    <Link to="/accountSettings">Account</Link>
                                </div>
                                <div className={classes.container__box__profile__tab__settings__passwordNav}>
                                    <RiLockFill />
                                    <a>Password</a>
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div className={classes.container__box__profile__tab__content}>
                        <h2>Password Settings</h2>
                        <div className={classes.container__box__profile__tab__content__formBx}>
                            <form>
                                <div className={classes.flex}>
                                    <div className={classes.form__input}>
                                        <span>Old Password</span>
                                        <input type="password" name="" />
                                    </div>
                                </div>
                                
                                <div className={classes.flex}>
                                    <div className={classes.form__input}>
                                        <span>New password</span>
                                        <input type="password" name="" />
                                    </div>
                                    <div className={classes.form__input}>
                                        <span>Confim New Password</span>
                                        <input type="password" name="" />
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

export default ProfilePagePassword
