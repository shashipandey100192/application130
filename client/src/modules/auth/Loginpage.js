import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Loginpage() {

    const [user ,setusers]=useState({
        email:'',
        pass:''
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

      const mylogin = async (e) => {
        e.preventDefault();
        const { email, pass } = user;
    
        const mydata = await fetch("http://localhost:6400/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email, pass
          })
        })
        const res = await mydata.json();
        console.log(res);
        if(res.status===201)
        {
            alert("welcome to login");
            window.location.href="/dashboard";
        }
        else{
          console.log("nothing");
        }
        // if (res.status === 201) {
        //   localStorage.setItem("userdatatoken", res.result.token);
        //   // his("/landing");
        //   setlogin({ ...ulogin, email: "", pass: "" });
    
        // }
      }




    return (
        <div className='container mt-5'>
            <div className='row justify-content-md-center'>
                <div className='col-5'>
                       
                    <form className='border p-5 bg-light shadow'> 
                    <h1 className='text-center'>Login page</h1>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" value={user.email} onChange={setdata} name='email'/> 
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="text" className="form-control" value={user.pass} onChange={setdata} name='pass'/> 
                        </div>
                        <button type="button" className="btn btn-primary" onClick={mylogin}>Login</button>
                        <Link type="submit" className="btn" to="dashboard">dashboard</Link>
                        <Link type="submit" className="btn" to="registor">New Registor</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Loginpage