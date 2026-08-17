import TechnologiesPill from '../../TechnologiesPill';
import './styles/InventoryAppPage.css';
import { useState } from 'react';

// Images imports
import HeroImage from '../../assets/project-assets/inventory-app/hero_image.svg';
import Sparkle from '../../assets/sparkle.svg';
import UiResearch1 from '../../assets/project-assets/inventory-app/ui_research_1.png'
import UiResearch2 from '../../assets/project-assets/inventory-app/ui_research_2.png'
import StickyNoteProto from '../../assets/project-assets/inventory-app/sticky_note_prototyping.png'
import RelationalSchema from '../../assets/project-assets/inventory-app/database_relational_schema.png'
import CardVsTuple from '../../assets/project-assets/inventory-app/card_vs_tuple_prototype.png'
import ColourStateChoices from '../../assets/project-assets/inventory-app/colour_state_choices.png'
import AddItemPage from '../../assets/project-assets/inventory-app/add_item_page.png'

import AdminDashboard from '../../assets/project-assets/inventory-app/admin_dashboard.png'
import AdminInventory from '../../assets/project-assets/inventory-app/admin_inventory_page.png'
import ItemHistory from '../../assets/project-assets/inventory-app/item_history_page.png'
import ItemLoanRequest from '../../assets/project-assets/inventory-app/item_loan_request.png'
import FinalDatabaseSchema from '../../assets/project-assets/inventory-app/database_final_structure.png'






