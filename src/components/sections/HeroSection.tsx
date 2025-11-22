import React from 'react';
import Image from 'next/image'; // Import Image component
import Navigation from '../layout/Navigation';

function HeroSection() {
  return (
    <>
      {/* Top Banner */}
      <div className="w-full h-9 p-2.5 bg-linear-to-r from-sky-800 to-orange-600 flex justify-center items-center gap-2.5 overflow-hidden">
        <div className="text-center">
          <span className="text-white text-sm font-medium font-['Montserrat'] leading-6">
            Get your business up & running with our unparalleled expertise | Use
            Code:{' '}
          </span>
          <span className="text-white text-sm font-extrabold font-['Montserrat'] leading-6">
            WelcomeInd.
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* GIF Background */}
        <Image
          src="https://genral-purpose-abhijit.s3.ap-south-1.amazonaws.com/hero-video.gif" // Remove 'public' and add file extension
          alt="Hero background"
          fill
          className="object-cover"
          priority
          unoptimized // Important for GIFs to keep animation
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07172c] z-10" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(7,23,44,0) 0%, rgba(7,23,44,0) 37.5%, #07172c 100%)' }} />

        {/* Decorative Background Vectors */}
        {/* Bottom Right Vector */}
        <div className="absolute bottom-[2.54%] right-[-3.73%] flex items-center justify-center z-[5]">
          <div className="w-[270px] h-[234px]" style={{ transform: 'rotate(281.438deg)' }}>
            <Image
              src="/bg-vector-1.svg"
              alt=""
              width={270}
              height={234}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Top Left Vector */}
        <div className="absolute top-[23.57%] left-[-7.15%] flex items-center justify-center z-[5]">
          <div className="w-[206px] h-[179px]" style={{ transform: 'rotate(233.177deg)' }}>
            <Image
              src="/bg-vector-2.svg"
              alt=""
              width={206}
              height={179}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Navbar Overlay */}
        <div className="absolute top-0 left-0 right-0 z-30">
          <Navigation />
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-between h-screen text-white px-4">
          {/* Hero Text */}
          <div className="flex flex-col items-center justify-center flex-1 pt-32">
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
              Building <span className="text-[#E04A00]">Ventures,</span> Building <span className="text-[#E04A00]">Nation.</span>
            </h1>
            <h3 className="text-2xl text-center">A venture builder empowering mission-driven founders with resources, functional</h3>
            <h3 className="text-2xl text-center">expertise and strategic partnerships to <span className="text-[#E04A00]">dream, build, and grow.</span></h3>
          </div>

          {/* Cards Section */}
          <div className="relative w-full max-w-[915px] h-[339px] mb-20">
            {/* Our Ventures Card */}
            <div className="absolute h-[339px] w-[356px] rounded-[16px] overflow-hidden top-0 bg-gradient-to-br from-[#f5e6d3] to-[#e8d4ba]" style={{ left: 'calc(50% - 279.5px)', transform: 'translateX(-50%)' }}>
              {/* Heading */}
              <div className="absolute left-[32px] top-[69.5px] -translate-y-1/2 w-[268px]">
                <h2 className="font-montserrat font-bold text-[32px] leading-[43px] text-[#01295c] mb-0">Our</h2>
                <h2 className="font-montserrat font-bold italic text-[40px] leading-[43px] bg-gradient-to-r from-[#006fff] to-[#8ec0ff] bg-clip-text text-transparent">Ventures</h2>
              </div>
              {/* Description */}
              <div className="absolute w-[225px] text-[14px] font-montserrat text-[#353636] leading-[100.325%]" style={{ left: 'calc(50% - 146px)', top: '38.64%', bottom: '44.25%' }}>
                <p className="mb-0">
                  <span>Learn more about our portfolio brands in the </span>
                  <span className="font-bold">BFSI sector</span>{' '}
                </p>
                <p>in India.</p>
              </div>
              {/* Button */}
              <button className="absolute left-[32px] top-[255px] bg-[#024397] border border-[#0252d4] border-solid text-white w-[162px] h-[54px] rounded-[50px] flex items-center justify-center gap-[10px] p-[10px] hover:bg-[#0252d4] transition-colors">
                <span className="font-montserrat font-semibold text-[12px] leading-[17px] whitespace-nowrap">Know More</span>
                <Image src="/arrow-icon.svg" alt="" width={16} height={16} className="w-4 h-4" />
              </button>
            </div>

            {/* inCORE and INDsights Cards Container */}
            <div className="absolute left-[372px] top-0 w-[543px] flex gap-[16px] items-end">
              {/* inCORE Card */}
              <div className="flex-1 h-[165px] bg-[#e04a00] border border-[#e04a00] border-solid rounded-[16px] overflow-hidden relative cursor-pointer hover:bg-[#c93f00] transition-colors">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[156px] h-[35px] flex items-center justify-center">
                  <Image src="/incore-logo.svg" alt="inCORE" width={156} height={35} className="w-full h-full" />
                </div>
              </div>
              {/* INDsights Card */}
              <div className="flex-1 h-[165px] border border-[#c5d9f2] border-solid rounded-[16px] overflow-hidden relative cursor-pointer" style={{ background: 'linear-gradient(135deg, #2b7de9 0%, #1e6fd9 100%)' }}>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[209px]">
                  <p className="font-montserrat font-extrabold italic text-white text-[32px] leading-[17px] text-center">INDsights</p>
                </div>
              </div>
            </div>

            {/* Become our Partner Card */}
            <div className="absolute top-[181px] w-[330px] h-[158px] border border-solid border-white rounded-[16px] overflow-hidden cursor-pointer hover:border-[#006fff]/30 transition-all" style={{ left: 'calc(50% + 77.5px)', transform: 'translateX(-50%)' }}>
              <div className="h-[158px] w-[330px] overflow-hidden relative rounded-[inherit] bg-gradient-to-br from-[#e8f4ff] to-white">
                <div className="absolute left-[77px] top-[78.5px] -translate-y-1/2 w-[243px]">
                  <h3 className="font-montserrat font-bold text-[32px] leading-[43px] text-[#01295c] mb-0">Become our</h3>
                  <h3 className="font-montserrat font-bold italic text-[40px] leading-[43px] bg-gradient-to-r from-[#006fff] to-[#8ec0ff] bg-clip-text text-transparent">Partner</h3>
                </div>
                <div className="absolute left-[249px] top-[85px] w-[31px] h-[31px]">
                  <Image src="/arrow-icon.svg" alt="" width={31} height={31} className="w-full h-full" />
                </div>
              </div>
            </div>

            {/* Get in Touch Card */}
            <div className="absolute top-[181px] w-[199px] h-[158px] bg-white border border-[#ffc6a9] border-solid rounded-[16px] overflow-hidden cursor-pointer hover:border-[#E04A00] transition-all" style={{ left: 'calc(50% + 358px)', transform: 'translateX(-50%)' }}>
              <div className="h-[158px] w-[199px] overflow-hidden relative rounded-[inherit]">
                <div className="absolute top-[78.5px] -translate-y-1/2 w-[129px]" style={{ left: 'calc(50% - 72.5px)' }}>
                  <h3 className="font-montserrat font-bold text-[32px] leading-[43px] text-[#01295c] mb-0">Get in</h3>
                  <h3 className="font-montserrat font-bold text-[40px] leading-[43px] text-[#E04A00]">Touch</h3>
                </div>
                <div className="absolute left-[157px] top-[85px] w-[31px] h-[31px]">
                  <Image src="/arrow-icon.svg" alt="" width={31} height={31} className="w-full h-full" style={{ filter: 'brightness(0) saturate(100%) invert(30%) sepia(98%) saturate(2738%) hue-rotate(353deg) brightness(95%) contrast(101%)' }} />
                </div>
              </div>
            </div>

            {/* Person Image Overlay - Businessman anchored to bottom */}
            <div className="absolute left-[213px] top-[39px] w-[280px] h-[300px] z-10 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden" style={{ filter: 'drop-shadow(-4px -4px 24.7px rgba(0, 0, 0, 0.25))' }}>
                <Image
                  src="/person-business.png"
                  alt="Business professional"
                  width={586}
                  height={389}
                  className="absolute max-w-none"
                  style={{
                    height: '129.83%',
                    width: '209.15%',
                    left: '-68.63%',
                    top: '-4.57%'
                  }}
                />
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  );
}

export default HeroSection;