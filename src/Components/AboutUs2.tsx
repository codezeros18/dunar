import React, { useEffect, useMemo, useState } from 'react'

import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'

import background2 from '../assets/backgroundblur.webp'

// Images...
import Vistara from '../assets/Website.webp'
import Adhyaksana from '../assets/BPH.webp'
import Mahosatva from '../assets/Acara.webp'
import Samskruti from '../assets/Dokum.webp'
import Rupaka from '../assets/Visual.webp'
import Rakshana from '../assets/Keamanan.webp'
import Upakarana from '../assets/Perlengkapan.webp'
import Sambandha from '../assets/PR.webp'
import Dhanika from '../assets/Sponsor.webp'

import KennyModal from '../assets/Kenny.webp'
import LintangModal from '../assets/Lintang.webp'
import VasselModal from '../assets/Vassel.webp'
import SternModal from '../assets/Stern.webp'
import ThereModal from '../assets/There.webp'
import RiekheModal from '../assets/Riekhe.webp'
import JustineModal from '../assets/Justine.webp'
import CheliModal from '../assets/Cheli.webp'
import ChrisModal from '../assets/Chris.webp'
import DerrenModal from '../assets/Derren.webp'
import StevModal from '../assets/Stev.webp'
import MarlonModal from '../assets/Marlon.webp'
import ShakiraModal from '../assets/Shakira.webp'
import NicoleModal from '../assets/Nicole.webp'
import OwenModal from '../assets/Owen.webp'
import ChloeModal from '../assets/Chloe.webp'
import FeliciaModal from '../assets/Felicia.webp'
import JessicaModal from '../assets/Jessica.webp'
import JoshModal from '../assets/Josh.webp'
import AndrewModal from '../assets/Andrew.webp'
import RafaModal from '../assets/Rafa.webp'

interface Group {
  id: number
  image: string
  description: string
  modalImgs?: string[]
}

const divisions: Group[] = [
  { id: 0, image: Adhyaksana, modalImgs: [VasselModal, FeliciaModal, JessicaModal, OwenModal, ChloeModal, NicoleModal], description: `Divisi Badan Pengurus Harian (Adhyaksana) Merupakan pusat koordinasi seluruh kegiatan organisasi. Adhyaksana memastikan setiap divisi berjalan selaras, melakukan pengambilan keputusan strategis, dan menjaga arah visi serta misi organisasi.` },
  { id: 1, image: Vistara, modalImgs: [KennyModal, LintangModal], description: `Divisi Website (Vistara) Bertanggung jawab atas perancangan, pengembangan, dan pemeliharaan website resmi Duta Anti Narkoba UMN 2025. Vistara memastikan semua informasi terpublikasi dengan baik, interaktif, dan mudah diakses oleh publik.` },
  { id: 2, image: Mahosatva, modalImgs: [SternModal, RafaModal], description: `Divisi Acara (Mahosatva) Bertugas untuk merancang, merencanakan, dan melaksanakan seluruh rangkaian kegiatan dan kampanye anti narkoba. Mahosatva menciptakan acara yang edukatif, inspiratif, dan berdampak luas.` },
  { id: 3, image: Samskruti, modalImgs: [StevModal, MarlonModal], description: `Divisi Dokumentasi (Samskruti) Mengabadikan setiap momen kegiatan melalui foto dan video. Samskruti juga bertugas menyusun arsip dokumentasi dan mempublikasikan konten yang menggambarkan semangat gerakan Duta Anti Narkoba 2025.` },
  { id: 4, image: Rupaka, modalImgs: [ThereModal, ChrisModal], description: `Divisi Visual (Rupaka) Bertanggung jawab atas seluruh aspek visual, termasuk desain grafis, branding, dan estetika publikasi. Rupaka memastikan identitas visual organisasi kuat dan menarik.` },
  { id: 5, image: Rakshana, modalImgs: [DerrenModal, AndrewModal], description: `Divisi Keamanan (Rakshana) Menjaga keamanan dan ketertiban dalam seluruh kegiatan organisasi, baik online maupun offline. Rakshana memastikan setiap program berjalan aman dan nyaman untuk semua pihak.` },
  { id: 6, image: Upakarana, modalImgs: [JustineModal, JoshModal], description: `Divisi Perlengkapan (Upakarana) Bertugas mengatur dan menyediakan seluruh kebutuhan logistik serta perlengkapan kegiatan. Upakarana memastikan semua persiapan teknis berjalan lancar` },
  { id: 7, image: Sambandha, modalImgs: [RiekheModal, CheliModal], description: `Divisi Hubungan Masyarakat (Sambandha) Menjalin relasi dan membangun komunikasi strategis dengan pihak eksternal, termasuk media, komunitas, dan institusi lain. Sambandha menjadi wajah organisasi dalam membina citra positif di masyarakat.` },
  { id: 8, image: Dhanika, modalImgs: [ShakiraModal], description: `Divisi Dana dan Sponsor (Dhanika) Bertanggung jawab mencari, mengelola, dan mempertanggungjawabkan dana serta sponsorship. Dhanika memastikan keberlangsungan kegiatan melalui pendanaan yang transparan dan profesional.` },
]

