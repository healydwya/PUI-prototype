import './Cart.scss';
import Card from './Card';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Cart() {
    return (
        <div className="cart-page">
            <div className="page-body">
                {/* Steps to show current page status and site structure */}
                <div className="steps">
                    <span> Items in Your Pack </span>
                </div>
            </div>
            <div className="cart-details">
                {/* Repeat cards for each item in cart */}
                <div className="cards">
                    <Card></Card>
                </div>
                <div className="checkout">
                    <div className="subtotal">
                        <span> Subtotal: </span>
                        <span> $70 </span>
                    </div>
                    <div className="checkout-button">
                        <span> Checkout </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
