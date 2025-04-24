import React from 'react'
import img1 from '../assets/background8.jpg'
import img2 from '../assets/donation2.jpg'
import img3 from '../assets/donor1.jpg'
import img4 from '../assets/award.jpg'

const Events:React.FC = () => {
    const card = [
        {img : img1, title:'Donor Darah', date:'March'},
        {img : img2, title:'Panti Asuhan', date:'June'},
        {img : img3, title:'Donasi Uang', date:'September'},
        {img : img4, title:'Awarding Night', date:'September'},
    ]
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                {card.map((card, index) => (
                    <div 
                        key={index} 
                        className="relative min-w-full h-[28vh] md:h-[75vh] bg-cover bg-center flex flex-col justify-center md:justify-end before:absolute before:inset-0 before:bg-black before:opacity-60 before:z-0 cursor-pointer"
                        style={{ backgroundImage: `url(${card.img})` }}
                    >
                        <div className="relative z-10 p-8 md:p-12">
                            <h1 className="text-white w-full md:max-w-20 leading-[46px] md:leading-[32px] font-bold text-[32px] md:text-[34px] tracking-normal mb-0 md:mb-2 text-center">
                                {card.title}
                            </h1>
                            <p className="text-white text-[18px] md:text-[14px] tracking-tight text-center md:text-left">{card.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Events
