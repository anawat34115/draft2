// src/app/property/[id]/page.js
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function PropertyDetail() {
  const params = useParams();

  // --- 1. ข้อมูลจำลอง (Mock Data) ---
  // ของจริงจะดึงจาก API ตาม params.id
  const property = {
    id: params.id,
    title: 'ขายทาวน์เฮ้าส์ 2 ชั้น หมู่บ้านสุขสำราญ ประชาอุทิศ 90 พระสมุทรเจดีย์ สมุทรปราการ',
    price: '1,650,000',
    location: 'ประชาอุทิศ 90, สมุทรปราการ',
    type: 'ทาวน์เฮ้าส์',
    bed: 2,
    bath: 2,
    car: 1,
    area: '18 ตร.ว.',
    usageArea: '110 ตร.ม.',
    facing: 'ทิศเหนือ',
    description: `
      **รายละเอียดทรัพย์**
      - ทาวน์เฮ้าส์ 2 ชั้น หมู่บ้านสุขสำราญ โครงการติดถนนใหญ่ประชาอุทิศ 90
      - เนื้อที่ 18 ตร.ว. พื้นที่ใช้สอยประมาณ 110 ตร.ม.
      - 2 ห้องนอน 2 ห้องน้ำ 1 ห้องครัว 1 ที่จอดรถ
      - ต่อเติมหลังคาหน้าบ้านและครัวหลังบ้านเต็มพื้นที่
      - พื้นปูกระเบื้องทั้ง 2 ชั้น สภาพดี พร้อมอยู่
      
      **จุดเด่น/สถานที่ใกล้เคียง**
      - โรงเรียนสารสาสน์วิเทศศึกษา, โรงเรียนสารสาสน์ประชาอุทิศพิทยาคาร
      - บิ๊กซี มาร์เก็ต ประชาอุทิศ, แม็กซ์แวลู ประชาอุทิศ
      - ตลาดรวยมาร์เก็ต, ตลาดวัดทุ่งครุ
      - สำนักงานเขตทุ่งครุ, สถานีตำรวจภูธรสาขลา
      - เดินทางสะดวก เชื่อมต่อถนนประชาอุทิศ, ถนนสุขสวัสดิ์, ถนนพุทธบูชา, ทางด่วนกาญจนาภิเษก (วงแหวนรอบนอกใต้)
    `,
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1600596542815-27b88e54e46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    ],
    agent: {
      name: 'คุณธนดล (Agent)',
      phone: '089-xxx-xxxx',
      line: 'tanadon_agent',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  };

  const [activeTab, setActiveTab] = useState('details'); // details, map, loan
  const [mainImage, setMainImage] = useState(property.images[0]);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-700 font-sans">

      {/* --- Header (Navbar) - Navy & Gold Theme --- */}
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

      {/* --- Breadcrumbs --- */}
      <div className="bg-primary-blue/5 py-3">
        <div className="container mx-auto px-4 md:px-8 text-sm text-gray-500 flex items-center space-x-2">
            <Link href="/" className="hover:text-primary-blue transition">หน้าแรก</Link>
            <i className="fas fa-chevron-right text-xs text-gray-400"></i>
            <Link href="/search" className="hover:text-primary-blue transition">รายการทรัพย์</Link>
            <i className="fas fa-chevron-right text-xs text-gray-400"></i>
            <span className="text-primary-blue font-medium truncate">{property.title}</span>
        </div>
      </div>


      <div className="container mx-auto px-4 md:px-8 py-8">
        {/* --- Main Layout Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* --- Left Column (Content) --- */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <div className="h-[400px] md:h-[500px] relative group">
                    <img src={mainImage} className="w-full h-full object-cover" alt="Main Property" />
                    <div className="absolute top-4 right-4 flex space-x-2">
                         <button className="bg-white/80 hover:bg-white text-gray-600 hover:text-primary-gold p-2 rounded-full shadow-sm transition"><i className="fas fa-share-alt"></i></button>
                         <button className="bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 p-2 rounded-full shadow-sm transition"><i className="far fa-heart"></i></button>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-2 p-2 bg-gray-50">
                    {property.images.map((img, idx) => (
                        <div key={idx} onClick={() => setMainImage(img)} className={`h-20 md:h-24 cursor-pointer rounded overflow-hidden border-2 ${mainImage === img ? 'border-primary-gold' : 'border-transparent'} transition`}>
                            <img src={img} className="w-full h-full object-cover hover:opacity-80 transition" alt={`Thumbnail ${idx}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* 2. Property Title & Key Info */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                        <span className="inline-block bg-primary-blue/10 text-primary-blue text-xs font-bold px-3 py-1 rounded-sm mb-2 border border-primary-blue/20">
                            รหัสทรัพย์: {property.id}
                        </span>
                        <h1 className="text-2xl md:text-3xl font-bold text-primary-blue mb-2 leading-tight">{property.title}</h1>
                        <p className="text-gray-500 flex items-center"><i className="fas fa-map-marker-alt text-primary-gold mr-2"></i> {property.location}</p>
                    </div>
                    {/* Price for Mobile (Hidden on Desktop) */}
                    <div className="lg:hidden mt-4 w-full">
                        <div className="text-3xl font-bold text-primary-gold mb-1">{property.price} บาท</div>
                    </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 md:gap-8 border-t border-gray-100 pt-4 text-sm text-gray-600">
                    <div className="flex items-center"><i className="fas fa-home text-primary-gold mr-2 text-lg"></i> {property.type}</div>
                    <div className="flex items-center"><i className="fas fa-bed text-primary-gold mr-2 text-lg"></i> {property.bed} นอน</div>
                    <div className="flex items-center"><i className="fas fa-bath text-primary-gold mr-2 text-lg"></i> {property.bath} น้ำ</div>
                    <div className="flex items-center"><i className="fas fa-ruler-combined text-primary-gold mr-2 text-lg"></i> {property.area}</div>
                </div>
            </div>

            {/* 3. Tabs Navigation */}
            <div className="flex border-b border-gray-200 bg-white rounded-t-lg overflow-hidden shadow-sm">
                {['details', 'map', 'loan'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-4 text-sm font-bold text-center transition relative
                        ${activeTab === tab ? 'text-primary-blue bg-primary-blue/5' : 'text-gray-500 hover:text-primary-blue hover:bg-gray-50'}
                        `}
                    >
                        {tab === 'details' && <><i className="far fa-file-alt mr-2"></i> รายละเอียด</>}
                        {tab === 'map' && <><i className="fas fa-map-marked-alt mr-2"></i> ทำเลที่ตั้ง</>}
                        {tab === 'loan' && <><i className="fas fa-calculator mr-2"></i> คำนวณสินเชื่อ</>}
                        {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-gold"></div>}
                    </button>
                ))}
            </div>
            
            {/* 4. Tab Content */}
            <div className="bg-white p-6 rounded-b-lg shadow-sm border border-gray-100 border-t-0">
                
                {/* --- Details Tab --- */}
                {activeTab === 'details' && (
                    <div className="space-y-6 animate-fadeIn">
                        <div>
                            <h3 className="text-lg font-bold text-primary-blue mb-4 pb-2 border-b border-gray-100">ข้อมูลอสังหาริมทรัพย์</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div><span className="text-gray-500 block mb-1">ประเภท:</span> <span className="font-medium">{property.type}</span></div>
                                <div><span className="text-gray-500 block mb-1">รหัสทรัพย์:</span> <span className="font-medium">{property.id}</span></div>
                                <div><span className="text-gray-500 block mb-1">ห้องนอน:</span> <span className="font-medium">{property.bed}</span></div>
                                <div><span className="text-gray-500 block mb-1">ห้องน้ำ:</span> <span className="font-medium">{property.bath}</span></div>
                                <div><span className="text-gray-500 block mb-1">เนื้อที่:</span> <span className="font-medium">{property.area}</span></div>
                                <div><span className="text-gray-500 block mb-1">พื้นที่ใช้สอย:</span> <span className="font-medium">{property.usageArea}</span></div>
                                <div><span className="text-gray-500 block mb-1">ทิศหน้าทรัพย์:</span> <span className="font-medium">{property.facing}</span></div>
                                <div><span className="text-gray-500 block mb-1">ที่จอดรถ:</span> <span className="font-medium">{property.car} คัน</span></div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-primary-blue mb-4 pb-2 border-b border-gray-100">รายละเอียดเพิ่มเติม</h3>
                            <div className="text-gray-600 leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{ __html: property.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></div>
                        </div>
                    </div>
                )}

                {/* --- Map Tab --- */}
                {activeTab === 'map' && (
                    <div className="animate-fadeIn">
                        <h3 className="text-lg font-bold text-primary-blue mb-4 pb-2 border-b border-gray-100">ทำเลที่ตั้ง</h3>
                        <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden relative border border-gray-200">
                            {/* Placeholder for Google Map */}
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.969379176674!2d100.5044073148308!3d13.59890999044748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a44656342939%3A0x2963377731237626!2z4Lir4Lih4Li54LmI4Lia4LmJ4Liy4LiZ4Liq4Li44LiC4Liq4LmB4Lij4Liy4LiN!5e0!3m2!1sth!2sth!4v1678888888888!5m2!1sth!2sth" 
                                width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <p className="text-sm text-gray-500 mt-3 flex items-center"><i className="fas fa-map-marker-alt text-primary-gold mr-2"></i> พิกัด: {property.location}</p>
                    </div>
                )}

                {/* --- Loan Tab --- */}
                {activeTab === 'loan' && (
                    <div className="animate-fadeIn">
                        <h3 className="text-lg font-bold text-primary-blue mb-4 pb-2 border-b border-gray-100">คำนวณสินเชื่อเบื้องต้น</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1 font-medium">ราคาโปรโมชั่น</label>
                                    <div className="text-2xl font-bold text-primary-blue">{property.price} บาท</div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">เงินดาวน์ (10%)</label>
                                        <input type="text" value="165,000" className="w-full p-2 border border-gray-300 rounded focus:border-primary-gold outline-none" readOnly />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-1">ยอดจัดกู้ (90%)</label>
                                        <input type="text" value="1,485,000" className="w-full p-2 border border-gray-300 rounded focus:border-primary-gold outline-none" readOnly />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1 flex justify-between"><span>อัตราดอกเบี้ย (%)</span> <span>6.5%</span></label>
                                    <input type="range" min="1" max="10" step="0.1" defaultValue="6.5" className="w-full accent-primary-gold" />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1 flex justify-between"><span>ระยะเวลาผ่อน (ปี)</span> <span>30 ปี</span></label>
                                    <input type="range" min="5" max="40" step="1" defaultValue="30" className="w-full accent-primary-gold" />
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center p-6 bg-primary-blue/5 rounded-xl border border-primary-blue/10">
                                <div className="relative w-48 h-48 rounded-full border-8 border-gray-200 flex items-center justify-center mb-4" 
                                     style={{background: `conic-gradient(var(--color-primary-gold) 0% 70%, var(--color-primary-blue) 70% 100%)`}}>
                                    <div className="absolute inset-2 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                                        <span className="text-sm text-gray-500">ยอดผ่อน/เดือน</span>
                                        <span className="text-3xl font-bold text-primary-blue">9,400</span>
                                        <span className="text-sm text-gray-500">บาท (โดยประมาณ)</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 text-xs">
                                    <div className="flex items-center"><span className="w-3 h-3 bg-primary-gold rounded-full mr-2"></span> เงินต้น</div>
                                    <div className="flex items-center"><span className="w-3 h-3 bg-primary-blue rounded-full mr-2"></span> ดอกเบี้ย</div>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-4 text-center">*ผลการคำนวณเป็นเพียงการประมาณการเบื้องต้น อัตราดอกเบี้ยและยอดผ่อนจริงขึ้นอยู่กับเงื่อนไขของแต่ละธนาคาร</p>
                    </div>
                )}
            </div>
          </div>


          {/* --- Right Column (Sidebar - Sticky) --- */}
          <div className="lg:col-span-4 space-y-6">
            {/* 1. Price & Contact Box */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-gold sticky top-24">
                <div className="text-center mb-6">
                    <div className="text-sm text-gray-500 mb-1">ราคาเสนอขาย</div>
                    <div className="text-4xl font-bold text-primary-gold mb-2">{property.price} <span className="text-xl font-medium text-gray-600">บาท</span></div>
                    <div className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                        <i className="fas fa-check-circle mr-1"></i> พร้อมเข้าอยู่
                    </div>
                </div>

                <div className="space-y-3">
                    <button className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white py-3 rounded-md font-bold transition flex items-center justify-center shadow-sm">
                        <i className="fas fa-phone-alt mr-2"></i> โทรหาตัวแทน
                    </button>
                    <button className="w-full bg-[#00B900] hover:opacity-90 text-white py-3 rounded-md font-bold transition flex items-center justify-center shadow-sm">
                        <i class="fab fa-line mr-2 text-xl"></i> ทักไลน์ (Line)
                    </button>
                    <button className="w-full bg-white hover:bg-gray-50 text-primary-blue border border-primary-blue/30 py-3 rounded-md font-bold transition flex items-center justify-center">
                        <i className="far fa-calendar-alt mr-2"></i> นัดชมทรัพย์
                    </button>
                </div>
            </div>

            {/* 2. Agent Profile Box */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-[420px]">
                <h3 className="text-lg font-bold text-primary-blue mb-4 pb-2 border-b border-gray-100">ข้อมูลตัวแทนขาย</h3>
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-gold/50">
                        <img src={property.agent.image} className="w-full h-full object-cover" alt="Agent" />
                    </div>
                    <div>
                        <div className="font-bold text-lg text-primary-blue">{property.agent.name}</div>
                        <div className="text-xs text-primary-gold font-medium tracking-wider">THE REALITY TEAM</div>
                        <div className="text-sm text-gray-500 mt-1 flex items-center"><i className="fas fa-star text-yellow-400 mr-1"></i> 4.9 (52 รีวิว)</div>
                    </div>
                </div>
                
                <form className="space-y-3">
                    <input type="text" placeholder="ชื่อของคุณ" className="w-full p-3 text-sm border border-gray-200 rounded focus:border-primary-gold outline-none transition" />
                    <input type="text" placeholder="เบอร์โทรศัพท์" className="w-full p-3 text-sm border border-gray-200 rounded focus:border-primary-gold outline-none transition" />
                    <textarea rows="3" placeholder="ข้อความเพิ่มเติม (สนใจทรัพย์รหัส...)" className="w-full p-3 text-sm border border-gray-200 rounded focus:border-primary-gold outline-none transition resize-none"></textarea>
                    <button className="w-full bg-primary-gold hover:bg-primary-gold-hover text-white py-3 rounded-md font-bold transition shadow-sm">
                        ส่งข้อความติดต่อ
                    </button>
                </form>
            </div>
          </div>

        </div>
      </div>
      
      {/* --- Footer --- */}
      <footer className="bg-primary-blue text-white py-12 mt-12">
          <div className="container mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div>
                      <div className="flex items-center text-white font-bold text-2xl mb-2">
                        <i className="fas fa-city mr-2 text-primary-gold"></i> THE REALITY
                      </div>
                      <p className="text-sm text-gray-300">บริษัท เดอะ เรียลลิตี้ แอสเซท พลัส เอเจนท์ จำกัด<br/>ตัวแทนอสังหาริมทรัพย์ที่คุณไว้วางใจ</p>
                  </div>
                  <div>
                      <h4 className="text-primary-gold font-bold mb-4">ติดต่อเรา</h4>
                      <ul className="text-sm text-gray-300 space-y-2">
                          <li><i className="fas fa-map-marker-alt mr-2 w-5 text-primary-gold"></i> 45/99 ซอยรามคำแหง 199 กรุงเทพฯ</li>
                          <li><i className="fas fa-phone-alt mr-2 w-5 text-primary-gold"></i> 02-047-4282</li>
                          <li><i className="fas fa-envelope mr-2 w-5 text-primary-gold"></i> info@thereality.co.th</li>
                      </ul>
                  </div>
                  <div>
                      <h4 className="text-primary-gold font-bold mb-4">ติดตามเรา</h4>
                      <div className="flex space-x-4">
                          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-gold transition"><i className="fab fa-facebook-f"></i></a>
                          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-gold transition"><i className="fab fa-line"></i></a>
                          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-gold transition"><i className="fab fa-youtube"></i></a>
                      </div>
                  </div>
              </div>
              <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-400">
                  © 2025 THE REALITY ASSET PLUS AGENT CO.,LTD. All Rights Reserved.
              </div>
          </div>
      </footer>

      {/* Style for FadeIn Animation */}
      <style jsx global>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>

    </main>
  );
}