function InventoryAppDetails({project, onBack}) {

    const [activeImage, setActiveImage] = useState(null);
 
    function openModal(src, alt) {
      setActiveImage({ src, alt});
    }
  
    function closeModal() {
      setActiveImage(null);
    }

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
          <img
            src={StickyNoteProto}
            style={{width: '100%', height: 'auto', borderRadius: "1em", cursor: 'pointer'}}
            alt="Sticky Note Scoping"
            onClick={() => openModal(StickyNoteProto, "Sticky Note Scoping")}
          />
        </div>

        <div className={'section-title'}>
        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Low-fidelity Prototyping</h2>
        </div>

        <p>Even at this early, low-fidelity stage, we decided it would be valuable to start defining the database structure and how items would exist and interact with the web page.</p>

        <p>Settling on the relational schema early supports both prototyping (how items are displayed, along with their supporting information) and allows backend development to proceed alongside frontend work. This covers the data each item holds, how it connects to its broader item type, and its current status (e.g. loaned, damaged).</p>

        <div className='img-gallery'>
          <img src={RelationalSchema} alt="Relational Schema"></img>
          <img src={CardVsTuple} alt="Card vs Tuple Prototype"></img>
        </div>
        </div>

        <p>Each item is assigned a unique "item ID," distinguishing it from its "model," which is defined separately in the product table. This lets staff register multiple units of the same product (e.g. an iPad Air M3 13-inch), with each unit loanable individually by users.</p>

        <div className={'section-title'}>
        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>High-fidelity Prototyping</h2>
        </div>

        <p>We used Figma to rapidly prototype layout and flow ahead of development. Through roughly 20–30 short, iterative rounds, we refined the design in quick cycles; identifying the strongest patterns and branching off alternatives to compare side-by-side. This approach gave us early visual direction and confidence in the overall structure, without getting caught up in polish too early.</p>
        
        <h3>Admin Interface (Dashboard and Inventory)</h3>
        <div className='img-gallery'>
          <img src={AdminDashboard} alt="Admin Dashboard"></img>
          <img src={AdminInventory} alt="Admin Inventory"></img>
        </div>
        
        <h3>Item Management (Item Details/History, Item Loan Request Page)</h3>
        <div className='img-gallery'>
          <img src={ItemHistory} alt="Item History"></img>
          <img src={ItemLoanRequest} alt="Item Loan Request"></img>
        </div>

        <p>Design efforts were primarily focused on laptop layouts, with some limited exploration of a mobile web form to confirm the loan flow remained usable on smaller screens. Prototypes centred on information hierarchy, table density, and form sequencing. Screens were deliberately kept at mid-fidelity, allowing us to work quickly, assess structural decisions, and adjust or merge processes as needed.</p>

        <div className={'section-title'}>
        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Design Choices</h2>
        </div>

        <div className={'quadrant-grid'}>
        <div className={'quadrant-card'}>
          <div className={'section-title'}>
            <h2>Vocabulary</h2>
            </div>
            <p>Throughout the webpage we made an attempt to maintain a corporate-like tone/vocabulary, using descriptors like “inventory” instead of catalogue, or “dashboard” instead of profile. This added to the primary use-case of the web app – to sort, manage, and loan out items, offering professionalism and trust through the user interface. </p>
            <p>Furthermore, we opted to describe the top level of an item (the “model”) as the item itself, where each individual item is defined by it’s own unique ID. These ID’s take their serial ID and appends on a unique integer. </p>
        </div>

        <div className={'quadrant-card'}>
          <div className={'section-title'}>
            <h2>Components</h2>
            </div>
            <p>Our overall design style leaned towards a minimalist “flat” design, following trends in modern corporate webapps. Flat design has strengths in creating an accessible design, where text is less likely to be drowned out in stylised graphical components. Similarly, flat design often utilises depth and dimension (shadows, and colours) to emphasise elements, improving user usability.</p>
            <p>This strengthens our decision to use tables to allow access to the items. Tables allow for high amounts of information, which therefore needs to be eased by readability. </p>
          </div>
        </div>

        <div className={'section-title'}>
        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Colour State Decisions</h2>
        </div>

        <p>Each item state is represented by a colour following traditional meanings of a colour. For example, green indicates available, whereas blue indicates that an item is “in use” (or ”loaned”), etc. </p>
        <p>We aim for the colour coding to become so intuitive that users can understand the context of each item without needing to read the accompanying text. This experience comes with using the website. However, assuming we carefully judged the meaning of the colours used, there will be minimal conflict (of which we will user test further on). </p>
        <div style={{display: 'flex', flexDirection: 'row', marginBottom: '2em'}}>
          <img
            src={ColourStateChoices}
            style={{width: '100%', height: 'auto', borderRadius: "1em", cursor: 'pointer'}}
            alt="Colour State Choices"
            onClick={() => openModal(ColourStateChoices, "Colour State Choices")}
          />
        </div>

        <div className={'section-title'}>
        <img src={Sparkle} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
        <h2>Database Summary</h2>
        </div>

        <p>The initial goal of this project was to create a React interactive prototype for managing inventory items in a web application, however due to scope limitations, we focused on the core functionality and user experience in Figma. We extended our priorities to visualising how a database could be structured which will assist in future development should this project proceed.</p>
        <div style={{display: 'flex', flexDirection: 'row', marginBottom: '2em'}}>
          <img
            src={FinalDatabaseSchema}
            style={{width: '100%', height: 'auto', borderRadius: "1em", cursor: 'pointer'}}
            alt="Final Database Schema"
            onClick={() => openModal(FinalDatabaseSchema, "Final Database Schema")}
          />
        </div>

        <p><strong>PRODUCT table:</strong> Stores data and information relating to each product. The ProductID serves as the primary key, generated automatically as a sequential number. The Category field classifies the type of item, for example, iPad, Camera, Laptop, etc.</p>
        <p><strong>USER table:</strong> Stores data on all users able to access the inventory app, including their name, identifiers, and user type (Staff or Student). The Usercode serves as the primary key, from which the user's email can also be derived.</p>
        <p><strong>PRODUCT_STAFF table:</strong> References both the USER and PRODUCT tables to associate one or more staff members with a given product (e.g. identifying which staff are responsible for that product).</p>
        <p><strong>ITEM table</strong> Stores data about an individual copy or instance of a product. The ItemID serves as the primary key, generated automatically as a sequential number, while ProductID is a foreign key referencing the PRODUCT table, identifying which product the item is a copy of.</p>
        <p><strong>LOAN table:</strong> Stores information about a loan. References both the ITEM and USER tables, since each loan involves one user and one item. Key dates throughout the loan lifecycle are recorded here, allowing the loan's status, such as whether it is overdue, to be derived.</p>


        {/* Reusable active image lightbox model */}

        {activeImage && (
        <div className={'modal show'} onClick={closeModal}>
          <span className={'close'} onClick={closeModal}>&times;</span>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className={'modal-content'}
            style={{width: '100%', height: 'auto', borderRadius: "1em"}}
            onClick={(e) => e.stopPropagation()}
          />
          {activeImage.caption}
        </div>
      )}
    </div>
  );
}

export default InventoryAppDetails