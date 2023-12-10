import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


function Userdetails() {
  const [singleuser, singleuserfunc] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:6400/details/${id}`)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        singleuserfunc(data);
      })
  }, [])


  return (
    <Fragment>
      <div className='container shadow mt-3 p-3'>
        <div className='row'>
          <div className='col-12 text-end border-bottom p-4'>
          <Link className='btn btn-info btn-sm ms-2' to={`/dashboard/edit/${singleuser._id}`}>Edit</Link>
            <Link to="/dashboard" className='btn btn-dark btn-sm'>Back</Link>
          </div>
          <div className='col-md-6 p-5'>
            <img src={singleuser.profile} alt={singleuser.name} width={300} />
          </div>
          <div className='col-md-6'>
            <h3>UserName: <span>{singleuser.name}</span></h3>
            <h3>Email id: <span>{singleuser.email}</span></h3>
            <h3>Phone No: <span>{singleuser.phone}</span></h3>
            <h3>Gender: <span>{singleuser.gender}</span></h3>
            <h3>Date of Birth: <span>{singleuser.dob}</span></h3>
          </div>
        </div>

      </div>
      <div className='container-fluid p-5'>
        <div className='row'>
          <div className='col-12'>
            <table className="table table-bordered border-primary">
              <thead>
                <tr>
                  <th scope="col">Mongodb-Id</th>
                  <th scope="col">email Id</th>
                  <th scope="col">Phone No</th>
                  <th scope="col">Gender</th>
                  <th scope="col">DOB</th>
                  <th scope="col">Password</th>
                  <th scope="col">Profile Pic</th>
                </tr>
              </thead>
              <tbody>
                <tr key={singleuser._id}>
                  <th scope="row">{singleuser._id}</th>
                  <td>{singleuser.email}</td>
                  <td>{singleuser.phone}</td>
                  <td>{singleuser.gender}</td>
                  <td>{singleuser.dob}</td>
                  <td><img src={singleuser.profile} width={50} alt='d.name' /></td>
                  <td>{singleuser.pass}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Userdetails