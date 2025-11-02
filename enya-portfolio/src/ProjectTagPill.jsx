import './ProjectTagPill.css'

function ProjectTagPill({project}) {
    return (
        <div className={'project-tags'}>
            {project.tags?.map((tag, index) => (
                <span key={index} className={'project-tag'}>{tag}</span>
            ))}
        </div>
    )
}

export default ProjectTagPill