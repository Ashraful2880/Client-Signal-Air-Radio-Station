import React, { useState } from 'react';
import bulbStyle from "../../assets/Styles/CheckBulb.module.css";
import bulbOff from "../../assets/Images/Bulb-Off.png";
import bulbOn from "../../assets/Images/Bulb-On.png";

const CheckBulb = () => {
    const [bulb, setBulb] = useState(bulbOff)
    return (
        <div className={bulbStyle.container}>
            <h1>Click A Button to On/Off the Bulb</h1>
            <img src={bulb} alt="Bulb" />
            <div>
                <button onClick={() => setBulb(bulbOn)} className={bulbStyle.onButton}>ON</button>
                <button onClick={() => setBulb(bulbOff)} className={bulbStyle.offButton}>OFF</button>
            </div>
        </div>
    );
};

export default CheckBulb;