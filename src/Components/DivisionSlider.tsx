import img1 from "../assets/sample3.jpg";
import img2 from "../assets/sample4.jpg";
import img3 from "../assets/sample5.jpg";

const card = [
  { img: img1, name: "Kenny", role: "Koor Website" },
  { img: img2, name: "Stern", role: "Koor Acara" },
  { img: img3, name: "Lintang", role: "Koor Website" },
];

const DivisionSlider: React.FC = () => {
  return (
    <div className="ml-6 md:ml-14 grid grid-cols-12">
      <div className="grid col-span-3 md:col-span-2"> 
        <p className="text-[14px] leeading-[20px] italic font-[600] text-[#0057B8] tracking-tighter">Pengurus Koor</p>
      </div>
      <div className="grid col-span-9 md:col-span-10 -ml-2">
        <div className="relative w-full overflow-x-auto scrollbar-hide mb-12">
          <div className="flex w-max">
            {card.map((card, index) => (
              <div key={index} className="min-w-[350px]">
                <img
                  src={card.img}
                  className="w-full h-[55vh] object-cover"
                  alt={card.name}
                />
                <h5 className="mt-4 text-[14px] tracking-tighter font-[600]">{card.name}</h5>
                <p className="text-[14px] tracking-tighter text-gray-500">{card.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionSlider;
