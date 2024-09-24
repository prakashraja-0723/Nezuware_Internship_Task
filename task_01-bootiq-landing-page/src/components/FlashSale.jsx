import React from 'react';
import Image from 'next/image';
import assets from '@/assets/assets';
import HighlightText2 from '@/components/ui/HighlightText2';
import BtnNeutral from '@/components/ui/BtnNeutral';

const FlashSale = () => {
  return (
    <>
      <section
        className={`hero w-full h-screen sm:h-[800px] md:h-screen 2xl:max-h-[1080px] relative flex items-center justify-center flex-col snap-start sm:snap-align-none md:snap-start overflow-clip`}
      >
        <h1
          className={`my-6 text-4xl font-barlow-condensed font font-bold uppercase relative z-50`}
        >
          Limited-Time Offers
        </h1>
        <span
          className={`absolute mask mask-hexagon-2 lg:h-[180%] lg:w-auto w-ful lg:left-1/3 top-5 aspect-square block bg-gradient-to-tr from-pink-100 to-pink-500  `}
        ></span>
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
              src={assets.flash_sale}
              alt={'new arrivals offers from bootiq'}
              className={`w-9/12 md:h-5/6 lg:h-auto object-cover absolute `}
            />
          </div>
          <div
            className={`lg:w-9/12 w-full h-auto flex items-start justify-center flex-col relative md:py-8 lg:pl-8`}
          >
            
            <h1
              className={`text-xl md:text-5xl font-barlow-condensed tracking-wide uppercase font-semibold mb-1`}
            >
              Limited-Time Offers
            </h1>
            <p
              className={`font-medium font-barlow-semi-condensed text-xl mb-4`}
            >
              <HighlightText2>Hurry!</HighlightText2>These deals won't last long. Shop our exclusive flash sale items
              before they're gone.
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
export default FlashSale;
