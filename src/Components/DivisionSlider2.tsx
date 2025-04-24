
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import img1 from "../assets/group1.jpg";
// import img2 from "../assets/sample4.jpg";
// import img3 from "../assets/sample5.jpg";

const card = [
    { img: img1, name: "Kenny", role: "Koor Website" },
    { img: img1, name: "Stern", role: "Koor Acara" },
    { img: img1, name: "Lintang", role: "Koor Website" },
  ];

const DivisionSlider: React.FC = () => {
  return (
    <div className="relative mb-12">
      <Swiper
        effect="coverflow"
        loop={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={20}
        grabCursor={true}
        modules={[EffectCoverflow]}
        className="swiper-container"
        navigation={{
          nextEl: ".swiper-button-next",
        }}
        coverflowEffect={{
          rotate: 0, // Disables rotation
          stretch: 0, // Keeps slides at normal size
          depth: 0, // Removes depth effect
          modifier: 1, // Keeps slides at default spacing
          slideShadows: false, // Removes the black shadow
        }}
      >
        {card.map((card, index) => (
          <SwiperSlide key={index} className="w-full">
            <div className="flex flex-col items-center justify-center">
              <img
                src={card.img}
                className="w-[80%] h-[30vh] object-cover rounded-md"
                alt={card.name}
              />
              <h5 className="mt-4 text-[14px] tracking-tighter font-[600]">{card.name}</h5>
              <p className="text-[14px] tracking-tighter text-gray-500">{card.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DivisionSlider;