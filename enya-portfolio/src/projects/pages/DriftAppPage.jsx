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
              <h2>1. Finding a photo in cluster view (timeline or search)</h2>
            </div>            
            <img src='../src/assets/project-assets/drift-app/User_Flow_1.png' alt="User Interviews" className={'project-image'} />
          </div>

          <div className={'quadrant-card'}>
            <div className={'section-title'}>
              <h2>2. Finding a photo in category clusters</h2>
            </div>
            
            <img src='../src/assets/project-assets/drift-app/User_Flow_2.png' alt="Affinity Mapping" className={'project-image'} />
          </div>

          <div className={'quadrant-card'}>
            <div className={'section-title'}>
              <h2>3. Arranging a cluster of photos</h2>
            </div>
            
            <img src='../src/assets/project-assets/drift-app/User_Flow_3.png' alt="Competitive Analysis" className={'project-image'} />
          </div>

          <div className={'quadrant-card'}>
            <div className={'section-title'}>
              <h2>4. Viewing a friends cluster</h2>
            </div>
            
            <img src='../src/assets/project-assets/drift-app/User_Flow_4.png' alt="Persona Development" className={'project-image'} />
          </div>

        </div>

        <div className={'section-title'}>
        <img src='../src/assets/sparkle.svg' alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Research: Information Architecture</h2>
        </div>
        <p>Our first information architecture was created by considering the user flows and the major features we wished to include in the app. It was our intention to make each of the top level categories (in green) an item on the navigation bar, however, we were not happy with there being six items, and thought we might moving settings under profile. Compared to the app later on, there was a greater focus on friends and AI automation rather than augmentation, where it would automatically pull photos from your phone and sort them. </p>
        <img src='../src/assets/project-assets/drift-app/Information_Architecture_Graph.png' style={{width: '100%', height: 'auto', borderRadius: "1em"}} alt='Information Architecture Graph'></img>

        <div className={'section-title'}>
        <img src='../src/assets/sparkle.svg' alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Low-Fidelity Wireframing</h2>
        </div>
        <p>These wireframes shows the screens you would see in the first user flow - Finding a photo using the Clusters screen. You can get to the Clusters Screen by tapping the cluster icon (4th icon in the bottom navigation bar).
            <br></br><br></br>
            We refined this screen so that each of the cards represents a top-level cluster (like people or pets). It has an image which shows a small preview of a couple of photos that are in that cluster. We included a filter option so that users can sort the top-level clusters and easily find the one they are looking for. The toggle button feature can be used to toggle between the nested clusters view or the photos view.
            <br></br><br></br>
            <strong>Nested cluster view:</strong> The idea was that you can tap on a nested cluster to view its photos and possible further nested clusters. We originally had the nested cluster toggle view show all the nested clusters displayed as a big cluster. 
            <br></br><br></br>
            <strong>Photos view:</strong> The idea was that this would show the photos of the current cluster you are viewing (e.g. a photo cluster of your pet photos). Then you could tap on a photo to view it individually.
        </p>
        <img src='../src/assets/project-assets/drift-app/Low_Fidelity_Wireframes.png' style={{width: '100%', height: 'auto', borderRadius: "1em"}} alt='Low Fidelity Wireframes'></img>
        </div>
    </div>
  );
}

export default DriftAppDetails

