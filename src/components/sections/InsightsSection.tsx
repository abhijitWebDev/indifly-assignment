'use client';

import React from 'react';
import Image from 'next/image';

export default function InsightsSection() {
  const blogPosts = [
    {
      id: 1,
      title: 'Lorem Ipsum blog Title',
      excerpt:
        'Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title',
      image: '/blog-image.png',
    },
    {
      id: 2,
      title: 'Lorem Ipsum blog Title',
      excerpt:
        'Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title',
      image: '/blog-image.png',
    },
    {
      id: 3,
      title: 'Lorem Ipsum blog Title',
      excerpt:
        'Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title',
      image: '/blog-image.png',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#ffede4] py-16 sm:py-20 lg:py-24">
      {/* Decorative Background Elements */}
      <div className="absolute left-[-5%] top-[5%] h-64 w-64 opacity-[0.15] sm:h-80 sm:w-80">
        <svg
          viewBox="0 0 326 282"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          style={{ transform: 'rotate(233deg)' }}
        >
          <path
            d="M50 20 L100 50 L80 100 L30 120 Z M150 30 L180 60 L160 90 L130 110 Z"
            fill="#D4A89A"
            opacity="0.5"
          />
          <circle cx="80" cy="70" r="40" fill="#C4928A" opacity="0.4" />
          <path
            d="M200 80 L250 100 L240 150 L190 140 Z"
            fill="#E5C4B8"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="absolute bottom-[-10%] right-[-10%] h-80 w-96 opacity-[0.15] sm:h-96 sm:w-[450px]">
        <svg
          viewBox="0 0 426 369"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          style={{ transform: 'rotate(305deg)' }}
        >
          <path
            d="M60 30 L120 70 L100 130 L40 150 Z M180 40 L220 80 L200 120 L160 140 Z"
            fill="#D4A89A"
            opacity="0.5"
          />
          <circle cx="100" cy="90" r="50" fill="#C4928A" opacity="0.4" />
          <path
            d="M280 100 L340 130 L320 190 L260 180 Z"
            fill="#E5C4B8"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Small accent circles */}
      <div className="absolute right-[18%] top-[25%] h-4 w-4 rounded-full bg-[#FF8C5E] opacity-30" />
      <div className="absolute left-[3%] top-[8%] h-3 w-3 rounded-full bg-[#FF6B3D] opacity-40" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with Brush Stroke */}
        <div className="mb-12 flex justify-center sm:mb-16 lg:mb-20">
          <div className="relative inline-block">
            {/* Orange brush stroke background */}
            <div
              className="absolute inset-0 -inset-x-12 sm:-inset-x-16 -inset-y-3 sm:-inset-y-4"
              style={{
                background:
                  'linear-gradient(90deg, transparent 5%, #FF6B3D 15%, #FF7849 50%, #FF6B3D 85%, transparent 95%)',
                transform: 'rotate(-1deg)',
                borderRadius: '12px',
                clipPath:
                  'polygon(8% 20%, 12% 40%, 5% 60%, 10% 80%, 2% 100%, 20% 95%, 40% 98%, 60% 95%, 80% 98%, 95% 90%, 98% 70%, 92% 50%, 98% 30%, 90% 10%, 70% 5%, 50% 8%, 30% 5%, 15% 15%)',
              }}
            />
            <h2 className="relative px-12 py-3 text-3xl font-bold text-white sm:px-16 sm:text-4xl lg:text-5xl">
              INDsights
            </h2>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              {/* Text Content */}
              <div className="mb-5 h-[135px]">
                <h3 className="mb-3 text-2xl font-bold leading-6 text-black">
                  {post.title}
                </h3>
                <p className="line-clamp-3 text-base font-semibold leading-6 text-neutral-500">
                  {post.excerpt}
                </p>
              </div>

              {/* Image */}
              <div className="relative mb-5 h-[180px] w-full overflow-hidden rounded-lg bg-[#ffc4c4]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Read More Button */}
              <button
                className="mt-auto flex h-[54px] items-center justify-center gap-2.5 rounded-full border border-[#353636] px-4 py-2.5 transition-all duration-300 hover:bg-[#353636] hover:text-white"
                aria-label={`Read more about ${post.title}`}
              >
                <span className="whitespace-nowrap text-base font-semibold leading-[17px]">
                  Read more
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
