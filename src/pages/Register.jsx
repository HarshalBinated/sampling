import React from 'react'
import logo from '../images/logo.png';
const Register = () => {
    return (
        <>
        <div>
            <div className='container'>
                <a href="/" style={{ marginLeft: "23rem" }}><img src={logo} height="48px" /></a>
            </div>
            <br />

            <div class="col-6" style={{ marginLeft: "13rem" }}>
                <div class="card py-2">
                    <div class="card-body">
                 
                        <form>
                            <div className="font-weight-bold text-center" style={{fontSize: "1.5rem", marginTop: "-1.2rem"}}>Create a new account</div>
                            <p style={{marginLeft: "10rem"}}>It's quick and easy.</p>
                            <br/>
                            <div class="form-row border-top" style={{marginTop: "-1.5rem"}}>
                              
                                <div class="form-group col-md-6 mt-2">
                                    <label for="inputEmail4">First name</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="First name" />
                                </div>
                                <div class="form-group col-md-6 mt-2">
                                    <label for="inputPassword4">Last name</label>
                                    <input type="password" class="form-control" id="inputPassword4" placeholder="Last name" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Email</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="abc@binated.in" />
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Password</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="password" />
                            </div>
                            <div>
                                <button type="button" class="btn btn-danger">Submit</button>
                            </div>
                            <div className='mt-2'>
                                Already have an account? <a href="/signin">Sign In</a> 
                            </div>

                        </form>
                    </div>
                </div>
            </div> 
        </div>

        </>
    );
};

export default Register;