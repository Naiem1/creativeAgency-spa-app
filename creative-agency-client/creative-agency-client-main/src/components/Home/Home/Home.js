import React from 'react';
import FeedBack from '../FeedBack/FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import OurWorks from '../OurWorks/OurWorks/OurWorks';
import Services from '../Services/Services';
import Sponsor from '../Sponsor/Sponsor';
import '../HomeResponsive/HomeResponsive.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Sponsor></Sponsor>
            <Services></Services>
            <OurWorks></OurWorks>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;