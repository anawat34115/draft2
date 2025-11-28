"use client";
import React, { useState } from 'react';
import { 
  Kanit, 
  Prompt, 
  Sarabun, 
  Playfair_Display, 
  Cinzel, 
  Noto_Serif_Thai 
} from 'next/font/google';

// --- 1. Config Fonts (โหลดฟอนต์ต่างๆ มาเตรียมไว้) ---

// Font 1: Kanit (ยอดนิยม ทันสมัย สแตนดาร์ดเว็บไทย)
const kanit = Kanit({ 
  weight: ['300', '400', '500', '600'], 
  subsets: ['thai', 'latin'],
  display: 'swap'
});

// Font 2: Prompt (ทันสมัย หัวมนกว่า Kanit นิดหน่อย ดูแพง)
const prompt = Prompt({ 
  weight: ['300', '400', '500', '600'], 
  subsets: ['thai', 'latin'],
  display: 'swap'
});

// Font 3: Sarabun (ทางการ อ่านง่าย สบายตา เหมือนเอกสารราชการ/หนังสือพิมพ์)
const sarabun = Sarabun({ 
  weight: ['300', '400', '500', '600'], 
  subsets: ['thai', 'latin'],
  display: 'swap'
});

// Font 4: Playfair Display (หรูหรา Luxury สำหรับพาดหัวอังกฤษ - ไม่มีไทย)
const playfair = Playfair_Display({ 
  weight: ['400', '700'], 
  subsets: ['latin'],
  display: 'swap'
});

// Font 5: Noto Serif Thai (ฟอนต์มีหัว แบบไทย ดูคลาสสิก/ทางการ/ผู้ใหญ่)
const notoSerif = Noto_Serif_Thai({
  weight: ['400', '600', '700'],
  subsets: ['thai', 'latin'],
  display: 'swap'
});

// Font 6: Cinzel (แนวโรมัน หรูมาก ใช้กับตัวเลข/ภาษาอังกฤษสั้นๆ)
const cinzel = Cinzel({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
});


