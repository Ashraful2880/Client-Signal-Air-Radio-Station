import React, { useState } from 'react';
import bulbStyle from "../../assets/Styles/CheckBulb.module.css";
import bulbOff from "../../assets/Images/Bulb-Off.png";
import bulbOn from "../../assets/Images/Bulb-On.png";

const CheckBulb = () => {
    const [bulb, setBulb] = useState(bulbOff)
    return (
        <div className={bulbStyle.container}>
            <h1>Click A Button to On/Off the Bulb</h1>
            <img onClick={() => setBulb(bulb === bulbOn ? bulbOff : bulbOn)} src={bulb} alt="Bulb" />
        </div>
    );
};

export default CheckBulb;