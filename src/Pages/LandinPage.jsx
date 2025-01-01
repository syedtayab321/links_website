import React from "react";
import MainPage from './../Components/LandingPageComponents/MainPage';
import BenefitSection from './../Components/LandingPageComponents/BenefitSection';
import HowToUse from './../Components/LandingPageComponents/HowToUse';
import WhyChooseUs from './../Components/LandingPageComponents/whyChooseUs';
import Footer from './../Components/LandingPageComponents/footer';
import About from "../Components/LandingPageComponents/About";
import Navbar from "../Components/CommonComponents/Navbar";
export default function LandingPage(){
    return(
        <>
            <Navbar/>
            <MainPage/>
            <BenefitSection/>
            <HowToUse/>
            <About/>
            <WhyChooseUs/>
            <Footer/>
        </>
    )
}