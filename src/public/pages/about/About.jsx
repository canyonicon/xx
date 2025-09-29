import React from 'react';


// styles
import './About.css';

// import images
import ceo from '/assets/images/ceo.png';

// components
import Navbar from '../../components/navbar/Navbar';
import Subscribe from '../../components/common/subscribe/Subscribe';
import Footer from '../../components/common/footer/Footer';

const About = () => {
    return (
        <div>
            <div className="bg-light">
                <Navbar />
            </div>

            <section className='bg-light border-top pt-5 gallery'>
                
                {/* header start */}
                <div className="page-header">
                    <div className="container py-md-5">
                        <div className="row gx-md-5">
                            <div className="col-md-6">
                                <h1 className="title">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </h1>
                            </div>
                            <div className="col-md-6 text-secondary fs-5 pb-5">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                    </div>
                </div>
                {/* header end */}

                
                {/* content start */}
                <div className="container">

                    {/* easy booking */}
                    <div className="position-relative easy-booking rounded-4 py-5" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1601529686322-350562cc5d67?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
                        <div className="overlay"></div>
                        <div className="content container py-5 position-relative mb-5">
                            <div className="col-md-6 text-white">
                                <h1 className='title'>Easy Booking Process</h1>
                                <p className='fs-5 mt-4 description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className="video">

                        </div>
                        <div className="play-button">
                            <i className="bi bi-play-fill fs-5"></i>
                        </div>
                    </div>

                    {/* why us */}
                    <div className="container pt-5 mt-5 position-relative">
                        <h2 className="title mb-3">
                            Why Fly Taibah?
                        </h2>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div className="row pt-5 gx-md-5 pb-5">
                            <div className="col-md-6 pb-5">
                                <h3 className="title">
                                    Our Mission
                                </h3>
                                <div className="description mt-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>

                            <div className="col-md-6 pb-5">
                                <h3 className="title">
                                    Our Goal
                                </h3>
                                <div className="description mt-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>

                        </div>

                        <div className="ribbon">
                            <div className="row g-0">
                                <div className="col-8 bg-success" style={{height:'30px'}}></div>
                                <div className="col-4 bg-primary" style={{height:'30px'}}></div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* CEO message */}
                <div className="ceo py-5">
                    <div className="container py-md-5">
                    
                        <div className="row gx-0">
                            <div className="col-md-5">
                                <img src={ceo} alt="" className="w-100"/>
                            </div>

                            <div className="col-md-7 d-flex flex-column justify-content-center">
                                <div className="ceo-title col-md-10">
                                    “Excepteur sint occaecat cupidatat non proident”
                                </div>
                                <div className="ceo-message fs-3 col-md-8 mx-md-5 mt-4">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    <div className="ceo-info">

                                        <div className="name fw-semibold mt-5">
                                            Abdul Hakim Jameel
                                        </div>
                                        <div className="position fs-5 fw-semibold">
                                            CEO, Fly Taibah
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <Subscribe/>
            <Footer/>
        </div>
    );
};

export default About;
