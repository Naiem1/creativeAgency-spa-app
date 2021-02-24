import React from 'react';
import './Sponsor.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import airbnb from '../../../images/logos/airbnb.png'
import google from '../../../images/logos/google.png'
import netflix from '../../../images/logos/netflix.png'
import slack from '../../../images/logos/slack.png'
import ubar from '../../../images/logos/uber.png';


const Sponsor = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        infinite:true,
        autoPlaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const sponsers = [slack, google, ubar, netflix, airbnb ]
    return (
        <div>
            
            <Slider {...settings} className="pt-5 mt-5 container">
            {
                sponsers.map(sponser => <div key={sponser} className=" w-100">
                        <img src={sponser} height="50px" className="mx-auto" alt=""/>
                </div>)
            }
          
        </Slider>

        </div>
    );
};

export default Sponsor;