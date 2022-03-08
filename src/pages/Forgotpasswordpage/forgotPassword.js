import React, { useEffect, useState } from 'react'
import classes from './forgotPassword.module.scss'
import Button from '../../components/Button/Button'
import axios from 'axios'
import Alert from '../../components/Alert/Alert'
import Loader from '../../components/Loader/loader'

function ForgotPasswordPage() {
    const [email, setEmail] = useState('')
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState('')

    const forgotPassword = async () => {
        setLoading(true)
        try {
            const { data } = await axios.post('/api/users/forgotPassword/',{'email':email})
            setLoading(false)
            setSuccess(data.detail)
        } catch (error) {
            console.log(error.response)
            let err;
            err = error.response && error.response.data.detail
            ? error.response.data.detail 
            : error.detail
            setLoading(false)
            setError(err)
        }
    }

    const onSubmitHandler = e => {
        e.preventDefault()
        forgotPassword()
    }

    return (
        <>
        {
            loading ? <Loader />
            : success ? <Alert message={success} variant='success'/>
            : error ? <Alert message={error} variant='danger'/>
            :            <div className={classes.container}>
            <form onSubmit={onSubmitHandler}>
            <div className={classes.container__contentBx__formBx__inputBx}>
                    <span>Enter your email address</span>
                    <input 
                        type="email" 
                        name="" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
            </div>
            <div className={classes.container__contentBx__formBx__inputBx__btn}>
                <Button 
                    className={classes.button} 
                    type="primary__small"
                    >
                    Submit    
                </Button>
            </div>
        </form>
        </div>
        }
        </>

    )
}

export default ForgotPasswordPage