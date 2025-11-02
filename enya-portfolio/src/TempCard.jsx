import './TempCard.css'
import UCGamesThumbnail from '/thumbnails/UC-Games-Thumbnail.jpg';
import ProjectTagPill from "./ProjectTagPill.jsx";

function TempCard({onCardClick}) {
    const projectData = {
        title: 'UC Games Website',
        year: '2025',
        thumbnail: UCGamesThumbnail,
        overview: 'Collaborated to build a Game Catalog page alongside UC staff to showcase games built with and at the University of Canterbury. The UC Games Catalog is a React based website structured with Node.js, as well as HTML, CSS, and JavaScript. This self-directed 6-week project allowed me to apply UI/ UX knowledge learned through my Digital Product Design degree.',
        tags: ['UX Design', 'Web App', 'Stakeholder Project'],
        technologies: ['React', 'JavaScript', 'CSS', 'Figma'],
        problem: 'The UC Game department has taught at the University of Canterbury for over 5 years. In this time, there have been many games created by UC students with/at the university. The staff at UC have all of these games (including their information and assets), however, their current organisation structure has lead to much trouble in managing, showcasing, and accessing all stored games. As most of these games has been archived, neither students nor staff have an easy way to search for and access them.',
        research: "To create a website tool with a familiar and relevant user interface, we moved towards researching various game catalog/storage to better our understanding of how our catalog may look in line with the theme of video games. We approached Steam, XBox, and itch.io's user interfaces, looking at their use of cards, overlays, search navigation, and their display of a game's individual page.",
        prototyping: 'In between our low fidelity wireframing and prototyping through Figma, we often meet with our stakeholders to receive a constant flow of feedback. This allowed us to continuouly refine our product until it was one that aligned with our stakeholder needs. We opted for paper/digital low-fidelity wireframing to "sus-out" the general skeleton and features, moving to Figma to refine this in a high-fidelity prototype. ',
        development: "Our final prototype is build through React, with support in JavaScript's JSON format which we used to call and populate the cards and game pages showcased in the catalog. We divided the webpage into sections where each member of my group worked on a particular element of their choosing; I worked on and developed the GamePage and the routing between cards and it's respective page.",
        testing_changes: "Before finalising our developed prototype, we sought users to test our website to identify any features we neglected to implement and the usability/functionality of our website as a whole. We conducted an A/B testing flow to test two different means of filtering the search, the first test tested the search filter down to a specific game, the second broadening with the relevant tags (AND vs OR). Testing gave us insight into other features, such as the theme toggle and how it's presented, and the information displayed on the cards.",
    }

    return (
        <div className={'card-container'} onClick={() => onCardClick(projectData)} style={{cursor:'pointer'}}>
            <div className={'card-top'}>
                <div className={'card-image-thumbnail'}>
                    <img alt={'Thumbnail of UC Games Website'} src={UCGamesThumbnail}/>
                </div>
                <div className={'card-heading'}>
                    <h3>{projectData.title}</h3>
                    <p>{projectData.year}</p>
                </div>
                <div className={'card-tags'}>
                    <ProjectTagPill project={projectData}/>
                </div>
            </div>
        </div>
    )
}

export default TempCard