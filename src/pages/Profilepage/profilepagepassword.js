import React, {useState, useEffect} from 'react'
import classes from './profilepagepassword.module.scss'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { RiLockFill } from 'react-icons/ri'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { getUserDetails, updateUserPasswordProfile } from '../../actions/userActions'
import {useSelector, useDispatch} from 'react-redux'
import { USER_UPDATE_PASSWORD_RESET } from '../../constants/userConstants'
import Alert from '../../components/Alert/Alert'
import Loader from '../../components/Loader/loader'

function ProfilePagePassword() {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const [picture, setPicture] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setCofirmNewPassword] = useState('')
    const [message, setMessage] = useState('')
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/

    const userDetails = useSelector(state => state.userDetails)
    const {user} = userDetails

    const userUpdatePassword = useSelector(state => state.userUpdatePassword)
    const {success, error, loading} = userUpdatePassword

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if(!userInfo) {
            navigate("/login")
        } else {
            if(!user || !user.profilePicture || success) {
                dispatch({type: USER_UPDATE_PASSWORD_RESET})
                dispatch(getUserDetails(userInfo.id))
            } else {
                setPicture(user.profilePicture)
            }
          
        }
    }, [navigate, userInfo, user])

    const onSubmitHandler = e => {
        e.preventDefault();
        if(newPassword !== confirmNewPassword || !regex.test(newPassword)) return
        dispatch(updateUserPasswordProfile(oldPassword,newPassword))
    }

    const checkPassword = e => {
        let pass = e.target.value
        setNewPassword(pass)
        regex.test(pass) ? setPasswordError('') : setPasswordError("Min 8 letter password, with at least a symbol, upper and lower case letters and a number")
    }
    
    const checkConfirmPassword = e => {
        let pass = e.target.value
        setCofirmNewPassword(pass)
        newPassword !== pass ? setConfirmPasswordError('Password and confirm password does not match'): setConfirmPasswordError('') 
    }

    const renderError = errorMessage => <span className={classes.validation__errors}>
        {errorMessage}
    </span>;

    return (
        <section>
            {loading && <Loader />}
            {error && <Alert message={error} variant='danger'/>}
            {message && <Alert message={message} variant='danger'/>}
                <div className={classes.container}>
                <div className={classes.container__box}>
                    <div className={classes.container__box__profile__tab}>
                        <div className={classes.container__box__profile__tab__userContent}>
                            <div className={classes.container__box__profile__tab__userContent__img}>
                                <img src={`${picture}`}/>
                                <h3>{user ? user.first_name + " " + user.last_name: null}</h3>
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
                            <form onSubmit={onSubmitHandler}>
                                <div className={classes.flex}>
                                    <div className={classes.form__input}>
                                        <span>Old Password</span>
                                        <input 
                                            type="password" 
                                            name="" 
                                            value={oldPassword}
                                            onChange={(e) => setOldPassword(e.target.value)}
                                            required/>
                                    </div>
                                </div>
                                
                                <div className={classes.flex}>
                                    <div className={classes.form__input}>
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
                                    <div className={classes.form__input}>
                                        <span>Confim New Password</span>
                                        <input 
                                            type="password" 
                                            name=""
                                            value={confirmNewPassword}
                                            onChange={(e) => checkConfirmPassword(e)} 
                                            required
                                            />
                                        {confirmPasswordError && renderError(confirmPasswordError)}
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
