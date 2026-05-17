import {useState} from "react";
import './Works.css'
import ProjectCard from "../ProjectCard.jsx";
import projects from "../projects/data/index.js";
import registry from "../projects/pages/registry.js";



function Works({}) {
    const [selectedCard, setSelectedCard] = useState(null)

    if (selectedCard) {
        const DetailPage = registry[selectedCard.component]
        return DetailPage
            ? <DetailPage project={selectedCard} onBack={() => setSelectedCard(null)} />
            : <p>Page not found</p>
        }
    
    console.log(projects)

    return (
        <div className={'works-container'}>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onCardClick={setSelectedCard}/>
            ))}
        </div>
    )
}

export default Works


