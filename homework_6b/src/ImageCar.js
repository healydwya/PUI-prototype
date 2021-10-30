import './ImageCar.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Component } from 'react';

class ImageCar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const color = this.props.color;
        return (
            <div>
                {
                    color === 'red' &&
                    <div className="img-car">
                        <img alt="up arrow" src="Assets/up.png" className="up-arrow"></img>
                        <img alt="dog in lifejacket" src="Assets/lifejacket4.jpeg" className="car-photo"></img>
                        <img alt="dog in lifejacket" src="Assets/lifejacket2.jpeg" className="car-photo"></img>
                        <img alt="dog in lifejacket" src="Assets/lifejacket3.jpeg" className="car-photo"></img>
                        <img alt="down arrow" src="Assets/down.png" className="down-arrow"></img>
                    </div>
                }
                {
                    color === 'blue' &&
                    <div className="img-car">
                        <img alt="up arrow" src="Assets/up.png" className="up-arrow"></img>
                        <img alt="dog in lifejacket" src="Assets/bluelifejacket1.png" className="car-photo"></img>
                        <img alt="dog in lifejacket" src="Assets/bluelifejacket2.png" className="car-photo"></img>
                        <img alt="dog in lifejacket" src="Assets/bluelifejacket3.png" className="car-photo"></img>
                        <img alt="down arrow" src="Assets/down.png" className="down-arrow"></img>
                    </div>
                }
                {
                    color === 'green' &&
                    <div className="img-car">
                        <img alt="up arrow" src="Assets/up.png" className="up-arrow"></img>
                        <img alt="dog in lifejacket" src="Assets/greenlifejacket3.jpg" className="car-photo"></img>
                        <img alt="dog in lifejacket" src="Assets/greenlifejacket2.png" className="car-photo"></img>
                        <img alt="dog in lifejacket" src="Assets/greenlifejacket1.jpg" className="car-photo"></img>
                        <img alt="down arrow" src="Assets/down.png" className="down-arrow"></img>
                    </div>
                }
            </div>
        );
    }
}

export default ImageCar;