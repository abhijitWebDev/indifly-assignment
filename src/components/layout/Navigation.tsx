// components/layout/Navigation.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-2 sm:py-4">
        {/* Navbar Container with transparent background and border */}
        <div className="bg-[rgba(255,255,255,0.2)] border border-solid border-white box-border flex gap-3 sm:gap-[24px] items-center px-3 sm:px-[24px] py-2 sm:py-[16px] rounded-[16px] w-full">

          {/* Logo + Menu Container */}
          <div className="flex grow items-center justify-between min-h-px min-w-px">
            {/* Logo - Left */}
            <div className="bg-[rgba(255,255,255,0.6)] box-border flex flex-col gap-2.5 items-start px-3 sm:px-[16px] py-1.5 sm:py-[8px] rounded-[20.23px] shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-base sm:text-xl font-bold leading-none">
                  <span className="text-[#024397]">indi</span>
                  <span className="text-[#E04A00]">fly</span>
                </span>
              </Link>
            </div>

            {/* Navigation Links - Desktop/Tablet */}
            <div className="hidden lg:flex items-center gap-0">
              <Link
                href="/portfolio"
                className="font-montserrat font-medium leading-6 text-[#353636] text-[14px] xl:text-[16px] tracking-[-0.176px] px-3 xl:px-6 py-1 hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                Our Portfolio
              </Link>
              <Link
                href="/incore"
                className="font-montserrat font-medium leading-6 text-[#353636] text-[14px] xl:text-[16px] tracking-[-0.176px] px-3 xl:px-6 py-1 hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                InCORE
              </Link>
              <Link
                href="/insights"
                className="font-montserrat font-medium leading-6 text-[#353636] text-[14px] xl:text-[16px] tracking-[-0.176px] px-3 xl:px-6 py-1 hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                INDsights
              </Link>
              <Link
                href="/about"
                className="font-montserrat font-medium leading-6 text-[#353636] text-[14px] xl:text-[16px] tracking-[-0.176px] px-3 xl:px-6 py-1 hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                About us
              </Link>
              <Link
                href="/contact"
                className="font-montserrat font-medium leading-6 text-[#353636] text-[14px] xl:text-[16px] tracking-[-0.176px] px-3 xl:px-6 py-1 hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/50 rounded transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>

          {/* Search Icon - Desktop/Tablet */}
          <button className="hidden md:flex bg-[rgba(255,255,255,0.4)] h-[40px] w-[44px] lg:h-[48px] lg:w-[52px] items-center justify-center rounded-[24px] shrink-0 hover:bg-[rgba(255,255,255,0.6)] transition-colors">
            <svg
              className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] text-[#E04A00]"
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

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white border border-gray-200 rounded-[16px] shadow-lg overflow-hidden">
            <div className="flex flex-col">
              <Link
                href="/portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-montserrat font-medium text-[#353636] text-[14px] px-6 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                Our Portfolio
              </Link>
              <Link
                href="/incore"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-montserrat font-medium text-[#353636] text-[14px] px-6 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                InCORE
              </Link>
              <Link
                href="/insights"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-montserrat font-medium text-[#353636] text-[14px] px-6 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                INDsights
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-montserrat font-medium text-[#353636] text-[14px] px-6 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                About us
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-montserrat font-medium text-[#353636] text-[14px] px-6 py-3 hover:bg-gray-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;