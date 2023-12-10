import React, { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';




function Editprofile() {
    const { id } = useParams();
    const [user ,setusers]=useState({
        email:'',
        phone:'',
        dob:'',
        gender:'',
        pass:'',
        profile:''
    });

    const setdata = (e)=>{
        console.log(e.target.value);
        const {name,value} = e.target;
        setusers((preval)=>{
          return{
            ...preval,
            [name]:value
          }
        })
      }

   
      useEffect(() => {
        fetch(`https://backendapi-sblu.onrender.com/details/${id}`)
          .then(res => res.json())
          .then((data) => {
            console.log(data);
            setusers(data);
          })
      }, [])
    








const userupdate = async ()=>{
   
    const { email, phone,gender,pass,dob,profile } = user;
    const res = await fetch(`https://backendapi-sblu.onrender.com/updaterecord/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email, phone,gender,pass,dob,profile
        })
    })
    const data = await res.json();
    // console.log(data);
    window.location.href="/dashboard";
}





    return (
        <div className='container mt-5'>
            <div className='row justify-content-md-center'>
                <div className='col-6'>

                    <form className='border p-5 bg-dark shadow text-white' >
                        <h1 className='text-center'>Edit User Profile Page</h1>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" value={user.email} onChange={setdata}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone No</label>
                            <input type="text" className="form-control" name="phone" value={user.phone} onChange={setdata}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Dob</label>
                            <input type="date" className="form-control" name='dob' value={user.dob} onChange={setdata}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gender</label><br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="male" name="gender" onChange={setdata}
                                checked= {user.gender==='male' ? true: false}
                                />
                                <label className="form-check-label">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="female" name="gender" onChange={setdata} checked= {user.gender==='female' ? true: false}/>
                                <label className="form-check-label">Female</label>
                            </div>

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="text" className="form-control" name='pass' value={user.pass} onChange={setdata}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Profile picture (URL Only)</label>
                            <input type="text" className="form-control" name='profile' value={user.profile} onChange={setdata}/>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={userupdate}>Update</button>
                        <Link type="submit" className="btn btn-outline-warning ms-3" to="/dashboard">dashboard</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Editprofile