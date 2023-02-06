import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
 
export const Projects = () => {

  const projects = [
    {
      name: 'NaTrave',
      description: 'Site de apostas para os jogos da Copa do Mundo 2022',
      img: '../img/natrave.png',
      link: 'https://worldcup2022-web.vercel.app',
    },
    {
      name: 'NaTrave',
      description: 'Site de apostas para os jogos da Copa do Mundo 2022',
      img: '../img/natrave.png',
      link: 'https://worldcup2022-web.vercel.app',
    },
    {
      name: 'adasdad',
      description: 'asdasdasd',
      img: '',
      link: 'adasd',
    },
    {
      name: 'NaTrave',
      description: 'Site de apostas para os jogos da Copa do Mundo 2022',
      img: '../img/natrave.png',
      link: 'https://worldcup2022-web.vercel.app',
    },
    {
      name: 'adasdad',
      description: 'asdasdasd',
      img: '',
      link: 'adasd',
    },
    {
      name: 'NaTrave',
      description: 'Site de apostas para os jogos da Copa do Mundo 2022',
      img: '../img/natrave.png',
      link: 'https://worldcup2022-web.vercel.app',
    },
    {
      name: 'adasdad',
      description: 'asdasdasd',
      img: '',
      link: 'adasd',
    },
  ]

  return (
    <section className='container-project'>
      <div className="slide-container swiper"> 
        <div className='slide-content '>
          <Swiper          
            modules={[ Navigation, Pagination, A11y]}
            spaceBetween={1}
            slidesPerView={3}
            loop
            pagination={{
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true, 
              dynamicBullets: true  
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
                      <img src={img} />
                      <p>{description}</p>
                    </div>
                  </SwiperSlide>
                )
              })}          
            </div> 
          </Swiper>        
        </div>                   
          <div className='swiper-pagination'></div>  
          <div className='swiper-button-prev btn-prev'></div>        
          <div className='swiper-button-next btn-next'></div>    
      </div>
    </section>
  )
}

  

