import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import frame from '../../../../images/logos/Frame.png'
import './HeaderMain.css'

const HeaderMain = () => {
    const history = useHistory();
    return (
        <main className="row d-flex align-items-center py-5 container mx-auto">
            <div className="col-md-6 col-sm-12 pr-5">
                <div className="mr-5 pr-5 header-main-text">
                    <h1>Let's Grow Your Brand To The Next Level</h1>
                    <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                    <Link to='/place-order'>
                        <button className="btn landing-dark-btn px-4">Hire us</button>
                    </Link>
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
                <img className="img-fluid" src={frame} alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;