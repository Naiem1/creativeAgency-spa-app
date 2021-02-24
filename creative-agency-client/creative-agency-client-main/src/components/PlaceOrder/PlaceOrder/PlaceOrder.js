import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import Order from '../Order/Order';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selected, setSelected] = useState("order")
 
    return (
        <div className="row place-order-root">
            <div className="col-md-2">
                <Link to="/">
                    <img src={logo} className="img-fluid" alt=""/>
                </Link>
                <ul>
                    <li onClick={()=>{setSelected('order')}}  className={`selection ${selected === 'order' && 'selected'}`} ><i className="fa fa-cart-arrow-down " aria-hidden="true"></i> Order</li>
                    <li onClick={()=>{setSelected('service')}} className={`selection ${selected === 'service' && 'selected'}`}><i className="fa fa-shopping-bag " aria-hidden="true"></i> Service list</li>
                    <li onClick={()=>{setSelected('review')}} className={`selection ${selected === 'review' && 'selected'}`}><i className="fa fa-comments" aria-hidden="true"></i> Review</li>
                </ul>
            </div>
            <div className="col-md-10">
                <div className="d-flex justify-content-between">
                    <h5>{selected}</h5>
                    <h5>{loggedInUser.displayName}</h5>
                </div>
                <div className="place-order-form h-100">
                    {
                        selected==='order'&&<Order setSelected={setSelected}></Order>
                    }
                    {
                        selected==='service'&&<ServiceList></ServiceList>
                    }
                    {
                        selected==='review'&&<Review></Review>
                    }
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;