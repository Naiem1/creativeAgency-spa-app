import React, { useState } from 'react';
import img from '../../../../images/icons/service1.png'
import './ServiceListCard.css'

const ServiceListCard = ({data}) => {

    return (
        <div className="col-md-5">
            <div className="m-3 p-3 bg-white rounded">
                <div>
                    <div className="d-flex justify-content-between">
                        <img src={`https://localhost:3000${data.serviceIcon}`} alt=""/>
                        <div className={`${data.status === 'Pending' && 'alert-danger' || data.status === 'Ongoing' && 'alert-warning' || data.status === 'Done' && 'alert-success'} width`}>{data.status}</div>
                    </div>
                    <h5 className="pt-3">Graphic Design</h5>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste iure veritatis ipsam sit ex!</small></p>
                </div>
            </div>
        </div>
    );
};

export default ServiceListCard;