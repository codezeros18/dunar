import React from 'react'
import dunar from '../assets/logo6.png'

const Dunar: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      {/* <div className='relative mb-28'>
        <img
          src={dunar}
          alt="Dunar Logo"
          className="relative z-10 w-80 h-80 object-contain mx-auto"
        />
      </div> */}

      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 md:gap-y-0 mx-4 md:mx-0'>
        {/* VISION */}
        <div className='max-w-[500px] relative'>
          <div className="relative inline-block">
            {/* Glow behind text */}
            <div className="absolute inset-0 mx-auto w-40 h-16 bg-blue-400 opacity-40 blur-2xl rounded-full z-0 pointer-events-none" />
            <h2 className='relative z-10 text-[38px] md:text-[44px] font-extrabold pb-8 tracking-tight font-poppins text-indigo-300'>
              VISION
            </h2>
          </div>
          <p className='text-[16px] md:text-[20px] text-white tracking-wide font-bold'>
            Menjadikan generasi yang dapat membentuk lingkungan internal maupun eksternal Universitas Multimedia Nusantara yang bebas dari penyalahgunaan narkoba, kompeten, dan mampu bersaing dengan cara yang kreatif dan inovatif.
          </p>
        </div>

        {/* MISSION */}
        <div className='max-w-[500px] relative'>
          <div className="relative inline-block">
            {/* Glow behind text */}
            <div className="absolute inset-0 mx-auto w-40 h-16 bg-blue-400 opacity-40 blur-2xl rounded-full z-0 pointer-events-none" />
            <h2 className='relative z-10 text-[38px] md:text-[44px] font-extrabold pb-8 tracking-tight font-poppins text-indigo-300'>
              MISSION
            </h2>
          </div>
          <p className='text-[16px] md:text-[20px] text-white tracking-wide font-bold'>
            Mengadakan sosialisasi langsung pada pelajar dan masyarakat tentang bahaya narkoba. Menjadi duta yang kompeten sehingga dapat memberikan contoh yang baik di kalangan mahasiswa dan masyarakat. Memaksimalkan penggunaan media sosial sebagai sarana yang memberikan dampak bagi masyarakat. Menyelenggarakan kegiatan yang dapat membangun hubungan antar organisasi internal dan eksternal kampus.
          </p>
        </div>
      </div>
      <div className='max-w-[500px] mt-20'>
          <div className="relative inline-block">
            {/* Glow behind text */}
            <div className="absolute inset-0 mx-auto w-40 h-16 bg-blue-400 opacity-40 blur-2xl rounded-full z-0 pointer-events-none" />
            <h2 className='relative z-10 text-[38px] md:text-[44px] font-extrabold pb-8 tracking-tight font-poppins text-indigo-300'>
              TAGLINE
            </h2>
          </div>
          <p className='text-[16px] md:text-[20px] text-white tracking-wide font-bold'>
            Stay Sharp, Stay Strong and Stay Clean
          </p>
      </div>
        
    </div>
  )
}

export default Dunar
