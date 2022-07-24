import "./currentWeather.css"
import sunny from "../../icons/01d.png"
import React from 'react';

function CurrentWeather(props) {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Kraków</p>
                    <p className="weather-desc">Cloudy</p>
                </div>
                <img alt="weather" className="weather-icon" src={sunny}/>
            </div>
            <div className="bottom">
                <p className="temperature">18C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">22</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">2 m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">15%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">15 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;