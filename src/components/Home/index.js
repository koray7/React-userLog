import Logo from '../../assets/images/Koray-img.jpeg'
import { Link } from 'react-router-dom'
import './index.scss'



const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                    Koray
                    <br />
                    Web Developer
                    <br />
                </h1>
                <h2>Frontend Developer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <div>
            <img src={Logo} alt="developer" className="self-img"/>
            </div>
        </div>
    )
}

export default Home;