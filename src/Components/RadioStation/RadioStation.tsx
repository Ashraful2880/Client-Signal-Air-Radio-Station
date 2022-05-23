import React, { useEffect, useState } from 'react';
import backArrow from "../../assets/Images/back-arrow.png";
import SwitchImage from "../../assets/Images/switch.png";
import minus from "../../assets/Images/minus.png";
import plus from "../../assets/Images/plus.png";
import radioStyle from "../../assets/Styles/RadioStation.module.css";


const RadioStation = () => {
    const [display, setDisplay] = useState('none')

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
                        {
                            radioList.map(radio =>
                                <li key={radio?.Code}>
                                    <button className={radioStyle.fmBtn} onClick={() => setDisplay("block")}>
                                        <p>{radio?.Name}</p>
                                        <p>{radio?.Code}</p>
                                    </button>
                                    <div className={radioStyle.radioContainer} style={{ display: `${display}` }}>
                                        <div className={radioStyle.player}>
                                            <img className={radioStyle.minusbtn} src={minus} alt="Minus Button" />
                                            <img className={radioStyle.playerImg} src={radio?.Image} alt="Player" />
                                            <img className={radioStyle.minusbtn} src={plus} alt="Plus Button" />
                                        </div>
                                    </div>
                                </li>
                            )
                        }
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