import './index.scss'
import { Link, NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
    return (
        <div className="nav-bar">
                <a className="logo" href="https://drive.google.com/file/d/1u_mE9EFCArAh_hTZeUjJt5UYFhfpjPFD/view?usp=sharing" download="Koray-Resume.pdf" target="_blank" rel="noReferrer"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDv6iqDOwYY9_i4IT_ZvrFdhPXN2oGQhcLfg&usqp=CAU" id="social-logo" alt='Koray-Resume' />
                </a>    
            <nav>
                <NavLink exact="true" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                
                <NavLink className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                
                <NavLink
                
                    className="contact-link"
                    to="/contact">
                <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
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