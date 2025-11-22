// components/layout/Navigation.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navigation() {
  return (
    <nav className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-4">
        {/* Navbar Container with transparent background and border */}
        <div className="bg-[rgba(255,255,255,0.2)] border border-solid border-white box-border flex gap-[24px] items-center px-[24px] py-[16px] rounded-[16px] w-full">

          {/* Logo + Menu Container */}
          <div className="flex grow items-center justify-between min-h-px min-w-px">
            {/* Logo - Left */}
            <div className="bg-[rgba(255,255,255,0.6)] box-border flex flex-col gap-2.5 items-start px-[16px] py-[8px] rounded-[20.23px] shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold leading-none">
                  <span className="text-[#024397]">indi</span>
                  <span className="text-[#E04A00]">fly</span>
                </span>
              </Link>
            </div>

            {/* Navigation Links - Center/Right */}
            <div className="hidden md:flex items-center gap-0">
              <Link
                href="/portfolio"
                className="font-montserrat font-medium leading-6 text-[#353636] text-[16px] tracking-[-0.176px] px-6 py-1 hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                Our Portfolio
              </Link>
              <Link
                href="/incore"
                className="font-montserrat font-medium leading-6 text-[#353636] text-[16px] tracking-[-0.176px] px-6 py-1 hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                InCORE
              </Link>
              <Link
                href="/insights"
                className="font-montserrat font-medium leading-6 text-[#353636] text-[16px] tracking-[-0.176px] px-6 py-1 hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                INDsights
              </Link>
              <Link
                href="/about"
                className="font-montserrat font-medium leading-6 text-[#353636] text-[16px] tracking-[-0.176px] px-6 py-1 hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                About us
              </Link>
              <Link
                href="/contact"
                className="font-montserrat font-medium leading-6 text-[#353636] text-[16px] tracking-[-0.176px] px-6 py-1 hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 hover:bg-white/50 rounded transition-colors">
              <svg
                className="w-6 h-6 text-[#353636]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Search Icon - Right */}
          <button className="hidden md:flex bg-[rgba(255,255,255,0.4)] h-[48px] w-[52px] items-center justify-center rounded-[24px] shrink-0 hover:bg-[rgba(255,255,255,0.6)] transition-colors">
            <svg
              className="w-[24px] h-[24px] text-[#E04A00]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;