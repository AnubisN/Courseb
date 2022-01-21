import React, {useState, useEffect} from 'react'
import classes from './profilepage.module.scss'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { RiLockFill } from 'react-icons/ri'
import Button from '../../components/Button/Button'
import axios from 'axios'
import { token } from './token'
import { findAllInRenderedTree } from 'react-dom/cjs/react-dom-test-utils.production.min'

function ProfilePage() {
    const [userInfo,setUserInfo] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address,setAddress] = useState('')
    const [job, setJob] = useState('')
    const [profilePicture,setProfilePicture] = useState('')
    let name = ''
    
    useEffect(() => {
        const config = {
            headers: {
                "Authorization": "Bearer " + token
            }
        }
        async function fetchDetails() {
            const { data } = await axios.get(`api/users/profileDetails/6/`, config)
            setUserInfo(data);
            name = data.first_name + ' ' + data.last_name
            setFirstName(data.first_name)
            setLastName(data.last_name)
            setEmail(data.email)
            setPhoneNumber(data.phoneNumber)
            setAddress(data.address)
            setJob(data.job)
            setProfilePicture(data.profilePicture)
        }
        fetchDetails();   
    }, [])

    function getExtension(filename) {
        var parts = filename.split('.');
        return parts[parts.length - 1];
    }

    function isImage(filename) {
        var ext = getExtension(filename);
        switch(ext.toLowerCase()) {
            case 'jpg':
                return true
            case 'png':
                return true
            default:
                return false
        }
        return false
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        let imgObj = Object(profilePicture)
        let image = isImage(imgObj[0].name)
        if(image) {
            const config = {
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "multipart/form-data"
                }
            }

            const anotherConfig = {
                headers: {
                    "Authorization": "Bearer " + token
                }
            }

            let formData = new FormData();
            formData.append('profilePicture',imgObj[0]);

            for(var value of formData.values()) {
                console.log(value);
            }
            await axios.put('/api/users/updatePicture/6/',
                formData,
                config
            )
            await axios.put('/api/users/update/6/',
                {"firstName":firstName,"lastName":lastName,"email":email,"job":job,"address":address,"phoneNumber":phoneNumber},
                anotherConfig
            )
        }
    }

    return (
        <section>
            <div className={classes.container}>
                <div className={classes.container__box}>
                    <div className={classes.container__box__profile__tab}>
                        <div className={classes.container__box__profile__tab__userContent}>
                            <div className={classes.container__box__profile__tab__userContent__img}>
                                <img src={`${userInfo.profilePicture}`}/>
                                <h3>{firstName + " " + lastName}</h3>
                            </div>

                            <div className={classes.container__box__profile__tab__settings}>
                                <div className={classes.container__box__profile__tab__settings__accountNav}>
                                    <AiFillHome />
                                    <a>Account</a>
                                </div>
                                <div className={classes.container__box__profile__tab__settings__passwordNav}>
                                    <RiLockFill />
                                    <Link className={classes.link} to="/changePassword">Password</Link>
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div className={classes.container__box__profile__tab__content}>
                        <h2>Account Settings</h2>
                        <div className={classes.container__box__profile__tab__content__formBx}>
                            <form onSubmit={submitHandler}>
                                <div className={classes.flex}>
                                    <div className={classes.form__input}>
                                        <span>First Name</span>
                                        <input 
                                            type="text" 
                                            name="" 
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required/>
                                    </div>
                                    <div className={classes.form__input}>
                                        <span>Last Name</span>
                                        <input 
                                            type="text" 
                                            name="" 
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            required
                                            />
                                    </div>
                                </div>
                                
                                <div className={classes.flex}>
                                    <div className={classes.form__input}>
                                        <span>Email</span>
                                        <input 
                                            type="email" 
                                            name="" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required/>
                                    </div>
                                    <div className={classes.form__input}>
                                        <span>Phone Number</span>
                                        <input 
                                            type="text" 
                                            name="" 
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            />
                                    </div>
                                </div>
                                
                                <div className={classes.flex}>
                                    <div className={classes.form__input}>
                                        <span>Address</span>
                                        <input 
                                            type="text" 
                                            name="" 
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            />
                                    </div>
                                    <div className={classes.form__input}>
                                        <span>Job</span>
                                        <input 
                                            type="text" 
                                            name=""
                                            value={job}
                                            onChange={(e) => setJob(e.target.value)} 
                                            />
                                    </div>
                                </div>
                               
                               <div className={classes.flex}>
                                    <div className={classes.form__input__file}>
                                        <span>Upload new profile picture</span>
                                        <input 
                                            type="file" 
                                            name="" 
                                            onChange={(e) => setProfilePicture(e.target.files)}
                                            />
                                    </div>
                               </div>

                               <div className={classes.flex}>
                                    <div className={classes.form__input__file}>
                                    <Button 
                                        className={classes.button} 
                                        type="primary__small"
                                        >
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

export default ProfilePage
