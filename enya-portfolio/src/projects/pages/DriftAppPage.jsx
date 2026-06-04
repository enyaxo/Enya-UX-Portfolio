import TechnologiesPill from '../../TechnologiesPill';
import './styles/DriftAppPage.css';

//Image imports
import HeroImage from '../../assets/project-assets/drift-app/hero_image.svg';
import Sparkle from '../../assets/sparkle.svg';
import UserFlow1 from '../../assets/project-assets/drift-app/User_Flow_1.png';
import UserFlow2 from '../../assets/project-assets/drift-app/User_Flow_2.png';
import UserFlow3 from '../../assets/project-assets/drift-app/User_Flow_3.png';
import UserFlow4 from '../../assets/project-assets/drift-app/User_Flow_4.png';
import InfoArchitectureGraph from '../../assets/project-assets/drift-app/Information_Architecture_Graph.png';
import LowFiWireframes from '../../assets/project-assets/drift-app/Low_Fidelity_Wireframes.png';
import HighFiWireframes from '../../assets/project-assets/drift-app/High_Fidelity_Wireframes.png';

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

      <div className={'quadrant-grid'}>
        <div className={'quadrant-card'}>
          <div className={'section-title'}>
            <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
            <h2>Problem Statement</h2>
            </div>
            <p>Our target users are young adults who experience frustration with recalling and finding photos on their phone because it is disorganised. This leads to photos being forgotten, memories being missed and an accumulation of unused photos.</p>
        </div>

        <div className={'quadrant-card'}>
          <div className={'section-title'}>
        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
            <h2>Goal Statement</h2>
            </div>
            <p>Our Photo App will let users cluster and organise their photos in a meaningful way. This will affect how users connect and look back at their memories by making a more personalised and efficient photo gallery. We will measure the effectiveness of the app by testing how users feel when using the app, such as their frustrations, and how quickly they can find a photo.</p>
        </div>

      </div>

        <div className={'section-title'}>
        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Research: Initial User Flows</h2>
        </div>
        <p>Our initial user flows serve as the foundation for how we intend to create our key features and functionality in Drift, our photo clustering app. They also helped to build the flow between the main screens in our app (like home screen, cluster view, settings etc).</p>

        <div className={'quadrant-grid'}>

          <div className={'quadrant-card'}>
            <div className={'section-title'}>
              <h2>1. Finding a photo in cluster view</h2>
            </div>            
            <img src={UserFlow1} alt="User Interviews" className={'project-image'} />
          </div>

          <div className={'quadrant-card'}>
            <div className={'section-title'}>
              <h2>2. Finding a photo in category clusters</h2>
            </div>
            
            <img src={UserFlow2} alt="Affinity Mapping" className={'project-image'} />
          </div>

          <div className={'quadrant-card'}>
            <div className={'section-title'}>
              <h2>3. Arranging a cluster of photos</h2>
            </div>
            
            <img src={UserFlow3} alt="Competitive Analysis" className={'project-image'} />
          </div>

          <div className={'quadrant-card'}>
            <div className={'section-title'}>
              <h2>4. Viewing a friends cluster</h2>
            </div>
            
            <img src={UserFlow4} alt="Persona Development" className={'project-image'} />
          </div>

        </div>

        

        <div className={'section-title'}>
        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Research: Information Architecture</h2>
        </div>
        <p>Our first information architecture was created by considering the user flows and the major features we wished to include in the app. It was our intention to make each of the top level categories (in green) an item on the navigation bar, however, we were not happy with there being six items, and thought we might moving settings under profile. Compared to the app later on, there was a greater focus on friends and AI automation rather than augmentation, where it would automatically pull photos from your phone and sort them. </p>
        <div className={'centered-image-container'}>
          <img src={InfoArchitectureGraph} alt='Information Architecture Graph'></img>
        </div>
        

        <div className={'section-title'}>
        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
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
        </div>
        <div className={'centered-image-container'}>
          <img src={LowFiWireframes} alt='Low Fidelity Wireframes'></img>
        </div>

        <div className={'section-title'}>
        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Expert Design Test</h2>
        </div>
        <p>The Expert Review yielded valuable feedback on design weaknesses, strengths, and potential improvements, which we reviewed and incorporated ahead of final usability testing. Some feedback flagged unimplemented Figma features, intentionally left out as outside our scope, but this highlighted a bias in how we defined task-completion actions. We addressed this by allowing for user errors in our usability testing.
          <br></br><br></br>
          <strong>The concept:</strong> Users initially struggled with the nested cluster concept, likely due to unfamiliar terminology, poor naming conventions, or limited visual fidelity. The cluster layout also made it unclear where to click to view photos. The toggle button caused further confusion, with users hesitating before use. However, most quickly adapted once they switched to photo view and progressed through the tasks.
          <br></br><br></br>
          <strong>Uploading photos:</strong> Users misread the "plus" icon on the navigation bar as adding a photo to an existing cluster, rather than uploading to the app. We addressed this by replacing it with a more conventional "upload" icon.
          <br></br><br></br>
          <strong>Dropdown Functionality:</strong> A user attempted to interact with the dropdown on the AI suggested clusters screen while completing Task 2, prompting us to add functionality. The dropdown now shows top-level clusters available to save into.
        </p>

        <div className={'section-title'}>
        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Usability Design Test</h2>
        </div>
        <p>We tested our high-fidelity prototype with four participants unaffiliated with the course, ensuring unbiased, first-impression reactions. As non-experts, their feedback tended to be straightforward, noting what felt intuitive or confusing, but remained valuable and informed several meaningful design changes.
        <br></br><br></br>
        <strong>Uploading multiple photos:</strong> One participant didn't realise uploading could generate multiple clusters, defaulting to creating them one at a time. Another wanted more manual control, questioning what to do if the AI grouping didn't match their intent, and asked for the ability to add photos to existing clusters. In response, we expanded the Upload Photos popup to offer three options: adding to an existing cluster, creating a single cluster, or using AI to generate multiple clusters.
        <br></br><br></br> 
        <strong>Changes to toggle view:</strong> Originally, viewing a cluster defaulted to the "nested clusters" toggle, with "photos cluster" as the secondary view. Usability participants preferred the opposite, with one noting: "Having the 'photos' appear first makes more sense so that you can view the photos before using the toggle to see the nested clusters." We made this change and found it improved the overall navigation flow.
        </p>

        <div className={'section-title'}>
        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>High-Fidelity Wireframe</h2>
        </div>
        <p>The high-fidelity prototype covers all core features: search, uploading photos to multiple clusters with auto-sorting, viewing photos within clusters, and accessing recently added clusters. The changes shown were all driven by feedback from our testing process.
          <br></br><br></br>
          <strong>Toggle Button Location:</strong> Moved the toggle button to have a bit more space between the bottom navigation bar so that users do not accidentally tap the bottom navigation bar rather than the toggle and vice versa.
          <br></br><br></br>
          <strong>Album to Clusters Wording:</strong> Changed the wording from “Album Clusters” to “Your clusters” and “album” to “clusters” in the bottom navigation bar. This was mainly because we found that people were getting confused about the purpose of this screen, which is to display all the top-level category photo clusters.
        </p>
        <div className={'centered-image-container'}>
        <img src={HighFiWireframes} alt='High Fidelity Wireframes'></img>
        </div>
        
    </div>
  );
}

export default DriftAppDetails

