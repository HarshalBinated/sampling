import React from 'react';

const Dashboard = () => {
    return (
        <>
            <div className='container' >

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
                                <figcaption class="blockquote-footer text-center">pkg</figcaption>
                                <p className='text-center text-muted'>TO BE SHIPPED</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>

                        <div class="card" style={{ width: "10rem", height: "8rem" }}>

                            <div class="card-body">
                                <p class="card-title text-center" style={{ color: "green", fontSize: "2rem" }}>43</p>
                                <figcaption class="blockquote-footer text-center">pkg</figcaption>
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
                            <div className='row border-top'>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div class="card container" style={{ width: "25rem" }}>
                        <div class="card-body">
                            <h4 class="card-title">Thread Details</h4>
                            <div className='row border-top'>
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

