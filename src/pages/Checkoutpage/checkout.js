import React from 'react';
import classes from './checkout.module.scss'
import Button from '../../components/Button/Button'

function CheckoutPage() {
  return (
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
                <h3>Summary</h3>
                <div className={classes.checkout__summary__details}>
                    <p>Original Price:</p>
                    <p>Rs. 10,000</p>
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
            </div>
        </div>
        <div className={classes.checkout__order}>
            <h3>Order Details</h3>
            <div className={classes.checkout__order__container}>
                <div className={classes.checkout__order__item}>
                    <div className={classes.checkout__order__item__img}>
                        <img src="liveInteraction.jpg"/>
                    </div>
                    <h4>Web Devlopment by python</h4>
                </div>
                <p>Rs.10,000</p>
            </div>
        </div>
    </div>
  )
}

export default CheckoutPage;
