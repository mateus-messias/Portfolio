import React from 'react' 
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'
import { Fade } from 'react-reveal'
import notebook from './notebook.png'

export const Home = () => {  
  return (
    <section className='container' id='home'>
        <Fade right>
            <div className='svg'>
                <img src={notebook}/>
            </div>
        </Fade>
        <Fade left>
            <div className='text'>
                <h2>Olá, eu sou</h2>
                <h2 className='my-name'>
                    <Typewriter
                        words={['Mateus Messias']}
                        loop={1}
                        cursor
                        cursorStyle='|'
                        typeSpeed={200}                                   
                    />
                </h2>
                <h2>Desenvolvedor Front-End</h2>
                <div className='icons'>
                    <a href="https://github.com/mateus-messias" target='blank'>
                        <FaGithub className='social-icon'/>
                    </a>           
                    <a href="https://www.linkedin.com/in/mateus-oliveira-29326a21a/" target='blank'>
                        <FaLinkedin className='social-icon'/>
                    </a>
                </div>
            </div>
        </Fade>
    </section>
  )
}
<Typewriter
                words={['Mateus Messias']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={100}                
            />