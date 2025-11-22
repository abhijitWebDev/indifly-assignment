'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type Sector = 'payments' | 'financial' | 'logistics';
type Brand = 'indipe' | 'indiconnect' | 'indinxt';

interface SectorData {
  id: Sector;
  label: string;
  brands: {
    id: Brand;
    label: string;
    category: string;
    categoryGradient: string;
    title: string;
    description: string;
    features: string[];
    personImage: string;
    icons: { src: string; position: 'tl' | 'tr' | 'bl' | 'br' }[];
  }[];
}

const sectorsData: SectorData[] = [
  {
    id: 'payments',
    label: 'Payments',
    brands: [
      {
        id: 'indipe',
        label: 'Indipe',
        category: 'Wealth tech',
        categoryGradient: 'from-[#164786] to-[#0252d4]',
        title: 'Seamless wealth creation and digital payments for all',
        description: 'Empowering individuals with secure, user-friendly financial tools. From UPI transactions to personalized wealth management, we make financial growth accessible to everyone',
        features: [
          'User-friendly mutual fund investments',
          'Secure UPI transactions',
          'Advanced portfolio tracking tools',
          'Personalized financial guidance',
          'Partner program for mutual fund distribution',
        ],
        personImage: '/cheerful-indian-businessman.png',
        icons: [
          { src: '/Frame 1000001149.svg', position: 'tl' },
          { src: '/Frame 1000001150.svg', position: 'bl' },
          { src: '/Frame 1000001151.svg', position: 'tr' },
          { src: '/Frame 1000001153.svg', position: 'br' },
        ],
      },
      {
        id: 'indiconnect',
        label: 'Indiconnect',
        category: 'Wealth tech',
        categoryGradient: 'from-[#164786] to-[#0252d4]',
        title: 'Connect and grow your wealth',
        description: 'Building connections in the financial ecosystem',
        features: [
          'Network-based financial solutions',
          'Community wealth building',
          'Collaborative investment tools',
        ],
        personImage: '/cheerful-indian-businessman.png',
        icons: [
           { src: '/Frame 1000001149.svg', position: 'tl' },
          { src: '/Frame 1000001150.svg', position: 'bl' },
          { src: '/Frame 1000001151.svg', position: 'tr' },
          { src: '/Frame 1000001153.svg', position: 'br' },
        ],
      },
      {
        id: 'indinxt',
        label: 'IndiNXT',
        category: 'Next-gen Finance',
        categoryGradient: 'from-[#164786] to-[#0252d4]',
        title: 'The future of digital finance',
        description: 'Innovation-driven financial solutions for tomorrow',
        features: [
          'AI-powered financial insights',
          'Next-generation payment systems',
          'Future-ready wealth management',
        ],
        personImage: '/cheerful-indian-businessman.png',
        icons: [
          { src: '/1000001148.svg', position: 'tl' },
          { src: '/1000001150.svg', position: 'bl' },
          { src: '/1000001151.svg', position: 'tr' },
          { src: '/1000001153.svg', position: 'br' },
        ],
      },
    ],
  },
  {
    id: 'financial',
    label: 'Financial Services',
    brands: [],
  },
  {
    id: 'logistics',
    label: 'ONDC Logistics',
    brands: [],
  },
];

