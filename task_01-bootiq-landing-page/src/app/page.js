import React from 'react';
import Layout from '@/app/(client)/layout';
import Hero from '@/components/Hero';
import NewArrivals from '@/components/NewArrivals';
import MembershipOffer from '@/components/MembershipOffer';
import Footer from '@/components/Footer';
import FlashSale from '@/components/FlashSale';

const Page = () => {
  return (
    <>
      <Layout>
        <Hero />
        {/*<section*/}
        {/*  className={`bg-white h-screen sm:h-[800px] md:h-screen 2xl:max-h-[calc(100dvh+256px)] snap-start overflow-hidden `}*/}
        {/*>*/}
        <NewArrivals />
        <MembershipOffer/>
        <FlashSale/>
      </Layout>
    </>
  );
};
export default Page;
