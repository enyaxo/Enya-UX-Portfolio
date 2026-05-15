import {useState} from "react";
import './Works.css'
import ProjectCard from "../ProjectCard.jsx";
import ProjectDetails from "../ProjectDetails.jsx";
import projects from "../projects/index.js";


function Works({}) {
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

    
    console.log(projects) // add this temporarily

    return (
        <div className={'works-container'}>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onCardClick={handleCardClick}/>
            ))}
        </div>
    )
}

export default Works


