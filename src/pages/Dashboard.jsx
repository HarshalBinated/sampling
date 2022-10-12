import React from 'react';

const Dashboard = () => {
    return (
        <>
            <div className='container' style={{marginRight: "-8rem"}}>

                <div className='row'>
                    <div className='col-md-3'>

                        <div class="card" style={{ width: "10rem", height: "8rem" }}>

                            <div class="card-body">
                                <p class="card-title text-center mb-2" style={{ color: "blue", fontSize: "2rem" }}>400</p>
                                <figcaption class="blockquote-footer text-center">Qty</figcaption>
                                <p className='text-center text-muted'>TO BE PACKED</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>

                        <div class="card" style={{ width: "10rem", height: "8rem" }}>

                            <div class="card-body">
                                <p class="card-title text-center" style={{ color: "red", fontSize: "2rem" }}>9</p>
                                <figcaption class="blockquote-footer text-center">Pkg</figcaption>
                                <p className='text-center text-muted'>TO BE SHIPPED</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>

                        <div class="card" style={{ width: "10rem", height: "8rem" }}>

                            <div class="card-body">
                                <p class="card-title text-center" style={{ color: "green", fontSize: "2rem" }}>43</p>
                                <figcaption class="blockquote-footer text-center">Pkg</figcaption>
                                <p className='text-center text-muted'>TO BE ORDER</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>

                        <div class="card" style={{ width: "10rem", height: "8rem" }}>

                            <div class="card-body">
                                <p class="card-title text-center" style={{ color: "purple", fontSize: "2rem" }}>25</p>
                                <figcaption class="blockquote-footer text-center">Qty</figcaption>
                                <p className='text-center text-muted'>TO BE PACKED</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
         
            <div className='row'>
                <div className='col-md-6'>
                    <div class="card container" style={{ width: "25rem" }}>
                        <div class="card-body">
                            <h4 class="card-title">Garment Details</h4>
                            {/* <div className='row border-top'>
                                <br />
                                <div className='col-xs-12 ml-2' style={{ marginTop: "1rem" }}>
                                    <p>Low Stock Item</p>
                                    <p>All Item Groups</p>
                                    <p>All Items</p>
                                    <p>Unconfirmed Item</p>

                                </div>
                                <div className='col-xs-12 ' style={{ marginLeft: "8rem", marginTop: "1rem" }}>
                                    <p>9</p>
                                    <p>2</p>
                                    <p>21</p>
                                    <p>0</p>
                                </div>
                            </div> */}
                            <div class="accordion" id="accordionExamples">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Low Stock Item
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body row ml-2">
                                            <p>Low Stock Item</p>
                                            <p style= {{ marginLeft: "6rem"}}>9</p>
                                        </div>
                                    </div>
                                </div>  
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                All Item Groups
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div class="card-body row ml-2">
                                                <p>All Item Group</p>
                                                <p style={{ marginLeft: "6rem"}}>12</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                All Items
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div class="card-body row ml-2">
                                                <p>All Items</p>
                                                <p style={{ marginLeft: "6rem"}}>26</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Unconfirmed Item
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                        <div class="card-body row ml-2">
                                            <p>Unconfirmed Item</p>
                                            <p style={{ marginLeft: "6rem"}}>32</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div class="card container" style={{ width: "25rem" }}>
                        <div class="card-body">
                            <h4 class="card-title">Thread Details</h4>
                            {/* <div className='row border-top'>
                                <br />
                                <div className='col-xs-12 ml-2' style={{ marginTop: "1rem" }}>
                                    <p>Low Stock Item</p>
                                    <p>All Item Groups</p>
                                    <p>All Items</p>
                                    <p>Unconfirmed Item</p>

                                </div>
                                <div className='col-xs-12 ' style={{ marginLeft: "8rem", marginTop: "1rem" }}>
                                    <p>9</p>
                                    <p>2</p>
                                    <p>21</p>
                                    <p>0</p>
                                </div>
                            </div> */}
                            <div class="accordion" id="accordionExamples">
                                <div class="card">
                                    <div class="card-header" id="headingone">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseone" aria-expanded="true" aria-controls="collapseone">
                                                Low Stock Item
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapseone" class="collapse show" aria-labelledby="headingone" data-parent="#accordionExamples">
                                        <div class="card-body row ml-2">
                                            <p>Low Stock Item</p>
                                            <p style={{ marginLeft: "6rem"}}>9</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingtwo">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsetwo" aria-expanded="false" aria-controls="collapsetwo">
                                            All Item Groups
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapsetwo" class="collapse" aria-labelledby="headingtwo" data-parent="#accordionExample">
                                        <div class="card-body row ml-2">
                                            <p>All Item Groups</p>
                                            <p style={{ marginLeft: "6rem"}}>23</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingthree">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsethree" aria-expanded="false" aria-controls="collapsethree">
                                                All Items
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapsethree" class="collapse" aria-labelledby="headingthree" data-parent="#accordionExample">
                                        <div class="card-body row ml-2">
                                            <p>All Items</p>
                                            <p style={{ marginLeft: "6rem"}}>13</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                    <div class="card-header" id="heading">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                                Unconfirmed Item
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapsefour" class="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
                                        <div class="card-body row ml-2">
                                            <p>Unconfirmed Item</p>
                                            <p style={{ marginLeft: "6rem"}}>17</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>


        </>
    );
};

export default Dashboard;

