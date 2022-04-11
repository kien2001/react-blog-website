import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


import './about.css'
import Me from '../../assets/me-about.jpg'
function About() {
  return (
    <section id="about">
      <h5 className="marked__titles">Get to know</h5>
      <h2>About me</h2>
      <div className="container container__about">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icons" />
              <h5>Clients</h5>
              <small>30+ World Users</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Projects</h5>
              <small>5+ Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corporis error provident! Quae minima labore maiores provident consequatur? Aspernatur sequi odio pariatur assumenda repellat animi repellendus nobis non maiores corrupti.</p>
          <a href="#contact" className = "btn btn-primary">Let to tak</a>
        </div>
      </div>
    </section>
  )
}

export default About