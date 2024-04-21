import React from "react";
import '../App.css';
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import DownArrow from "./DownArrow";
import MyWorks from "./MyWorks";
import Tools from "./Tools";
import Contact from "./Contact";
import Footer from "./Footer";

function HomePage () {
    return (
        <>
            <Navbar />
            <LandingPage />
            <DownArrow />
            <MyWorks />
            <Tools />
            <Contact />
            <Footer />
        </>
    )
}

export default HomePage;
