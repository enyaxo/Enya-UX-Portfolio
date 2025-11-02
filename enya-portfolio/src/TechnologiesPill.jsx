import './TechnologiesPill.css'

function TechnologiesPill({project}) {
    return (
        <div className={'techs-pill'}>
            {project.technologies?.map((tag, index) => (
                <span key={index} className={'tech-pill'}>{tag}</span>
            ))}
        </div>
    )
}

export default TechnologiesPill