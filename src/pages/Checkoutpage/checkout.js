import React, {useState, useEffect} from 'react';
import classes from './checkout.module.scss'
import Button from '../../components/Button/Button'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { listCartItems, requestcartItems } from '../../actions/cartActions';
import { listEnrolledCourses } from '../../actions/courseActions';
import Alert from '../../components/Alert/Alert';
import { COURSE_CHECKOUT_REMOVE } from '../../constants/cartConstants';

function CheckoutPage() {
    let navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const { courses, success } = cart
    const enrolledCourses = useSelector(state => state.enrolledCourses)
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('')
    
    useEffect(() =>{
        if(!userInfo) {
            navigate("/login")
        } else {
            if(success) {
                setSuccessMessage("You have enrolled for this course.")
                async function delay() {
                    await new Promise(resolve => setTimeout(resolve, 4000));
                    dispatch({type: COURSE_CHECKOUT_REMOVE})
                    navigate("/enrolledCourses")
                }
                delay();
            }
        }
        dispatch(listCartItems(params.id))
        dispatch(listEnrolledCourses())
    },[dispatch, params, success])

    const onSubmitHandler = e => {
        e.preventDefault();
        let similarCourse = enrolledCourses.courses.filter(x => x.course._id === courses._id);
        if(similarCourse.length == 1) {
            setMessage("You have already enrolled for this course.")
        } else {
            dispatch(requestcartItems(params.id))
        }
    }

    return (
        <>
        {successMessage && <Alert message={successMessage} vairant="success"/>}
        {message && <Alert message={message} variant="danger"/>}
        <div className={classes.container}>
            <div className={classes.checkout}>
                <div className={classes.checkout__methods}>
                    <h2>Checkout</h2>
                    <form>
                        <label className={classes.checkout__methods__label}>Billing Address</label>
                        <input className={classes.checkout__methods__label__input} type="text" value="Nepal"/>
                        <label className={classes.checkout__methods__label}>Payment Method</label>
                        <div className={classes.checkout__methods__radio}>
                            <input className={classes.checkout__methods__radiolabel__input} type="radio"/>
                            <label className={classes.checkout__methods__radiolabel}>Esewa</label>
                        </div>
                        <div className={classes.checkout__methods__radio}>
                            <input className={classes.checkout__methods__radiolabel__input} type="radio"/>
                            <label className={classes.checkout__methods__radiolabel}>Khalti</label>
                        </div>
                    
                    </form>
                </div>
                <div className={classes.checkout__summary}>
                    <form onSubmit={(e) => onSubmitHandler(e)}>
                        <h3>Summary</h3>
                        <div className={classes.checkout__summary__details}>
                            <p>Original Price:</p>
                            <p>{"Rs."+courses.price}</p>
                        </div>
                        <div className={classes.checkout__summary__details__discount}>
                            <p>Discount:</p>
                            <p>Rs. 0</p>
                        </div>                
                        <div className={classes.checkout__summary__details}>
                            <p>Total:</p>
                            <p>Rs. 10,000</p>
                        </div>
                        <Button 
                            type="primary__body"
                        >
                            Proceed
                        </Button>
                    </form>
                </div>
            </div>
            <div className={classes.checkout__order}>
                <h3>Order Details</h3>
                <div className={classes.checkout__order__container}>
                    <div className={classes.checkout__order__item}>
                        <div className={classes.checkout__order__item__img}>
                            <img src={`${courses.image}`}/>
                        </div>
                        <h4>{courses.name}</h4>
                    </div>
                    <p>{"Rs."+courses.price}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default CheckoutPage;
