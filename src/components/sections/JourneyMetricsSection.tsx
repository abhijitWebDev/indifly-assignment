'use client';

import React from 'react';
import Image from 'next/image';

export default function JourneyMetricsSection() {
  const metrics = [
    { value: '7+', label: 'Companies' },
    { value: '3L+', label: 'Partners' },
    { value: '1.26Cr+', label: 'Customers' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FF6B3D] via-[#FF8456] to-[#FFA87A] py-16 sm:py-20 lg:py-24">
      {/* Background Pattern - Hexagons */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path
                d="M30 15 L50 25 L50 45 L30 55 L10 45 L10 25 Z M90 15 L110 25 L110 45 L90 55 L70 45 L70 25 Z M60 50 L80 60 L80 80 L60 90 L40 80 L40 60 Z"
                fill="none"
                stroke="#D35400"
                strokeWidth="1.5"
                opacity="0.4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Background Illustration - Indian Landmarks */}
      <div className="absolute bottom-0 left-0 right-0 h-52 sm:h-64 lg:h-80 pointer-events-none">
        <Image
          src="/india-landmarks.svg"
          alt=""
          fill
          loading="lazy"
          className="object-contain object-bottom"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with Brush Stroke */}
        <div className="mb-4 flex justify-center sm:mb-6">
          <div className="relative inline-block">
            {/* White brush stroke background */}
            <div
              className="absolute inset-0 -inset-x-6 sm:-inset-x-8 -inset-y-2 sm:-inset-y-3"
              style={{
                background: 'white',
                transform: 'rotate(-1deg)',
                borderRadius: '8px',
                opacity: 0.95,
              }}
            />
            <h2 className="relative px-6 py-2 text-3xl font-bold text-[#FF6B35] sm:px-8 sm:text-4xl lg:text-5xl">
              Our Journey, Measured
            </h2>
          </div>
        </div>

        {/* Subtitle */}
        <p className="mb-12 text-center text-base text-white sm:mb-16 sm:text-lg lg:mb-20 lg:text-xl">
          Metrics that speak of countless stories of growth{' '}
          <span className="font-bold italic">across Bharat!</span>
        </p>

        {/* Metrics Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 lg:gap-10">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <div className="px-6 py-8 text-center sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <div className="mb-2 text-4xl font-bold text-white sm:mb-3 sm:text-5xl lg:text-6xl">
                  {metric.value}
                </div>
                <div className="text-lg font-medium text-white/90 sm:text-xl lg:text-2xl">
                  {metric.label}
                </div>
              </div>

              {/* Hover effect */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
