import React from 'react'
import HeaderMain from "./(components)/header-main/header-main";
import Categories from './(components)/categories/categories';
import RecommendedCtgr from './(components)/categories/recommendedCtgr';
import TrendingCollection from './(components)/trending-collection/trending-collection'
import PortfolioSection from './(components)/portfolio-section/portfolio-sec';
import FreelancerSection from './(components)/freelancer-section/freelancer-section';

export default function Home() {
  return (

    <>
      <div className="">
        <HeaderMain />
        <RecommendedCtgr/>
        <TrendingCollection/>
        <PortfolioSection/>
        <FreelancerSection/>


        <br /><br /><br />





      </div>


    </>

  );
}
