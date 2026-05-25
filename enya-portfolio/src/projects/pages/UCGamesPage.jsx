import TechnologiesPill from '../../TechnologiesPill';
import './styles/UCGamesPage.css';
import HeroImage from '../../assets/project-assets/uc-games/hero_image.svg';

function UCGamesDetails({project, onBack}) {
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
        <h2>Problem Overview</h2>
        </div>
        <p>
          The UC Game department has taught at the University of Canterbury for over 5 years. In this time, there have been many games created by UC students with/at the university. The staff at UC have all of these games (including their information and assets), however, their current organisation structure has lead to much trouble in managing, showcasing, and accessing all stored games. As most of these games has been archived, neither students nor staff have an easy way to search for and access them.
        </p>

        <div className={'section-title'}>
        <img src='../src/assets/sparkle.svg' alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Research</h2>
        </div>
        <div className='img-gallery'>
          <img src='../src/assets/project-assets/uc-games/ui_research_1.png' alt="UI Research Image of Itch.io"></img>
          <img src='../src/assets/project-assets/uc-games/ui_research_2.png' alt="UI Research Image of Steam"></img>
        </div>
        <p>To create a website tool with a familiar and relevant user interface, we moved towards researching various game catalog/storage to better our understanding of how our catalog may look in line with the theme of video games. We approached Steam, XBox, and itch.io's user interfaces, looking at their use of cards, overlays, search navigation, and their display of a game's individual page.</p>
        
        <div className={'section-title'}>
        <img src='../src/assets/sparkle.svg' alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Prototyping & Wireframing</h2>
        </div>
        <div className='img-gallery'>
          <img src='../src/assets/project-assets/uc-games/landing_proto_page.png' alt="Low-fidelity Prototype of the Landing Page"></img>
          <img src='../src/assets/project-assets/uc-games/game_proto_page.png' alt="Low-fidelity Prototype of the Game Page"></img>
        </div>
        <p>In between our low fidelity wireframing and prototyping through Figma, we often meet with our stakeholders to receive a constant flow of feedback. This allowed us to continuouly refine our product until it was one that aligned with our stakeholder needs. We opted for paper/digital low-fidelity wireframing to "sus-out" the general skeleton and features, moving to Figma to refine this in a high-fidelity prototype.</p>
        <div style={{display: 'flex', flexDirection: 'row', marginBottom: '2em'}}>
          <img src='../src/assets/project-assets/uc-games/website_layout_logic.png' style={{width: '100%', height: 'auto', borderRadius: "1em"}} alt='Graphic of website complete layout as a flowchart prototype'></img>
        </div>
        
        <div className={'section-title'}>
        <img src='../src/assets/sparkle.svg' alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Development</h2>
        </div>
        <p>Our final prototype is build through React, with support in JavaScript's JSON format which we used to call and populate the cards and game pages showcased in the catalog. We divided the webpage into sections where each member of my group worked on a particular element of their choosing; I worked on and developed the GamePage and the routing between cards and it's respective page.</p>

        <div className={'section-title'}>
        <img src='../src/assets/sparkle.svg' alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Testing & Changes</h2>
        </div>
        <p>Before finalising our developed prototype, we sought users to test our website to identify any features we neglected to implement and the usability/functionality of our website as a whole. We conducted an A/B testing flow to test two different means of filtering the search, the first test tested the search filter down to a specific game, the second broadening with the relevant tags (AND vs OR). Testing gave us insight into other features, such as the theme toggle and how it's presented, and the information displayed on the cards.</p>
        </div>
        <div className='img-gallery'>
          <img src='../src/assets/project-assets/uc-games/search_results_changes.png' alt="Changes made to the search results page"></img>
          <img src='../src/assets/project-assets/uc-games/search_changes.png' alt="Search icon changes"></img>
        </div>
    </div>
  );
}

export default UCGamesDetails