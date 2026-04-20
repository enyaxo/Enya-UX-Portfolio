import './LandingPage.css'
import React, {useState, useEffect} from "react";


function LandingPage() {

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

    return (
        <div>
            <span>{formatTime()}</span>
        </div>
    )
}

export default LandingPage