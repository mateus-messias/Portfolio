import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height

    if(showLinks){
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  return (
    <nav>
        <div className='nav-center'>
          <div className="nav-header">
            <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
              {!showLinks ? <FaBars/> : <FaTimes className='close-btn'/>}
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className='links' ref={linksRef}>
              <li><a href='#home'>Home</a></li>
              <li><a href='#about'>Sobre mim</a></li>
              <li><a href='#projects'>Projetos</a></li>
              <li><a href='#contact'>Contato</a></li>
            </ul>
          </div>            
        </div>
    </nav>
  )
}


