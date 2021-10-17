import './Products.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Products() {
    return (
        <div className="products-page">
            <div className="page-body">
                {/* Steps to show current page status and site structure */}
                <div className="steps">
                    <span> <a href="product-browsing.html"> Categories </a> </span>
                </div>
                <div className="photo-grid">
                    <div className="row">
                        <Link to="/details" className="grid-item">
                            <img alt="dog in lifejacket" src="Assets/lifejacket1.jpeg"></img>
                            <span> Safety Equipment </span>
                        </Link>
                        <div className="grid-item">
                            <img alt="treats and chews" src="Assets/treats.jpeg"></img>
                            <span> Treats and Chews </span>
                        </div>
                        <div className="grid-item">
                            <img alt="dog in bandana" src="Assets/bandana.jpeg"></img>
                            <span> Bandanas and Collars </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="grid-item">
                            <img alt="dogs in harnesses" src="Assets/harness.jpeg"></img>
                            <span> Harnesses and Packs </span>
                        </div>
                        <div className="grid-item">
                            <img alt="man hiking with dog" src="Assets/ev_hike.JPG"></img>
                            <span> Leashes &amp; Tethers </span>
                        </div>
                        <div className="grid-item">
                            <img alt="camping dog" src="Assets/camping.JPG"></img>
                            <span> Pet Camping Gear </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
