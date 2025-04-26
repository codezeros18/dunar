import React from 'react';
import { motion } from 'framer-motion';

const sections = [
  {
    title: 'VISION',
    content:
      'Menjadikan generasi yang dapat membentuk lingkungan internal maupun eksternal Universitas Multimedia Nusantara yang bebas dari penyalahgunaan narkoba, kompeten, dan mampu bersaing dengan cara yang kreatif dan inovatif.',
  },
  {
    title: 'MISSION',
    content:
      'Mengadakan sosialisasi langsung pada pelajar dan masyarakat tentang bahaya narkoba. Menjadi duta yang kompeten sehingga dapat memberikan contoh yang baik di kalangan mahasiswa dan masyarakat. Memaksimalkan penggunaan media sosial sebagai sarana yang memberikan dampak bagi masyarakat. Menyelenggarakan kegiatan yang dapat membangun hubungan antar organisasi internal dan eksternal kampus.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Dunar: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 md:gap-y-0 mx-6 md:mx-0'>
        {sections.map((section) => (
          <motion.div
            key={section.title}
            className='max-w-[500px] relative'
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className='relative inline-block'>
              <div className='absolute inset-0 mx-auto w-40 h-16 bg-blue-400 opacity-40 blur-2xl rounded-full z-0 pointer-events-none' />
              <h2 className='relative z-10 text-[38px] md:text-[44px] font-extrabold pb-8 tracking-wide font-poppins text-indigo-300'>
                {section.title}
              </h2>
            </div>
            <p className='text-[16px] md:text-[20px] text-white tracking-wide font-bold'>
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* TAGLINE */}
      <motion.div
        className='max-w-[500px] mt-20 mx-6'
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <div className='relative inline-block'>
          <div className='absolute inset-0 mx-auto w-40 h-16 bg-blue-400 opacity-40 blur-2xl rounded-full z-0 pointer-events-none' />
          <h2 className='relative z-10 text-[38px] md:text-[44px] font-extrabold pb-8 tracking-wide font-poppins text-indigo-300'>
            TAGLINE
          </h2>
        </div>
        <p className='text-[30px] md:text-[40px] text-white tracking-wide font-bold'>
          Stay Sharp, Stay Strong and Stay Clean
        </p>
      </motion.div>
    </div>
  );
};

export default Dunar;
