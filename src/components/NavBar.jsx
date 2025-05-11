import React from 'react'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import Education from '../pages/Education'
import Contact from '../pages/Contact'

const NavBar = () => {
  return (
    <div>
      <nav id="navbar-example2" className="navbar bg-body-primary px-3 mb-3 sticky-top d-flex justify-content-center py-4">
  <ul className="nav nav-pills">
    <li className="nav-item">
      <a className="nav-link" href="#home">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#projects">Projects</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#skills">Skills</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#education">Education</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#contact">Contact</a>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex="0">
  <div id="home">
  <div>
        <Home />
  </div>
  </div>
  <div className='d-flex justify-content-center my-5'>
    <div style={{"border" : "2px solid grey", "width": "10px", "height": "80px", "color" : "grey", "backgroundColor" : "grey", "borderRadius": "10px"}}></div>
  </div>
  <div id="projects" className='text-center my-5 d-flex justify-content-center' >
    <Projects />
  </div>
  <div id="skills" className='text-center my-5 d-flex justify-content-center'>
    <Skills />
  </div>
  <div id="education">
    <Education />
  </div>
  <div id="contact">
    <Contact />
    </div>
</div>
    </div>
  )
}

export default NavBar