function SectorsSection() {
  const [activeSector, setActiveSector] = useState<Sector>('payments');
  const [activeBrand, setActiveBrand] = useState<Brand>('indipe');

  const currentSector = sectorsData.find((s) => s.id === activeSector);
  const currentBrand = currentSector?.brands.find((b) => b.id === activeBrand);

  return (
    <section className="relative w-full min-h-[900px] bg-white py-16 overflow-hidden">
      {/* Decorative circle - top left */}
      <div className="absolute -left-[389px] -top-[356px] w-[630px] h-[630px] rotate-[71.579deg]">
        <div className="w-full h-full rounded-[83px] bg-gradient-to-br from-orange-100 to-transparent opacity-30" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Our Sectors Title with brush stroke */}
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 -inset-x-12">
              <Image
                src="/brush-stroke-orange.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <h2 className="relative font-montserrat font-bold text-[32px] text-white px-12 py-2">
              Our Sectors
            </h2>
          </div>

          {/* Subtitle */}
          <p className="font-montserrat font-bold text-[20px] mb-4">
            <span className="text-[#e04a00]">Integrated,</span>{' '}
            <span className="text-[#0252d4]">Inclusive</span>{' '}
            <span className="text-[#ff915c]">& Innovative</span>
          </p>

          {/* Description */}
          <p className="font-montserrat text-[16px] text-[#353636] max-w-[858px] mx-auto">
            Equipping diverse brands in multiple sectors with essential resources, expertise, and unwavering support
          </p>
        </div>

        {/* Main Sector Tabs */}
        <div className="flex items-center justify-center gap-6 mb-8">
          {sectorsData.map((sector) => (
            <button
              key={sector.id}
              onClick={() => {
                setActiveSector(sector.id);
                if (sector.brands.length > 0) {
                  setActiveBrand(sector.brands[0].id);
                }
              }}
              className={`
                px-8 py-3 rounded-[16px] font-montserrat font-bold text-[16px] h-[48px]
                transition-all duration-200
                ${
                  activeSector === sector.id
                    ? 'bg-gradient-to-r from-[#006fff] to-[#0b44ff] text-white'
                    : 'bg-[#e6eaef] text-[#446fa7] hover:bg-[#d6dae f]'
                }
              `}
            >
              {sector.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        {currentBrand && (
          <div className="relative flex items-start gap-8 mt-12">
            {/* Left Card */}
            <div className="w-[690px] bg-gradient-to-br from-[#fff5f0] to-[#ffe8dc] rounded-[16px] p-6 relative">
              {/* Brand Tabs */}
              <div className="flex gap-2 mb-6">
                {currentSector?.brands.map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => setActiveBrand(brand.id)}
                    className={`
                      px-4 py-1 rounded-[8px] font-montserrat font-medium text-[14px]
                      transition-all duration-200
                      ${
                        activeBrand === brand.id
                          ? 'bg-[#01295c] text-white'
                          : 'border border-[#01295c] text-[#01295c] hover:bg-[#01295c]/10'
                      }
                    `}
                  >
                    {brand.label}
                  </button>
                ))}
              </div>

              {/* Category Badge */}
              <p
                className={`font-montserrat font-bold text-[16px] mb-4 bg-gradient-to-r ${currentBrand.categoryGradient} bg-clip-text text-transparent`}
              >
                {currentBrand.category}
              </p>

              {/* Title */}
              <h3 className="font-montserrat text-[20px] text-[#353636] mb-4 leading-tight">
                {currentBrand.title}
              </h3>

              {/* Description */}
              <p className="font-montserrat text-[14px] text-[#353636] mb-6 leading-tight">
                {currentBrand.description}
              </p>

              {/* Features List */}
              <ul className="font-montserrat font-semibold text-[14px] text-[#4e5155] mb-8 space-y-1">
                {currentBrand.features.map((feature, idx) => (
                  <li key={idx} className="ml-5 list-disc">
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="bg-[#ff681e] border border-[#e04a00] text-white px-6 py-3 rounded-[50px] font-montserrat font-semibold text-[12px] h-[54px] w-[162px] hover:bg-[#e04a00] transition-colors">
                  Install the App
                </button>
                <button className="border border-[#353636] text-[#353636] px-6 py-3 rounded-[50px] font-montserrat font-semibold text-[12px] h-[54px] w-[162px] hover:bg-[#353636]/10 transition-colors flex items-center justify-center gap-2">
                  <span>Explore More</span>
                  <Image src="/arrow-icon.svg" alt="" width={16} height={16} />
                </button>
              </div>
            </div>

            {/* Right Visual Section */}
            <div className="relative w-[426px] h-[395px] flex-shrink-0">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#fff5f0] via-[#ffe8dc] to-[#ffd4ba] rounded-[24px] -z-10" />

              {/* Circular border background */}
              <div className="absolute left-0 top-[36px] w-[359px] h-[359px] rounded-full border-[50px] border-[#ffe1d0] z-0" />

              {/* Top-Left Icon (largest, behind person) */}
              <div className="absolute left-[61px] top-[58px] w-[130px] h-[130px] z-[1]">
                <Image
                  src={currentBrand.icons.find(i => i.position === 'tl')?.src || '/Frame 1000001149.svg'}
                  alt=""
                  width={130}
                  height={130}
                  className="object-contain"
                />
              </div>

              {/* Bottom-Left Icon (small, behind person) */}
              <div className="absolute left-[17px] top-[201px] w-[89px] h-[89px] z-[1]">
                <Image
                  src={currentBrand.icons.find(i => i.position === 'bl')?.src || '/Frame 1000001150.svg'}
                  alt=""
                  width={89}
                  height={89}
                  className="object-contain"
                />
              </div>

              {/* Person Image - in middle layer */}
              <div className="absolute left-[41px] bottom-px w-[350px] h-[329px] overflow-hidden pointer-events-none z-[5]">
                <div className="absolute inset-0">
                  <Image
                    src={currentBrand.personImage}
                    alt="Business professional"
                    width={495}
                    height={330}
                    className="absolute max-w-none"
                    style={{
                      height: '100.15%',
                      width: '141.3%',
                      left: '-21.74%',
                      top: '-0.08%'
                    }}
                  />
                </div>
              </div>

              {/* Top-Right Icon (medium, in front of person) */}
              <div className="absolute left-[243px] top-[40px] w-[106px] h-[106px] z-[10]">
                <Image
                  src={currentBrand.icons.find(i => i.position === 'tr')?.src || '/Frame 1000001151.svg'}
                  alt=""
                  width={106}
                  height={106}
                  className="object-contain"
                />
              </div>

              {/* Bottom-Right Icon (medium, in front of person) */}
              <div className="absolute left-[306px] top-[177px] w-[106px] h-[106px] z-[10]">
                <Image
                  src={currentBrand.icons.find(i => i.position === 'br')?.src || '/Frame 1000001153.svg'}
                  alt=""
                  width={106}
                  height={106}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SectorsSection;
