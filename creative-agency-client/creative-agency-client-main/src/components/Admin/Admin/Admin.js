import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import AddService from '../AddService/AddService';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import './Admin.css'
import MakeAdmin from './MakeAdmin/MakeAdmin';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [selected, setSelected] = useState("Service List")
 
    return (
        <div className="row place-order-root">
            <div className="col-md-2">
                <Link to="/">
                <img src={logo} className="img-fluid" alt=""/>
                </Link>
                <ul>
                    <li onClick={()=>{setSelected('Service List')}} className={`${selected === 'Service List' && 'selectedService'}`}><i className="fa fa-shopping-bag" aria-hidden="true"></i> Service list</li>
                    <li onClick={()=>{setSelected('Add Service')}} className={`${selected === 'Add Service' && 'selectedService'}`}><i className="fa fa-plus" aria-hidden="true"></i> Add Service</li>
                    <li onClick={()=>{setSelected('Make Admin')}} className={`${selected === 'Make Admin' && 'selectedService'}`}><i className="fa fa-user-plus" aria-hidden="true"></i> Make Admin</li>
                </ul>
            </div>
            <div className="col-md-10">
                <div className="d-flex justify-content-between">
                    <h5>{selected}</h5>
                    <h5>{loggedInUser.displayName}</h5>
                </div>
                <div className="place-order-form h-100 p-5 order-root">
                    <div className="bg-white h-100 p-5 order-root rounded">
                        {
                            selected==='Service List'&&<AdminServiceList setSelected = {setSelected}></AdminServiceList>
                        }
                    {
                        selected==='Add Service'&&<AddService></AddService>
                    }
                    {
                        selected==='Make Admin' && <MakeAdmin></MakeAdmin>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;