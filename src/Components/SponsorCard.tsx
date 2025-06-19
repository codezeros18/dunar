import React from 'react'

interface Data {
  image: string;
  title: string;
  description: string;
}

interface Alternate {
  data: Data;
  index: number;
}

const SponsorCard : React.FC<Alternate> = ({ data, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className='bg-white/50 rounded-2xl shadow-md p-6 my-8 hover:bg-white transform transition-colors duration-300'>
      <div
        className={`flex flex-col md:flex-row items-center gap-6 ${
          isEven ? "" : "md:flex-row-reverse"
        }`}
      >
        <img
          src={data.image}
          alt={data.title}
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover max-h-96"
        />
        <div 
          className={`lg:w-2/3 text-center ${
            isEven ? "lg:text-left" : "lg:text-right"
          }`}
        >
          <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
          <p className="text-gray-600">{data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default SponsorCard