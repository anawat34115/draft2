"use client";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

// --- IMPORT DATA จากไฟล์ JSON ของคุณ ---
// ** แก้ไข path ให้ตรงกับตำแหน่งไฟล์ของคุณนะครับ **
import provincesData from '../app/data/provinces.json';
import districtsData from '../app/data/districts.json';
import Logo from '../img/Logo.png';
import Footer from '../components/Footer';

export default function Home() {
  const router = useRouter();

  // --- 1. Logic: State สำหรับ Dropdown จังหวัด/อำเภอ ---
  const [selectedProvinceId, setSelectedProvinceId] = useState('');
  const [selectedDistrictId, setSelectedDistrictId] = useState('');

  // Derived State: กรองอำเภอทันทีเมื่อเลือกจังหวัด (ใช้ useMemo เพื่อประสิทธิภาพ)
  const currentDistricts = useMemo(() => {
    if (!selectedProvinceId) return [];
    
    // แปลงเป็น Number หรือ String ให้ตรงกันกับข้อมูลใน JSON (กันพลาด)
    return districtsData.filter(d => Number(d.province_id) === Number(selectedProvinceId));
  }, [selectedProvinceId]);

  // เช็คว่าเป็น กทม. หรือไม่ (ID=1) เพื่อเปลี่ยนคำว่า อำเภอ <-> เขต
  const isBangkok = Number(selectedProvinceId) === 1;

  const handleProvinceChange = (e) => {
    setSelectedProvinceId(e.target.value);
    setSelectedDistrictId(''); // Reset อำเภอทิ้ง เมื่อเปลี่ยนจังหวัด
  };

  // --- 2. ข้อมูลจำลอง Properties (Mock Data สำหรับโชว์การ์ด) ---
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

  // --- 3. Logic: Search & State ---
  const [searchTab, setSearchTab] = useState('sell');
  const [searchInputs, setSearchInputs] = useState({ 
    keyword: '', 
    type: '', 
    price: '' 
  });
  
  const handleSearch = () => {
    // ดึงชื่อจังหวัด/อำเภอมาแสดง (Optional)
    const provinceName = provincesData.find(p => Number(p.id) === Number(selectedProvinceId))?.name_th || '';
    const districtName = districtsData.find(d => Number(d.id) === Number(selectedDistrictId))?.name_th || '';

    // สร้าง URL parameters หรือ log ดูค่า
    console.log({
      tab: searchTab,
      ...searchInputs,
      province: provinceName,
      district: districtName
    });
    
    // router.push(...)
  };

  // --- 4. Logic: Hero Slider ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://www.shutterstock.com/image-photo/woman-architect-drawing-building-plans-600nw-2246694583.jpg",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // --- 5. Logic: Horizontal Scroll ---
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
      <Navbar />

      {/* Hero Banner */}
      <div className="relative h-[400px] md:h-[500px] bg-gray-100 overflow-hidden">


{/* Hero Banner */}
      <div className="relative h-[400px] md:h-[500px] bg-gray-100 overflow-hidden">
        {/* ... (Code ส่วน slide รูปภาพ เหมือนเดิม) ... */}
        {slides.map((src, index) => ( <div key={index} className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${ currentSlide === index ? 'opacity-100' : 'opacity-0' }`} > <img src={src} alt="Banner" className="absolute inset-0 w-full h-full object-cover object-center" /> </div> ))}
        {/* 1. ใส่ CSS Animation ไว้ตรงนี้ หรือในไฟล์ CSS แยกก็ได้ครับ */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-150%); } 
          }
          .animate-marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 8s linear infinite; /* ปรับความเร็วตรง 8s */
          }
        `}</style>

        <div className="absolute inset-0 banner-gradient flex items-center z-10">
          <div className="container mx-auto px-4 md:px-8 flex justify-end">
            <div className="max-w-xl pt-10 text-right flex flex-col items-end"> 
              <div className="text-primary-gold text-6xl md:text-8xl font-script font-bold mb-2 drop-shadow-sm">
                Happiness
              </div>
              
              {/* 2. ส่วน Mission ที่แก้ไขให้วิ่ง */}
              <div className="border-l-4 border-primary-gold pl-4 mt-2 overflow-hidden w-[300px] md:w-[400px]"> {/* กำหนดความกว้างกรอบที่จะให้วิ่ง */}
                <p className="text-xl md:text-2xl text-gray-600 font-medium animate-marquee">
                  งานซื้อขาย อสังหาฯวางใจเรา
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ... (Code ส่วนปุ่มจุดด้านล่าง เหมือนเดิม) ... */}
      </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-primary-gold' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>


      {/* Search Bar Section */}
      <div className="relative z-20 -mt-10">
        
        {/* Tabs */}
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex">
            <button 
                onClick={() => setSearchTab('sell')}
                className={`min-w-[80px] px-6 py-3 text-sm font-bold transition-colors ${searchTab === 'sell' ? 'bg-primary-blue text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
                ขาย
            </button>
            <button 
                onClick={() => setSearchTab('rent')}
                className={`min-w-[80px] px-6 py-3 text-sm font-bold transition-colors ${searchTab === 'rent' ? 'bg-primary-blue text-white' : 'bg-[#d8aa64] text-white hover:bg-primary-gold-hover'}`}
            >
                เช่า
            </button>
          </div>
        </div>

        {/* Main Search Box */}
        <div className="bg-primary-blue py-8 shadow-xl">
          <div className="container mx-auto px-4 md:px-8">
            
            {/* Row 1: Keyword & Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-grow">
                    <label className="text-white text-sm font-bold mb-2 block">คำค้นหา</label>
                    <input 
                        type="text" 
                        placeholder="ชื่อโครงการ, รหัสทรัพย์, หรือทำเลที่ตั้ง" 
                        className="w-full h-12 px-4 text-sm rounded-sm bg-white border-none focus:ring-2 focus:ring-primary-gold outline-none text-gray-700"
                        onChange={(e) => setSearchInputs({...searchInputs, keyword: e.target.value})}
                    />
                </div>
                
                <div className="flex items-end gap-2 shrink-0">
                    <button className="h-12 px-4 bg-[#333] hover:bg-black text-white text-sm rounded-sm transition flex items-center">
                        ตัวกรอง
                    </button>
                    <button 
                        onClick={() => {
                          setSearchInputs({ keyword: '', type: '', price: '' });
                          setSelectedProvinceId('');
                          setSelectedDistrictId('');
                        }}
                        className="h-12 px-4 bg-gray-300 hover:bg-white text-gray-700 text-sm rounded-sm transition flex items-center"
                    >
                        ล้างข้อมูล
                    </button>
                </div>
            </div>

            {/* Row 2: Dropdowns (5 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                
                {/* 1. Type */}
                <div>
                    <label className="text-white text-sm font-bold mb-2 block">ประเภท</label>
                    <div className="relative">
                      <select
                        className="w-full h-12 px-4 text-sm rounded-sm bg-white border-none focus:ring-2 focus:ring-primary-gold outline-none text-gray-700 appearance-none cursor-pointer"
                        onChange={(e) => setSearchInputs({ ...searchInputs, type: e.target.value })}
                        value={searchInputs.type}
                      >
                        <option value="">ทั้งหมด</option>
                        <option value="บ้านเดี่ยว">บ้านเดี่ยว</option>
                        <option value="ทาวน์โฮม">ทาวน์โฮม</option>
                        <option value="คอนโด">คอนโด</option>
                        <option value="อาคารพาณิชย์">อาคารพาณิชย์</option>
                        <option value="ที่ดิน">ที่ดิน</option>
                      </select>
                      <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"></i>
                    </div>
                </div>

                {/* 2. Province (From Import) */}
                <div>
                    <label className="text-white text-sm font-bold mb-2 block">จังหวัด</label>
                    <div className="relative">
                        <select 
                          className="w-full h-12 px-4 text-sm rounded-sm bg-white border-none focus:ring-2 focus:ring-primary-gold outline-none text-gray-700 appearance-none cursor-pointer"
                          value={selectedProvinceId}
                          onChange={handleProvinceChange}
                        >
                            <option value="">ทุกจังหวัด</option>
                            {provincesData.map((p) => (
                              <option key={p.id} value={p.id}>{p.name_th}</option>
                            ))}
                        </select>
                        <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"></i>
                    </div>
                </div>

                {/* 3. District (From Import & Filter) */}
                <div>
                    <label className="text-white text-sm font-bold mb-2 block">
                      {isBangkok ? 'เขต' : 'อำเภอ'}
                    </label>
                    <div className="relative">
                        <select 
                          className={`w-full h-12 px-4 text-sm rounded-sm border-none focus:ring-2 focus:ring-primary-gold outline-none appearance-none cursor-pointer
                            ${!selectedProvinceId ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700'}
                          `}
                          value={selectedDistrictId}
                          onChange={(e) => setSelectedDistrictId(e.target.value)}
                          disabled={!selectedProvinceId}
                        >
                            <option value="">{isBangkok ? 'ทุกเขต' : 'ทุกอำเภอ'}</option>
                            {currentDistricts.map((d) => (
                              <option key={d.id} value={d.id}>{d.name_th}</option>
                            ))}
                        </select>
                        <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"></i>
                    </div>
                </div>

                {/* 4. Price */}
                <div>
                    <label className="text-white text-sm font-bold mb-2 block">ช่วงราคา</label>
                    <div className="relative">
                          <select 
                            className="w-full h-12 px-4 text-sm rounded-sm bg-white border-none focus:ring-2 focus:ring-primary-gold outline-none text-gray-700 appearance-none cursor-pointer"
                            onChange={(e) => setSearchInputs({...searchInputs, price: e.target.value})}
                            value={searchInputs.price}
                        >
                            <option value="">ไม่จำกัดราคา</option>
                            <option value="< 2M">น้อยกว่า 2 ล้านบาท</option>
                            <option value="2M-5M">2 - 5 ล้านบาท</option>
                            <option value="5M-10M">5 - 10 ล้านบาท</option>
                            <option value="> 10M">มากกว่า 10 ล้านบาท</option>
                        </select>
                        <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"></i>
                    </div>
                </div>

                {/* 5. Search Button */}
                <div className="flex items-end">
                    <button 
                        onClick={handleSearch} 
                        className="w-full h-12 bg-[#c79736] hover:from-primary-gold hover:to-primary-gold-hover text-white font-bold rounded-sm transition shadow-lg flex justify-center items-center cursor-pointer"
                    >
                        ค้นหา <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>

            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties Slider */}
      <div className="bg-primary-blue py-14 relative overflow-hidden">
        {/* ... (ส่วนนี้เหมือนเดิมไม่ได้แก้ Logic) ... */}
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
            
            {/* 1. เปลี่ยนจาก group เฉยๆ เป็น group/card */}
            <div className="group/card relative bg-primary-blue border border-white/5 hover:border-primary-gold/50 transition-all duration-500 rounded-sm overflow-hidden h-full flex flex-col">
                
                {/* --- Image Section --- */}
                <div className="relative h-[350px] overflow-hidden">
                    {/* 2. เปลี่ยน group-hover เป็น group-hover/card ทั้งหมด */}
                    <img 
                        src={prop.img} 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover/card:scale-110" 
                        alt={prop.title} 
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-blue via-transparent to-transparent opacity-90 group-hover/card:opacity-60 transition-opacity"></div>
                    
                    {/* Tag */}
                    <div className="absolute top-4 left-4 bg-primary-gold text-white text-[10px] px-3 py-1 uppercase tracking-widest z-10 font-bold shadow-md">
                        {prop.type}
                    </div>

                    {/* Hover Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px]">
                        <span className="bg-primary-gold px-8 py-3 text-xs uppercase tracking-widest font-bold text-white shadow-xl transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500 rounded-sm">
                            View Details
                        </span>
                    </div>
                </div>

                {/* --- Content Section --- */}
                <div className="p-8 text-center relative flex flex-col flex-grow justify-between">
                    
                    {/* Decorative Line */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-primary-gold shadow-lg"></div>
                    
                    <div>
                        <h3 className="text-primary-gold font-serif text-2xl mb-1 line-clamp-1">{prop.title}</h3>
                        <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mb-6 line-clamp-1">
                            {prop.location}
                        </p>

                        <div className="flex justify-center gap-4 text-sm text-gray-300 font-light mb-6 border-b border-white/10 pb-6">
                            {prop.bed && (
                                <span className="flex items-center">
                                    <i className="fa-solid fa-bed text-primary-gold mr-2"></i> {prop.bed} Bed
                                </span>
                            )}
                            {prop.bath && (
                                <span className="flex items-center">
                                    <i className="fa-solid fa-bath text-primary-gold mr-2"></i> {prop.bath} Bath
                                </span>
                            )}
                            {prop.car && (
                                <span className="flex items-center">
                                    <i className="fa-solid fa-car text-primary-gold mr-2"></i> {prop.car} Car
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-between items-end px-2">
                        <div className="text-left">
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Price</p>
                            <p className="text-xl text-white font-serif">{prop.price}</p>
                        </div>
                        <div className="text-right">
                            <span className="text-primary-gold text-xs hover:text-white transition cursor-pointer flex items-center gap-1">
                                View <i className="fa-solid fa-arrow-right text-[10px]"></i>
                            </span>
                        </div>
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
            {/* ใช้ group/card เพื่อแก้ปัญหา hover ซ้อนกัน */}
            <div className="group/card h-full bg-primary-blue border border-white/10 hover:border-primary-gold/50 rounded-sm overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary-blue/20 transition-all duration-300 relative flex flex-col">
                
                {/* --- Image Area --- */}
                <div className="h-56 overflow-hidden relative">
                    {/* Badge ประเภท (Top Right) */}
                    <div className="absolute top-3 right-3 bg-primary-gold text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider z-10 shadow-md">
                        {prop.type}
                    </div>
                    
                    {/* Image */}
                    <img 
                        src={prop.img} 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover/card:scale-110" 
                        alt={prop.title} 
                    />
                    
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>

                    {/* Button on Hover */}
                    <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover/card:opacity-100 transform translate-y-4 group-hover/card:translate-y-0 transition-all duration-300">
                        <span className="text-primary-gold text-xs font-bold uppercase tracking-widest border-b border-primary-gold pb-1">View Property</span>
                    </div>
                </div>

                {/* --- Content Area --- */}
                <div className="p-5 flex flex-col flex-grow relative">
                    {/* รหัสทรัพย์ */}
                    <div className="text-[10px] text-gray-400 mb-2 flex items-center justify-between">
                        <span>ID: {prop.id}</span>
                        <div className="w-8 h-[1px] bg-primary-gold/50"></div>
                    </div>

                    {/* ชื่อโครงการ */}
                    <h3 className="text-sm font-bold text-white leading-relaxed mb-3 line-clamp-2 group-hover/card:text-primary-gold transition-colors duration-300 min-h-[40px]">
                        {prop.title}
                    </h3>

                    {/* Icons */}
                    <div className="flex items-center space-x-4 text-xs text-gray-300 mb-4 border-b border-white/10 pb-4">
                        {prop.bed && <span className="flex items-center"><i className="fas fa-bed text-primary-gold mr-2"></i> {prop.bed}</span>}
                        {prop.bath && <span className="flex items-center"><i className="fas fa-bath text-primary-gold mr-2"></i> {prop.bath}</span>}
                        {prop.area && <span className="flex items-center"><i className="fas fa-ruler-combined text-primary-gold mr-2"></i> {prop.area}</span>}
                    </div>

                    {/* Price (Bottom) */}
                    <div className="mt-auto flex justify-between items-end">
                        <span className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Price</span>
                        <span className="text-xl font-serif text-white group-hover/card:text-primary-gold transition-colors">{prop.price}</span>
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
             <li className="flex items-center"><span className="w-8 h-8 rounded-full bg-primary-gold/20 flex items-center justify-center mr-3 text-primary-gold"><i className="fas fa-tag"></i></span> รับฝากขาย-เช่า อสังหาทุกประเภท</li>
             <li className="flex items-center"><span className="w-8 h-8 rounded-full bg-primary-gold/20 flex items-center justify-center mr-3 text-primary-gold"><i className="fas fa-comments"></i></span> ให้บริการและคำปรึกษาด้านสินเชื่อ</li>
             <li className="flex items-center"><span className="w-8 h-8 rounded-full bg-primary-gold/20 flex items-center justify-center mr-3 text-primary-gold"><i className="fas fa-search-dollar"></i></span> รับขายฝาก และ ซื้อ อสังหาทุกประเภท</li>
              <li className="flex items-center"><span className="w-8 h-8 rounded-full bg-primary-gold/20 flex items-center justify-center mr-3 text-primary-gold"><i className="fas fa-globe-americas"></i></span> การตลาดครอบคลุมทุกช่องทาง</li>

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

    {/* Footer */}
      <Footer />
      
    </main>
  );
}