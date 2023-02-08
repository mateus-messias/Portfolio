import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <ul className='nav-links'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>Sobre mim</a></li>
                <li><a href='#projects'>Projetos</a></li>
                <li>Contato</li>
            </ul>
        </div>
    </nav>
  )
}
