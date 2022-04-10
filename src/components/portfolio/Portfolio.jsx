import React from 'react'
import './portfolio.css'
import portfolioArray from './portfolioArray'

function Portfolio() {
  console.log(portfolioArray);
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container container__portfolio">
        {portfolioArray?.map(portfolio => {
          return (
            <article key={portfolio.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={portfolio.image} alt={portfolio.title} />
              </div>
              <h3>{portfolio.title}</h3>
              <div className="portfolio__item-cta">
                <a href={portfolio.src} className="btn">Github</a>
                <a href={portfolio.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio