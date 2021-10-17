import './Card.scss';

function Card() {
    return (
        <div className="card-page">
            <div className="card">
                <img alt="dog in lifejacket" src="Assets/lifejacket2.jpeg"></img>
                <div className="rows">
                    <div className="title-row"> <h2> The Lifejacket </h2> </div>
                    <div className="red-row">
                        <span className="color"> Color: Red</span>
                        <span className="remove"> Remove Item</span>
                    </div>
                    <div className="last-row">
                        <span> $40 </span>
                        <div className="dropdowns">
                            <select disabled={true} id="sizes" name="sizes">
                                <option value="large">Large</option>
                                <option value="medium">Medium</option>
                                <option value="small">Small</option>
                            </select>
                            <select disabled={true} id="quant" name="quant">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;