import './Menu.scss';

function Menu() {
    return (
        <div className="Menu">
            <div className="header-bar">
                <div className="top-bar">
                    <div className="col left">
                        <img className="logo-img" src="Assets/MuddyPaws.png" alt="muddy paws logo"></img>
                        <h1>Muddy Paws</h1>
                    </div>
                    <div className="col center">
                        <input type="text" />
                        <img className="search-icon" src="Assets/search.png" alt="search bar"></img>
                    </div>
                    <div className="col right">
                        <img className="account-img" src="Assets/account.PNG" alt="account button"></img>
                        <img className="pack-img" src="Assets/pack.PNG" alt="shopping cart button"></img>
                        <span className="cart-count"> 2 </span>
                    </div>
                </div>
                <div className="bottom-bar">
                    <div className="mini-menu">
                        <span> Dogs </span>
                    </div>
                    <div className="mini-menu">
                        <span> Cats </span>
                    </div>
                    <a href="product-browsing.html" className="mini-menu">
                        <span> Categories </span>
                    </a>
                    <div className="mini-menu">
                        <span> Activities </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
