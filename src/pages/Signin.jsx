import React from 'react'
import logo from '../images/logo.png';

const Signin = () => {
  return (
    <>
    <div>
            <div className='container'>
                <a href="/" style={{ marginLeft: "23rem" }}><img src={logo} height="48px" /></a>
            </div>
            <br />

            <div className="col-6" style={{ marginLeft: "13rem" }}>
                <div className="card py-2">
                    <div className="card-body">
                 

                        <form className='shadow'>
                            <div className="form-group">
                                <label htmlfor="inputAddress">Email</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="abc@binated.in" />
                            </div>
                            <div className="form-group">
                                <label htmlfor="inputAddress">Password</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="password" />
                                <div style={{color: "grey"}}>forgot password? <a href="/">Reset password</a></div>
                            </div>
                            <div>
                                <button type="button" className="btn btn-danger">Submit</button>
                            </div>
                           
                            <div style={{marginTop: "0.5rem"}}>
                                Don't have an account? <a href="/">Sign Up</a> 
                            </div>

                        </form>
                    </div>
                </div>
            </div> 
        </div>

    </>
  ) 
}

export default Signin