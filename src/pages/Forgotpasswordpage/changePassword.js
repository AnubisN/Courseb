import axios from 'axios';
import React, {useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './forgotPassword.module.scss'
import Button from '../../components/Button/Button'
import Alert from '../../components/Alert/Alert'
import Loader from '../../components/Loader/loader'
import { useNavigate } from 'react-router-dom';
import delay from '../../delay';

function ChangePasswordPage() {
    const navigate = useNavigate();
    const params = useParams();   
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function delay() {
        await new Promise(resolve => setTimeout(resolve, 4000));
        navigate("/login")
    }

    const changePassword = async () => {
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
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                />
                    </div>
                    <div className={classes.container__contentBx__formBx__inputBx}>
                        <span>Confirm New password</span>
                            <input 
                                type="password" 
                                name="" 
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
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

export default ChangePasswordPage