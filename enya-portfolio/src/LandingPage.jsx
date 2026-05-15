import './LandingPage.css'
import React, {useState, useEffect} from "react";
import MainContainer from "./MainContainer.jsx";
import Sparkle from "./Sparkle.jsx";

function LandingPage() {

    // Clock face function

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const IntervalID = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => {
            clearInterval(IntervalID);
        }

    }, []);

    function formatTime() {
        let hours = time.getHours()
        let mins = time.getMinutes()
        const meridiam = hours >= 12 ? "PM" :  "AM";
        hours = hours % 12 || 12;
        return `${addZero(hours)}:${addZero(mins)} ${meridiam}`
    }

    function addZero(num) {
        return (num < 10 ? "0" : "") + num
    }

    // Mouse state change



    const [showMain, setShowMain] = useState(false)

    return showMain ? <MainContainer/> : (
        <div className={"landing-container"}>
            {Array.from({ length: 15 }, (_, i) => <Sparkle key={i}/>)}
            <div className={"lockscreen-container"} style={{zIndex:'100', position:'relative'}}>
                <div className={"lockscreen-inner"}>
                    <div>
                        <span className={"clock-face"}>{formatTime()}</span>
                    </div>
                    <div className={"landing-title"}>
                        <div className={'title-name'}>Enya Bekker</div>
                        <div className={'title-subtext'}>PRODUCT DESIGNER</div>
                    </div>
                    <div>
                        <button onClick={() => setShowMain(true)} className={"main-button"}
                                onMouseEnter={() => setCursor('hover')}
                                onMouseLeave={() => setCursor('default')}>
                            ⋆⭒˚.⋆ come get to know me ✧˖°.
                        </button>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default LandingPage