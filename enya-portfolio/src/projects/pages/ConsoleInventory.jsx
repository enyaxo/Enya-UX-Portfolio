import TechnologiesPill from '../../TechnologiesPill';
import './styles/ConsoleInventory.css';

// Image imports
import HeroImage from '../../assets/project-assets/console-inventory/hero-image.svg';
import Sparkle from '../../assets/sparkle.svg';
import FocusUserFlow from '../../assets/project-assets/console-inventory/user_flow.png';
import LowFiScreens from '../../assets/project-assets/console-inventory/low_fi_screens.png';
import HighFiScreens from '../../assets/project-assets/console-inventory/high_fi_screens.png';
import ButtonAssets from '../../assets/project-assets/console-inventory/button_assets.png';
import ConsoleAssets from '../../assets/project-assets/console-inventory/console_assets.png';


function ConsoleInventoryDetails({project, onBack}) {
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
          <h3>A UI concept for browsing and organizing a personal retro game library. Sort by console, view full catalogs or your own collection, alphabetically indexed like a bookshelf.</h3>
        </div>
        <div>
          <TechnologiesPill project={project} />
        </div>
      </div>

      <div className={'project-description'}>
              <img src={HeroImage} alt={`${project.title} screenshot`} className={'project-image'} />
      </div>

      {/* Unique description for this project */}
      <div className={'section-title'}>
        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>The Inspiration</h2>
      </div>
    
      <p>As a retro console collector and enthusiast, I was drawn to the idea of creating a digital space that captured the nostalgia and organisation of a physical game library. This presented itself as an opportunity to explore how digital interfaces could enhance the way we interact with our gaming collections, as well as using this project as an opportunity to express myself through graphic design.</p>

      <div className={'section-title'}>
        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Defining the core user-flow</h2>
      </div>
      <div className={'centered-image-container'}>
        <img src={FocusUserFlow} alt='Focus User Flow'></img>
      </div>
      The focus of this project was to create a simple, intuitive, yet fun and interactive interface for users to browse and organise their personal game libraries. The core user-flow assumed a new profile was made with a blank library, allowing the user would then add games to their collection, through search or by browsing the full catalog. The user could then view their collection, and sort it by console or alphabetically, as well as view the full catalog of games available for each console.

      <div className={'section-title'}>
          <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
          <h2>Low-Fidelity Prototypes</h2>
      </div>
      <p>Low-fidelity prototypes were created to explore the user flow of accessing a game in your personal collection. This was done to iterate on the design quickly and gather feedback before investing in high-fidelity designs. The feedback I gathered focused mainly on the smaller details, adding carousel functionality and position indicators.</p>

      <p>My low-fidelity prototypes began on paper, and moved to Figma to create more polished versions and explore interactivity with the keyboard, touch, and gamepad. This allowed me to clearly visualise how games stacked on top of each other will be displayed and accessed in relation to one another. </p>
      <div className={'centered-image-container'}>
        <img src={LowFiScreens} alt='Low Fidelity Screens'></img>
      </div>

      <div className={'section-title'}>
          <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
          <h2>High-Fidelity Prototypes</h2>
      </div>
      <p>High-fidelity prototypes were created once satisfied with the structure and functionality of the low-fidelity versions. The theme that the high-fidelity prototypes followed was a modern spin on Skeomorphic designs, utilising the centre-piece of the design, the ability to shelf games (literally).</p>

      <p>Below are some of the main assets used, shown with all interactive states:</p>
      <div className={'centered-image-container'}>
        <img src={ButtonAssets} alt='Button Assets'></img>
      </div>
      <p>Below are the assets used for the console displays:</p>
      <div className={'centered-image-container'}>
        <img src={ConsoleAssets} alt='Console Assets'></img>
      </div>
      <p>Finally, the following is a demonstration of the completed interface:</p>
      <div className={'centered-image-container'}>
        <img src={HighFiScreens} alt='High Fidelity Screens'></img>
      </div>
    </div>
  );
}

export default ConsoleInventoryDetails