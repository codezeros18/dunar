import React from 'react'

const VisiMisi:React.FC = () => {
    const misi = [
        {title: 'Edukasi', desc: 'Mengadakan sosialisasi langsung pada pelajar dan masyarakat tentang bahaya narkoba.'},
        {title: 'Teladan', desc: 'Menjadi duta yang kompeten sehingga dapat memberikan contoh yang baik di kalangan mahasiswa dan masyarakat.'},
        {title: 'Media', desc: 'Memaksimalkan penggunaan media sosial sebagai sarana yang memberikan dampak bagi masyarakat.'},
        {title: 'Kolaborasi', desc: 'Menyelenggarakan kegiatan yang dapat membangun hubungan antar organisasi internal dan eksternal kampus.'},
    ]
  return (
    <div className='mx-6 md:mx-14 md:max-w-8xl'>
        <div className='my-12'>
            <h4 className='text-[20px] md:text-[40px] leading-[22px] md:leading-[48px] font-[500] md:font-normal tracking-tight text-[#1D1D1D]'>Duta Anti Narkoba UMN adalah program kepedulian yang mengedukasi bahaya narkoba serta mengadakan donasi, donor darah, dan kunjungan ke panti asuhan.</h4>
        </div>
        <div className='mb-12'>
            <p className='text-[28px] md:text-[80px] leading-[32px] md:leading-[90px] tracking-normal font-[500] md:font-[500] text-[#1D1D1D]'><span className="text-[#0057B8] text-[11px] md:text-[16px] italic font-[600] -my-1 mr-8 md:mr-24 float-start">Visi</span> 
            Menjadikan <span className='text-[#0057B8]'>generasi</span> yang dapat membentuk lingkungan internal maupun <span className='text-[#0057B8]'>eksternal</span> Universitas Multimedia Nusantara yang bebas dari penyalahgunaan narkoba, kompeten, dan mampu bersaing dengan cara yang <span className='text-[#0057B8]'>kreatif</span> dan <span className='text-[#0057B8]'>inovatif</span></p>
        </div>
        {/* <div className='grid grid-cols-12'>
            <div className='grid col-span-2 md:col-span-1'>
                <p className='text-[28px] md:text-[80px] leading-[32px] md:leading-[90px] tracking-normal font-[500] md:font-[500] text-[#1D1D1D]'><span className="text-[#FF0000] text-[11px] md:text-[16px] italic font-[600] -my-1 mr-8 float-start">Misi</span></p>
            </div>
            <div className='grid col-span-10'>     
                <div className='grid grid-cols-1 md:grid-cols-4 mb-12 gap-x-4'>
                    {misi.map((misi, index) => (
                        <div key={index} className='text-[#1D1D1D] text-[20px] md:text-[40px] leading-[22px] md:leading-[48px] font-[500] md:font-normal tracking-tight'>
                            <h4 className='text-[#FF0000] text-[22px] leading-[28px] font-[600] tracking-tight pb-4'>{misi.title}</h4>
                            <p className='text-[16px] leading-[20px] font-[600] tracking-tight pb-4 text-[#1D1D1D]'>{misi.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default VisiMisi
