import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
// import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import './App.scss'
import About from './components/About/index'

function App() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>


        </div>
    )
}

export default App;