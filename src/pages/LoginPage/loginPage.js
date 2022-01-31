import React, {useEffect, useState} from 'react'
import classes from './loginpage.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions';
import Alert from '../../components/Alert/Alert'
import Loader from '../../components/Loader/loader'

function LoginPage() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin
    const dispatch = useDispatch()

    useEffect(() => {
        if(userInfo) {
            navigate("/")
        }
    },[navigate,userInfo])

    const submitHandler = e => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    return (
        <>
            {loading && <Loader />}
            {error && <Alert message={error} variant='danger'/>}
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
                                <p>Don't have an account? 
                                <Link
                                    to='/register'>
                                    Register
                                    </Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginPage
