import './Contact.css'
import Sparkle from '../assets/sparkle.svg';
import Envelope from '../assets/envelope-solid-full.svg';
import Phone from '../assets/phone-solid-full.svg';
import LinkedIn from '../assets/circle-nodes-solid-full.svg';
import Figma from '../assets/palette-solid-full.svg';



function Contact() {
    return (
        <div className='contact-container'>
            <div className='contact-details'>
                <div className={'section-contact'}>
                    <img src={Envelope} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
                    <h3>Email: <a href="mailto:enyabothabekker@gmail.com">enyabothabekker@gmail.com</a></h3>
                </div>
                <div className={'section-contact'}>
                    <img src={Phone} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
                    <h3>Phone: +64273193581</h3>
                </div>
                <div className={'section-contact'}>
                    <img src={LinkedIn} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
                    <h3>LinkedIn: <a href='https://www.linkedin.com/in/enya-bekker-55bb56373/' target="_blank">Enya Bekker</a></h3>
                </div>
                <div className={'section-contact'}>
                    <img src={Figma} alt="Sparkle decoration" style={{width: '2em', height: 'auto', color: 'rgb(86, 75, 113)'}}></img>
                    <h3>Figma: <a href='https://www.figma.com/@enya14' target="_blank">@enya14</a></h3>
                </div>
            </div>
        </div>
    )
}

export default Contact