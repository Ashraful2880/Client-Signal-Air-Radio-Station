import React, { useEffect, useState } from 'react';
import backArrow from "../../assets/Images/back-arrow.png";
import SwitchImage from "../../assets/Images/switch.png";
import minus from "../../assets/Images/minus.png";
import plus from "../../assets/Images/plus.png";
import './test.css';
import radioStyle from "../../assets/Styles/RadioStation.module.css";


const RadioStation = () => {
    const [radioList, setRadioList] = React.useState<
        Array<{
            Name: string,
            Code: number,
            Image: string
        }>
    >([])

    useEffect(() => {
        fetch("./FMList.json")
            .then(res => res.json())
            .then(data => setRadioList(data)
            )
    }, [])
    return (
        <div className={radioStyle.containerbg}>
            <h4>All Stations</h4>
            <div className={radioStyle.container}>
                <div className={radioStyle.header}>
                    <button>
                        <img src={backArrow} alt="Back Icon" className={radioStyle.arrow} />
                    </button>
                    <h2 className={radioStyle.heading}>Stations</h2>
                    <button>
                        <img src={SwitchImage} alt="Switch Icon" className={radioStyle.switch} />
                    </button>
                </div>
                <div>
                    <ul className={radioStyle.menuArea} >
                        <li className="listItem" id="about">
                            <a href="#about" className={radioStyle.fmBtn}>
                                <p>Putin FM</p>
                                <p>66.6</p>
                            </a>
                            <div className="radioContainer">
                                <div className={radioStyle.player}>
                                    <img className={radioStyle.minusbtn} src={minus} alt="Minus Button" />
                                    <img className={radioStyle.playerImg} src="https://res.cloudinary.com/ashraful-islam/image/upload/v1653291419/Radio%20Stations/radio3_p6ecev.png" alt="Player" />
                                    <img className={radioStyle.minusbtn} src={plus} alt="Plus Button" />
                                </div>
                            </div>
                        </li>
                        <li className="listItem" id="dribble">
                            <a href="#dribble" className={radioStyle.fmBtn}>
                                <p>Dribbble FM</p>
                                <p>101.26</p>
                            </a>
                            <div className="radioContainer">
                                <div className={radioStyle.player}>
                                    <img className={radioStyle.minusbtn} src={minus} alt="Minus Button" />
                                    <img className={radioStyle.playerImg} src="https://res.cloudinary.com/ashraful-islam/image/upload/v1653291419/Radio%20Stations/radio3_p6ecev.png" alt="Player" />
                                    <img className={radioStyle.minusbtn} src={plus} alt="Plus Button" />
                                </div>
                            </div>
                        </li>
                        <li className="listItem" id="doge">
                            <a href="#doge" className={radioStyle.fmBtn}>
                                <p>Doge FM</p>
                                <p>99.4</p>
                            </a>
                            <div className="radioContainer">
                                <div className={radioStyle.player}>
                                    <img className={radioStyle.minusbtn} src={minus} alt="Minus Button" />
                                    <img className={radioStyle.playerImg} src="https://res.cloudinary.com/ashraful-islam/image/upload/v1653291419/Radio%20Stations/radio3_p6ecev.png" alt="Player" />
                                    <img className={radioStyle.minusbtn} src={plus} alt="Plus Button" />
                                </div>
                            </div>
                        </li>
                        <li className="listItem" id="ballads">
                            <a href="#ballads" className={radioStyle.fmBtn}>
                                <p>Ballads FM</p>
                                <p>87.1</p>
                            </a>
                            <div className="radioContainer">
                                <div className={radioStyle.player}>
                                    <img className={radioStyle.minusbtn} src={minus} alt="Minus Button" />
                                    <img className={radioStyle.playerImg} src="https://res.cloudinary.com/ashraful-islam/image/upload/v1653291419/Radio%20Stations/radio3_p6ecev.png" alt="Player" />
                                    <img className={radioStyle.minusbtn} src={plus} alt="Plus Button" />
                                </div>
                            </div>
                        </li>
                        <li className="listItem" id="maximum">
                            <a href="#maximum" className={radioStyle.fmBtn}>
                                <p>Maximum FM</p>
                                <p>142.2</p>
                            </a>
                            <div className="radioContainer">
                                <div className={radioStyle.player}>
                                    <img className={radioStyle.minusbtn} src={minus} alt="Minus Button" />
                                    <img className={radioStyle.playerImg} src="https://res.cloudinary.com/ashraful-islam/image/upload/v1653291419/Radio%20Stations/radio3_p6ecev.png" alt="Player" />
                                    <img className={radioStyle.minusbtn} src={plus} alt="Plus Button" />
                                </div>
                            </div>
                        </li>
                        <div className={radioStyle.playing}>
                            <p>Currently Playing</p>
                            <h3>Dribble FM</h3>
                        </div>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default RadioStation;