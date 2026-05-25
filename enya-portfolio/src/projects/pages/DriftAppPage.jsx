import TechnologiesPill from '../../TechnologiesPill';
import './styles/DriftAppPage.css';
import HeroImage from '../../assets/project-assets/drift-app/hero_image.svg';

function DriftAppDetails({project, onBack}) {
    return (
    <div className={'project-details-container'}>
      <button className={'back-button'} onClick={onBack}>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.36379 0.292786C7.55126 0.480314 7.65657 0.734622 7.65657 0.999786C7.65657 1.26495 7.55126 1.51926 7.36379 1.70679L2.41379 6.65679L7.36379 11.6068C7.54594 11.7954 7.64674 12.048 7.64446 12.3102C7.64218 12.5724 7.53701 12.8232 7.3516 13.0086C7.1662 13.194 6.91538 13.2992 6.65319 13.3015C6.39099 13.3037 6.13839 13.2029 5.94979 13.0208L0.292786 7.36379C0.105315 7.17626 0 6.92195 0 6.65679C0 6.39162 0.105315 6.13731 0.292786 5.94979L5.94979 0.292786C6.13731 0.105315 6.39162 0 6.65679 0C6.92195 0 7.17626 0.105315 7.36379 0.292786Z" fill="white"/>
          </svg>
          Back to Works
        </button>

      <div className={'heading-strip'}>
        <div className={'project-heading'}>
          <h2>{project.title} ({project.year})</h2>
        </div>
        <div>
          <TechnologiesPill project={project} />
        </div>
      </div>
      
      <div className={'project-description'}>
        <img src={HeroImage} alt={`${project.title} screenshot`} className={'project-image'} />

      {/* Unique description for this project */}
        <div className={'section-title'}>
        <img src='../src/assets/sparkle.svg' alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Problem Statement</h2>
        </div>
        <p>Our target users are young adults who experience frustration with recalling and finding photos on their phone because it is disorganised. This leads to photos being forgotten, memories being missed and an accumulation of unused photos.</p>

        <div className={'section-title'}>
        <img src='../src/assets/sparkle.svg' alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Goal Statement</h2>
        </div>
        <p>Our Photo App will let users cluster and organise their photos in a meaningful way. This will affect how users connect and look back at their memories by making a more personalised and efficient photo gallery. We will measure the effectiveness of the app by testing how users feel when using the app, such as their frustrations, and how quickly they can find a photo.</p>

        <div className={'section-title'}>
        <img src='../src/assets/sparkle.svg' alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Research: Initial User Flows</h2>
        </div>
        <p>Our initial user flows serve as the foundation for how we intend to create our key features and functionality in Drift, our photo clustering app. They also helped to build the flow between the main screens in our app (like home screen, cluster view, settings etc).</p>

        <div className={'quadrant-grid'}>

          <div className={'quadrant-card'}>
            <div className={'section-title'}>
              <h2>Finding a Photo in cluster view (Timeline or Search)</h2>
            </div>
            
            <img src='../src/assets/project-assets/drift-app/User_Flow_1.png' alt="User Interviews" className={'project-image'} />
          </div>

          <div className={'quadrant-card'}>
            <div className={'section-title'}>
              <h2>Finding a Photo in category clusters</h2>
            </div>
            
            <img src='../src/assets/project-assets/drift-app/User_Flow_2.png' alt="Affinity Mapping" className={'project-image'} />
          </div>

          <div className={'quadrant-card'}>
            <div className={'section-title'}>
              <h2>Arranging a Cluster of Photos</h2>
            </div>
            
            <img src='../src/assets/project-assets/drift-app/User_Flow_3.png' alt="Competitive Analysis" className={'project-image'} />
          </div>

          <div className={'quadrant-card'}>
            <div className={'section-title'}>
              <h2>Viewing a Friends Cluster</h2>
            </div>
            
            <img src='../src/assets/project-assets/drift-app/User_Flow_4.png' alt="Persona Development" className={'project-image'} />
          </div>

        </div>


        </div>
    </div>
  );
}

export default DriftAppDetails

