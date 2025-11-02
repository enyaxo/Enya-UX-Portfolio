import './ProjectDetails.css'
import UCGamesGamePage from '/images/UC-Games-Game-Page.jpg';
import UCGamesWireframes from '/images/Wireframes.png';
import SteamUIResearch from '/images/Steam-Research.jpg';
import TechnologiesPill from "./TechnologiesPill.jsx";


function ProjectDetails({project, onBack}) {

    return (
        <div className={'project-details-container'}>
            <div className={'heading-strip'}>
                <button className={'back-button'} onClick={onBack}>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.36379 0.292786C7.55126 0.480314 7.65657 0.734622 7.65657 0.999786C7.65657 1.26495 7.55126 1.51926 7.36379 1.70679L2.41379 6.65679L7.36379 11.6068C7.54594 11.7954 7.64674 12.048 7.64446 12.3102C7.64218 12.5724 7.53701 12.8232 7.3516 13.0086C7.1662 13.194 6.91538 13.2992 6.65319 13.3015C6.39099 13.3037 6.13839 13.2029 5.94979 13.0208L0.292786 7.36379C0.105315 7.17626 0 6.92195 0 6.65679C0 6.39162 0.105315 6.13731 0.292786 5.94979L5.94979 0.292786C6.13731 0.105315 6.39162 0 6.65679 0C6.92195 0 7.17626 0.105315 7.36379 0.292786Z" fill="white"/>
                    </svg>
                    Back to Works</button>
                <div className={'project-heading'}>
                    <h2>{project.title} ({project.year})</h2>
                </div>
                <TechnologiesPill project={project}/>
                <div className={'image-divider'}>
                    <img alt={"Image of UC Games Website's GamePage"} src={UCGamesGamePage}/>
                </div>
                <div className={'overview-content'}>
                    <div className={'overview-heading'}>
                        <h3>Overview</h3>
                        <svg width="25" height="27" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4573 0.739652C12.7232 -0.246627 14.1225 -0.246631 14.3884 0.739648L16.9015 10.0617C16.9879 10.3824 17.2279 10.6392 17.542 10.7471L26.1708 13.7124C27.0708 14.0216 27.0708 15.2945 26.1708 15.6038L17.542 18.569C17.2279 18.6769 16.9879 18.9338 16.9015 19.2544L14.3884 28.5765C14.1225 29.5628 12.7232 29.5628 12.4573 28.5765L9.94425 19.2544C9.8578 18.9338 9.61779 18.6769 9.30371 18.569L0.6749 15.6038C-0.225116 15.2945 -0.225115 14.0216 0.674901 13.7124L9.30371 10.7471C9.61779 10.6392 9.8578 10.3824 9.94425 10.0617L12.4573 0.739652Z" fill="white"/>
                        </svg>
                    </div>
                    <p>{project.overview}</p>
                    <div className={'roles-content'}>
                        <div className={'roles-heading'}>
                            <h3>My Roles</h3>
                            <svg width="25" height="27" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4573 0.739652C12.7232 -0.246627 14.1225 -0.246631 14.3884 0.739648L16.9015 10.0617C16.9879 10.3824 17.2279 10.6392 17.542 10.7471L26.1708 13.7124C27.0708 14.0216 27.0708 15.2945 26.1708 15.6038L17.542 18.569C17.2279 18.6769 16.9879 18.9338 16.9015 19.2544L14.3884 28.5765C14.1225 29.5628 12.7232 29.5628 12.4573 28.5765L9.94425 19.2544C9.8578 18.9338 9.61779 18.6769 9.30371 18.569L0.6749 15.6038C-0.225116 15.2945 -0.225115 14.0216 0.674901 13.7124L9.30371 10.7471C9.61779 10.6392 9.8578 10.3824 9.94425 10.0617L12.4573 0.739652Z" fill="white"/>
                            </svg>
                        </div>
                        <ul>
                            <li>UI Research</li>
                            <li>Wire-framing</li>
                            <li>Building of the Game Page</li>
                            <li>User testing</li>
                        </ul>
                    </div>
                </div>
                <div className={'processes-content'}>
                    <div className={'processes-heading'}>
                        <h2>Processes</h2>
                        <svg width="25" height="27" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4573 0.739652C12.7232 -0.246627 14.1225 -0.246631 14.3884 0.739648L16.9015 10.0617C16.9879 10.3824 17.2279 10.6392 17.542 10.7471L26.1708 13.7124C27.0708 14.0216 27.0708 15.2945 26.1708 15.6038L17.542 18.569C17.2279 18.6769 16.9879 18.9338 16.9015 19.2544L14.3884 28.5765C14.1225 29.5628 12.7232 29.5628 12.4573 28.5765L9.94425 19.2544C9.8578 18.9338 9.61779 18.6769 9.30371 18.569L0.6749 15.6038C-0.225116 15.2945 -0.225115 14.0216 0.674901 13.7124L9.30371 10.7471C9.61779 10.6392 9.8578 10.3824 9.94425 10.0617L12.4573 0.739652Z" fill="white"/>
                        </svg>
                    </div>
                    <div className={'processes-pills'}>
                        <ul>
                            <li>1. Problem</li>
                            <li>2. Research</li>
                            <li>3. Prototype</li>
                            <li>4. Development</li>
                            <li>5. Testing + Changes</li>
                        </ul>
                    </div>
                    <div className={'problem-content'}>
                        <h3>Problem</h3>
                        <p>{project.problem}</p>
                        {/*<img alt={"Image of UC Games Website's GamePage"} src={UCGamesGamePage}/>*/}
                    </div>
                    <div className={'research-content'}>
                        <h3>Research</h3>
                        <div className={'research-box'}>
                            <div style={{display: 'inline'}}>
                                <p>{project.research}</p>
                                <p className={'research-comment'}>  {/*further comment im adding exclusive to the page*/}
                                    We furthered our quality of research by meeting with and receiving comments from our stakeholders consistently throughout the entire product development process.
                                </p>
                            </div>


                            <img alt={"Research of Steam's UI"} src={SteamUIResearch}/>
                        </div>
                    </div>
                    <div className={'prototype-content'}>
                        <h3>Prototype</h3>
                        <div className={'prototype-images'}>
                            <img alt={"Low and High Fidelity Wireframes of the Catalog Page"} src={UCGamesWireframes}/>
                        </div>
                        <p>{project.prototyping}</p>
                    </div>
                    <div className={'development-content'}>
                        <h3>Development</h3>
                        <p>{project.development}</p>
                    </div>
                    <div className={'testing-changes-content'}>
                        <h3>Presentation + Changes</h3>
                        <p>{project.testing_changes}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails