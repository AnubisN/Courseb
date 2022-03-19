import React, {useState, useEffect} from 'react'
import Button from '../../components/Button/Button'
import classes from './contact.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader/loader'
import Alert from '../../components/Alert/Alert'
import { contactMessage } from '../../actions/contactActions'

function ContactUsPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [message,setMessage] = useState('')
    const contact = useSelector(state => state.contactMsg)
    const { error, loading, success, msg} = contact
    const dispatch = useDispatch()
        
    useEffect(() => {
        if(success) {
            <Alert message={msg} variant='success'/>
            console.log(success)
        }
        if(error) {
            <Alert message={error} variant='danger'/>
        }
    }, [error, loading, success])

    const submitHandler = e => {
        e.preventDefault();
        dispatch(contactMessage({
            firstName,
            lastName,
            email,
            message
        }))
    }

    return (
        <>
        {loading && <Loader />}
        {success && <Alert message={msg} variant='success'/>}
        {error && <Alert message={error} variant='danger'/>}
        {
        <section className={classes.contactUs}>
                <div className={classes.container}>
                    <div className={classes.container__contactInfo}>
                        <div>
                            <h2>Contact Info</h2>
                                <ul className={classes.container__contactInfo__info}>
                                    <li>
                                        <span><img src="location.png"/></span>
                                            <span>Lagankhel<br/>
                                                Lalitpur<br/>
                                                90017
                                            </span>
                                        </li>
                                        <li>
                                            <span><img src="mail.png"/></span>
                                            <span>coursebtraining@gmail.com</span>
                                        </li>
                                        <li>
                                            <span><img src="call.png"/></span>
                                            <span>310-286-1623</span>
                                        </li>
                                    </ul>
                                </div>
            
                                <ul className={classes.container__contactInfo__sci}>
                                    <li><a><img src="1.png"/></a></li>
                                    <li><a><img src="2.png"/></a></li>
                                    <li><a><img src="3.png"/></a></li>
                                    <li><a><img src="4.png"/></a></li>
                                    <li><a><img src="5.png"/></a></li>
                                </ul>
                            </div>
                            <div className={classes.container__contactForm}>
                                <h2>Send a Message</h2>
                                <form onSubmit={submitHandler} className={classes.container__contactForm__formBox}>
                                    <div className={classes.container__contactForm__formBox__inputBox__w50}>
                                        <input text="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                        <span>First Name</span>
                                    </div>
                                    <div className={classes.container__contactForm__formBox__inputBox__w50}>
                                        <input text="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                        <span>Last Name</span>
                                    </div>
                                    <div className={classes.container__contactForm__formBox__inputBox__w50}>
                                        <input text="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                                        <span>Email Address</span>
                                    </div>
                                    <div className={classes.container__contactForm__formBox__inputBox__w100}>
                                        <textarea required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                        <span>Write your message here...</span>
                                    </div>
                                    <div className={classes.container__contactForm__formBox__inputBox__w50}>
                                    <Button className={classes.button} type="primary__small">
                                        SUBMIT    
                                    </Button>                          
                                    </div>
                                </form>
                            </div>
                        </div>
        </section>
        }
        </>
    )
}


export default ContactUsPage
