import React from 'react';

const FeedBackCard = ({info}) => {
    return (
        <div>
            <div className="shadow-sm m-3 p-3">
                <div className="d-flex aligh-items-center mb-3">
                    <div  style={{height:'60px', borderRadius: '50px', overflow: 'hidden'}} className="mr-2">
                        <img className="img-fluid h-100" src={info.photoURL} alt=""/>
                    </div>
                    <div>
                        <h5>{info.name}</h5>
                        <h6>{info.designation}</h6>
                    </div>
                </div>
                <p>{info.description}</p>
            </div>
        </div>
            
       
    );
};

export default FeedBackCard;