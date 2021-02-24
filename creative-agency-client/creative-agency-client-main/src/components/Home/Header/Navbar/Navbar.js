import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logos/logo.png'
import {UserContext} from '../../../../App'
import './Navbar.css'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [adminData, setAdminData] = useState(false);
    const [selected, setSelected] = useState('home');
    if(loggedInUser.email){
        fetch('https://localhost:3000/checkAdmin/'+loggedInUser.email)
        .then(response => response.json())
        .then(result => {
            if(result.email){
                setAdminData(true)
            }
            else{
                setAdminData(false)
            }
        })
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light container mx-auto">
        <a className="navbar-brand" href="#">
            <Link to="/">
                <img height="50px" src={logo} alt=""/>
            </Link>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className={`nav-item mr-5 ${selected === 'home' && 'selectedNav'}`}>
                    <a onClick={() => {setSelected('home')}} className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className={`nav-item mr-5 ${selected === 'portfolio' && 'selectedNav'}`}>
                    <a onClick={() => {setSelected('portfolio')}} className="nav-link" href="#portfolio">Our Portfolio</a>
                </li>
                <li className={`nav-item mr-5 ${selected === 'team' && 'selectedNav'}`}>
                    <a onClick={() => {setSelected('team')}} className="nav-link" href="#">Our Team</a>
                </li>
                <li className={`nav-item mr-5 ${selected === 'contact' && 'selectedNav'}`}>
                    <a onClick={() => {setSelected('contact')}} className="nav-link" href="#contact">Contact Us</a>
                </li>
                <li className={`nav-item mr-5`}>
                    
                        {
                            adminData && loggedInUser.email && <Link to="/admin"><button className="btn landing-dark-btn px-4">Admin</button></Link>
                        }
                        {
                            !adminData && !loggedInUser.email &&<Link to="/login"><button className="btn landing-dark-btn px-4">Login</button></Link>
                        }                       
                        {

                            !adminData && loggedInUser.email && <Link to="/place-order"><img src={loggedInUser.photoURL} style={{borderRadius: '50px', height: '50px'}} alt=""/></Link>
                        }
                </li>
            </ul>
        </div>
        </nav>
    );
};

export default Navbar;