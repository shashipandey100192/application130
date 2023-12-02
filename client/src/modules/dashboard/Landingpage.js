import React, { useEffect } from 'react';
import axios from 'axios';

function Landingpage() {

    useEffect(()=>{
    axios.get('http://localhost:6400/alldata').then((d)=>{
        console.log(d.data);
    })

//     fetch('http://localhost:6400/alldata')
//   .then(response => response.json())
//   .then(data => console.log(data))

})
    
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className="card text-bg-success mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card text-bg-info mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card text-bg-warning mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card text-bg-danger mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <table className="table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td className='text-end'>
                                    <button className='btn btn-danger btn-sm'>Del</button>
                                    <button className='btn btn-info btn-sm ms-2'>Edit</button>
                                    <button className='btn btn-warning btn-sm ms-2'>View</button>
                                </td>
                            </tr>
                            
                           
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Landingpage