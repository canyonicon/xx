// generat react component skeleton
import React from 'react';

// styles
import './Flights.css';

// components
import Footer from '../../components/common/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import HeroSearch from '../../components/homepage/hero/search/HeroSearch';
import Sidebar from './Sidebar';
import FlightCard from '../../components/flights/FlightCard';


const Flights = () => {
    return (
        <>
            <div className="bg-light">
                <Navbar />
            </div>

            <section className='bg-light'>
                {/* search */}
                <HeroSearch home={false}/>
                <div className="container">
                    

                    {/* flights */}
                    <div className="row mt-5 g-5">
                        {/* filters */}
                        <div className="col-md-12 col-lg-3">
                            <Sidebar />
                        </div>

                        {/* results */}
                        <div className="col-md-12 col-lg-9">
                            <div className="row">
                                <div className="col-md-9 d-flex align-items-center">
                                    <h4 className="title">
                                        We have <span className='ticket-count fw-bold'> 7 tickets</span> from <span className='ticket-source fw-bold'> Al Madinah </span> to <span className='ticket-destination fw-bold'> Islamabad </span>
                                    </h4>
                                </div>
                                <div className="col-md-3 d-flex justify-content-md-end align-items-center mb-3">
                                    <div className="dropdown-center">
                                        <button className="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className='me-3'>Best deals </span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Lowest Rates First</a></li>
                                            <li><a className="dropdown-item" href="#">Highest Rates First</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row flights">
                                <div className="col-12 pb-5 mb-5">
                                    <FlightCard amenity={false}/>
                                    <FlightCard amenity={true}/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>

            </section>
            
            <Footer />
        </>
    );

}

export default Flights;

