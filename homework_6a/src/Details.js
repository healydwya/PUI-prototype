import './Details.scss';

function Details() {
    return (
        <div className="details-page">
            <div className="page-body">
                {/* Steps to show current page status and site structure */}
                <div className="steps">
                    <span> <a href="product-browsing.html"> Categories </a> </span>
                    <span> {'>'} </span>
                    <span> Safety Equipment </span>
                    <span> {'>'} </span>
                    <span> The Lifejacket </span>
                </div>
            </div>
            <div className="product-details">
                {/* Image carousel*/}
                <div className="img-car">
                    <img alt="up arrow" src="Assets/up.png" className="up-arrow"></img>
                    <img alt="photo of dog in lifejacket" src="Assets/lifejacket4.jpeg" className="car-photo"></img>
                    <img alt="photo of dog in lifejacket" src="Assets/lifejacket2.jpeg" className="car-photo"></img>
                    <img alt="photo of dog in lifejacket" src="Assets/lifejacket3.jpeg" className="car-photo"></img>
                    <img alt="down arrow" src="Assets/down.png" className="down-arrow"></img>
                </div>
                <div className="product-photo">
                    {/*             <!-- Main product photo --> */}
                    <img alt="photo of dog in lifejacket" src="Assets/lifejacket2.jpeg"></img>
                </div>
                <div className="details">
                    <h2> The Lifejacket </h2>
                    <span> Strong, safe, and durable your pet will be swimming like a fish and loving their time on the water in
                        this bright velcro jacket! </span>
                    <div className="ratings row">
                        <img alt="ratings stars" src="Assets/stars.png" className="stars"></img>
                        <span> 40 Reviews </span>
                    </div>
                    <div className="row size">
                        <img alt="increase or decrease quantity" src="Assets/quant.png" className="quant"></img>
                        <img alt="increase or decrease size" src="Assets/size.png" className="size"></img>
                    </div>
                    <div className="row size">
                        <img alt="circles to choose colors" src="Assets/colors.png" className="colors"></img>
                        <span> Size Chart </span>
                    </div>
                    <div className="row cart">
                        <img alt="add to cart" src="Assets/add-button.png" className="add-button"></img>
                        <span className="price"> $40 </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
