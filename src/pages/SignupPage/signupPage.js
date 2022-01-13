import React from 'react'
import { Link } from 'react-router-dom';
import classes from './signup.module.scss'
import Button from '../../components/Button/Button'

function SignupPage() {
    return (
        <section className={classes.container}>
            <div className={classes.container__imgBx}>
                <img src="login.jpg" />
            </div>
            <div className={classes.container__contentBx}>
                <div className={classes.container__contentBx__formBx}>
                    <h2>Register</h2>
                    <form>
                        <div className={classes.container__contentBx__formBx__inputBx}>
                            <span>Name</span>
                            <input type="text" name="" />
                        </div>
                        <div className={classes.container__contentBx__formBx__inputBx}>
                            <span>Email</span>
                            <input type="text" name="" />
                        </div>
                        <div className={classes.container__contentBx__formBx__inputBx}>
                            <span>Password</span>
                            <input type="password" name="" />
                        </div>
                        <div className={classes.container__contentBx__formBx__inputBx}>
                            <Button className={classes.button} type="primary__small">
                                Register    
                            </Button>
                        </div>
                        <div className={classes.container__contentBx__formBx__inputBx}>
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignupPage
