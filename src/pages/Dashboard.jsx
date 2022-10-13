import React from 'react';

const Dashboard = () => {
    return (
        <>
            <div className='container justify-content-center'>
                <div className='row'>
                    <div className='col-md-3' >
                        <div className="card" id='card-content'>
                            <div className="card-body">
                                <h1 className="card-title text-center mb-2 text-primary">40</h1>
                                <figcaption className="blockquote-footer text-center">Qty</figcaption>
                                <p className='text-center text-muted'>TO BE PACKED</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card" id='card-content'>
                            <div className="card-body">
                                <h1 className="card-title text-center text-danger">9</h1>
                                <figcaption className="blockquote-footer text-center">Pkg</figcaption>
                                <p className='text-center text-muted'>TO BE SHIPPED</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card" id='card-content'>
                            <div className="card-body">
                                <h1 className="card-title text-center text-success">43</h1>
                                <figcaption className="blockquote-footer text-center">Pkg</figcaption>
                                <p className='text-center text-muted'>TO BE ORDER</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card" id='card-content'>
                            <div className="card-body">
                                <h1 className="card-title text-center text-info">25</h1>
                                <figcaption className="blockquote-footer text-center">Qty</figcaption>
                                <p className='text-center text-muted'>TO BE PACKED</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className='row'>
                <div className='col-md-6'>
                    <div className="card container w-75">
                        <div className="card-body">
                            <h5 className="card-title">Garment Details</h5>
                            <div className="accordion" id="accordionExamples">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Low Stock Item
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div className="card-body row ml-2">
                                            <p>Low Stock Item</p>
                                            <p className='ml-4 text-danger'>9</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                All Item Groups
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div className="card-body row ml-2">
                                            <p>All Item Group</p>
                                            <p className="ml-4 text-danger">12</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                All Items
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="card-body row ml-2">
                                            <p>All Items</p>
                                            <p className='ml-4 text-danger'>26</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Unconfirmed Item
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                        <div className="card-body row ml-2">
                                            <p>Unconfirmed Item</p>
                                            <p className='ml-4 text-danger'>32</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="card container w-75" >
                        <div className="card-body">
                            <h5 className="card-title">Thread Details</h5>
                            <div className="accordion" id="accordionExamples">
                                <div className="card">
                                    <div className="card-header" id="headingone">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseone" aria-expanded="true" aria-controls="collapseone">
                                                Low Stock Item
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapseone" className="collapse" aria-labelledby="headingone" data-parent="#accordionExamples">
                                        <div className="card-body row ml-2">
                                            <p>Low Stock Item</p>
                                            <p className='ml-4 text-danger'>9</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingtwo">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsetwo" aria-expanded="false" aria-controls="collapsetwo">
                                                All Item Groups
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapsetwo" className="collapse" aria-labelledby="headingtwo" data-parent="#accordionExample">
                                        <div className="card-body row ml-2">
                                            <p>All Item Groups</p>
                                            <p className='ml-4 text-danger'>23</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingthree">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsethree" aria-expanded="false" aria-controls="collapsethree">
                                                All Items
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapsethree" className="collapse" aria-labelledby="headingthree" data-parent="#accordionExample">
                                        <div className="card-body row ml-2">
                                            <p>All Items</p>
                                            <p className='ml-4 text-danger'>13</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                                    Unconfirmed Item
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
                                            <div className="card-body row ml-2">
                                                <p>Unconfirmed Item</p>
                                                <p className='ml-4 text-danger'>17</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div class="card mr-auto ml-auto w-50 h-25">
                <div className="card-body">
                    <h5 className='mb-1'>Top Using Item</h5>
                    <h6 className="border-top"></h6>
                    <p className="card-text text-muted text-content-center">No item were invoiced in this time frame.</p>
                </div>
            </div>
        </>
    );
};

export default Dashboard;

