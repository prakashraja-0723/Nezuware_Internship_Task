import React from 'react';
import assets from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { barlowCondensed, barlowSemiCondensed } from '@/fonts/font.css';
import HighlightText1 from '@/components/ui/HighlightText1';
import BtnNeutral from '@/components/ui/BtnNeutral';

const Hero = () => {
  return (
    <>
      <section
        className={`hero bg-gradient-to-r from-pink-200 to-pink-300 h-screen sm:h-[800px] md:h-screen 2xl:max-h-[1080px] snap-start sm:snap-align-none md:snap-start overflow-clip  `}
      >
        <div className={'hero-content flex-col lg:flex-row-reverse '}>
          <div
            className={`w-5/6 lg:w-[40rem] xl:w-[50rem] 2xl:w-full aspect-square  relative lg:flex lg:items-center lg:justify-center`}
          >
            <span
              className={`block mask mask-hexagon-2 w-[100rem] lg:w-[65rem] xl:w-[90rem] 2xl:w-[120rem] aspect-square absolute bg-secondary-content -z-10 shadow animate-[custom-fade-up_ease-in-out] lg:animate-[custom-fade-left_ease-in-out]  animate-fill-both animate-duration-1000 lg:animate-duration-[1s] `}
            ></span>
            <span
              className={`absolute 2xl:right-0 mask mask-hexagon-2 h-full -z-10 aspect-square block bg-gradient-to-t from-pink-300 to-pink-400 opacity-0 animate-[custom-fade-down_1s_ease-in-out] animate-fill-both animate-delay-200 lg:animate-delay-[1s]`}
            ></span>
            <Image
              src={assets.hero}
              alt={'hero'}
              className={`w-full object-cover relative -z-10 opacity-0 animate-[custom-fade-up_1s_ease-in-out] animate-fill-both animate-delay-500 animate-duration-700 lg:animate-delay-[1.4s]`}
            />
          </div>
          <div className={`relative `}>
            <h1
              className={`text-4xl lg:text-5xl font-bold uppercase font-barlow-condensed animate-[custom-fade-right_ease-in-out] animate-delay-[1s] animate-duration-700 animate-fill-both opacity-0 `}
            >
              Chic Style, Perfect Price
            </h1>
            <p
              className={
                `py-6 font-semibold animate-[custom-fade-right_ease-in-out] animate-delay-[1.5s] animate-duration-700 animate-fill-both opacity-0`
              }
            >
              <HighlightText1>BootiQ</HighlightText1>offers you the latest in
              fashion at prices you'll love. From everyday essentials to
              statement pieces, shop with us and stay ahead of the trends.
            </p>
            <BtnNeutral
              url={'/'}
              btnStyles={`animate-[custom-fade-up_ease-in-out] animate-delay-[2s] animate-duration-1000 animate-fill-both opacity-0`}
            >
              Get Started
            </BtnNeutral>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
