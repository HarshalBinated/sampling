import React from 'react';
import {AiOutlineSearch } from "react-icons/ai";


const Stock = () => {
    return (
        <>
           <div className="box border" style={{marginLeft: "13rem"}}>
            <AiOutlineSearch />
            <input type="text" name="" placeholder='search..' />
          </div>
          <br />
            <div className='row'>
                <div className='col-md-3' style={{ marginLeft: "11rem" }}>
                    <div className="card w-100">
                        <div className="card-body">
                            <h5 className="card-title">Thread</h5>
                            <div className="accordion" id="accordionExamples">
                                <div className="card">
                                    <div className="bg-light border-bottom" id="headingOne">
                                        <h4 className="mb-0">
                                            <div className="btn btn-link btn-small" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Stock
                                            </div>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <h6 className="row ml-3 mt-1">
                                            <small>Stock</small>
                                            <small className='ml-4 text-danger'>2</small>
                                        </h6>
                                    </div>
                                </div>
                                <div className="card mt-2">
                                    <div className="bg-light border-bottom" id="headingTwo">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                Last order in date
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <h6 className="row ml-3 mt-1">
                                            <small>Last order in date</small>
                                            <small className="ml-3 text-danger">12-06-22</small>
                                        </h6>
                                    </div>
                                </div>
                                <div className="card mt-2">
                                    <div className="bg-light border-bottom" id="headingThree">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Out of stock
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <h6 className="row ml-4 mt-1">
                                            <small>Out of stock</small>
                                            <small className='ml-4 text-danger'>23</small>
                                        </h6>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-md-6 '>
                    <div className="card w-50" >
                        <div className="card-body">
                            <h5 className="card-title">Garment</h5>
                            <div className="accordion" id="accordionExamples">
                                <div className="card mt-2">
                                    <div className="bg-light border-bottom" id="headingone">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseone" aria-expanded="true" aria-controls="collapseone">
                                                Stock
                                            </button>
                                        </h4>
                                    </div>

                                    <div id="collapseone" className="collapse" aria-labelledby="headingone" data-parent="#accordionExamples">
                                        <h6 className="row ml-3 mt-1">
                                            <small>Stock</small>
                                            <small className='ml-4 text-danger'>9</small>
                                        </h6>
                                    </div>
                                </div>
                                <div className="card mt-2">
                                    <div className="bg-light border-bottom" id="headingtwo">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsetwo" aria-expanded="false" aria-controls="collapsetwo">
                                                Last order in date
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapsetwo" className="collapse" aria-labelledby="headingtwo" data-parent="#accordionExample">
                                        <h6 className="row mt-1 ml-3">
                                            <small>Last order in date</small>
                                            <small className='ml-4 text-danger'>23-02-22</small>
                                        </h6>
                                    </div>
                                </div>
                                <div className="card mt-2">
                                    <div className="bg-light border-bottom" id="headingthree">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsethree" aria-expanded="false" aria-controls="collapsethree">
                                                Out of stock
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapsethree" className="collapse" aria-labelledby="headingthree" data-parent="#accordionExample">
                                        <div className="row ml-3 mt-1">
                                            <small>Out of stock</small>
                                            <small className='text-danger ml-4 '>32</small>
                                        </div>
                                    </div>
                                </div>

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
                            <h5 className="card-title">Backing</h5>
                            <div className="accordion" id="accordionExamples">
                                <div className="card">
                                    <div className="bg-light border-bottom" id="headingOnes">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOnes" aria-expanded="true" aria-controls="collapseOnes">
                                                Stock
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapseOnes" className="collapse" aria-labelledby="headingOnes" data-parent="#accordionExample">
                                        <h6 className="row ml-3 mt-1">
                                            <small>Stock</small>
                                            <small className='ml-4 text-danger'>19</small>
                                        </h6>
                                    </div>
                                </div>
                                <div className="card mt-2">
                                    <div className="bg-light border-bottom" id="headingTwos">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwos" aria-expanded="true" aria-controls="collapseTwos">
                                                Last order in date
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapseTwos" className="collapse" aria-labelledby="headingTwos" data-parent="#accordionExample">
                                        <h6 className="row ml-3 mt-1">
                                            <small>Last order in date</small>
                                            <small className="ml-3 text-danger">02-10-22</small>
                                        </h6>
                                    </div>
                                </div>
                                <div className="card mt-2">
                                    <div className="bg-light border-bottom" id="headingThrees">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThrees" aria-expanded="false" aria-controls="collapseThrees">
                                                Out of stock
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapseThrees" className="collapse" aria-labelledby="headingThrees" data-parent="#accordionExample">
                                        <h6 className="row ml-4 mt-1">
                                            <small>Out of stock</small>
                                            <small className='ml-4 text-danger'>26</small>
                                        </h6>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-md-6 '>
                    <div className="card w-50" >
                        <div className="card-body">
                            <h5 className="card-title">Machine Parts</h5>
                            <div className="accordion" id="accordionExamples">
                                <div className="card mt-2">
                                    <div className="bg-light border-bottom" id="headingones">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseones" aria-expanded="true" aria-controls="collapseones">
                                                Stock
                                            </button>
                                        </h4>
                                    </div>

                                    <div id="collapseones" className="collapse" aria-labelledby="headingones" data-parent="#accordionExamples">
                                        <h6 className="row ml-3 mt-1">
                                            <small>Stock</small>
                                            <small className='ml-4 text-danger'>19</small>
                                        </h6>
                                    </div>
                                </div>
                                <div className="card mt-2">
                                    <div className="bg-light border-bottom" id="headingtwos">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsetwos" aria-expanded="false" aria-controls="collapsetwos">
                                                Last order in date
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapsetwos" className="collapse" aria-labelledby="headingtwos" data-parent="#accordionExample">
                                        <h6 className="row mt-1 ml-3">
                                            <small>Last order in date</small>
                                            <small className='ml-4 text-danger'>23-07-22</small>
                                        </h6>
                                    </div>
                                </div>
                                <div className="card mt-2">
                                    <div className="bg-light border-bottom" id="headingthrees">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsethrees" aria-expanded="false" aria-controls="collapsethrees">
                                                Out of stock
                                            </button>
                                        </h4>
                                    </div>
                                    <div id="collapsethrees" className="collapse" aria-labelledby="headingthrees" data-parent="#accordionExample">
                                        <div className="row ml-3 mt-1">
                                            <small>Out of stock</small>
                                            <small className='text-danger ml-4 '>13</small>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stock;