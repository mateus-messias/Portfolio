import React from 'react'
import {FaHtml5, FaCss3Alt, FaJsSquare, FaReact} from 'react-icons/fa' 
import person from '../img/person.png'

export const About = () => {
  return (
    <section className='container about'>
        <div>
            <img src={person} className='svg-img'/>
        </div>
        <div className='about-me'>
            <h2 className='title' id='about'>Sobre mim</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci dicta similique quae soluta officiis sint. Aspernatur obcaecati, a maiores sequi labore aliquam quo laborum expedita. Possimus iste atque alias sunt esse cumque, non minus fugiat dolor sit voluptatibus modi vitae repellat quis animi. Aut iure eum odit numquam modi?</p>
            <h2 className='title'>Stacks:</h2>
            <div className='stacks'>
                <FaHtml5 className='icon'/>
                <FaCss3Alt className='icon'/>
                <FaJsSquare className='icon'/>
                <FaReact className='icon'/>
            </div>
        </div>
    </section>
  ) 
}
