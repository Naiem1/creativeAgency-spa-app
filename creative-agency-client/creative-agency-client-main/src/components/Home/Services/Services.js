import React, { useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import './Services.css'


const Services = () => {
    const [serviceInfo, setServiceInfo] = useState([])
    fetch('https://localhost:3000/services')
    .then(res => {
        if(res){
          return  res.json()
        }
    })
    .then(data => setServiceInfo(data))

    return (
        <div id="service" className=" container service-root">
            <h2 className="text-center">Provide awesome <span className="landing-text">services</span></h2>
            <div className="row my-5 py-5">
                {
                    serviceInfo.length > 0? 
                    serviceInfo.map((service => <ServiceCard key={service._id} info = {service}></ServiceCard>))
                    :<h1 className="text-center">Loading...</h1>
                }
            </div>
        </div>
    );
};

export default Services;