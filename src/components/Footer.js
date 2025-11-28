import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../img/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white py-16 relative overflow-hidden ">
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex flex-col leading-tight mb-6">
              <div className="flex items-center font-bold text-3xl text-white">
                <h2 className="mr-2">REALITY ASSET PLUS</h2>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 font-light leading-relaxed">
              ผู้เชี่ยวชาญด้านการ ซื้อ-ขาย อสังหาริมทรัพย์ระดับพรีเมียม<br/>
              มุ่งมั่นส่งมอบที่อยู่อาศัยที่สมบูรณ์แบบเพื่อคุณ
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg border-b border-white/10 pb-2 w-max">ติดต่อเรา</h4>
            <p className="text-sm text-gray-300 mb-3 font-medium">บริษัท เดอะ เรียลลิตี้ แอสเซท พลัส เอเจ้นท์ จำกัด</p>
            <p className="text-xs text-gray-400 mb-4 font-light">49/51 ต.บางแก้ว อ.บางพลี จ.สมุทรปราการ 10540</p>
            <p className="text-lg text-primary-gold mb-6 font-bold"><i className="fas fa-phone-alt mr-2"></i> 064-695-9417</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-primary-gold text-white w-10 h-10 rounded-full flex items-center justify-center transition"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="bg-white/10 hover:bg-primary-gold text-white w-10 h-10 rounded-full flex items-center justify-center transition"><i className="fab fa-line"></i></a>
              <a href="#" className="bg-white/10 hover:bg-primary-gold text-white w-10 h-10 rounded-full flex items-center justify-center transition"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div>
             <h4 className="font-bold mb-6 text-lg border-b border-white/10 pb-2 w-max">เมนูลัด</h4>
             <div className="grid grid-cols-2 text-sm text-gray-400 gap-y-3 gap-x-6">
               <Link href="/" className="hover:text-primary-gold transition flex items-center"><i className="fas fa-caret-right mr-2 text-primary-gold text-xs"></i> หน้าหลัก</Link>
               <Link href="/portfolio" className="hover:text-primary-gold transition flex items-center"><i className="fas fa-caret-right mr-2 text-primary-gold text-xs"></i> ผลงานของเรา</Link>
               <Link href="/residential" className="hover:text-primary-gold transition flex items-center"><i className="fas fa-caret-right mr-2 text-primary-gold text-xs"></i> รวมที่อยู่อาศัย</Link>
               <Link href="/agents" className="hover:text-primary-gold transition flex items-center"><i className="fas fa-caret-right mr-2 text-primary-gold text-xs"></i> ตัวแทนของเรา</Link>
               <Link href="/projects" className="hover:text-primary-gold transition flex items-center"><i className="fas fa-caret-right mr-2 text-primary-gold text-xs"></i> รวมโครงการ</Link>
               <Link href="/blog" className="hover:text-primary-gold transition flex items-center"><i className="fas fa-caret-right mr-2 text-primary-gold text-xs"></i> บทความ</Link>
               <Link href="/services" className="hover:text-primary-gold transition flex items-center"><i className="fas fa-caret-right mr-2 text-primary-gold text-xs"></i> บริการของเรา</Link>
               <Link href="/contact" className="hover:text-primary-gold transition flex items-center"><i className="fas fa-caret-right mr-2 text-primary-gold text-xs"></i> ติดต่อเรา</Link>
             </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-6 text-[10px] text-center text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <span>สงวนลิขสิทธิ์ พ.ศ. 2568 บริษัท เดอะ เรียลลิตี้ แอสเซท พลัส เอเจนท์ จำกัด</span>
          <span className="mt-2 md:mt-0">Design by The Reality Team</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;