import './MainContainer.css'
import NavBar from "./NavBar.jsx";

function MainContainer() {
    return (
        <div className={"container-box"}>
            <div className={"container-content"}>
                <NavBar/>
                <div className={"box-content"}>
                    <div className={'page-title'}>
                        <h1>hello, i'm <span style={{color: "#7770D9"}}>enya!</span></h1>
                    </div>
                    <h2>second year ui/ux design student, web & app developer</h2>
                </div>
                <div className={"divider"}>
                    <ul>
                        <li>about</li>
                        <li>works</li>
                        <li>contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainContainer