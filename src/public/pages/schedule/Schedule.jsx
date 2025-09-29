import React from 'react';

// imoprt components
import Navbar from '../../components/navbar/Navbar';
import FlightState from '../../components/schedule/FlightState';
// styles
import './Schedule.css';
import HomeDeals from '../../components/homepage/deals/HomeDeals';
import Footer from '../../components/common/footer/Footer';



const Schedule = () => {
    return (
        <div>
            <div className="bg-light">
                <Navbar />
            </div>

            <section className='bg-light border-top py-5'>

                {/* header start */}
                <div className="page-header">
                    <div className="container py-md-5">
                        <h1 className="title">
                            Flight Schedule
                        </h1>
                        <p className="text-secondary fs-5 mt-3">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                {/* header end */}

                {/* schedule table start */}
                <div className="container">
                    <div className="card text-start rounded-4">
                        <div className="card-body bg-primary-light">
                            
                            {/* header */}
                            <div className="d-none d-md-flex row pt-2 pb-4 fw-semibold g-4 g-md-2">
                                <div className="col-md-4">
                                    Departure & Arrival
                                </div>
                                <div className="col-md-2">
                                    Total Duration
                                </div>
                                <div className="col-md-1">
                                    Stops
                                </div>
                                <div className="col-md-2">
                                    Price
                                </div>
                                <div className="col-md-2">
                                    Seat Availability
                                </div>

                            </div>

                            {/* line one */}
                            <FlightState />
                            <FlightState booked='full' />
                            <FlightState />
                            <FlightState />
                            <FlightState booked='delayed'/>
                            <FlightState />
                            <FlightState />

                        </div>
                    </div>
                    
                </div>
                <HomeDeals />

            </section>
            <Footer />
        </div>
    );
};

export default Schedule;
