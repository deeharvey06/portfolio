import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

import './components/Nav.css'
import './components/Hero.css'
import './components/NodeGraph.css'
import './components/About.css'
import './components/Projects.css'
import './components/Experience.css'
import './components/Skills.css'
import './components/Contact.css'
import './components/Footer.css'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <hr className="divider container" />
        <Projects />
        <hr className="divider container" />
        <Experience />
        <hr className="divider container" />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
