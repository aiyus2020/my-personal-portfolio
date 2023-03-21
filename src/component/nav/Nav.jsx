
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineContacts} from 'react-icons/ai'
import { useState,React } from 'react'
const Nav = () => {
  const [activeNAv, setAactiveNAv] = useState('#')
  return (
    <nav>
  <a href="#" onClick={()=> setAactiveNAv('#')} className={activeNAv === '#' ? 'active' : ''}><AiOutlineHome/></a>
  <a href="#about" onClick={()=> setAactiveNAv('#about')} className={activeNAv === '#about' ? 'active' : ''}><AiOutlineUser/></a>
  <a href="#experience" onClick={()=> setAactiveNAv('#experience')} className={activeNAv === '#experience' ? 'active' : ''}><BiBook/></a>
  <a href="#services" onClick={()=> setAactiveNAv('#services')} className={activeNAv === '#services' ? 'active' : ''}><RiServiceLine/></a>
  <a href="#contact" onClick={()=> setAactiveNAv('#contact')} className={activeNAv === '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav
