import React, { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './FeedBack.css';
import customar1 from '../../../../images/customer-1.png'
import customar2 from '../../../../images/customer-2.png'
import customar3 from '../../../../images/customer-3.png'
import FeedBackCard from '../FeedBackCard/FeedBackCard';
import Slider from "react-slick";


const FeedBack = () => {
    const [info, setInfo] = useState([])
    fetch('https://localhost:3000/reviews')
    .then(res => res.json())
    .then(data => setInfo(data))
    const customarsInfo = [
        {
            img: customar1,
            name: 'Hash Patrik',
            position: 'CEO, Monpoi',
            desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis looret maecenas Faugat'
        },
        {
            img: customar2,
            name: 'Miriam Barron Patrik',
            position: 'CEO, Monpoi',
            desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis looret maecenas Faugat'
        },
        {
            img: customar3,
            name: 'Bria Malone',
            position: 'CEO, Monpoi',
            desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis looret maecenas Faugat'
        }
    ]

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      infinite:true,
      autoPlaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
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
    return (
        <div className="feedback-root container p-5 my-5 order-root">
            <h2 className="text-center pb-5">Clients <span className="landing-text">Feedback</span></h2>

          {
            info.length > 0 ?
         
           <Slider  {...settings}>
                {
                      info.map(customar => 
                          <div className="div" key={customar._id}>
                            <FeedBackCard info = {customar}></FeedBackCard>
                          </div>
                        )
                }
          </Slider>
          :
          <h1>Loading...</h1>
          }
        </div>
    );
};

export default FeedBack;