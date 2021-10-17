import './Details.scss';
import ImageCar from './ImageCar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Component } from 'react';
import { useDispatch } from 'react-redux';
import { incrementByAmount } from './features/counterSlice';
import React, { useState } from 'react';


function Details() {
    const dispatch = useDispatch();
    const [color, setColor] = useState('red');
    const [size, setSize] = useState('large');
    const [quant, setQuant] = useState(1);
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
                <ImageCar color={color}></ImageCar>
                <div className="product-photo">
                    {/*             <!-- Main product photo --> */}
                    {color === 'red' &&
                        <img alt="dog in lifejacket" src="Assets/lifejacket2.jpeg"></img>
                    }
                    {color === 'blue' &&
                        <img alt="dog in lifejacket" src="Assets/bluelifejacket2.png"></img>
                    }
                    {color === 'green' &&
                        <img alt="dog in lifejacket" src="Assets/greenlifejacket2.png"></img>
                    }
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
                        <div className="dropdowns">
                            <select onChange={() => setSize('large')} id="sizes" name="sizes">
                                <option value="large">Large</option>
                                <option onChange={() => setSize('medium')} value="medium">Medium</option>
                                <option onChange={() => setSize('small')} value="small">Small</option>
                            </select>
                            <select onChange={() => setQuant(quantity.value)} id="quantity" name="quantity">
                                <option onChange={() => setQuant(1)} value={1}>1</option>
                                <option onChange={() => setQuant(2)} value={2}>2</option>
                                <option onChange={() => setQuant(3)} value={3}>3</option>
                            </select>
                        </div>
                    </div>
                    <div className="row size">
                        <div className="color-selects">
                            <div className="red"> <input onChange={() => setColor('red')} value="red" className="red" name="color" type="radio" defaultChecked></input> </div>
                            <div className="blue"><input onChange={() => setColor('blue')} value="blue" className="blue" name="color" type="radio"></input></div>
                            <div className="green"><input onChange={() => setColor('green')} value="green" className="green" name="color" type="radio"></input></div>
                        </div>
                        <span> Size Chart </span>
                    </div>
                    <div className="row cart">
                        <img onClick={() => dispatch(incrementByAmount(quant))} alt="add to cart" src="Assets/add-button.png" className="add-button"></img>
                        <span className="price"> $40 </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
