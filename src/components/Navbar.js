import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '../img/Logo.png';

const Navbar = () => {
  return (
      <nav className="bg-primary-blue shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center text-primary-blue font-bold text-xl">
              <Image src={Logo} alt="The Reality Asset Plus Agent Logo" width={120} height={120} className="mr-2" />
              <span>THE REALITY ASSET PLUS</span>
            </div>
          </Link>
    <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-white">
      <Link href="/" className="hover:text-primary-gold transition">
        หน้าหลัก
      </Link>
      <Link href="/residential" className="flex items-center hover:text-primary-gold transition">
        รวมที่อยู่อาศัย
        <span className="ml-1 text-[10px]">▼</span>
      </Link>
      <Link href="/projects" className="flex items-center hover:text-primary-gold transition">
        รวมโครงการ
        <span className="ml-1 text-[10px]">▼</span>
      </Link>
      <Link href="/services" className="hover:text-primary-gold transition">
        บริการของเรา
      </Link>
      <Link href="/portfolio" className="hover:text-primary-gold transition">
        ผลงานของเรา
      </Link>
      <Link href="/agents" className="flex items-center hover:text-primary-gold transition">
        ตัวแทนของเรา
        <span className="ml-1 text-[10px]">▼</span>
      </Link>
      <Link href="/blog" className="flex items-center hover:text-primary-gold transition">
        บทความ
        <span className="ml-1 text-[10px]">▼</span>
      </Link>
      <Link href="/contact" className="hover:text-primary-gold transition">
        ติดต่อเรา
      </Link>
    </div>
          <div className="md:hidden text-2xl text-primary-blue">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;