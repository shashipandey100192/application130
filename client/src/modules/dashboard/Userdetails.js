import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Userdetails() {
    const [singleuser,singleuserfunc]=useState({});
    const {id} = useParams();
    console.log(id);
    useEffect(()=>{
    fetch(`http://localhost:6400/details/${id}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            singleuserfunc(data);
        })   
},[])


  return (
    <div className='container shadow mt-3'>
        <div className='row'>
            <div className='col-md-6 p-5'>
                <img src='https://cdn-icons-png.flaticon.com/512/9131/9131529.png' alt='sjkdfh' width={300}/>
            </div>
                    <div className='col-md-6'>
                    <h1>UserName: <span>{singleuser.name}</span></h1>
                    <h1>Email id: <span>{singleuser.email}</span></h1>
                    <h1>Phone No: <span>{singleuser.phone}</span></h1>
                    <h1>Gender: <span>{singleuser.gender}</span></h1>
                    <h1>Date of Birth: <span>{singleuser.dob}</span></h1>
                    </div>
            </div>
        
    </div>
  )
}

export default Userdetails