import './Products.scss';

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
                        <a href="product-details.html" className="grid-item">
                            <img src="Assets/lifejacket1.jpeg"></img>
                            <span> Safety Equipment </span>
                        </a>
                        <div className="grid-item">
                            <img src="Assets/treats.jpeg"></img>
                            <span> Treats and Chews </span>
                        </div>
                        <div className="grid-item">
                            <img src="Assets/bandana.jpeg"></img>
                            <span> Bandanas and Collars </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="grid-item">
                            <img src="Assets/harness.jpeg"></img>
                            <span> Harnesses and Packs </span>
                        </div>
                        <div className="grid-item">
                            <img src="Assets/ev_hike.JPG"></img>
                            <span> Leashes &amp; Tethers </span>
                        </div>
                        <div className="grid-item">
                            <img src="Assets/camping.JPG"></img>
                            <span> Pet Camping Gear </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
