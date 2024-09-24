import React from 'react';
import Image from 'next/image';
import assets from '@/assets/assets';
import HighlightText1 from '@/components/ui/HighlightText1';
import HighlightText3 from '@/components/ui/HighlightText3';
import { FaLock, FaTags } from 'react-icons/fa6';
import { FaBirthdayCake, FaShippingFast } from 'react-icons/fa';
import BtnNeutral from '@/components/ui/BtnNeutral';

const MembershipOffer = () => {
  return (
    <>
      <section
        className={`hero w-full min-h-screen max-h-[900px] sm:h-[800px] md:h-screen 2xl:min-h-[900px] 2xl:max-h-[1080px] relative flex items-center justify-center flex-col snap-start sm:snap-align-none md:snap-start overflow-clip`}
      >
        <span
          className={`block mask mask-hexagon-2 w-[80rem] lg:w-[65rem] xl:w-[90rem] 2xl:w-[120rem] aspect-square absolute top-2/4 right-1/4 sm:top-0 md:left-0 md:top-3/4 bg-pink-50 md:bg-pink-400 shadow`}
        ></span>
        <h1
          className={`my-6 text-4xl font-barlow-condensed font font-bold uppercase relative z-50`}
        >
          <HighlightText3>BootiQ</HighlightText3> Membership
        </h1>
        <div
          className={`hero-content w-full flex-col lg:flex-row lg:items-center justify-between h-full relative overflow-hidden`}
        >
          <div
            className={`w-full min-h-[50dvh] sm:min-h-[400px] md:min-h-[50dvh] lg:w-2/4 xl:w-5/6 relative grid place-items-center`}
          >
            <span
              className={`absolute mask mask-hexagon-2 w-full h-full md:h-5/6 -z-10 aspect-square block bg-gradient-to-b from-rose-300 to-rose-500 lg:glass shadow-xl lg:bg-rose-500 lg:bg-opacity-50 lg:h-full top-12 md:top-24 lg:top-0`}
            ></span>
            <Image
              src={assets.membership}
              alt={'new arrivals offers from bootiq'}
              // className={`w-8/12 sm:h-full md:w-6/12 lg:w-full xl:w-11/12 md:h-full lg:h-auto lg:object-cover object-contain absolute -top-[5vh] sm:top-0 lg:-top-[10dvh] `}
              className={`absolute w-full h-full md:h-5/6 -z-10 md:top-24 object-contain lg:h-auto lg:w-full lg:-top-20 xl:-top-40 `}
              id={'above_2xl'}
            />
          </div>
          <div
            className={`lg:w-9/12 w-full h-fit flex items-start justify-center flex-col relative md:py-8 lg:pl-8`}
          >
            <h1
              className={`text-3xl md:text-5xl font-barlow-condensed tracking-wide uppercase font-bold mb-1`}
            >
              Unlock Exclusive Perks with
              <HighlightText3 textStyles={'pl-1 text-3xl md:text-5xl'}>
                BootiQ Membership
              </HighlightText3>
            </h1>
            <p className={`font-medium`}>
              Join our <HighlightText3>VIP community</HighlightText3> and
              elevate your shopping experience.
            </p>
            <ul className={`grid mt-4`}>
              <li className={`flex text-lg items-center`}>
                <FaLock />
                &nbsp;
                <HighlightText1 textStyles={`text-lg font-semibold`}>
                  Early Access to Sales
                </HighlightText1>
              </li>
              <li className={`flex text-lg items-center`}>
                <FaTags />
                &nbsp;
                <HighlightText1 textStyles={`text-lg font-semibold`}>
                  Exclusive Discounts
                </HighlightText1>
              </li>
              <li className={`flex text-lg items-center`}>
                <FaShippingFast />
                &nbsp;
                <HighlightText1 textStyles={`text-lg font-semibold`}>
                  Free Shipping
                </HighlightText1>
              </li>
              <li className={`flex text-lg items-center`}>
                <FaBirthdayCake />
                &nbsp;
                <HighlightText1 textStyles={`text-lg font-semibold`}>
                  Birthday Rewards
                </HighlightText1>
              </li>
            </ul>
            <BtnNeutral url={`/`} btnStyles={'mt-4'}>
              Join Now and Start Saving
            </BtnNeutral>
          </div>
        </div>
      
      </section>
    </>
  );
};
export default MembershipOffer;
