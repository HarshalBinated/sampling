import React from 'react';
import { FaRegCalendarAlt, FaShippingFast } from "react-icons/fa";
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineFileSync } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";

const Dashboard = () => {
    return (
        <>
            <div className='container justify-content-center'>
                <div className='row'>
                    <div className='col-md-3' >
                        <div className="card" id='card-content'>
                            <div className="card-body">
                                <h1 className="card-title text-center mb-2 text-primary">40</h1>
                                <small className="blockquote-footer text-center">Qty</small>
                                <small className='text-center'><AiOutlinePlusCircle /> TO BE PACKED</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card" id='card-content'>
                            <div className="card-body">
                                <h1 className="card-title text-center text-danger">9</h1>
                                <figcaption className="blockquote-footer text-center">Pkg</figcaption>
                                <small className='text-center' ><BsShieldLock /> TO BE SHIPPED</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card" id='card-content'>
                            <div className="card-body">
                                <h1 className="card-title text-center text-success">43</h1>
                                <figcaption className="blockquote-footer text-center">Pkg</figcaption>
                                <small className='text-center '><AiOutlineMinusCircle/> TO BE ORDER</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card" id='card-content'>
                            <div className="card-body">
                                <h1 className="card-title text-center text-info">25</h1>
                                <figcaption className="blockquote-footer text-center">Qty</figcaption>
                                <small className='text-center'><AiOutlineFileSync/> TO BE PACKED</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className='row'  >
                <div className='col-md-3' style={{ marginLeft: "11rem" }}>
                    <div className="card w-100">
                        <div className="card-body">
                            <h5 className="card-title">Garment Details</h5>
                            <div className="accordion" id="accordionExamples">
                                <div className="card">
                                    <div className="bg-light border-bottom" id="headingOne">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Low Stock Item
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div className="row ml-3 mt-1">
                                            <p>Low Stock Item</p>
                                            <p className='ml-4 text-danger'>9</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-2">
                                    <div className="bg-light border-bottom" id="headingTwo">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                All Item Groups
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div className="row ml-3 mt-1">
                                            <p>All Item Group</p>
                                            <p className="ml-4 text-danger">12</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-2">
                                    <div className="bg-light border-bottom" id="headingThree">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                All Items
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="row ml-4 mt-1">
                                            <p>All Items</p>
                                            <p className='ml-4 text-danger'>26</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-2">
                                    <div className="bg-light border-bottom" id="headingThree">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Unconfirmed Item
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                        <div className="row ml-3 mt-1">
                                            <p>Unconfirmed Item</p>
                                            <p className=' text-danger ml-3'>32</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-md-6 '>     
                    <div className="card w-50" >
                        <div className="card-body">
                            <h5 className="card-title">Thread Details</h5>
                            <div className="accordion" id="accordionExamples">
                                <div className="card mt-2">
                                    <div className="bg-light border-bottom" id="headingone">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseone" aria-expanded="true" aria-controls="collapseone">
                                                Low Stock Item
                                            </button>
                                        </h4>
                                    </div>

                                    <div id="collapseone" className="collapse" aria-labelledby="headingone" data-parent="#accordionExamples">
                                        <div className="row ml-3 mt-1">
                                            <p>Low Stock Item</p>
                                            <p className='ml-4 text-danger'>9</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-2">
                                    <div className="bg-light border-bottom" id="headingtwo">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsetwo" aria-expanded="false" aria-controls="collapsetwo">
                                                All Item Groups
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapsetwo" className="collapse" aria-labelledby="headingtwo" data-parent="#accordionExample">
                                        <div className="row mt-1 ml-3">
                                            <p>All Item Groups</p>
                                            <p className='ml-4 text-danger'>23</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-2">
                                    <div className="bg-light border-bottom" id="headingthree">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsethree" aria-expanded="false" aria-controls="collapsethree">
                                                All Items
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapsethree" className="collapse" aria-labelledby="headingthree" data-parent="#accordionExample">
                                        <div className="row ml-3 mt-1">
                                            <p>All Items</p>
                                            <p className='text-danger ml-4 '>13</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-2">
                                    <div className="bg-light border-bottom" id="heading">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                                Unconfirmed Item
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
                                        <div className="row mt-1 ml-3">
                                            <p className=''>Unconfirmed Item</p>
                                            <p className='text-danger ml-3'>17</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


            </div>
            </div>
            <br />
            <div class="card w-50 h-25" style={{ marginLeft: "11rem" }}>
                <div className="card-body">
                    <h5 className='mb-3'>Top Using Item </h5>
                        <div class="btn-group" style={{marginLeft: "28rem", cursor: "pointer", marginTop: "-5rem"}}>
                            <div class=" dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <FaRegCalendarAlt/>
                            </div>
                            <div class="dropdown-menu dropdown-menu-right">
                                <small class="dropdown-item" type="button">Today</small>
                                <small class="dropdown-item" type="button">Yesterday</small>
                                <small class="dropdown-item" type="button">This Week</small>
                                <small class="dropdown-item" type="button">This Month</small>
                                <small class="dropdown-item" type="button">This Year</small>
                                <small class="dropdown-item" type="button">Previous Week</small>
                                <small class="dropdown-item" type="button">Previous Month</small>
                                <small class="dropdown-item" type="button">Previous Year</small>
                                <small class="dropdown-item" type="button">Custom</small>
                            </div>
                        </div>
                   
                    <h6 className="border-top" style={{marginTop: "-2rem"}}></h6>
                    <br/>
                    <br />
                    <small className="card-text text-muted" style={{marginLeft: "7rem"}}>No item were invoiced in this time frame.</small>
                </div>
            </div>
        </>
    );
};

export default Dashboard;

