import React from 'react'
import {FaHtml5, FaCss3Alt, FaJsSquare, FaReact} from 'react-icons/fa' 
import person from './images/person.png'
import { Fade } from 'react-reveal'
import './About.css'

export const About = () => {
  return (
    <section className='container about' id='about'>      
        <div className='about-me' >
          <Fade right>
            <h2 className='title'>Sobre mim</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas aliquam facere iste ab quam, nobis repudiandae impedit repellendus et, voluptatum atque modi ipsum accusamus reiciendis consequatur at eius optio.</p>
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
            
          </Fade>
        </div>
        <Fade left>
        <div className='svg'>
            <img src={person} clasName='about-img'/>
        </div>
      </Fade>
    </section>
  ) 
}
