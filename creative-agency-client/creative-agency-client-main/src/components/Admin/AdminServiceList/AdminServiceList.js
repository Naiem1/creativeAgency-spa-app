import React, { useEffect } from 'react';
import { useState } from 'react';
import AdminServiceCard from './AdminServiceCard/AdminServiceCard';

const AdminServiceList = () => {
    const [serviceListInfo, setServiceListInfo] = useState([]);
    const [reload, setReload] = useState(false);
    
    useEffect(()=>{
        fetch('https://localhost:3000/serviceList')
        .then(res => res.json())
        .then(data => setServiceListInfo(data))
        console.log(serviceListInfo);
    },[reload])

    
    return (
        <div>
            <table className="w-100 bg-white">
                <tr style={{backgroundColor: '#F4F7FC'}} className="row px-1 d-flex justify-content-between w-100 m-0 rounded">
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Service</th>
                    <th>Project Details</th>
                    <th>Status</th>
                </tr>
                {
                    serviceListInfo.map(serviceInfo => 
                        <AdminServiceCard reload={reload} setReload = {setReload} key={serviceInfo._id} serviceInfo={serviceInfo}></AdminServiceCard>
                        )
                }
            </table>
        </div>
    );
};

export default AdminServiceList;