import React from "react";
import {useState, useEffect} from "react";

function Sparkle() {

    // Background sparkle function

    const [position, setPosition] = useState({top: `${Math.random() * 90}%`, left: `${Math.random() * 90}%`});

    const randomDelay = () => Math.random() * (4000 - 1500) + 1500;
    const randomPosition = () => ({
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 90}%`
    })
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        let timeout;

        const schedule = () => {
            timeout = setTimeout(() => {
                setAnimating(false);
                setTimeout(() => {
                    setPosition(randomPosition());
                    setAnimating(true);
                }, 1000);
                schedule();
            }, randomDelay());
        };

        schedule();
        return () => clearTimeout(timeout);
    }, []);

        return (
            <svg width="30" height="30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                position: 'absolute',
                top: position.top,
                left: position.left,
                opacity: animating ? 1 : 0,
                transition: "opacity 2s ease",
            }}>
                <g clip-path="url(#clip0_1_2)">
                    <path
                        d="M39.0165 5.33842C39.2177 4.24665 40.7823 4.24664 40.9835 5.33841L46.0977 33.1C46.1729 33.5079 46.4921 33.8271 46.9 33.9023L74.6616 39.0165C75.7534 39.2177 75.7534 40.7823 74.6616 40.9835L46.9 46.0977C46.4921 46.1729 46.1729 46.4921 46.0977 46.9L40.9835 74.6616C40.7823 75.7534 39.2177 75.7534 39.0165 74.6616L33.9023 46.9C33.8271 46.4921 33.5079 46.1729 33.1 46.0977L5.33842 40.9835C4.24665 40.7823 4.24664 39.2177 5.33841 39.0165L33.1 33.9023C33.5079 33.8271 33.8271 33.5079 33.9023 33.1L39.0165 5.33842Z"
                        fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_1_2">
                        <rect width="80" height="80" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        )
    }

export default Sparkle
