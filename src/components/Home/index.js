import Logo from '../../assets/images/Koray-img.jpeg'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['','','K', 'o', 'r', 'a', 'y','']
    const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
]
useEffect(() => {
    return setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
}, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                    <h1><span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    I'm a
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                    <br />
                </h1>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <div className="self-img-div">
            <img src={Logo} alt="developer" className="self-img"/>
            </div>
        </div>
    )
}

export default Home;