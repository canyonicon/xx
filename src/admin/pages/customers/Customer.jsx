import React from 'react';
import FlightRow from './FlightRow';

const Customer = () => {
    return (
        <div>
            {/* header */}

            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h5 className="title link">
                        <b className="bi-arrow-left me-2"></b>
                        Customer Detail
                    </h5>
                </div>
                <div className="col-md-6 text-end">
                    <button className="btn btn-success">
                        <svg className='me-2' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.875 1.375C7.875 1.02982 7.59518 0.75 7.25 0.75C6.90482 0.75 6.625 1.02982 6.625 1.375V6.375H1.625C1.27982 6.375 1 6.65482 1 7C1 7.34518 1.27982 7.625 1.625 7.625H6.625V12.625C6.625 12.9702 6.90482 13.25 7.25 13.25C7.59518 13.25 7.875 12.9702 7.875 12.625V7.625H12.875C13.2202 7.625 13.5 7.34518 13.5 7C13.5 6.65482 13.2202 6.375 12.875 6.375H7.875V1.375Z" fill="white" stroke="white" strokeWidth="0.5" strokeLinecap="round"/>
                        </svg>
                        Edit Customer
                    </button>
                </div>

            </div>

            {/* customer */}
            <div className="bg-white p-3 rounded-3 my-3">
                <div className="row d-flex align-items-center">
                    <div className="col-md-1">
                        <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png" className='w-100' alt="" />
                    </div>

                    <div className="col-md-9 small">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="text-secondary">
                                    Full Name
                                </div>
                                <div className="fw-semibold">
                                    Muhammad Saad Alharbi
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="text-secondary">
                                    ID or Passport number
                                </div>
                                <div className="fw-semibold">
                                    RT578568577
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="text-secondary">
                                    Date of Birth
                                </div>
                                <div className="fw-semibold">
                                    17 Jan 1998
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="text-secondary">
                                    Email
                                </div>
                                <div className="fw-semibold">
                                    info@creativecloudsit.com
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="text-secondary">
                                    Phone Number
                                </div>
                                <div className="fw-semibold">
                                    966598080208
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* customer flights */}

            {/* bootstrap tabs */}
            <ul className="nav nav-pills custom-tabs">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                        Upcomming Flights
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                        Previous Flights
                    </button>
                </li>
            </ul>

            {/* tab content */}
            <div className="tab-content" id="myTabContent">
                {/* flights */}
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <FlightRow />
                    <FlightRow />
                    <FlightRow />
                </div>
                
                {/* bookings */}
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <FlightRow />
                    <FlightRow />
                </div>
            </div>

        </div>
    );
};

export default Customer;
