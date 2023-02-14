import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper';
import { Fade } from 'react-reveal'
import './Projects.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
 
export const Projects = () => {

  const projects = [
    {
      name: 'Basic Projects',
      description: 'Projetos mais simples feitos no curso de React',
      img: './img/basic_projects.png',
      link: 'https://react-basic-projects.netlify.app',
    },
    {
      name: 'NaTrave',
      description: 'Site de apostas para os jogos da Copa do Mundo 2022',
      img: './img/natrave.png',
      link: 'https://worldcup2022-web.vercel.app',
    },
    {
      name: 'Maratona Invertida',
      description: 'Projeto feito no evento da Maratona Invertida',
      img: './img/maratona_invertida.png',
      link: 'https://maratona-invertida-kenzie.netlify.app',
    },   
  ]

  return (
    <section className='container-project' id='projects'>
      <Fade>
        <h2 className='title'>Projetos</h2>      
        <div className="swiper"> 
          <div className='slide-content '>
            <Swiper          
              modules={[ Navigation, Pagination, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              loop
              pagination={{
                el: '.swiper-pagination',
                type:'fraction',                
              }}   
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }} 
            >         
              <div className='card-container'>
                {projects.map((item) => {
                  const {name, description, img, link} = item
                  return (
                    <SwiperSlide>
                      <div className='card-project'>
                        <h2>{name}</h2>
                        <a href={link} target='blank'>
                          <img src={img} className='img-project' />
                        </a>                        
                        <p>{description}</p>
                      </div>
                    </SwiperSlide>
                  )
                })}          
              </div> 
            </Swiper>        
          </div>                   
            <div className='swiper-pagination'></div>  
            {/* <div className='swiper-button-prev btn-prev'></div>        
            <div className='swiper-button-next btn-next'></div>     */}
        </div>
      </Fade>
    </section>
  )
}

  

