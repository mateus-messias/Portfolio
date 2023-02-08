import React from 'react'
import {FaHtml5, FaCss3Alt, FaJsSquare, FaReact} from 'react-icons/fa' 
import person from './person.png'
import { Fade } from 'react-reveal'

export const About = () => {
  return (
    <section className='container about' id='about'>
      <Fade right>
        <div className='svg'>
            <img src={person} />
        </div>
      </Fade>
        <div className='about-me' >
          <Fade left>
            <h2 className='title's>Sobre mim</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas aliquam facere iste ab quam, nobis repudiandae impedit repellendus et, voluptatum atque modi ipsum accusamus reiciendis consequatur at eius optio.</p>
            <h2 className='title'>Minhas Skills</h2>
            <div className='stacks'>
              <div className='stack'>
                <FaHtml5 className='icon html'/>
                <p>HTML</p>
              </div>
              <div className='stack'>
                <FaCss3Alt className='icon css'/>
                <p>CSS</p>
              </div>
              <div className='stack'>
                <FaJsSquare className='icon js'/>
                <p>JavaScript</p>
              </div>
              <div className='stack '>
                <FaReact className='icon react'/>
                <p>React</p>
              </div>                
            </div>
          </Fade>
        </div>
    </section>
  ) 
}
