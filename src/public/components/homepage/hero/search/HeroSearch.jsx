// generate react component skeleton
import {React, useState, forwardRef} from 'react';
import PropTypes from "prop-types";
import { addMonths } from 'date-fns';
import format from 'date-fns/format';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// styles
import './HeroSearch.css';

const HeroSearch = ({home}) => {

    // set state for search type
    const [searchType, setSearchType] = useState('one-way');

    // function to handle search type
    const handleSearchType = (e) => {
        setSearchType(e.target.value);
    }

    const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
        <div className="custom-datepicker" onClick={onClick} ref={ref} style={{width: '300px'}}></div>
    ));

    // states for calendar
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <>
            <div className={home ? 'hero-search container mt-5 position-relative' : 'hero-search container pt-5 position-relative'}>

                {/* checks row */}
                <div className="row">
                    <div className="col-md-8">
                        <input type="radio" className="btn-check" name="options-outlined" onChange={handleSearchType} value="one-way" id="success-outlined" autoComplete="off" defaultChecked />
                        <label className={`btn btn-outline-dark `+(home ? 'text-white' : '')} htmlFor="success-outlined">One Way</label>

                        <input type="radio" className="btn-check" name="options-outlined" onChange={handleSearchType} value="round-trip" id="danger-outlined" autoComplete="off" />
                        <label className={`btn btn-outline-dark `+(home ? 'text-white' : '')} htmlFor="danger-outlined">Round Trip</label>

                        <input type="radio" className="btn-check" name="options-outlined" onChange={handleSearchType} value="multi-city" id="info-outlined" autoComplete="off" />
                        <label className={`btn btn-outline-dark `+(home ? 'text-white' : '')} htmlFor="info-outlined">Multi-city</label>

                    </div>

                    <div className="col-md-4 d-flex justify-content-md-end py-4 py-md-0">
                        <div className="direct-flight-check"></div>
                        <ul className="navbar-nav flex-row gap-5">
                            <li className="nav-item">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className={`form-check-label `+(home ? 'text-white' : '')} htmlFor="flexCheckDefault">
                                        Only direct flights
                                    </label>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <div className={` dropdown-toggle cursor `+(home ? 'text-white' : '')} data-bs-toggle="dropdown">
                                    1 Adult
                                </div>
                                <ul className="dropdown-menu dropdown-menu-lg-end">
                                    <li><a className="dropdown-item" href="#">2 Adults</a></li>
                                    <li><a className="dropdown-item" href="#">3 Adults</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <div className={` dropdown-toggle cursor `+(home ? 'text-white' : '')} data-bs-toggle="dropdown">
                                    Economy
                                </div>
                                <ul className="dropdown-menu dropdown-menu-lg-end">
                                    <li><a className="dropdown-item" href="#">Economy</a></li>
                                    <li><a className="dropdown-item" href="#">Business</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* filter row */}
                <div className="rounded mt-1">
                    <form className="" id='searchForm'>
                        <div className="row g-1">
                            <div className="col-md-4 position-relative">
                                <div className="p-3 bg-white rounded border">
                                    <label htmlFor="from" className="form-label mb-2">Where from?</label>
                                    <div className="d-flex gap-2 align-items-center">
                                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.15675 11.7562C1.92046 11.8486 1.82365 12.131 1.95361 12.3489L3.46617 14.885C3.71657 15.3048 4.2338 15.4821 4.68909 15.3041L19.6818 9.44353C20.3864 9.16812 20.7343 8.37372 20.4588 7.66918C20.1726 6.93682 19.3298 6.59532 18.6145 6.92177L14.1554 8.95672L7.93755 3.24207C7.67956 3.00496 7.30905 2.93551 6.9827 3.06307C6.43584 3.27684 6.22774 3.94216 6.55533 4.42944L10.5472 10.3672L4.44286 13.1315L2.54149 11.8021C2.42898 11.7235 2.28461 11.7062 2.15675 11.7562ZM21.2337 18.1226H2.91944V19.5314H21.2337V18.1226Z" fill="#222222"/>
                                        </svg>
                                        <input type="text" className="form-control custom" id="from" placeholder="Search city, airport or country" />
                                    </div>
                                </div>

                                {/* location switcher */}
                                <div className="d-flex justify-content-center align-items-center location-switcher">
                                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_13_1801)">
                                            <circle cx="27" cy="22" r="17" fill="white"/>
                                            <circle cx="27" cy="22" r="16.5" stroke="#CBD4E6"/>
                                        </g>
                                            <path d="M33.0195 24.1191L29.4707 27.675" stroke="#6E7491" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M20.9785 24.1191L33.0202 24.1191" stroke="#6E7491" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M20.9785 19.8821L24.5273 16.3263" stroke="#6E7491" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M33.0202 19.8809L20.9785 19.8809" stroke="#6E7491" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <defs>
                                            <filter id="filter0_d_13_1801" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                <feOffset dy="5"/>
                                                <feGaussianBlur stdDeviation="5"/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_1801"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_1801" result="shape"/>
                                            </filter>
                                        </defs>
                                    </svg>

                                </div>

                            </div>
                            
                            <div className='col-md-4'>
                                <div className="p-3 bg-white rounded border">
                                    <label htmlFor="to" className="form-label mb-2">Where to?</label>
                                    <div className="d-flex gap-2 align-items-center">
                                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.15675 11.7562C1.92046 11.8486 1.82365 12.131 1.95361 12.3489L3.46617 14.885C3.71657 15.3048 4.2338 15.4821 4.68909 15.3041L19.6818 9.44353C20.3864 9.16812 20.7343 8.37372 20.4588 7.66918C20.1726 6.93682 19.3298 6.59532 18.6145 6.92177L14.1554 8.95672L7.93755 3.24207C7.67956 3.00496 7.30905 2.93551 6.9827 3.06307C6.43584 3.27684 6.22774 3.94216 6.55533 4.42944L10.5472 10.3672L4.44286 13.1315L2.54149 11.8021C2.42898 11.7235 2.28461 11.7062 2.15675 11.7562ZM21.2337 18.1226H2.91944V19.5314H21.2337V18.1226Z" fill="#222222"/>
                                        </svg>
                                        <input type="text" className="form-control custom" id="to" placeholder="Search city, airport or country" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="p-3 bg-white d-flex justify-content-between rounded border">



                                    {/* date pickers */}
                                    <div
                                        className={ searchType == 'round-trip' ? 'd-none' : '' }
                                    >
                                        <DatePicker
                                            
                                            dateFormat="dd-MM-yyyy"
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            minDate={new Date()}
                                            maxDate={addMonths(new Date(), 1)}
                                            customInput={<CustomDateInput />}
                                        />
                                    </div>
                                    
                                    <div
                                        className={ searchType != 'round-trip' ? 'd-none' : '' }
                                    >
                                        <DatePicker
                                            dateFormat="dd-MM-yyyy"
                                            selected={startDate}
                                            onChange={onChange}
                                            minDate={new Date()}
                                            maxDate={addMonths(new Date(), 1)}
                                            startDate={startDate}
                                            endDate={endDate}
                                            selectsRange
                                            showDisabledMonthNavigation
                                            monthsShown={2}
                                            customInput={<CustomDateInput />}
                                        />
                                    </div>









                                    {/* departure date */}
                                    <div className="w-100">
                                        <label htmlFor="to" className="form-label mb-2">Departure Date</label>
                                        <div className="form-control border-0 d-flex gap-2 align-items-center px-0">
                                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.36523 1.66797V4.16806" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M14.0332 1.66797V4.16806" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M18.1998 7.08479V14.1684C18.1998 16.6685 16.9497 18.3352 14.033 18.3352H7.36604C4.44927 18.3352 3.19922 16.6685 3.19922 14.1684V7.08479C3.19922 4.5847 4.44927 2.91797 7.36604 2.91797H14.033C16.9497 2.91797 18.1998 4.5847 18.1998 7.08479Z" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M7.36523 9.16797H14.0322" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M7.36523 13.334H10.6987" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            { startDate ? format(startDate, 'dd-MM-yyyy') : 'Select return date' }
                                           
                                        </div>
                                    </div>

                                    {/* return date */}
                                    <div className="w-100" hidden={searchType != 'round-trip' }>
                                        <label htmlFor="to" className="form-label mb-2">Return Date</label>
                                        <div className="form-control border-0 d-flex gap-2 align-items-center px-0">
                                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.36523 1.66797V4.16806" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M14.0332 1.66797V4.16806" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M18.1998 7.08479V14.1684C18.1998 16.6685 16.9497 18.3352 14.033 18.3352H7.36604C4.44927 18.3352 3.19922 16.6685 3.19922 14.1684V7.08479C3.19922 4.5847 4.44927 2.91797 7.36604 2.91797H14.033C16.9497 2.91797 18.1998 4.5847 18.1998 7.08479Z" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M7.36523 9.16797H14.0322" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M7.36523 13.334H10.6987" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>

                                            { endDate ? format(endDate, 'dd-MM-yyyy') : 'Select return date' }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </form>
                </div>

                <div className='col-12 text-center text-md-end pt-4 pt-md-1'>
                    <button type="submit" className={`btn btn-success me-2 ${searchType != 'multi-city' ? 'd-none' : ''}`}>Add Destination</button>
                    <button type="submit" className="btn btn-primary">Search Flights</button>
                </div> 
            </div>
        </>
    );

}

// prototype for home
HeroSearch.propTypes = {
    home: PropTypes.bool,
}

HeroSearch.defaultProps = {
    home: true, // Set your default value here
};



export default HeroSearch;