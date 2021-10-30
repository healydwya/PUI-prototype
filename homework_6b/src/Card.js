import './Card.scss';
import { useDispatch } from 'react-redux';
import { decrementByAmount } from './features/counterSlice';

const Card = (props) => {
    const dispatch = useDispatch();
    const color = props.color;
    const size = props.size;
    return (
        <div className="card-page">
            <div className="card">
                <img alt="dog in lifejacket" src="Assets/lifejacket2.jpeg"></img>
                <div className="rows">
                    <div className="title-row"> <h2> The Lifejacket </h2> </div>
                    <div className="red-row">
                        <span className="color"> Color: {props.color}</span>
                        <span onClick={() => dispatch(decrementByAmount({color, size}))} className="remove"> Remove Item</span>
                    </div>
                    <div className="last-row">
                        <span> $40 </span>
                        <div className="dropdowns">
                            <select disabled={true} value={props.size} id="sizes" name="sizes">
                                <option value="Large">Large</option>
                                <option value="Medium">Medium</option>
                                <option value="Small">Small</option>
                            </select>
                            <select disabled={true} value={props.count} id="quant" name="quant">
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