import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Order = ({setSelected}) => {
    const [loggedInUser, setLoggedInUser, selectedService, setSelectedService] = useContext(UserContext);
    const [info, setInfo] = useState({})
    const [file, setFile] = useState({});
    const [disableButton, setDisableButton] = useState(false)

    const handleOnChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleOnBlur = (e) =>{
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
        console.log(info);
    }

    const handleOnSubmit = (e) => {
        setDisableButton(true);
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name || loggedInUser.displayName)
        formData.append('email', loggedInUser.email)
        formData.append('photoURL', loggedInUser.photoURL)
        formData.append('details', info.details)
        formData.append('price', info.price)
        formData.append('service', info.service)
        formData.append('serviceIcon', selectedService.path || 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png')


        fetch('https://localhost:3000/addOrder', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                alert("Success! Thanks for your Order.")
                setSelected('service')
                setDisableButton(false)
            }else{
                alert("Sorry. Please check your form")
                setDisableButton(false)
            }
        })
        .catch(error => {
            console.error(error)
        })
        
        e.preventDefault();
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <div className="w-50 p-5 order-root">
                <input type="text" name="name" onBlur={handleOnBlur} className="form-control text-dark my-3" placeholder="Your name / company's name*" defaultValue={loggedInUser.displayName} disabled/>
                <input type="email" name="email" onBlur={handleOnBlur} className="form-control text-dark my-3" placeholder="Your email address*" value={loggedInUser.email} disabled/>
                <input type="text" name="service" onBlur={handleOnBlur} className="form-control text-dark my-3" placeholder="Graphic Design*" value={selectedService.title} required/>
                <textarea name="details" rows="5" onBlur={handleOnBlur} className="form-control text-dark my-3" placeholder="Project Details*" required/>
                <div className="row d-flex align-items-center">
                    <div className="col-md-6" style={{display:'inline-block'}}>
                        <input type="number" name="price" min="1" onBlur={handleOnBlur} className="form-control text-dark my-3" placeholder="Price*" required/>
                    </div>
                    <div className="col-md-6">
                        <input type="file" onChange={handleOnChange} name="file" required></input>
                    </div>
                </div>
                    <button className={`btn landing-dark-btn px-5 py-2 ${disableButton &&'disabled'}`} >Send</button>
            </div>
        </form>
    );
};

export default Order;