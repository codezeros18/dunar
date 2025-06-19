import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import bmw from '../assets/idx.png'
import fera from '../assets/nasdaq.png'
import steam from '../assets/cgs.jpg'

const sponsors = [
  { src: bmw, alt: 'BMW' },
  { src: fera, alt: 'Fera' },
  { src: steam, alt: 'Steam' },
  { src: bmw, alt: 'BMW' },
  { src: fera, alt: 'Fera' },
  { src: steam, alt: 'Steam' },
  { src: bmw, alt: 'BMW' },
  { src: fera, alt: 'Fera' },
  { src: steam, alt: 'Steam' },
]

const SponsorSlider = () => {
  return (
    <div className='min-h-[40vh] w-full bg-white flex items-center justify-center px-8'>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className='w-full max-w-6xl'
      >
        {sponsors.map((sponsor, index) => (
          <SwiperSlide key={index}>
            <div className='flex items-center h-20 md:h-[30vh] justify-center'>
              <img
                src={sponsor.src}
                alt={sponsor.alt}
                className='h-20 md:h-32 w-auto object-contain hover:scale-105 cursor-pointer transition-transform duration-300'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SponsorSlider
