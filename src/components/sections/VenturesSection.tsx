'use client';

import React from 'react';
import Image from 'next/image';

export default function VenturesSection() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] bg-white overflow-hidden py-8 sm:py-12 md:py-16">
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Heading */}
        <div className="text-center mb-6 md:mb-8" data-node-id="3:2248">
          <h2 className="font-montserrat font-extrabold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-[#353636] leading-tight tracking-[-0.396px]">
            Integrated expertise, delivered at{' '}
            <span className="text-[#d15a31]">every stage.</span>
          </h2>
        </div>

        {/* Description */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16 max-w-[850px] mx-auto" data-node-id="3:2060">
          <p className="font-montserrat text-[#353636] leading-[27px] tracking-[-0.22px]">
            <span className="font-semibold text-[18px] md:text-[20px]">
              We don&apos;t just advise, we embed.
            </span>
            <br />
            <span className="font-medium text-[14px] md:text-[16px]">
              With <span className="font-bold">inSTACK</span>, <span className="font-bold">inSURGE</span>, <span className="font-bold">inSURE</span>, and <span className="font-bold">inVOLVE</span> founders gain the muscle of execution alongside strategic leadership guidance.
            </span>
          </p>
        </div>

        {/* Puzzle Grid Container */}
        <div className="relative w-full aspect-16/10 max-w-[1000px] mx-auto">

          {/* Top Left - Purple - inSTACK */}
          <div className="absolute left-0 top-0 w-[49%] h-[49%] bg-linear-to-br from-[#8b5cf6] to-[#7c3aed] rounded-tl-4xl rounded-br-[80px] p-6 md:p-8 lg:p-10">
            <h2 className="font-montserrat font-bold text-[24px] md:text-[32px] lg:text-[40px] text-white mb-2">
              inSTACK
            </h2>
            <h3 className="font-montserrat font-semibold italic text-[14px] md:text-[16px] text-white mb-3">
              Product & Technology
            </h3>
            <p className="font-montserrat text-[11px] md:text-[13px] lg:text-[14px] text-white/90 leading-relaxed max-w-[280px]">
              Build, scale, and secure your tech with agile product engineering, cloud, and compliance support tailored for startups.
            </p>
          </div>

          {/* Top Right - Orange - inSURGE */}
          <div className="absolute right-0 top-0 w-[49%] h-[49%] bg-linear-to-bl from-[#f59e0b] to-[#d97706] rounded-tr-4xl rounded-bl-[80px] p-6 md:p-8 lg:p-10 text-right">
            <h2 className="font-montserrat font-bold text-[24px] md:text-[32px] lg:text-[40px] text-white mb-2">
              inSURGE
            </h2>
            <h3 className="font-montserrat font-semibold italic text-[14px] md:text-[16px] text-white mb-3">
              Marketing & Growth
            </h3>
            <p className="font-montserrat text-[11px] md:text-[13px] lg:text-[14px] text-white/90 leading-relaxed max-w-[280px] ml-auto">
              From brand positioning to performance campaigns, fuel your visibility and demand to drive sustainable growth.
            </p>
          </div>

          {/* Bottom Left - Green - inSURE */}
          <div className="absolute left-0 bottom-0 w-[49%] h-[49%] bg-linear-to-tr from-[#10b981] to-[#059669] rounded-bl-4xl rounded-tr-[80px] p-6 md:p-8 lg:p-10">
            <h2 className="font-montserrat font-bold text-[24px] md:text-[32px] lg:text-[40px] text-white mb-2">
              inSURE
            </h2>
            <h3 className="font-montserrat font-semibold italic text-[14px] md:text-[16px] text-white mb-3">
              People & Culture
            </h3>
            <p className="font-montserrat text-[11px] md:text-[13px] lg:text-[14px] text-white/90 leading-relaxed max-w-[280px]">
              HR that goes beyond hiring—helping you attract, nurture, and retain talent while shaping resilient company culture.
            </p>
          </div>

          {/* Bottom Right - Blue - inVOLVE */}
          <div className="absolute right-0 bottom-0 w-[49%] h-[49%] bg-linear-to-tl from-[#3b82f6] to-[#2563eb] rounded-br-4xl rounded-tl-[80px] p-6 md:p-8 lg:p-10 text-right">
            <h2 className="font-montserrat font-bold text-[24px] md:text-[32px] lg:text-[40px] text-white mb-2">
              inVOLVE
            </h2>
            <h3 className="font-montserrat font-semibold italic text-[14px] md:text-[16px] text-white mb-3">
              Legal & Compliance
            </h3>
            <p className="font-montserrat text-[11px] md:text-[13px] lg:text-[14px] text-white/90 leading-relaxed max-w-[280px] ml-auto">
              Simplify the complex. Robust legal frameworks and compliance services to safeguard your venture at every stage.
            </p>
          </div>

          {/* Center Circle - inCORE with Puzzle Connectors */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px]">

            {/* White Puzzle Connector Background */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Top connector */}
                <path d="M 170 20 Q 150 20 150 40 Q 150 70 120 70 Q 90 70 90 40 Q 90 20 70 20 L 70 80 Q 90 80 110 90 Q 140 110 140 140 L 140 190 L 240 190 L 240 140 Q 240 110 270 90 Q 290 80 310 80 L 310 20 Q 290 20 290 40 Q 290 70 260 70 Q 230 70 230 40 Q 230 20 210 20 Z" fill="white"/>

                {/* Right connector */}
                <path d="M 300 170 Q 300 150 320 150 Q 350 150 350 120 Q 350 90 320 90 Q 300 90 300 70 L 360 70 L 360 310 L 300 310 Q 300 290 320 290 Q 350 290 350 260 Q 350 230 320 230 Q 300 230 300 210 Z" fill="white"/>

                {/* Bottom connector */}
                <path d="M 210 360 Q 230 360 230 340 Q 230 310 260 310 Q 290 310 290 340 Q 290 360 310 360 L 310 300 Q 290 300 270 290 Q 240 270 240 240 L 240 190 L 140 190 L 140 240 Q 140 270 110 290 Q 90 300 70 300 L 70 360 Q 90 360 90 340 Q 90 310 120 310 Q 150 310 150 340 Q 150 360 170 360 Z" fill="white"/>

                {/* Left connector */}
                <path d="M 80 210 Q 80 230 60 230 Q 30 230 30 260 Q 30 290 60 290 Q 80 290 80 310 L 20 310 L 20 70 L 80 70 Q 80 90 60 90 Q 30 90 30 120 Q 30 150 60 150 Q 80 150 80 170 Z" fill="white"/>

                {/* Center circle */}
                <circle cx="190" cy="190" r="140" fill="#e0f2fe"/>
              </svg>
            </div>

            {/* inCORE Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="font-montserrat font-bold text-[32px] md:text-[42px] lg:text-[52px]">
                  <span className="text-[#f97316]">in</span>
                  <span className="text-[#1e3a8a]">CORE</span>
                </h2>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
