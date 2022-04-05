import { Route, Routes } from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
import Layout from './components/Layout'
import './App.scss'


function App() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Layout />} />
            </Routes>


        </div>
    )
}

export default App;