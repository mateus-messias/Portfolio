import React from 'react' 
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import notebook from '../img/notebook.png'

export const Home = () => {
  const name = '<Mateus/>'
  return (
    <section className='container'>
        <div >
            <img src={notebook} className='svg-img'/>
        </div>
        <div className='text'>
            <h2>Olá,</h2>
            <h2>Eu sou <span>{name}</span></h2>
            <h2>Desenvolvedor Front-End</h2>
            <a href="https://github.com/mateus-messias" target='blank'>
                <FaGithub className='icon'/>
            </a>           
            <a href="https://www.linkedin.com/in/mateus-oliveira-29326a21a/" target='blank'>
                <FaLinkedin className='icon'/>
            </a>         
        </div>
    </section>
  )
}
