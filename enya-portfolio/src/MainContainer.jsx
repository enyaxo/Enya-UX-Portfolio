import './MainContainer.css'
import NavBar from "./NavBar.jsx";
import About from "./About.jsx";
import {useState} from "react";


function MainContainer() {
    const [activePage, setActivePage] = useState('about')

    /* Using useState to track the active page, and switch in between pages in a single page (without routing) */
    const RenderPage = () => {
        switch(activePage) {
            case 'about':
                return <About/>
            case 'works':
                return <div>Placeholder works</div>;
            case 'contact':
                return <div>Placeholder contact</div>;
            default:
                return <About/>;
        }
    }

    return (
        <div className={"container-box"}>
            <div className={"container-content"}>
                <NavBar/>
                <div className={"box-content"}>
                    <div className={'page-title'}>
                        <h1>Hello, I'm <span style={{color: "#7770D9"}}>Enya!</span></h1>
                    </div>
                    <h2>Second year UI/UX design student, web & app developer</h2>
                </div>
                <div className={"divider"}>
                    <ul>
                        <li onClick={() => setActivePage('about')} className={'nav-button'}>about</li>
                        <li onClick={() => setActivePage('works')} className={'nav-button'}>works</li>
                        <li onClick={() => setActivePage('contact')} className={'nav-button'}>contact</li>
                    </ul>
                </div>
                {RenderPage()}
            </div>
        </div>
    )
}

export default MainContainer