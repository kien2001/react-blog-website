import React, { useState} from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineProject} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdReviews} from 'react-icons/md'

function Nav() {
  const [active, setActive] = useState("#");
  return (
    <div>
      <nav>

        <a href="#" onClick={()=>setActive("#")} className={active=== '#' ? "active" : ""}><AiOutlineHome/></a>
        <a href="#about" onClick={()=>setActive("#about")} className={active=== '#about' ? "active" : ""}><AiOutlineUser/></a>
        <a href="#experience" onClick={()=>setActive("#experience")} className={active=== '#experience' ? "active" : ""}><BiBook/></a>
        <a href="#services" onClick={()=>setActive("#services")} className={active=== '#services' ? "active" : ""}><RiServiceLine/></a>
        <a href="#portfolio" onClick={()=>setActive("#portfolio")} className={active=== '#portfolio' ? "active" : ""}><AiOutlineProject/></a>
        <a href="#testimonials" onClick={()=>setActive("#testimonials")} className={active=== '#testimonials' ? "active" : ""}><MdReviews/></a>
        <a href="#contact" onClick={()=>setActive("#contact")} className={active=== '#contact' ? "active" : ""}><BiMessageSquareDetail/></a>

      </nav>
    </div>
  )
}

export default Nav