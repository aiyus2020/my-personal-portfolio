import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="linkedin.com" target='_blank'><BsLinkedin/></a>
      <a href="github.com" target='_blank'><BsGithub/></a>
      <a href="dribbble.com" target='_blank'><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocials
