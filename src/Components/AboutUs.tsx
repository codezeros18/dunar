import React, { useState, useEffect } from 'react'
import Vistara from '../assets/Website.png'
import Adhyaksana from '../assets/BPH.png'
import Mahosatva from '../assets/Acara.png'
import Samskruti from '../assets/Dokum.png'
import Rupaka from '../assets/Visual.png'
import Rakshana from '../assets/Keamanan.png'
import Upakarana from '../assets/Perlengkapan.png'
import Sambandha from '../assets/PR.png'
import Dhanika from '../assets/Sponsor.png'

import KennyModal from '../assets/Kenny.jpg'
import LintangModal from '../assets/Lintang.jpg'
import VasselModal from '../assets/Vassel.jpg'
import SternModal from '../assets/Stern.jpg'
import ThereModal from '../assets/There.jpg'
import RiekheModal from '../assets/Riekhe.jpg'
import JustineModal from '../assets/Justine.jpg'
import CheliModal from '../assets/Cheli.jpg'
import ChrisModal from '../assets/Chris.jpg'
import DerrenModal from '../assets/Derren.jpg'
import StevModal from '../assets/Stev.jpg'
import MarlonModal from '../assets/Marlon.jpg'
import ShakiraModal from '../assets/Shakira.jpg'
import NicoleModal from '../assets/Nicole.jpg'
import OwenModal from '../assets/Owen.jpg'
import ChloeModal from '../assets/Chloe.jpg'
import FeliciaModal from '../assets/Felicia.jpg'
import JessicaModal from '../assets/Jessica.jpg'
import JoshModal from '../assets/Josh.jpg'
import AndrewModal from '../assets/Andrew.jpg'
import RafaModal from '../assets/Rafa.jpg'

const divisions = [
    {
      img: Adhyaksana,
      modalImgs: [
        VasselModal,
        FeliciaModal,
        JessicaModal,
        OwenModal,
        ChloeModal,
        NicoleModal,
      ],
      description: `Divisi Badan Pengurus Harian (Adhyaksana) Merupakan pusat koordinasi seluruh kegiatan organisasi. Adhyaksana memastikan setiap divisi berjalan selaras, melakukan pengambilan keputusan strategis, dan menjaga arah visi serta misi organisasi.`,
    },
    {
      img: Vistara,
      modalImgs: [KennyModal, LintangModal],
      description: `Divisi Website (Vistara) Bertanggung jawab atas perancangan, pengembangan, dan pemeliharaan website resmi Duta Anti Narkoba UMN 2025. Vistara memastikan semua informasi terpublikasi dengan baik, interaktif, dan mudah diakses oleh publik.`,
    },
    {
      img: Mahosatva,
      modalImgs: [SternModal, RafaModal],
      description: `Divisi Acara (Mahosatva) Bertugas untuk merancang, merencanakan, dan melaksanakan seluruh rangkaian kegiatan dan kampanye anti narkoba. Mahosatva menciptakan acara yang edukatif, inspiratif, dan berdampak luas.`,
    },
    {
      img: Samskruti,
      modalImgs: [StevModal, MarlonModal],
      description: `Divisi Dokumentasi (Samskruti) Mengabadikan setiap momen kegiatan melalui foto dan video. Samskruti juga bertugas menyusun arsip dokumentasi dan mempublikasikan konten yang menggambarkan semangat gerakan Duta Anti Narkoba 2025.`,
    },
    {
      img: Rupaka,
      modalImgs: [ThereModal, ChrisModal],
      description: `Divisi Visual (Rupaka) Bertanggung jawab atas seluruh aspek visual, termasuk desain grafis, branding, dan estetika publikasi. Rupaka memastikan identitas visual organisasi kuat dan menarik.`,
    },
    {
      img: Rakshana,
      modalImgs: [DerrenModal, AndrewModal],
      description: `Divisi Keamanan (Rakshana) Menjaga keamanan dan ketertiban dalam seluruh kegiatan organisasi, baik online maupun offline. Rakshana memastikan setiap program berjalan aman dan nyaman untuk semua pihak.`,
    },
    {
      img: Upakarana,
      modalImgs: [JustineModal, JoshModal],
      description: `Divisi Perlengkapan (Upakarana) Bertugas mengatur dan menyediakan seluruh kebutuhan logistik serta perlengkapan kegiatan. Upakarana memastikan semua persiapan teknis berjalan lancar.`,
    },
    {
      img: Sambandha,
      modalImgs: [RiekheModal, CheliModal],
      description: `Divisi Hubungan Masyarakat (Sambandha) Menjalin relasi dan membangun komunikasi strategis dengan pihak eksternal, termasuk media, komunitas, dan institusi lain. Sambandha menjadi wajah organisasi dalam membina citra positif di masyarakat.`,
    },
    {
      img: Dhanika,
      modalImgs: [ShakiraModal],
      description: `Divisi Dana dan Sponsor (Dhanika) Bertanggung jawab mencari, mengelola, dan mempertanggungjawabkan dana serta sponsorship. Dhanika memastikan keberlangsungan kegiatan melalui pendanaan yang transparan dan profesional.`,
    },
  ]
  

const AboutUs: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentDesc, setCurrentDesc] = useState<string>('')

  // auto‐slide every 5s
  useEffect(() => {
    if (!selectedImages) return
    const interval = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % selectedImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [selectedImages])

  const handleOpen = (division: typeof divisions[number]) => {
    setSelectedImages(division.modalImgs)
    setCurrentDesc(division.description)
    setCurrentSlide(0)
  }

  return (
    <div className="min-h-screen py-12 px-6 overflow-hidden">

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {divisions.map((division, i) => (
          <div
            key={i}
            onClick={() => handleOpen(division)}
            className={`
              relative w-40 h-40 md:w-72 md:h-72 mx-auto flex items-center justify-center
              rounded-full  transition-transform transform hover:scale-105 cursor-pointer
              ${i === divisions.length - 1 ? 'col-span-2 md:col-span-1 justify-self-center' : ''}
            `}
          >
            <img
              src={division.img}
              alt={`Division ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-full scale-110"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImages && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl overflow-hidden max-w-lg w-full">
            {/* Slideshow */}
            <img
              src={selectedImages[currentSlide]}
              alt="Slide"
              className="w-full h-64 object-cover transition-all duration-700"
            />

            {/* Description */}
            <div className="p-6 text-gray-800 text-sm leading-relaxed">
              {currentDesc}
            </div>

            {/* Controls */}
            <div className="flex justify-between px-6 pb-6">
              <button
                onClick={() => setCurrentSlide((p) => (p - 1 + selectedImages.length) % selectedImages.length)}
                className="bg-white bg-opacity-80 px-4 py-2 rounded-full shadow hover:bg-opacity-100"
              >
                Prev
              </button>
              <button
                onClick={() => setCurrentSlide((p) => (p + 1) % selectedImages.length)}
                className="bg-white bg-opacity-80 px-4 py-2 rounded-full shadow hover:bg-opacity-100"
              >
                Next
              </button>
              <button
                onClick={() => setSelectedImages(null)}
                className="bg-red-600 text-white px-4 py-2 rounded-full shadow hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AboutUs
