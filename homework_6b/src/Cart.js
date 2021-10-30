import './Cart.scss';
import Card from './Card';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useSelector } from 'react-redux';

function Cart() {
    const count = useSelector(state => state.counter.value);
    const redMed = useSelector(state => state.counter.redMed);
    const redLarge = useSelector(state => state.counter.redLarge);
    const redSmall = useSelector(state => state.counter.redSmall);
    const blueMed = useSelector(state => state.counter.blueMed);
    const blueLarge = useSelector(state => state.counter.blueLarge);
    const blueSmall = useSelector(state => state.counter.blueSmall);
    const greenMed = useSelector(state => state.counter.greenMed);
    const greenLarge = useSelector(state => state.counter.greenLarge);
    const greenSmall = useSelector(state => state.counter.greenSmall);
    return (
        <div className="cart-page">
            <div className="page-body">
                {/* Steps to show current page status and site structure */}
                <div className="steps">
                    <span> Items in Pack </span>
                </div>
            </div>
            <div className="cart-details">
                {/* Repeat cards for each item in cart */}
                <div className="cards">
                    {redLarge !== 0 &&
                        <Card count={redLarge} color="Red" size="Large"></Card>
                    }
                    {redMed !== 0 &&
                        <Card count={redMed} color="Red" size="Medium"></Card>
                    }
                    {redSmall !== 0 &&
                        <Card count={redSmall} color="Red" size="Small"></Card>
                    }
                    {blueLarge !== 0 &&
                        <Card count={redLarge} color="Blue" size="Large"></Card>
                    }
                    {blueMed !== 0 &&
                        <Card count={redMed} color="Blue" size="Medium"></Card>
                    }
                    {blueSmall !== 0 &&
                        <Card count={redSmall} color="Blue" size="Small"></Card>
                    }
                    {greenLarge !== 0 &&
                        <Card count={redLarge} color="Green" size="Large"></Card>
                    }
                    {greenMed !== 0 &&
                        <Card count={redMed} color="Green" size="Medium"></Card>
                    }
                    {greenSmall !== 0 &&
                        <Card count={redSmall} color="Green" size="Small"></Card>
                    }
                </div>
                {count !== 0 &&
                    <div className="checkout">
                        <div className="subtotal">
                            <span> Subtotal: </span>
                            <span> ${count * 40} </span>
                        </div>
                        <div className="checkout-button">
                            <span> Checkout </span>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Cart;
