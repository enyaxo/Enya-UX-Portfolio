import {useState} from "react";
import './Works.css'
import TempCard from "../TempCard.jsx";
import ProjectDetails from "../ProjectDetails.jsx";


function Works() {
    const [selectedCard, setSelectedCard] = useState(null)

    const handleCardClick = (projectData) => {
        setSelectedCard(projectData)
    }

    const handleWorksReturn = () => {
        setSelectedCard(null)
    }

    if (selectedCard) {
        return (
            <ProjectDetails project={selectedCard} onBack={handleWorksReturn}/>
        )
    }

    return (
        <div className={'works-container'}>
            <TempCard onCardClick={handleCardClick}/>
        </div>
    )
}

export default Works