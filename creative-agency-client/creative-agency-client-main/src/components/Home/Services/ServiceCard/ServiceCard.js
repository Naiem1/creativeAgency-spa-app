import React from 'react';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './ServiceCard.css'
// import service1 from '../../../../images/icons/service1'
// import service2 from '../../../../images/icons/service2.png'
// import service3 from '../../../../images/icons/service3.png'

const ServiceCard = ({info}) => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser, selectedService, setSelectedService] = useContext(UserContext);
    const handleOnClick = () =>{
        setSelectedService(info);
        history.push('/place-order')
    }
    return (
        <div className="col-md-4 col-sm-12 ">
            <div onClick={handleOnClick} className="m-5 p-2 rounded text-center service-card-root pt-3">
                <img height="80px" src={`https://localhost:3000${info.path}`} alt=""/>
                <h4 className="mt-4">{info.title}</h4>
                <p>{info.desc}</p>
            </div>
        </div>
    );
};

export default ServiceCard;