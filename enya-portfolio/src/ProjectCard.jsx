import './ProjectCard.css'
import UCGamesThumbnail from '/thumbnails/UC-Games-Thumbnail.jpg';
import ProjectTagPill from "./ProjectTagPill.jsx";

function ProjectCard({project, onCardClick}) {

    return (
        /*<div className={'card-container'} onClick={() => onCardClick(projectData)} style={{cursor:'pointer'}}>
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
        </div>*/
        <div className={'card-folder'} onClick={() => onCardClick(project)} style={{cursor:'pointer'}}>
            {/* <img src="../src/assets/folder_test.png" alt={project.title}  ></img> */}
            <img src={project.icon} alt={project.title}></img>
            <h5>{project.title}</h5>
            <p>{project.year}</p>
        </div>
        
    )
}

export default ProjectCard