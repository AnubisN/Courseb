import React from 'react'
import classes from './loginpage.module.scss'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

function LoginPage() {
    return (
        <section className={classes.container}>
            <div className={classes.container__imgBx}>
                <img src="login.jpg" />
            </div>
            <div className={classes.container__contentBx}>
                <div className={classes.container__contentBx__formBx}>
                    <h2>Login</h2>
                    <form>
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
                                Log In    
                            </Button>
                        </div>
                        <div className={classes.container__contentBx__formBx__inputBx}>
                            <p>Don't have an account? <Link to="/register">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default LoginPage
