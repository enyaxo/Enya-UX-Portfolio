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
                    <h3>[Blah blah blah insert witty remark here]</h3>
                </div>
                
            </div>
            <div className='about-details'>
                <div>
                    <h2>Skills</h2>
                    <ul>
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>UX/UI Design</li>
                        
                    </ul>
                </div>
                <div>
                    <h2>Interests</h2>
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