const AboutUs2: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [radius, setRadius] = useState(260);
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentDesc, setCurrentDesc] = useState("");

  const itemSize = 160;
  const angleStep = (2 * Math.PI) / divisions.length;

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setRadius(screenWidth < 768 ? 140 : 260);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const positions = useMemo(() => {
    return divisions.map((_, index) => {
      const angle = angleStep * (index - currentIndex) - Math.PI / 2;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      return { x, y };
    });
  }, [currentIndex, radius]);

  useEffect(() => {
    if (selectedImages) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % divisions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [selectedImages]);

  return (
    <div className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      {/* Circle Items */}
      <div className="relative w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] ml-8">
        {divisions.map((group, index) => {
          const { x, y } = positions[index];
          const isSelected = index === currentIndex;

          return (
            <div
              key={group.id}
              onClick={() => {
                setCurrentIndex(index);
                if (group.modalImgs) {
                  setSelectedImages(group.modalImgs);
                  setCurrentSlide(0);
                  setCurrentDesc(group.description);
                }
              }}
              className="absolute cursor-pointer transition-all duration-500 ease-in-out will-change-transform"
              style={{
                width: `${itemSize}px`,
                height: `${itemSize}px`,
                left: `calc(50% + ${x}px - ${itemSize / 2}px)`,
                top: `calc(50% + ${y}px - ${itemSize / 2}px)`,
                zIndex: isSelected ? 10 : 1,
                transform: `translateZ(0)`, // iOS GPU fix
              }}
            >
              <img
                src={group.image}
                alt={`group-${index}`}
                className="w-[18vw] h-[18vw] md:w-[34vh] md:h-[34vh] object-cover rounded-full shadow-md"
                style={{ filter: "brightness(1)" }}
              />
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedImages && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          <div
            className="relative z-10 bg-white bg-right backdrop-blur-2xl bg-opacity-90 rounded-[50px] shadow-xl overflow-hidden max-w-lg w-full mt-20 lg:mt-10"
            style={{ backgroundImage: `url(${background2})` }}
          >
            <img
              src={selectedImages[currentSlide]}
              alt="Slide"
              className="w-full h-64 object-cover transition-all duration-700"
            />

            <div className="p-6 text-gray-800 text-[12px] md:text-sm font-bold leading-relaxed">
              {currentDesc}
            </div>

            <div className="flex justify-between items-center px-6 pb-6 gap-4">
              {/* Prev */}
              <button
                onClick={() =>
                  setCurrentSlide(
                    (p) => (p - 1 + selectedImages.length) % selectedImages.length
                  )
                }
                className="bg-white bg-opacity-80 cursor-pointer p-3 rounded-full shadow-lg hover:bg-opacity-100 
                          transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
              >
                <FaChevronLeft size={16} />
              </button>

              {/* Close */}
              <button
                onClick={() => setSelectedImages(null)}
                className="bg-red-600 text-white p-3 cursor-pointer rounded-full shadow-lg hover:bg-red-700 
                          transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
              >
                <FaTimes size={16} />
              </button>

              {/* Next */}
              <button
                onClick={() =>
                  setCurrentSlide((p) => (p + 1) % selectedImages.length)
                }
                className="bg-white bg-opacity-80 cursor-pointer p-3 rounded-full shadow-lg hover:bg-opacity-100 
                          transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
              >
                <FaChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs2;
