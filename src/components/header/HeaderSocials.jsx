import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineGithub, AiFillDribbbleCircle } from 'react-icons/ai'
const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://github.com" rel="noreferrer" target="_blank"><AiOutlineGithub /></a>
            <a href="https://facebook.com" rel="noreferrer" target="_blank"><BsFacebook /></a>
            <a href="https://dribbble.com" rel="noreferrer" target="_blank"><AiFillDribbbleCircle /></a>
        </div>
    )
}

export default HeaderSocials