import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar สีแดง */}
      <div className="bg-[#da291c] text-white text-xs py-1 px-4 text-right">
        <span className="mr-4">📞 02-999-9999</span>
        <span>👤 เข้าสู่ระบบ</span>
      </div>

      {/* Main Bar */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-2xl text-[#da291c] tracking-tighter">
          THE BEST PROPERTY
        </div>
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <li className="hover:text-[#da291c] cursor-pointer">หน้าหลัก</li>
          <li className="hover:text-[#da291c] cursor-pointer">ซื้อที่อยู่อาศัย</li>
          <li className="hover:text-[#da291c] cursor-pointer">ฝากขาย</li>
          <li className="hover:text-[#da291c] cursor-pointer">ติดต่อเรา</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;