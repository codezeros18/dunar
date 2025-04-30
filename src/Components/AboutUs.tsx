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
      description: `Isi Sendiri`,
    },
    {
      img: Vistara,
      modalImgs: [KennyModal, LintangModal],
      description: `Divisi Website (VISTARA) bertanggung jawab merancang, membangun, dan memelihara situs resmi OMB UMN 2025 agar informasi selalu up-to-date dan mudah diakses.`,
    },
    {
      img: Mahosatva,
      modalImgs: [SternModal, RafaModal],
      description: `Divisi Acara (MAHOSATVA) merencanakan dan mengatur seluruh rundown kegiatan, memastikan setiap sesi berjalan lancar sesuai jadwal.`,
    },
    {
      img: Samskruti,
      modalImgs: [StevModal, MarlonModal],
      description: `Divisi Dokumentasi (SAMSKRUTI) mendokumentasikan setiap momen penting—mulai foto, video, hingga liputan media sosial.`,
    },
    {
      img: Rupaka,
      modalImgs: [ThereModal, ChrisModal],
      description: `Divisi Visual & Desain (RUPAKA) menciptakan materi grafis dan branding untuk semua keperluan promosi dan onsite.`,
    },
    {
      img: Rakshana,
      modalImgs: [DerrenModal, AndrewModal],
      description: `Divisi Keamanan (RAKSHANA) menjaga ketertiban dan keselamatan selama rangkaian acara, memastikan protokol berjalan dengan baik.`,
    },
    {
      img: Upakarana,
      modalImgs: [JustineModal, JoshModal],
      description: `Divisi Perlengkapan (UPAKARANA) bertugas menyiapkan dan mengelola semua peralatan, mulai panggung, sound system, hingga logistik.`,
    },
    {
      img: Sambandha,
      modalImgs: [RiekheModal, CheliModal],
      description: `Divisi Public Relations (SAMBANDHA) menjalin komunikasi dengan media, sponsor, dan stakeholder untuk mendukung kesuksesan OMB UMN.`,
    },
    {
      img: Dhanika,
      modalImgs: [ShakiraModal],
      description: `Divisi Sponsor (DHANIKA) bertugas mencari, negosiasi, dan mengelola kemitraan dengan sponsor agar acara didukung secara maksimal.`,
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