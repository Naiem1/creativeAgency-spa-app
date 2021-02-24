import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AdminServiceCard = ({reload,setReload,serviceInfo}) => {
    const [statusChange, setStatusChange] = useState(serviceInfo.status)
    const location = useLocation();
    const handleStatus = (e) => {
        const updatetatus = e.target.value;
        setStatusChange(updatetatus)
    }
    useEffect(()=>{
        fetch(`https://localhost:3000/updateStatus/${serviceInfo._id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},

            body: JSON.stringify({status:statusChange})
            })
            .then(response => response.json()).then(response=> {
                if(response){
                    alert('Updated successful')
                    setReload(!reload)
                }
            })
            
        },[statusChange]
    )
    return (
        <div>
            <tr  className="row px-1 d-flex justify-content-between w-100 m-0 rounded">
                    <td className="w-20">{serviceInfo.name}</td>
                    <td className="w-20">{serviceInfo.email}</td>
                    <td className="w-20">{serviceInfo.service}</td>
                    <td className="w-20">{serviceInfo.details}</td>
                    <td>
                    <select className={`form-control ${serviceInfo.status === 'Pending' && 'alert-danger' || serviceInfo.status === 'Ongoing' && 'alert-warning' || serviceInfo.status === 'Done' && 'alert-success'}`} onChange={handleStatus}>
                        {
                            serviceInfo.status === 'Pending'?
                            <option className="text-danger" selected>Pending</option>
                            :
                            <option className="text-danger">Pending</option>
                        }
                        {
                            serviceInfo.status === 'Ongoing'?
                            <option className="text-warning" selected>Ongoing</option>
                            :
                            <option className="text-warning">Ongoing</option>

                        }
                        {
                            serviceInfo.status === 'Done'?
                            <option className="text-success" selected>Done</option>
                            :
                            <option className="text-success">Done</option>
                        }
                    </select>
                    </td>
                </tr>
        </div>
    );
};

export default AdminServiceCard;