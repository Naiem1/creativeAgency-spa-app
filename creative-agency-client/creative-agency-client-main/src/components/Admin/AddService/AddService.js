import React, { useState } from 'react';


const AddService = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null);
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
                const formData = new FormData()
                formData.append('file', file)
                formData.append('title', info.title)
                formData.append('desc', info.desc)

                fetch('https://localhost:3000/addService', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if(data.path){
                        alert("Service Added Successful")
                    }
                })
                .catch(error => {
                    console.error(error)
                })
                
                e.preventDefault();
            }
    return (
        <form onSubmit={handleOnSubmit}>
            <div>
                <div className="row p-5 order-root d-flex align-items-center service-responsive">
                    <div className="col-md-6 service-responsive">
                        <h6>Service Title</h6>
                        <input type="text" name="title" onBlur={handleOnBlur} className="form-control" placeholder="Enter title"/>
                    </div>
                    <div className="col-md-6 service-responsive">
                        <h6>Icon</h6>
                        <input type="file" className="form-control" onChange={handleOnChange} name="icon"/>
                    </div>
                </div>
                <div className="px-5 order-root service-responsive">
                    <h5>Description</h5>
                    <textarea name="desc"  onBlur={handleOnBlur} className="form-control" rows="5"/>
                </div>
            </div>
            <button className="btn landing-bg text-white ml-5 mt-4 px-4">Submit</button>
        </form>
    );
};

export default AddService;