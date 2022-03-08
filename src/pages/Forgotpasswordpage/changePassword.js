import axios from 'axios';
import React, {useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './forgotPassword.module.scss'
import Button from '../../components/Button/Button'
import Alert from '../../components/Alert/Alert'
import Loader from '../../components/Loader/loader'
import { useNavigate } from 'react-router-dom';

function ChangePasswordPage() {
    const navigate = useNavigate();
    const params = useParams();
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')   
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/

    async function delay() {
        await new Promise(resolve => setTimeout(resolve, 4000));
        navigate("/login")
    }

    const checkPassword = e => {
        let pass = e.target.value
        setNewPassword(pass)
        regex.test(pass) ? setPasswordError('') : setPasswordError("Min 8 letter password, with at least a symbol, upper and lower case letters and a number")
    }
    
    const checkConfirmPassword = e => {
        let pass = e.target.value
        setConfirmNewPassword(pass)
        newPassword !== pass ? setConfirmPasswordError('Password and confirm password does not match'): setConfirmPasswordError('') 
    }

    const renderError = errorMessage => <span className={classes.validation__errors}>
        {errorMessage}
    </span>;

    const changePassword = async () => {
        if(newPassword !== confirmNewPassword || !regex.test(newPassword)) return
        setLoading(true)
        try {
            const { data } = await axios.post(`/api/users/changePassword/${params.id}/`,{newPassword})
            console.log(data, loading, newPassword)
            setLoading(false)
            setSuccess(data.detail)
            delay();
        } catch (error) {
            let err;
            err = error.response && error.response.data.detail
            ? error.response.data.detail 
            : error.detail
            setLoading(false)
            setError(err)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        changePassword()
    }

    return (
        <>
        {
            loading ? <Loader />
            : success ? <Alert message={success} variant='success'/>
            : error ? <Alert message={error} variant='danger'/>
            :
            <div className={classes.container}>
                <form onSubmit={submitHandler}>
                    <div className={classes.container__contentBx__formBx__inputBx}>
                        <span>New password</span>
                            <input 
                                type="password" 
                                name="" 
                                value={newPassword}
                                onChange={(e) => checkPassword(e)}
                                required
                                />
                            {passwordError && renderError(passwordError)}
                    </div>
                    <div className={classes.container__contentBx__formBx__inputBx}>
                        <span>Confirm New password</span>
                            <input 
                                type="password" 
                                name="" 
                                value={confirmNewPassword}
                                onChange={(e) => checkConfirmPassword(e)}
                                required
                                />
                            {confirmPasswordError && renderError(confirmPasswordError)}
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

export default ChangePasswordPage