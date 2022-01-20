import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import classes from './signup.module.scss'
import Button from '../../components/Button/Button'
import axios from 'axios'

function SignupPage() {

    const [firstName,setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault();
        if(password != confirmPassword) {
            console.log("Passwords donot match");
        } else {
            try {
                const config = {
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
                const { data } = await axios.post(
                    '/api/users/register/',
                    {'firstName':firstName,
                    'lastName': lastName,
                    'email':email,
                    'password':password},
                    config
                )
                localStorage.setItem('userInfo',JSON.stringify(data))
            }
            catch(error) {
                console.log(error);
            }
        }
    }
    return (
        <section className={classes.container}>
            <div className={classes.container__imgBx}>
                <img src="login.jpg" />
            </div>
            <div className={classes.container__contentBx}>
                <div className={classes.container__contentBx__formBx}>
                    <h2>Register</h2>
                    <form onSubmit={submitHandler}>
                        <div className={classes.container__contentBx__formBx__inputBx}>
                            <span>First Name</span>
                            <input 
                                type="text" 
                                name="" 
                                required 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                />
                        </div>
                        <div className={classes.container__contentBx__formBx__inputBx}>
                            <span>Last Name</span>
                            <input 
                                type="text" 
                                name="" 
                                required 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                />
                        </div>
                        <div className={classes.container__contentBx__formBx__inputBx}>
                            <span>Email</span>
                            <input 
                                type="email" 
                                name="" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                />
                        </div>
                        <div className={classes.container__contentBx__formBx__inputBx}>
                            <span>Password</span>
                            <input 
                                type="password" 
                                name="" 
                                required  
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                        </div>
                        <div className={classes.container__contentBx__formBx__inputBx}>
                            <span>Confirm Password</span>
                            <input 
                                type="password" 
                                name="" 
                                required 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                />
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
