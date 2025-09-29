import React from 'react';

// styles
import './Flights.css';

const Sidebar = () => {
    return (
        <div>
            <h3 className="title mb-4 d-none">
                Filters
            </h3>
            
            {/* Filter one */}
            <div className="filter">
                <h4 className="title">
                    Filter one
                </h4>
                <div className="row g-2">
                    <div className="col-12 d-flex flex-column gap-2 mt-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="one" />
                            <label className="form-check-label" htmlFor="one">Option one</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="two" />
                            <label className="form-check-label" htmlFor="two">Option two</label>
                        </div>
                    </div>
                </div>
                <hr className='my-4' />
            </div>

            
            
            {/* Filter two */}
            <div className="filter">
                <h4 className="title">
                    Filter Two
                </h4>
                <div className="row g-2">
                    <div className="col-12 d-flex flex-column gap-2 mt-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="three" />
                            <label className="form-check-label" htmlFor="three"> Option one </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="four" />
                            <label className="form-check-label" htmlFor="four"> Option two </label>
                        </div>

                    </div>
                </div>
                <hr className='my-4' />
            </div>


            {/* departure time */}
            <div className="time">
                <h4 className="title">
                    Departure time
                </h4>
                <div className="row g-2 mt-3">
                    <div className="col-6">
                        <input type="radio" className="btn-check" name="time" id="morning" defaultChecked />
                        <label className="btn btn-light-subtle custom-btn w-100" htmlFor="morning">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 16H21.75" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M18.75 15.5C18.75 12.1863 16.0637 9.5 12.75 9.5C9.43629 9.5 6.75 12.1863 6.75 15.5" stroke="#081B2F" strokeWidth="1.5"/>
                                <path d="M12.75 7V5" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M18.9373 9.56265L20.3516 8.14844" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M6.56265 9.56265L5.14844 8.14844" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>

                            <div className="title">
                                Morning
                            </div>
                            <div className="time">
                                00:00 - 12:00
                            </div>
                        </label>
                    </div>

                    <div className="col-6">
                        <input type="radio" className="btn-check" name="time" id="noon"/>
                        <label className="btn btn-light-subtle custom-btn w-100" htmlFor="noon">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.2498 16.564C15.0241 16.564 17.2731 14.315 17.2731 11.5407C17.2731 8.76643 15.0241 6.51744 12.2498 6.51744C9.47555 6.51744 7.22656 8.76643 7.22656 11.5407C7.22656 14.315 9.47555 16.564 12.2498 16.564Z" stroke="#081B2F" strokeWidth="1.5"/>
                                <path d="M12.25 4.42442V2.75" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M12.25 20.7506V19.0762" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M19.5756 11.75L21.25 11.75" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M3.25136 11.75L4.92578 11.75" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M17.4293 6.57071L18.6133 5.38672" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M5.88632 18.1138L7.07031 16.9298" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M7.07071 6.57071L5.88672 5.38672" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M18.6137 18.1138L17.4297 16.9298" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>

                            <div className="title">
                                Noon
                            </div>
                            <div className="time">
                                12:00 - 15:00
                            </div>
                        </label>
                    </div>

                    <div className="col-6">
                        <input type="radio" className="btn-check" name="time" id="afternoon"/>
                        <label className="btn btn-light-subtle custom-btn w-100" htmlFor="afternoon">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 16H21.75" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M12.75 9.5C9.43629 9.5 6.75 12.1863 6.75 15.5H18.75C18.75 12.1863 16.0637 9.5 12.75 9.5Z" fill="#081B2F" stroke="#081B2F" strokeWidth="1.5"/>
                                <path d="M12.75 7V5" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M18.9373 9.56265L20.3516 8.14844" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M6.56265 9.56265L5.14844 8.14844" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>

                            <div className="title">
                                Afternoon
                            </div>
                            <div className="time">
                                15:00 - 18:00
                            </div>
                        </label>
                    </div>

                    <div className="col-6">
                        <input type="radio" className="btn-check" name="time" id="evening"/>
                        <label className="btn btn-light-subtle custom-btn w-100" htmlFor="evening">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.25 16C12.6682 16 16.25 12.4182 16.25 8C16.25 7.62984 15.6952 7.56864 15.5038 7.88544C14.5931 9.39248 12.9392 10.4 11.05 10.4C8.17808 10.4 5.85 8.07192 5.85 5.2C5.85 3.31076 6.85752 1.65684 8.36456 0.746208C8.68136 0.554776 8.62016 0 8.25 0C3.83172 0 0.25 3.58172 0.25 8C0.25 12.4182 3.83172 16 8.25 16Z" fill="#222222"/>
                            </svg>

                            <div className="title">
                                Evening
                            </div>
                            <div className="time">
                                18:00 - 24:00
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;