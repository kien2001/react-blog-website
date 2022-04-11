import React, { useEffect} from 'react'
import handleActiveScroll from '../../handleWebsite/handleActiveScroll'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineProject} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdReviews} from 'react-icons/md'

function Nav() {
  useEffect(()=>{
    window.addEventListener("scroll", handleActiveScroll)
  }
  ,[])
  return (
    <div className = "nav">
      <nav>

        <a href="#" className="active"><AiOutlineHome/></a>
        <a href="#about" ><AiOutlineUser/></a>
        <a href="#experience" ><BiBook/></a>
        <a href="#services" ><RiServiceLine/></a>
        <a href="#portfolio" ><AiOutlineProject/></a>
        <a href="#testimonials" ><MdReviews/></a>
        <a href="#contact" ><BiMessageSquareDetail/></a>

      </nav>
    </div>
  )
}

export default Nav