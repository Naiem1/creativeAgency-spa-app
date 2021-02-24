import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({})
    const [disableButton, setDisableButton] = useState(false);

    const handleOnBlur = (e) =>{
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleOnSubmit = (e) => {
        setDisableButton(true)
        const newData = {...info}
        newData.photoURL = loggedInUser.photoURL;
        newData.name = loggedInUser.displayName;
        fetch('https://localhost:3000/addreview', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newData)

        })
        .then(response => response.json())
        .then(result => {
            if(result){
                alert('Succes! Thanks for review')
                setDisableButton(false)
            }
            else{
                alert('Sorry! smoothing went wrong')
                setDisableButton(false)
            }
        })

        e.preventDefault();
    }
    return (
        <form className="p-4 " onSubmit={handleOnSubmit}>
            <input type="text" onBlur={handleOnBlur} name="name" defaultValue={loggedInUser.displayName} className="form-control mt-2" placeholder="Your name" disabled/>
            <input type="text" onBlur={handleOnBlur} name="designation" className="form-control mt-3" placeholder="Company's name, Designation" required/>
            <textarea name="description" onBlur={handleOnBlur}className="form-control mt-3" placeholder="Description" rows="4" required/>
            <button type="submit" className={`btn landing-dark-btn px-4 mt-3 ${disableButton && 'disabled'}`}>Submit</button>
        </form>
    );
};

export default Review;