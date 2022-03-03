import React, {useState, useEffect} from 'react';
import classes from './checkout.module.scss'
import { useSearchParams } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { listCartItems, requestcartItems } from '../../actions/cartActions';
import { listEnrolledCourses } from '../../actions/courseActions';
import Alert from '../../components/Alert/Alert';
import axios from 'axios'
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
    const [amtParam, setAmtParam] = useSearchParams()
    const [pidParam, setpidParam] = useSearchParams()
    const [rid, setRid] = useSearchParams()
    const scd = "EPAYTEST"

    useEffect(() => {
        if(amtParam.get("amt") && rid.get("refId") && pidParam.get("oid")) {
            const checkPaymentSuccess = async () => {
                let params= {
                    amt: amtParam.get("amt"),
                    rid: rid.get("refId"),
                    pid: pidParam.get("oid"),
                    scd: scd
                }
    
                const config = {
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${userInfo.token}`
                    }
                }
                const { data } = await axios.post('/api/esewaPaymentSuccess/',params, config)
                let status = "Success"
                if(status === data.detail) {
                    console.log(params.pid[0])
                    dispatch(requestcartItems(params.pid[0]))

                }
                else {
                    setMessage("Payment was not verified. Please try again later")
                }
            }
            checkPaymentSuccess()
        }
    }, [])

    useEffect(() =>{
        if(!userInfo) {
            navigate("/login")
        } 
        else {
            if(success) {
                setSuccessMessage(`You have enrolled for this course. You will be redirected to 'My Courses' page.`)
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
            var path="https://uat.esewa.com.np/epay/main";
            const pid = courses._id + courses.name + Math.random()
            var params= {
                amt: courses.price,
                psc: 0,
                pdc: 0,
                txAmt: 0,
                tAmt: courses.price,
                pid: pid,
                scd: "EPAYTEST",
                su: window.location.href,
                fu: "http://merchant.com.np/page/esewa_payment_failed"
            }

            function post(path, params) {
                var form = document.createElement("form");
                form.setAttribute("method", "POST");
                form.setAttribute("action", path);
            
                for(var key in params) {
                    var hiddenField = document.createElement("input");
                    hiddenField.setAttribute("type", "hidden");
                    hiddenField.setAttribute("name", key);
                    hiddenField.setAttribute("value", params[key]);
                    form.appendChild(hiddenField);
                }
            
                document.body.appendChild(form);
                form.submit();
            }
            post(path,params)
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
                            <input className={classes.checkout__methods__radiolabel__input} type="radio" name="payment"/>
                            <label className={classes.checkout__methods__radiolabel}>Esewa</label>
                        </div>
                        <div className={classes.checkout__methods__radio}>
                            <input className={classes.checkout__methods__radiolabel__input} type="radio" name="payment"/>
                            <label className={classes.checkout__methods__radiolabel}>Khalti</label>
                        </div>
                    
                    </form>
                </div>
                <div className={classes.checkout__summary}>
                    <form onSubmit={(e) => onSubmitHandler(e)}>
                        <h3>Summary</h3>
                        <div className={classes.checkout__summary__details}>
                            <p>Original Price:</p>
                            <p>{"Rs. "+courses.price}</p>
                        </div>
                        <div className={classes.checkout__summary__details__discount}>
                            <p>Discount:</p>
                            <p>Rs. 0</p>
                        </div>                
                        <div className={classes.checkout__summary__details}>
                            <p>Total:</p>
                            <p>{"Rs. " + courses.price}</p>
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
                    <p>{"Rs."+ courses.price}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default CheckoutPage;
