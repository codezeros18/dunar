import React from 'react'
const Header: React.FC = () => {
  return (
    // flex items-center justify-center text-center
    <div className="flex items-center justify-center min-h-[85vh] md:min-h-[85vh] max-w-7xl mx-4 md:mx-auto text-center"> 
      <div className= 'mb-12 md:mb-0'>
        <h1 className="flex justify-center tracking-wide text-[62px] leading-[50px] font-extrabold text-white font-serif-display my-4">
          Duta Anti Narkoba
        </h1>
        <h4 className="text-[18px] leading-[26px] md:text-[22px] md:leading-[30px] font-playfair text-white font-bold">
          Smart, Healthy, and Fun
        </h4>
      </div>
    </div>

  )
}

export default Header
