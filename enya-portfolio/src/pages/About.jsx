import './About.css'

function About() {
    return (
        <div className={"about-container"}>
            <div className={"about-content"}>
                <div>
                    <img src='../src/assets/photo_of_me.jpg' alt="Photo of me" className='hero-image'></img>
                </div>
                <div>
                    <h1>About Me !</h1>
                    <div class="speech-bubble" style={{position: "relative", display: "inline-block", }}>
                        <svg width="100%" height="auto" viewBox="0 0 995 489" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M863.5 44C929.498 44 983 97.502 983 163.5C983 229.498 929.498 283 863.5 283H306.5C296.997 283 287.754 281.888 278.892 279.792C266.197 288.742 250.713 294 234 294H228C184.922 294 150 259.078 150 216C150 187.602 165.176 162.75 187.859 149.108C194.967 89.8964 245.373 44 306.5 44H863.5ZM101.5 150C124.42 150 143 168.58 143 191.5V192.5C143 215.42 124.42 234 101.5 234C78.5802 234 60 215.42 60 192.5V191.5C60 168.58 78.5802 150 101.5 150ZM19.5 169C30.2696 169 39 177.73 39 188.5C39 199.27 30.2696 208 19.5 208C8.73045 208 0 199.27 0 188.5C0 177.73 8.73045 169 19.5 169Z" fill="#F2F1FF"/>            
                        </svg>
                        <div style={{
                                position: "absolute",
                                top: "30%",
                                left: "58%",
                                transform: "translate(-50%, -50%)",
                                textAlign: "center",
                                fontSize: "1em",
                                fontFamily: "sans-serif",
                                color: "#333",
                                pointerEvents: "none",
                            }}>
                            Hello World
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='about-details'>
                <div>
                    <div className='section-title'>
                        <img src='../src/assets/sparkle.svg' alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
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
                        <img src='../src/assets/sparkle.svg' alt="Sparkle decoration" style={{width: '2em', height: 'auto'}}></img>
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