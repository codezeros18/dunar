import React, { useEffect, useState } from 'react'
import dgts1 from '../assets/dgts1.jpg'
import dgts5 from '../assets/dgts5.jpg'
import dgts3 from '../assets/dgts3.jpg'
import dgts4 from '../assets/dgts4.jpg'
import donor5 from '../assets/donor5.jpg'
import donor2 from '../assets/donor2.jpg'
import donor3 from '../assets/donor3.jpg'
import donor4 from '../assets/donor4.jpg'
import award2 from '../assets/award2.jpg'
import award3 from '../assets/award3.jpg'
import award4 from '../assets/award4.jpg'
import award5 from '../assets/award5.jpg'
import back1 from '../assets/back1.jpg'

interface Card {
  title: string
  date: string
  images: string[]
}

const cards: Card[] = [
  {
    title: 'DGTS',
    date: 'January',
    images: [dgts1, dgts5, dgts3, dgts4],
  },
  {
    title: 'Donor Darah',
    date: 'March',
    images: [donor5, donor2, donor3, donor4],
  },
  {
    title: 'Panti Asuhan',
    date: 'June',
    images: [back1],
  },
  {
    title: 'Donasi Uang',
    date: 'September',
    images: [back1],
  },
  {
    title: 'Awarding Night',
    date: 'September',
    images: [award2, award3, award4, award5],
  },
]

const Events: React.FC = () => {
    const [imageIndexes, setImageIndexes] = useState<number[]>(
      Array(cards.length).fill(0)
    )
  
    // Preload images
    useEffect(() => {
      cards.forEach((card) => {
        card.images.forEach((src) => {
          const img = new Image()
          img.src = src
        })
      })
    }, [])
  
    // Image changer
    useEffect(() => {
      const interval = setInterval(() => {
        setImageIndexes((prev) =>
          prev.map((index, i) => (index + 1) % cards[i].images.length)
        )
      }, 5000)
  
      return () => clearInterval(interval)
    }, [])
  
    return (
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-5 w-full">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative min-w-full h-[28vh] md:h-[65vh] flex items-center justify-center cursor-pointer overflow-hidden"
            >
              {/* Layered Images */}
              {card.images.map((imgSrc, j) => (
                <img
                  key={j}
                  src={imgSrc}
                  alt={`${card.title} image ${j + 1}`}
                  className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    imageIndexes[i] === j ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
  
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-60 z-0" />
  
              {/* Text */}
              <div className="relative z-10 p-8 md:p-12 text-center flex-grow">
                <h1 className="text-white leading-[46px] md:leading-[32px] font-extrabold text-[32px] md:text-[25px] tracking-normal mb-0 md:mb-2">
                  {card.title}
                </h1>
                <p className="text-white opacity-65 text-[18px] md:text-[14px] tracking-tight mb-4">
                  {card.date}
                </p>
              </div>
  
              {/* Dots positioned at the bottom */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-1 z-10">
                {card.images.map((_, j) => (
                  <span
                    key={j}
                    className={`w-[5px] h-[5px] rounded-full transition-all duration-300 ${
                      imageIndexes[i] === j ? 'bg-white scale-125' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}
  
export default Events
  
