import './About.css'
import Sparkle from '../assets/sparkle.svg';
import PhotoOfMe from '../assets/photo_of_me.jpg';
import DrawingOfMe from '../assets/drawing_of_me2.png';

function About() {

    const bubblePath = "M1395.2 0C1508.42 0 1600.2 91.7816 1600.2 205C1600.2 318.218 1508.42 410 1395.2 410H403.204C347.798 410 297.529 388.017 260.635 352.301C254.425 353.416 248.031 354 241.5 354C182.129 354 134 305.871 134 246.5C134 199.102 164.676 158.869 207.257 144.569C233.047 60.847 311.02 7.35583e-05 403.204 0H1395.2ZM114.5 74C143.495 74 167 97.5051 167 126.5C167 155.495 143.495 179 114.5 179C85.5051 179 62 155.495 62 126.5C62 97.5051 85.5051 74 114.5 74ZM26.3789 126C39.0815 126 49.3789 136.297 49.3789 149C49.3789 161.703 39.0815 172 26.3789 172C13.6765 172 3.37891 161.702 3.37891 149C3.37891 136.298 13.6765 126 26.3789 126Z";

    return (
        <div className={"about-container"}>
            <div className={"about-content"}>
                <div className={"image-wipe-container"}>
                    <img src={PhotoOfMe} alt="Photo of me" className='hero-image'></img>
                    <img src={DrawingOfMe} alt="Photo of me" className='hero-image-overlay'></img>
                </div>
                <div>
                    <h1>About Me !</h1>
                    <div className="speech-bubble">
                        <svg width="100%" viewBox="0 0 1600 410" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="paint0_linear_17_2" x1="841" y1="0" x2="841" y2="410" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white"/>
                                    <stop offset="1" stopColor="#f0efff"/>
                                </linearGradient>
                            </defs>
                            <path d={bubblePath} fill="white"/>
                            <path d={bubblePath} fill="url(#paint0_linear_17_2)" fillOpacity="1"/>
                            <foreignObject x="280" y="50" width="1280" height="310">
                                <div
                                    xmlns="http://www.w3.org/1999/xhtml"
                                    style={{
                                        fontSize: "4.4em",
                                        fontStyle: "Italic",
                                        color: "#333",
                                        lineHeight: 1.4,
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "0 40px",
                                        boxSizing: "border-box",
                                        pointerEvents: "none",
                                    }}
                                >
                                    "The only way to expand your world is to come in contact with things you aren't familiar with" - Blue Period
                                </div>
                            </foreignObject>
                        </svg>
                    </div>
                </div>
                
            </div>
            <div className='about-details'>
                <div>
                    <div className='section-title'>
                        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
                        <h2>Skills</h2>
                    </div>
                    <ul>
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>UX/UI Design</li>
                        
                    </ul>
                </div>
                <div>
                    <div className='section-title'>
                        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto'}}></img>
                        <h2>Interests</h2>
                    </div>
                    <ul>
                        <li>Graphic design</li>
                        <li>Digital & traditional art</li>
                        <li>Software modding</li>
                        <li>Crocheting, reading, baking...</li>
                    </ul>
                </div>

            </div>
            
        </div>
    )
}

export default About