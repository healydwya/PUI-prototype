import './Menu.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/counterSlice';

function Menu() {
    const count = useSelector(state => state.counter.value);
    return (
        <div className="Menu">
            <div className="header-bar">
                <div className="top-bar">
                    <Link className="col left" to="/">
                        <img className="logo-img" src="Assets/MuddyPaws.png" alt="muddy paws logo"></img>
                        <h1>Muddy Paws</h1>
                    </Link>
                    <div className="col center">
                        <input type="text" />
                        <img className="search-icon" src="Assets/search.png" alt="search bar"></img>
                    </div>
                    <div className="col right">
                        <img className="account-img" src="Assets/account.PNG" alt="account button"></img>
                        <Link to="/cart" className="link-body">
                            <img className="pack-img" src="Assets/pack.PNG" alt="shopping cart button"></img>
                        </Link>
                        <span className="cart-count"> {count} </span>
                    </div>
                </div>
                <div className="bottom-bar">
                    <div className="mini-menu">
                        <span> Dogs </span>
                    </div>
                    <div className="mini-menu">
                        <span> Cats </span>
                    </div>
                    <Link to="/products" className="mini-menu">
                        <span> Categories </span>
                    </Link>
                    <div className="mini-menu">
                        <span> Activities </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
