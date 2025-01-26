import './App.css'
import {Header} from './layout/header/Header'
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Profile} from "./layout/sections/profile/Profile.tsx";
import {Portfolio} from "./layout/sections/portfolio/Portfolio.tsx";
import {Particle} from "./components/particle/Particle.tsx";

function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Profile/>
            <Portfolio/>
            <Footer/>
        </div>
    )
}

export default App
