import React from 'react';
import Image from 'next/image';

function MissionSection() {
  return (
    <section className="relative w-full min-h-[626px] bg-[#024397] overflow-hidden py-20">
      {/* Content Container - centered with max-width */}
      <div className="relative max-w-[1440px] mx-auto px-8">
        {/* Decorative Vector 1 - Top Left */}
        <div className="absolute top-[50px] left-[100px] w-[24px] h-[24px] opacity-60">
          <Image src="/circle-vector-1.svg" alt="" width={24} height={24} className="w-full h-full" />
        </div>

        {/* Decorative Vector 2 - Bottom Right */}
        <div className="absolute bottom-[20px] right-[-20px] w-[60px] h-[60px] opacity-40">
          <Image src="/circle-vector-2.svg" alt="" width={60} height={60} className="w-full h-full" />
        </div>

        {/* Decorative Vector 3 - Bottom Left Large Circle */}
        <div className="absolute bottom-[-100px] left-[-100px] w-[250px] h-[250px] opacity-20">
          <Image src="/bg-vector-2.svg" alt="" width={250} height={250} className="w-full h-full" />
        </div>

        {/* Decorative Vector 4 - Small Dot */}
        <div className="absolute top-[150px] left-[400px] w-[12px] h-[12px] opacity-50">
          <Image src="/bg-vector-1.svg" alt="" width={12} height={12} className="w-full h-full" />
        </div>

        {/* Main Content Grid */}
        <div className="flex items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 max-w-[709px] space-y-8">
            {/* Top Text Block */}
            <div>
              <p className="font-montserrat font-normal text-[28px] text-white leading-[1.224] mb-0">
                We create platforms and ecosystems for{' '}
                <span className="font-semibold italic bg-gradient-to-r from-[#e5ba9f] to-[#ffffff] bg-clip-text text-transparent">
                  mission-driven founders
                </span>
                {' '}that cultivate brands bringing about digital inclusion and transformative growth in the emerging regions of
              </p>
            </div>

            {/* Bharat - Middle Text */}
            <div>
              <h2 className="font-montserrat font-bold italic text-[64px] leading-[100.395%] bg-gradient-to-r from-[#ff671f] via-[#ffffff] to-[#046a38] bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #ff671f 0%, #ffffff 36.716%, #046a38 70.712%)'
                  }}>
                Bharat.
              </h2>
            </div>

            {/* Bottom Text Block */}
            <div>
              <p className="font-montserrat font-normal text-[28px] text-white leading-[1.223]">
                We are a venture builder co-creating alongside founders in their journey{' '}
                <span className="font-semibold italic">from idea to industry</span>
                {' '}and{' '}
                <span className="font-semibold italic">beyond.</span>
              </p>
            </div>
          </div>

          {/* India Map */}
          <div className="relative w-[412px] h-[412px] shrink-0">
            <Image
              src="/Vector-india.png"
              alt="India map"
              width={412}
              height={412}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
