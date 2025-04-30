import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import donor1 from '../assets/donor1.jpg'
import donor2 from '../assets/donor2.jpg'
import donor3 from '../assets/donor3.jpg'
import donor4 from '../assets/donor4.jpg'
import dgts1 from '../assets/dgts1.jpg'
import dgts3 from '../assets/dgts3.jpg'
import dgts4 from '../assets/dgts4.jpg'
import dgts5 from '../assets/dgts5.jpg'
import dgts6 from '../assets/dgts6.jpg'
import dgts7 from '../assets/dgts7.jpg'
import dgts8 from '../assets/dgts8.jpg'
import award2 from '../assets/award2.jpg'
import award3 from '../assets/award3.jpg'
import award4 from '../assets/award4.jpg'
import award5 from '../assets/award5.jpg'
import award6 from '../assets/award6.jpg'

const anwImages = [donor1, donor2, donor3, donor4]
const dgtsImages = [dgts1, dgts3, dgts4, dgts5, dgts6, dgts7, dgts8]
const awardImages = [award2, award3, award4, award5, award6]

const swiperSettings = {
  modules: [Autoplay],
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  className: 'w-full rounded-[12px]',
}

const EventSlider: React.FC = () => {
  const [anwRef, inViewAnw] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [dgtsRef, inViewDgts] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [awardRef, inViewAward] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <div className="w-full px-6 py-10 flex justify-center overflow-x-hidden">
      <div className="max-w-6xl w-full flex flex-col gap-8">

        {/* ANW Section */}
        <motion.div
          id="anw"
          ref={anwRef}
          initial={{ opacity: 0, y: 40 }}
          animate={inViewAnw ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-h-none mt-12 lg:mt-0 lg:h-screen flex flex-col justify-center items-center text-center"
        >
          <div className="order-2 lg:order-1">
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 mx-auto w-40 h-16 bg-blue-400 opacity-40 blur-2xl rounded-full z-0 pointer-events-none" />
              <h2 className="relative z-10 text-[24px] md:text-[34px] font-extrabold tracking-wide font-poppins text-indigo-300 pt-8 pb-8">
                What is ANW?
              </h2>
            </div>
            <p className="max-w-86 md:max-w-2xl text-white opacity-100 md:opacity-95 text-base font-bold text-[14px] md:text-[16px] leading-relaxed pb-0 md:pb-8">
              Serangkaian kegiatan inspiratif yang meliputi kunjungan ke panti asuhan, penggalangan donasi, dan donor darah. Semua ini dilakukan untuk menumbuhkan kepedulian sosial serta meningkatkan kesadaran akan pentingnya menjaga kesehatan, khususnya di kalangan generasi muda.
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-4 order-1 lg:order-2 justify-center items-center w-full lg:w-[90vh]">
            <Swiper {...swiperSettings}>
              {anwImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`ANW ${index + 1}`}
                    className="w-full h-[24vh] md:h-[40vh] object-cover rounded-[12px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

        {/* DGTS Section */}
        <motion.div
          id="dgts"
          ref={dgtsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={inViewDgts ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-h-none md:h-[60vh] grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 items-center my-4 md:my-8"
        >
          <div className="order-1 lg:order-2">
            <Swiper {...swiperSettings}>
              {dgtsImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`DGTS ${index + 1}`}
                    className="w-full h-[24vh] md:h-[40vh] object-cover rounded-[12px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <div className="relative flex justify-center lg:justify-start items-center w-full">
              <div className="absolute inset-0 w-60 h-16 bg-blue-400 opacity-40 blur-2xl rounded-full z-0 pointer-events-none" />
              <h2 className="relative z-10 text-[24px] md:text-[34px] font-extrabold tracking-wide font-poppins text-indigo-300 pt-4 pb-8">
                What is DGTS?
              </h2>
            </div>
            <p className="max-w-86 md:max-w-full text-white opacity-100 md:opacity-95 text-base font-bold text-[14px] md:text-[16px] leading-relaxed">
              Program edukatif yang berfokus pada penyuluhan di sekolah-sekolah. Melalui sesi interaktif, kegiatan ini mengajak pelajar untuk lebih memahami bahaya narkoba serta pentingnya menjaga kesehatan fisik dan mental dalam kehidupan sehari-hari.
            </p>
          </div>
        </motion.div>

        {/* Awarding Night Section */}
        <motion.div
          id="award"
          ref={awardRef}
          initial={{ opacity: 0, y: 40 }}
          animate={inViewAward ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-h-none md:h-[60vh] grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 items-center"
        >
          <div>
            <Swiper {...swiperSettings}>
              {awardImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Awarding Night ${index + 1}`}
                    className="w-full h-[24vh] md:h-[40vh] object-cover rounded-[12px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative flex justify-center lg:justify-start items-center w-full">
              <div className="absolute inset-0 w-[60vh] h-16 bg-blue-400 opacity-40 blur-2xl rounded-full z-0 pointer-events-none" />
              <h2 className="relative z-10 text-[24px] md:text-[34px] font-extrabold tracking-wide font-poppins text-indigo-300 pt-4 pb-8">
                What is Awarding Night?
              </h2>
            </div>
            <p className="max-w-86 md:max-w-full text-white opacity-100 md:opacity-95 text-base font-bold text-[14px] md:text-[16px] leading-relaxed">
              Rangkaian seleksi dan karantina yang berujung pada malam puncak pemilihan duta penerus. Momen ini menjadi ajang apresiasi bagi mereka yang siap membawa semangat perubahan dalam gerakan anti narkoba di lingkungan sekitar.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default EventSlider
