import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import KLogo from '../../assets/images/Koray.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={KLogo} alt="Logo" />
            
        </Link>
        <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        
        <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        
        <NavLink
        activeclassname="active"
        className="contact-link"
        to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        </nav>
        <ul>
        <li>
            <a
            href="https://www.linkedin.com/in/koray-kurtoglu/"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
        </li>

        <li>
            <a
            href="https://github.com/koray7"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li>

        <li>
            <a href="mailto:softwarekoray@gmail.com" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </a>
        </li>

        </ul>
        </div>
    )
}

export default Sidebar;