export default function FontPlayground() {
  // State สำหรับเก็บฟอนต์ที่เลือก
  const [headingFont, setHeadingFont] = useState(kanit);
  const [bodyFont, setBodyFont] = useState(kanit);
  const [fontName, setFontName] = useState('Kanit + Kanit');

  // ตัวเลือก Preset (จับคู่มาให้แล้ว)
  const presets = [
    { name: 'Modern Standard (Kanit)', h: kanit, b: kanit },
    { name: 'Premium Tech (Prompt)', h: prompt, b: prompt },
    { name: 'Luxury English (Playfair + Kanit)', h: playfair, b: kanit },
    { name: 'Classic Thai (Noto Serif + Sarabun)', h: notoSerif, b: sarabun },
    { name: 'High End (Cinzel + Prompt)', h: cinzel, b: prompt },
  ];

  return (
    <div className={`min-h-screen bg-gray-100 flex flex-col md:flex-row ${bodyFont.className}`}>
      
      {/* --- Control Panel (เมนูเลือกฟอนต์ด้านซ้าย) --- */}
      <div className="w-full md:w-80 bg-white p-6 shadow-xl z-50 flex-shrink-0 border-r overflow-y-auto h-auto md:h-screen sticky top-0">
        <h1 className="text-2xl font-bold text-primary-blue mb-1">Font Playground</h1>
        <p className="text-xs text-gray-500 mb-6">คลิกเพื่อเปลี่ยนฟอนต์แบบ Real-time</p>

        <div className="space-y-3">
          <label className="text-sm font-bold text-gray-700">เลือกชุดฟอนต์ (Presets)</label>
          {presets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => {
                setHeadingFont(preset.h);
                setBodyFont(preset.b);
                setFontName(preset.name);
              }}
              className="w-full text-left px-4 py-3 rounded-md border border-gray-200 hover:border-primary-gold hover:bg-primary-gold/10 transition text-sm flex items-center justify-between group"
            >
              <span>{preset.name}</span>
              {fontName === preset.name && <i className="fas fa-check text-green-500"></i>}
            </button>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded border text-xs text-gray-600">
          <strong>Current Selection:</strong><br/>
          Heading: {headingFont.style.fontFamily.split(',')[0]}<br/>
          Body: {bodyFont.style.fontFamily.split(',')[0]}
        </div>
      </div>

      {/* --- Preview Area (หน้าจอตัวอย่าง) --- */}
      <div className="flex-grow overflow-y-auto">
        
        {/* 1. Mock Hero Section */}
        <div className="relative h-[400px] bg-gray-900 flex items-center justify-center overflow-hidden">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="relative z-10 text-center px-4">
             {/* ใช้ Heading Font */}
            <h1 className={`text-5xl md:text-7xl font-bold text-primary-gold mb-4 ${headingFont.className}`}>
              Happiness
            </h1>
            <p className={`text-xl md:text-3xl text-white font-medium ${bodyFont.className}`}>
              งานซื้อขาย อสังหาฯ วางใจเรา
            </p>
            <button className={`mt-8 bg-primary-gold text-white px-8 py-3 rounded-sm uppercase tracking-widest text-sm hover:bg-white hover:text-primary-blue transition ${bodyFont.className}`}>
              Explore Properties
            </button>
          </div>
        </div>

        {/* 2. Mock Property Card */}
        <div className="p-10 max-w-5xl mx-auto">
          <h2 className={`text-3xl font-bold text-primary-blue text-center mb-10 ${headingFont.className}`}>
            อสังหาริมทรัพย์ <span className="text-primary-gold">แนะนำ</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card Example */}
            <div className="bg-white shadow-xl rounded-sm overflow-hidden border border-gray-100 group">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <span className={`absolute top-4 right-4 bg-primary-gold text-white text-xs px-3 py-1 font-bold uppercase ${bodyFont.className}`}>ขาย</span>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold text-gray-800 mb-2 leading-tight ${headingFont.className}`}>
                  ขายบ้านเดี่ยว 2 ชั้น หมู่บ้านนันทวัน พระราม 9
                </h3>
                <p className={`text-gray-500 text-sm mb-4 ${bodyFont.className}`}>
                  ลาดพร้าว, กรุงเทพฯ
                </p>
                <div className={`flex gap-4 text-gray-400 text-sm mb-6 border-b pb-4 ${bodyFont.className}`}>
                  <span><i className="fas fa-bed"></i> 3 Bed</span>
                  <span><i className="fas fa-bath"></i> 3 Bath</span>
                </div>
                <div className="flex justify-between items-end">
                    <span className="text-xs text-gray-400 uppercase">Price</span>
                    <span className={`text-2xl font-bold text-primary-blue ${headingFont.className}`}>11,900,000</span>
                </div>
              </div>
            </div>

            {/* Typography Test Box */}
            <div className="bg-white p-8 shadow-md border-l-4 border-primary-gold">
              <h3 className={`text-2xl font-bold mb-4 ${headingFont.className}`}>ทดสอบการอ่าน (Typography)</h3>
              <p className={`text-gray-600 leading-relaxed mb-4 ${bodyFont.className}`}>
                นี่คือตัวอย่างข้อความเนื้อหา (Body Text) เพื่อดูความง่ายในการอ่าน 
                หากฟอนต์มีความหนาหรือบางเกินไปอาจทำให้อ่านยาก 
                ฟอนต์ที่ดีควรมีความสบายตา สื่อถึงความน่าเชื่อถือ และเข้ากับภาพลักษณ์ของแบรนด์ 
                <br/><br/>
                "The quick brown fox jumps over the lazy dog"
                <br/>
                1234567890 ฿
              </p>
              <button className={`text-primary-blue border-b border-primary-blue pb-1 ${bodyFont.className}`}>อ่านรายละเอียดเพิ่มเติม</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}