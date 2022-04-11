import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id = "experience">
      <h5 className="marked__titles">What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container container__experience">
        <div className="experience__frontend">
          <h3>FrontEnd Experience</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>

              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>

              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>

              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>

              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>

              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>

              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>BackEnd Experience</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Intermediate</small>

              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>

              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>

              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>Mysql</h4>
                <small className="text-light">Experienced</small>

              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>

              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience