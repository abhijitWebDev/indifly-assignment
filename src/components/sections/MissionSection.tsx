import React from 'react';
import Image from 'next/image';

function MissionSection() {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[626px] bg-[#024397] overflow-hidden py-10 sm:py-12 md:py-16 lg:py-20">
      {/* Content Container - centered with max-width */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Decorative Vector 1 - Top Left */}
        <div className="hidden md:block absolute top-[50px] left-[100px] w-[24px] h-[24px] opacity-60">
          <Image src="/circle-vector-1.svg" alt="" width={24} height={24} loading="lazy" className="w-full h-full" />
        </div>

        {/* Decorative Vector 2 - Bottom Right */}
        <div className="hidden md:block absolute bottom-[20px] right-[-20px] w-[60px] h-[60px] opacity-40">
          <Image src="/circle-vector-2.svg" alt="" width={60} height={60} loading="lazy" className="w-full h-full" />
        </div>

        {/* Decorative Vector 3 - Bottom Left Large Circle */}
        <div className="hidden lg:block absolute bottom-[-100px] left-[-100px] w-[250px] h-[250px] opacity-20">
          <Image src="/bg-vector-2.svg" alt="" width={250} height={250} loading="lazy" className="w-full h-full" />
        </div>

        {/* Decorative Vector 4 - Small Dot */}
        <div className="hidden lg:block absolute top-[150px] left-[400px] w-[12px] h-[12px] opacity-50">
          <Image src="/bg-vector-1.svg" alt="" width={12} height={12} loading="lazy" className="w-full h-full" />
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12">
          {/* Text Content */}
          <div className="flex-1 w-full max-w-[709px] space-y-4 sm:space-y-6 md:space-y-8">
            {/* Top Text Block */}
            <div>
              <p className="font-montserrat font-normal text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[28px] text-white leading-[1.224] mb-0">
                We create platforms and ecosystems for{' '}
                <span className="font-semibold italic bg-gradient-to-r from-[#e5ba9f] to-[#ffffff] bg-clip-text text-transparent">
                  mission-driven founders
                </span>
                {' '}that cultivate brands bringing about digital inclusion and transformative growth in the emerging regions of
              </p>
            </div>

            {/* Bharat - Middle Text */}
            <div>
              <h2 className="font-montserrat font-bold italic text-[36px] sm:text-[42px] md:text-[52px] lg:text-[58px] xl:text-[64px] leading-[100.395%] bg-gradient-to-r from-[#ff671f] via-[#ffffff] to-[#046a38] bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #ff671f 0%, #ffffff 36.716%, #046a38 70.712%)'
                  }}>
                Bharat.
              </h2>
            </div>

            {/* Bottom Text Block */}
            <div>
              <p className="font-montserrat font-normal text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[28px] text-white leading-[1.223]">
                We are a venture builder co-creating alongside founders in their journey{' '}
                <span className="font-semibold italic">from idea to industry</span>
                {' '}and{' '}
                <span className="font-semibold italic">beyond.</span>
              </p>
            </div>
          </div>

          {/* India Map */}
          <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[412px] lg:h-[412px] shrink-0">
            <Image
              src="/Vector-india.png"
              alt="India map"
              width={412}
              height={412}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
