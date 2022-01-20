import React, {useState} from 'react'
import classes from './loginpage.module.scss'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import axios from 'axios';


function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-type': 'application/json'
                }
            }
            const { data } = await axios.post(
                '/api/users/login/',
                {'username':email,'password':password},
                config
            )
            localStorage.setItem('userInfo',JSON.stringify(data))
        }
        catch(error) {
            console.log(error);
        }
    }

    return (
        <section className={classes.container}>
            <div className={classes.container__imgBx}>
                <img src="login.jpg" />
            </div>
            <div className={classes.container__contentBx}>
                <div className={classes.container__contentBx__formBx}>
                    <h2>Login</h2>
                    <form onSubmit={submitHandler}>
                        <div className={classes.container__contentBx__formBx__inputBx}>
                            <span>Email</span>
                            <input 
                                type="email" 
                                name="" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                />
                        </div>
                        <div className={classes.container__contentBx__formBx__inputBx}>
                            <span>Password</span>
                            <input 
                                type="password" 
                                name=""
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                                required 
                                />
                        </div>
                        <div className={classes.container__contentBx__formBx__inputBx}>
                            <Button 
                                className={classes.button} 
                                type="primary__small"
                                >
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
