import TechnologiesPill from '../../TechnologiesPill';
import './styles/UCGamesPage.css';

// Images imports
import HeroImage from '../../assets/project-assets/inventory-app/hero_image.svg';
import Sparkle from '../../assets/sparkle.svg';
import UiResearch1 from '../../assets/project-assets/inventory-app/ui_research_1.png'
import UiResearch2 from '../../assets/project-assets/inventory-app/ui_research_2.png'
import StickyNoteProto from '../../assets/project-assets/inventory-app/sticky_note_prototyping.png'



function InventoryAppDetails({project, onBack}) {
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
        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Problem Overview</h2>
        </div>
        <p>Staff at the Univeristy of Canterbury have no ideal way of managing large numbers of items which may be loaned out to students (and other staff). There is no consistent format of software used to facilitate this process. A new in-house system purpose built for the needs of these staff members should help address the problems they face with current systems, allowing for greater control and customisation of an inventory managament system. </p>

        <div className={'section-title'}>
            <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
            <h2>Stakeholder Needs</h2>
        </div>
        <div className={'quadrant-grid'}>
        <div className={'quadrant-card'}>
          <div className={'section-title'}>
            <h2>Stakeholder 1 - Board Game Loans</h2>
            </div>
            <p>Our first stakeholder currently tracks board game and equipment loans via Excel, which is functional but slow and fully manual. They need a faster system with automated inventory updates, clear availability status, and minimal data entry. The main gaps in their current setup are the lack of a student-facing interface, no due date tracking, and no automated reminders, making overdue or missing items hard to manage.</p>
        </div>

        <div className={'quadrant-card'}>
          <div className={'section-title'}>
            <h2>Stakeholder 2 - SOPD Equipment</h2>
            </div>
            <p>Our second stakeholder manages a commercial cloud-based inventory system for the UC Product Design department, but finds it overly complex for their needs; with unused features creating unnecessary clutter and cost. They want a streamlined, purpose-built replacement with a simple setup, no excess business functionality, and lower licensing and hosting costs.</p>
          </div>
        </div>

        <div className={'section-title'}>
        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Research</h2>
        </div>
        <div className='img-gallery'>
          <img src={UiResearch1} alt="AnyList product inventory structure analysis"></img>
          <img src={UiResearch2} alt="UI Research Image of Steam"></img>
        </div>
        <p>A re-occurring feature across inventory management apps is a page for analytics and statistics to be used for inventory managers or administrators. These provide insights such as popular items and low stock items. These page could be used to alert staff to actions that may need to be taken.
          Another key feature of inventory management systems and a need from our stakeholders is the ability to house different types of items, and store information about them, which differs item by item. We would need to consider how to store the varying information in the data source and how to display/interact with it in the front-end.</p>

        <div className={'section-title'}>
        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Reviewing the Scope</h2>
        </div>
        <p>As our project progressed through research, meetings with stakeholders, and decisions beginning to be made, we decided the best approach was to review where we are with the project and where we were heading. To do this we wrote every feature we may add to the web app – in or out of scope/ time constraints – onto sticky notes. Using this information, we gathered and categorised each feature to be scoped in a graph ranking importance from most important to least. Including features which may seem “out of scope” allowed us to judge whether they were or were not out of our capabilities. This activity allowed us to visualise this project rather than approach it with our own cognitive perspective, relative to each person and their capabilities/ strengths and web development history.</p>
        <div style={{display: 'flex', flexDirection: 'row', marginBottom: '2em'}}>
          <img src={StickyNoteProto} style={{width: '100%', height: 'auto', borderRadius: "1em"}} alt=''></img>
        </div>

        <div className={'section-title'}>
        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Low-fidelity Prototyping</h2>
        </div>

        </div>
    </div>
  );
}

export default InventoryAppDetails