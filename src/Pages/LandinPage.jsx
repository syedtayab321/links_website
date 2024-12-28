import React from "react";
import MainPage from './../Components/LandingPageComponents/MainPage';
import BenefitSection from './../Components/LandingPageComponents/BenefitSection';
import HowToUse from './../Components/LandingPageComponents/HowToUse';
import WhyChooseUs from './../Components/LandingPageComponents/whyChooseUs';
import Footer from './../Components/LandingPageComponents/footer';
export default function LandingPage(){
    return(
        <>
            <MainPage/>
            <BenefitSection/>
            <HowToUse/>
            <WhyChooseUs/>
            <Footer/>
        </>
    )
}