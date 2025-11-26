"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  // --- 1. ข้อมูลจำลอง (Mock Data) ---
  const featuredProperties = [
    { id: '52099', type: 'ขาย', category: 'บ้านเดี่ยว', title: 'ขายบ้านเดี่ยว 2 ชั้น หมู่บ้านนันทวัน พระราม 9', location: 'ลาดพร้าว, กรุงเทพฯ', price: '11,900,000', bed: 3, bath: 3, car: 2, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: '14205', type: 'ขาย', category: 'ทาวน์โฮม', title: 'ขายทาวน์โฮม 3 ชั้น พลีโน่ สุขุมวิท-บางนา', location: 'บางนา, กรุงเทพฯ', price: '3,190,000', bed: 3, bath: 2, car: 1, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: '52092', type: 'ขาย', category: 'บ้านเดี่ยว', title: 'ขายบ้านเดี่ยว หมู่บ้านเพอร์เฟค เพลส ลาดกระบัง', location: 'ลาดกระบัง', price: '5,500,000', bed: 3, bath: 3, car: 2, img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: '52063', type: 'ขาย', category: 'บ้านแฝด', title: 'ขายบ้านแฝด หมู่บ้านพฤกษา วิลล์ สายไหม', location: 'สายไหม', price: '3,299,000', bed: 3, bath: 2, car: 1, img: 'https://images.unsplash.com/photo-1600596542815-27b88e54e46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  ];

  const newProperties = [
    { id: '67109', type: 'ขาย', category: 'ที่ดิน', title: 'ที่ดินเปล่า ถมแล้ว 104 ตร.ว. ลาดกระบัง เหมาะสร้างบ้าน', location: 'ลาดกระบัง', area: '104 ตร.ว.', price: '1,950,000', img: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: '57242', type: 'ขาย', category: 'อาคารพาณิชย์', title: 'ขายอาคารพาณิชย์ 3.5 ชั้น รามอินทรา ติดถนนใหญ่', location: 'รามอินทรา', bed: 3, bath: 3, price: '7,500,000', img: 'https://images.unsplash.com/photo-1599809275372-bde348ac5db4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: '57230', type: 'ขาย', category: 'ทาวน์โฮม', title: 'ขายทาวน์โฮมหลังมุม หมู่บ้านเดอะ พลีโน่ เอกชัย', location: 'เอกชัย-บางบอน', bed: 3, bath: 2, price: '2,590,000', img: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: '67105', type: 'เช่า', category: 'คอนโด', title: 'ให้เช่า คอนโด ลุมพินี วิลล์ นครอินทร์-ริเวอร์วิว', location: 'นนทบุรี', bed: 1, bath: 1, price: '6,500 /เดือน', img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  ];

  // --- 2. Logic: Search & State ---
  const [searchTab, setSearchTab] = useState('sell'); // 'sell' หรือ 'rent'
  const [searchInputs, setSearchInputs] = useState({ type: '', location: '', price: '' });

  const handleSearch = () => {
    // จำลองการค้นหา (ในเว็บจริงจะ Redirect ไปหน้า Search พร้อม Query Param)
    alert(`🔍 กำลังค้นหา: 
    - ประเภท: ${searchTab === 'sell' ? 'ซื้อ' : 'เช่า'}
    - ทรัพย์: ${searchInputs.type || 'ทั้งหมด'}
    - ทำเล: ${searchInputs.location || 'ทุกทำเล'}
    - ราคา: ${searchInputs.price || 'ทุกช่วงราคา'}`);
    
    // ตัวอย่างการ Redirect จริง:
    // router.push(`/search?tab=${searchTab}&type=${searchInputs.type}`);
  };

  // --- 3. Logic: Hero Slider ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // --- 4. Logic: Horizontal Scroll ---
  const scrollContainerRef = useRef(null);
  const scrollProperties = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* Top Bar */}
      <div className="bg-primary-blue text-white text-xs py-2 px-4 md:px-8 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center space-x-4">
          <span className="text-primary-gold">The Reality Asset Plus Agent Co., Ltd.</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hover:text-primary-gold cursor-pointer transition"><i className="fas fa-search"></i></button>
          <button className="hover:text-primary-gold cursor-pointer transition"><i className="far fa-heart"></i> 0</button>
          <Link href="/login" className="bg-primary-gold/20 text-primary-gold px-3 py-1 rounded cursor-pointer border border-primary-gold/30 hover:bg-primary-gold hover:text-white transition">
            <i className="fas fa-user mr-1"></i> ฝากขายอสังหาริมทรัพย์
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex flex-col leading-tight">
              <div className="flex items-center text-primary-blue font-bold text-2xl">
                <i className="fas fa-city mr-2 text-primary-gold"></i> THE REALITY
              </div>
              <span className="text-[10px] text-primary-gold tracking-widest uppercase">Asset Plus Agent Co., Ltd.</span>
            </div>
          </Link>
          <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <Link href="/" className="text-primary-blue font-bold border-b-2 border-primary-gold">หน้าหลัก</Link>
            <Link href="/buy" className="hover:text-primary-gold transition">ขายที่อยู่อาศัย</Link>
            <Link href="/rent" className="hover:text-primary-gold transition">เช่าที่อยู่อาศัย</Link>
            <Link href="/services" className="hover:text-primary-gold transition">บริการของเรา</Link>
            <Link href="/portfolio" className="hover:text-primary-gold transition">ผลงานของเรา</Link>
            <Link href="/contact" className="hover:text-primary-gold transition">ติดต่อเรา</Link>
          </div>
          <div className="md:hidden text-2xl text-primary-blue">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="relative h-[400px] md:h-[500px] bg-gray-100 overflow-hidden">
        {slides.map((src, index) => (
          <div key={index} className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
             <img src={src} alt="Banner" className="absolute inset-0 w-full h-full object-cover object-center" />
          </div>
        ))}
        <div className="absolute inset-0 banner-gradient flex items-center z-10">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-xl pt-10">
              <div className="text-primary-gold text-6xl md:text-8xl font-script font-bold mb-2 drop-shadow-sm" style={{ fontFamily: 'Brush Script MT, cursive' }}>Be Happy</div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">THE REALITY ASSET</h1>
              <p className="text-xl md:text-2xl text-gray-600 font-medium border-l-4 border-primary-gold pl-4">ส่งต่อที่อยู่อาศัยของความสุข</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button key={index} className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-primary-gold' : 'bg-gray-300'}`} onClick={() => setCurrentSlide(index)}></button>
          ))}
        </div>
      </div>

      {/* Search Bar (Interactive) */}
      <div className="bg-primary-blue py-8 border-t-4 border-primary-gold relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex space-x-1 mb-4">
            <button 
                onClick={() => setSearchTab('sell')}
                className={`px-6 py-2 text-sm font-medium transition ${searchTab === 'sell' ? 'bg-primary-gold text-white' : 'bg-white/10 text-white hover:bg-white hover:text-primary-blue'}`}
            >ขาย</button>
            <button 
                onClick={() => setSearchTab('rent')}
                className={`px-6 py-2 text-sm font-medium transition ${searchTab === 'rent' ? 'bg-primary-gold text-white' : 'bg-white/10 text-white hover:bg-white hover:text-primary-blue'}`}
            >เช่า</button>
          </div>
          <div className="text-primary-gold text-sm mb-2 font-semibold">ค้นหาอสังหาริมทรัพย์</div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              <input 
                type="text" placeholder="ประเภทอสังหาริมทรัพย์" 
                className="w-full p-3 text-sm rounded bg-white border border-transparent focus:border-primary-gold focus:ring-0 outline-none text-gray-700"
                onChange={(e) => setSearchInputs({...searchInputs, type: e.target.value})}
              />
              <input 
                type="text" placeholder="ทำเล/โซน" 
                className="w-full p-3 text-sm rounded bg-white border border-transparent focus:border-primary-gold focus:ring-0 outline-none text-gray-700"
                onChange={(e) => setSearchInputs({...searchInputs, location: e.target.value})}
              />
              <input 
                type="text" placeholder="ช่วงราคา" 
                className="w-full p-3 text-sm rounded bg-white border border-transparent focus:border-primary-gold focus:ring-0 outline-none text-gray-700"
                onChange={(e) => setSearchInputs({...searchInputs, price: e.target.value})}
              />
            </div>
            <div className="md:col-span-2 flex space-x-2">
              <button onClick={handleSearch} className="w-full bg-primary-gold hover:bg-white hover:text-primary-gold text-white font-medium py-3 rounded transition shadow-lg flex justify-center items-center cursor-pointer">
                <i className="fas fa-search mr-2"></i> ค้นหา
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties Slider */}
      <div className="bg-primary-blue py-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-gold opacity-10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-2xl font-bold text-white text-center mb-2">อสังหาริมทรัพย์<span className="text-primary-gold">แนะนำ</span></h2>
          <div className="w-20 h-1 bg-primary-gold mx-auto mb-10 rounded-full"></div>

          <div className="relative group">
            <button onClick={() => scrollProperties('left')} className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-20 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-gold hover:text-white transition text-primary-blue cursor-pointer">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button onClick={() => scrollProperties('right')} className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-20 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-gold hover:text-white transition text-primary-blue cursor-pointer">
              <i className="fas fa-chevron-right"></i>
            </button>

            <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory no-scrollbar scroll-smooth">
               {featuredProperties.map((prop, idx) => (
                   <Link href={`/property/${prop.id}`} key={idx} className="min-w-[85%] sm:min-w-[calc(50%-12px)] md:min-w-[calc(25%-18px)] flex-shrink-0 snap-start">
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg relative group border border-gray-100 property-card h-full">
                            <div className="absolute top-3 right-3 bg-primary-gold text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm z-10 uppercase">{prop.type}</div>
                            <div className="h-48 overflow-hidden relative">
                                <img src={prop.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={prop.title} />
                                <div className="absolute bottom-0 left-0 bg-primary-blue/80 text-white text-[10px] px-3 py-1.5 w-full truncate backdrop-blur-sm">
                                    <i className="fas fa-map-marker-alt mr-1 text-primary-gold"></i> {prop.location}
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-[10px] text-gray-400 font-medium mb-1 flex justify-between">
                                    <span>รหัส: {prop.id}</span>
                                    <span className="text-primary-blue font-bold">{prop.category}</span>
                                </div>
                                <h3 className="text-sm font-bold text-gray-800 line-clamp-2 mb-3 h-10 group-hover:text-primary-blue transition">{prop.title}</h3>
                                <div className="flex items-center space-x-3 text-xs text-gray-500 mb-3 border-b border-gray-100 pb-3">
                                    <span className="flex items-center"><i className="fas fa-bed mr-1 text-primary-gold"></i> {prop.bed}</span>
                                    <span className="flex items-center"><i className="fas fa-bath mr-1 text-primary-gold"></i> {prop.bath}</span>
                                    <span className="flex items-center"><i className="fas fa-car mr-1 text-primary-gold"></i> {prop.car}</span>
                                </div>
                                <div className="flex justify-between items-center pt-1">
                                    <span className="text-xs text-gray-400">ราคา</span>
                                    <span className="text-lg font-bold text-primary-gold">{prop.price}</span>
                                </div>
                            </div>
                        </div>
                   </Link>
               ))}
            </div>
          </div>
        </div>
      </div>
      
    {/* New Properties Grid */}
    <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-bold text-primary-blue text-center mb-1">อสังหาริมทรัพย์<span className="text-primary-gold">มาใหม่</span></h2>
            <div className="w-16 h-1 bg-primary-gold mx-auto mb-10 rounded-full"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {newProperties.map((prop, idx) => (
                    <Link href={`/property/${prop.id}`} key={idx}>
                         <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm relative group hover:shadow-xl transition property-card h-full">
                            <div className="absolute top-3 right-3 bg-white text-primary-blue border border-primary-blue/10 text-[10px] font-bold px-3 py-1 rounded z-10">{prop.type}</div>
                            <div className="h-48 overflow-hidden relative">
                                <img src={prop.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={prop.title} />
                            </div>
                            <div className="p-4">
                                <div className="text-[10px] text-primary-gold font-bold mb-1">รหัส: {prop.id}</div>
                                <h3 className="text-sm font-bold text-gray-800 line-clamp-2 mb-2 h-10 group-hover:text-primary-blue transition">{prop.title}</h3>
                                <div className="flex items-center space-x-3 text-xs text-gray-500 mb-3">
                                    {prop.bed && <span><i className="fas fa-bed text-primary-gold mr-1"></i> {prop.bed}</span>}
                                    {prop.bath && <span><i className="fas fa-bath text-primary-gold mr-1"></i> {prop.bath}</span>}
                                    {prop.area && <span><i className="fas fa-ruler-combined text-primary-gold mr-1"></i> {prop.area}</span>}
                                </div>
                                <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                                    <span className="text-xs text-gray-400">ราคา</span>
                                    <span className="text-lg font-bold text-primary-blue">{prop.price}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            
            <div className="text-center mt-10">
                 <Link href="/search" className="inline-block bg-primary-blue hover:bg-primary-blue/90 text-white text-sm px-10 py-3 rounded shadow-lg transition">
                    ดูข้อมูลทั้งหมด <i className="fas fa-arrow-right ml-2 text-primary-gold"></i>
                 </Link>
            </div>
        </div>
    </div>

          {/* Services Section */}
      <div className="flex flex-col md:flex-row h-auto md:h-[450px] ">
        <div className="w-full md:w-1/2 bg-primary-blue text-white p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
           <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-black/20 to-transparent"></div>
           <h4 className="text-sm font-bold tracking-[0.2em] mb-2 uppercase text-primary-gold">Exclusive Services</h4>
           <h2 className="text-3xl font-bold mb-4 leading-tight">บริการครบวงจร<br/>ระดับมืออาชีพ</h2>
           <p className="mb-8 font-light text-gray-300">ปรึกษาเราเพื่อประสบการณ์ซื้อขายที่ดีที่สุด</p>
           <ul className="space-y-4 mb-10 text-sm">
             <li className="flex items-center"><span className="w-8 h-8 rounded-full bg-primary-gold/20 flex items-center justify-center mr-3 text-primary-gold"><i className="fas fa-tag"></i></span> รับฝากขายบ้านมือสอง</li>
             <li className="flex items-center"><span className="w-8 h-8 rounded-full bg-primary-gold/20 flex items-center justify-center mr-3 text-primary-gold"><i className="fas fa-comments"></i></span> ให้คำปรึกษาด้านสินเชื่อบ้านฟรี</li>
             <li className="flex items-center"><span className="w-8 h-8 rounded-full bg-primary-gold/20 flex items-center justify-center mr-3 text-primary-gold"><i className="fas fa-search-dollar"></i></span> การตลาดครอบคลุมทุกช่องทาง</li>
           </ul>
           <button className="bg-transparent hover:bg-primary-gold text-primary-gold hover:text-white border border-primary-gold px-8 py-2.5 w-max rounded text-sm transition flex items-center">
             เพิ่มเติม <i className="fas fa-chevron-right ml-2 text-xs"></i>
           </button>
        </div>
        <div className="w-full md:w-1/2 relative h-64 md:h-full group">
           <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" alt="Service" />
           <div className="absolute inset-0 bg-primary-blue/30 group-hover:bg-transparent transition duration-500"></div>
        </div>
      </div>

    <div className="container mx-auto px-4 md:px-8 py-16 bg-pr">

    </div>




      <div className="bg-primary-blue text-white py-16 relative overflow-hidden ">
         <div className="absolute inset-0 opacity-5" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex flex-col leading-tight mb-6">
                <div className="flex items-center font-bold text-3xl text-white">
                  <i className="fas fa-city mr-3 text-primary-gold"></i> THE REALITY
                </div>
                <span className="text-xs tracking-[0.2em] text-primary-gold mt-1">ASSET PLUS AGENT CO.,LTD.</span>
              </div>
              <p className="text-sm text-gray-400 mb-6 font-light leading-relaxed">
                ผู้เชี่ยวชาญด้านการ ซื้อ-ขาย อสังหาริมทรัพย์ระดับพรีเมียม<br/>
                มุ่งมั่นส่งมอบที่อยู่อาศัยที่สมบูรณ์แบบเพื่อคุณ
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg border-b border-white/10 pb-2 w-max">ติดต่อเรา</h4>
              <p className="text-sm text-gray-300 mb-3 font-medium">บริษัท เดอะ เรียลลิตี้ แอสเซท พลัส เอเจนท์ จำกัด</p>
              <p className="text-xs text-gray-400 mb-4 font-light">สำนักงานใหญ่: เลขที่ 45/99 ซอยรามคำแหง 199 แขวงมีนบุรี เขตมีนบุรี กรุงเทพมหานคร</p>
              <p className="text-lg text-primary-gold mb-6 font-bold"><i className="fas fa-phone-alt mr-2"></i> 02-047-4282</p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 hover:bg-primary-gold text-white w-10 h-10 rounded-full flex items-center justify-center transition"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="bg-white/10 hover:bg-primary-gold text-white w-10 h-10 rounded-full flex items-center justify-center transition"><i className="fab fa-line"></i></a>
                <a href="#" className="bg-white/10 hover:bg-primary-gold text-white w-10 h-10 rounded-full flex items-center justify-center transition"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div>
               <h4 className="font-bold mb-6 text-lg border-b border-white/10 pb-2 w-max">เมนูลัด</h4>
               <div className="grid grid-cols-2 text-sm text-gray-400 gap-y-3 gap-x-4">
                 <a href="#" className="hover:text-primary-gold transition flex items-center"><i className="fas fa-caret-right mr-2 text-primary-gold text-xs"></i> หน้าหลัก</a>
                 <a href="#" className="hover:text-primary-gold transition flex items-center"><i className="fas fa-caret-right mr-2 text-primary-gold text-xs"></i> บริการของเรา</a>
                 <a href="#" className="hover:text-primary-gold transition flex items-center"><i className="fas fa-caret-right mr-2 text-primary-gold text-xs"></i> ขายอสังหาฯ</a>
                 <a href="#" className="hover:text-primary-gold transition flex items-center"><i className="fas fa-caret-right mr-2 text-primary-gold text-xs"></i> ติดต่อเรา</a>
                 <a href="#" className="hover:text-primary-gold transition flex items-center"><i className="fas fa-caret-right mr-2 text-primary-gold text-xs"></i> เช่าอสังหาฯ</a>
                 <a href="#" className="hover:text-primary-gold transition flex items-center"><i className="fas fa-caret-right mr-2 text-primary-gold text-xs"></i> บทความ</a>
               </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-6 text-[10px] text-center text-gray-500 flex flex-col md:flex-row justify-between items-center">
            <span>สงวนลิขสิทธิ์ พ.ศ. 2568 บริษัท เดอะ เรียลลิตี้ แอสเซท พลัส เอเจนท์ จำกัด</span>
            <span className="mt-2 md:mt-0">Design by The Reality Team</span>
          </div>
        </div>
      </div>
      
    </main>
  );
}