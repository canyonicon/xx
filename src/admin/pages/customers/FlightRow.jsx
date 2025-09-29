import React from 'react';

const FlightRow = () => {
    return (
        <div>
            <div className="row bg-white p-3 rounded-3 my-3 text-dark-subtle g-4 g-md-2">

                <div className="col-md-4 d-flex gap-3 col-12 align-items-center">
                    <div className="">
                        <small className='text-secondary'>Departure</small>
                        <br/>
                        <span className='small fw-semibold'>Fri, 8 Dec - 11:30 AM</span>
                        <br/>
                        <small>Islamabad</small>
                    </div>

                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.328204 11.5101C0.0371123 11.6307 -0.0874115 11.987 0.0661945 12.2599L2.08048 15.8382C2.32005 16.2638 2.83035 16.4386 3.28434 16.2506L22.0088 8.49556C22.9197 8.11832 23.3815 7.06267 23.0402 6.13772C22.6849 5.17466 21.6049 4.74048 20.6786 5.18834L15.2193 7.82807L7.49677 0.308089C7.18279 0.00234497 6.71966 -0.0841756 6.30852 0.0861033C5.63403 0.365455 5.364 1.20504 5.752 1.81652L10.7428 9.68209L3.16968 13.3157L0.808746 11.5667C0.670835 11.4646 0.489669 11.4432 0.328204 11.5101ZM24 19.8774H1.27891V21.7292H24V19.8774Z" fill="#B09255"/>
                    </svg>

                    <div className="">
                        <small className='text-secondary'>Arrival</small>
                        <br/>
                        <span className='small fw-semibold'>Fri, 8 Dec - 04:00 PM</span>
                        <br/>
                        <small>Jeddah</small>
                    </div>
                </div>
                
                <div className="col-md-2 col-6">
                    <small className='text-secondary'>Stops</small>
                    <br/>
                    <span className='small fw-semibold'>Direct</span>
                </div>
                
                <div className="col-md-1 col-6">
                    <small className='text-secondary'>Duration</small>
                    <br/>
                    <span className='small fw-semibold'>05h 30m</span>
                </div>
                
                <div className="col-md-1 col-6">
                    <small className='text-secondary'>Price</small>
                    <br/>
                    <span className='small fw-semibold'>05h 30m</span>
                </div>
                
                <div className="col-md-1 col-6">
                    <small className='text-secondary'>Seat No</small>
                    <br/>
                    <span className='small fw-semibold'>23A</span>
                </div>

                <div className="col-md-1 col-6">
                    <small className='text-secondary'>Flight No</small>
                    <br/>
                    <span className='small fw-semibold'>PK-712</span>
                </div>

                <div className="col-md-2 col-6">
                    <span className="badge bg-success-subtle rounded-pill px-3 py-3 text-success">
                        <svg className='me-2' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.5" cy="8.5" r="8.5" fill="#459D66"/>
                            <circle cx="8.5" cy="8.5" r="1.5" fill="white"/>
                        </svg>
                        <span className='pe-2'>Paid</span>
                    </span>
                </div>
                
            </div>
        </div>
    );
};

export default FlightRow;
