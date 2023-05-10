import './Styles/App.css';
import icon from './assets/Icon.png'
import linkedin from './assets/Vector.png'

export default function MainContent() {
    return (
        <><div className='buttons'>
            <p className="white">
                <img src={icon} alt="mail" />
                Email
            </p>
            <p className="blue">
                <img src={linkedin} alt="linkedin" />
                LinkedIn
            </p>
        </div>
            <div className='content'>
                <h3>
                    About
                </h3>
                <p>
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
                <h3>
                    Interests
                </h3>
                <p>
                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic
                </p>
            </div>
        </>
    )
}