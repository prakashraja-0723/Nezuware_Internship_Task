import React from 'react';
import Image from 'next/image';
import assets from '@/assets/assets';
import HighlightText2 from '@/components/ui/HighlightText2';
import BtnNeutral from '@/components/ui/BtnNeutral';

const NewArrivals = () => {
  return (
    <>
      <section
        className={`hero w-full h-screen sm:h-[800px] md:h-screen 2xl:max-h-[1080px] relative flex items-center justify-center flex-col snap-start sm:snap-align-none md:snap-start overflow-clip`}
      >
        <h1
          className={`my-6 text-4xl font-barlow-condensed font font-bold uppercase relative z-50`}
        >
          New Arrivals Offer
        </h1>
        <p
          className={`font-medium font-barlow-condensed uppercase mb-4 px-2 text-lg bg-gradient-to-r from-pink-400 to-rose-400 2xl:bg-gradient-to-r text-white md:hidden`}
        >
          save up to 20% off on all new arrivals
        </p>
        <span
          className={`absolute mask mask-hexagon-2 lg:h-[180%] lg:w-auto w-ful lg:left-1/3 top-5 aspect-square block bg-gradient-to-tr from-pink-100 to-pink-500  `}
        ></span>
        {/*<span*/}
        {/*  className={`block mask mask-hexagon-2 aspect-square w-full bg-gradient-to-br from-pink-300 to-pink-400 absolute left-1/4 animate-fade-left animate-iteration-1 animate-normal animate-duration-1000`}></span>*/}
        <div
          className={`hero-content w-full flex-col lg:flex-row-reverse justify-between h-full relative overflow-hidden`}
        >
          <div
            className={`w-full h-full xl:w-5/6 relative grid place-items-center`}
          >
            <span
              className={`absolute mask mask-hexagon-2 w-full sm:h-full -z-10  aspect-square block bg-gradient-to-b from-rose-300 to-rose-500 lg:glass lg:bg-rose-300 lg:bg-opacity-30 animation-fade-in-up`}
            ></span>
            <Image
              src={assets.new_arrivals}
              alt={'new arrivals offers from bootiq'}
              className={`w-9/12 md:h-5/6 lg:h-auto object-cover absolute `}
            />
          </div>
          <div
            className={`lg:w-9/12 w-full h-auto flex items-start justify-center flex-col relative md:py-8 lg:pl-8`}
          >
            <p
              className={`font-medium font-barlow-condensed uppercase mb-4 px-2 text-lg bg-gradient-to-r from-pink-400 to-rose-400 2xl:bg-gradient-to-r text-white hidden lg:block`}
            >
              save up to 20% off on all new arrivals
            </p>
            <h1
              className={`text-xl md:text-5xl font-barlow-condensed tracking-wide uppercase font-semibold mb-1`}
            >
              <HighlightText2>Just In</HighlightText2>
              Fresh Fashion Finds
            </h1>
            <p
              className={`font-medium font-barlow-semi-condensed text-xl mb-4`}
            >
              Be the first to snag our latest arrivals, handpicked just for you.
            </p>

            <BtnNeutral url={'/'}>
              Shop New Arrivals
            </BtnNeutral>
          </div>
        </div>
      </section>
    </>
  );
};
export default NewArrivals;
