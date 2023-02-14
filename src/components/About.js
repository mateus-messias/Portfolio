import React from 'react'
import {FaHtml5, FaCss3Alt, FaJsSquare, FaReact} from 'react-icons/fa' 
import person from './images/person.png'
import './About.css'

export const About = () => {
  return (
    <section className='container about' id='about'>      
      <div className='about-me' >         
        <h2 className='title'>Sobre mim</h2>
        <p>Meu nome é Mateus, sou um cara apaixonado por tecnologia que decidiu trilhar o caminho da programação.  Possuo 4 anos de experiência como Técnico em Informática e atualmente estou focando meus estudos nas tecnologias Front-End.</p>
        <h2 className='title'>Tecnologias</h2>          
        <ul className='stacks'>
          <li className='stack'>
            <FaHtml5 className='icon html'/>
            <p>HTML</p>
          </li>
          <li className='stack'>
            <FaCss3Alt className='icon css'/>
          <p>CSS</p>
          </li>
          <li className='stack'>
            <FaJsSquare className='icon js'/>
          <p>JavaScript</p>
          </li>
          <li className='stack'>
            <FaReact className='icon react'/>
            <p>React</p>
          </li>
        </ul>
      </div>        
      <div className='svg'>
          <img src={person} clasName='about-img'/>
      </div>      
    </section>
  ) 
}
