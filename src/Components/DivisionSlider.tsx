import dgts1 from "../assets/dgts1.jpg";
import dgts2 from "../assets/dgts2.jpg";
import dgts3 from "../assets/dgts3.jpg";
import dgts4 from "../assets/dgts4.jpg";
import dgts5 from "../assets/dgts5.jpg";
import dgts6 from "../assets/dgts6.jpg";
import dgts7 from "../assets/dgts7.jpg";
import dgts8 from "../assets/dgts8.jpg";
import dgts9 from "../assets/dgts9.jpg";
import dgts10 from "../assets/dgts10.jpg";
import dgts11 from "../assets/dgts11.jpg";
import dgts12 from "../assets/dgts12.jpg";
import dgts13 from "../assets/dgts13.jpg";

const cards = [
  { name: "dgts1", img: dgts1 },
  { name: "dgts2", img: dgts2 },
  { name: "dgts3", img: dgts3 },
  { name: "dgts4", img: dgts4 },
  { name: "dgts5", img: dgts5 },
  { name: "dgts6", img: dgts6 },
  { name: "dgts7", img: dgts7 },
  { name: "dgts8", img: dgts8 },
  { name: "dgts9", img: dgts9 },
  { name: "dgts10", img: dgts10 },
  { name: "dgts11", img: dgts11 },
  { name: "dgts12", img: dgts12 },
  { name: "dgts13", img: dgts13 },
];

const SimpleCarousel = () => {
  return (
    <>
    <div className="flex justify-center items-center">
      <h4 className="text-[30px] md:text-[40px] leading-[22px] md:leading-[48px] font-[700] tracking-wide text-white py-4 md:py-8">DGTS</h4>
    </div>
    <div className="w-full py-8 overflow-hidden">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[300px] h-[200px] md:w-[400px] md:h-[400px] flex-shrink-0 overflow-hidden snap-start"
            style={{ willChange: "transform" }}
          >
            <img
              src={card.img}
              alt={card.name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default SimpleCarousel;
