import React from 'react'
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


import './testimonials.css'
import testimonialArray from './testimonialArray'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5 className="marked__titles">Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container container__testimonials"
        modules={[Pagination,]}
        spaceBetween={50}
        autoplay={{
          delay: 1,
          disableOnInteraction: true
        }}
        speed= {1000}
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialArray?.map(testimonial=>{
          return(
            <SwiperSlide key={testimonial.id} className="testimonial">
              <div className="client__avatar">
                <img src={testimonial.imgThumbnails} alt={testimonial.name} />
              </div>
              <h5>{testimonial.name}</h5>
              <small className="client__review">{testimonial.review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials