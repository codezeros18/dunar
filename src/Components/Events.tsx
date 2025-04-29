import React from 'react'
import dgts1 from '../assets/dgts1.jpg'
import donor2 from '../assets/donor2.jpg'
import award3 from '../assets/award3.jpg'

interface Card {
  title: string
  date: string
  image: string
}

const cards: Card[] = [
  {
    title: 'ANW',
    date: 'May',
    image: donor2,
  },
  {
    title: 'DGTS',
    date: 'August',
    image: dgts1,
  },
  {
    title: 'Awarding Night',
    date: 'November',
    image: award3,
  },
]

const Events: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative min-w-full h-[28vh] md:h-[65vh] flex items-center justify-center cursor-pointer overflow-hidden group"
          >
            <img
              src={card.image}
              alt={`${card.title} image`}
              className="absolute w-full h-full object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
            />

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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events
