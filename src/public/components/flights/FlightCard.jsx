import React from 'react';
import ProtoTypes from 'prop-types';

// components
import Amenities from './Amenities';


const FlightCard = ({amenity}) => {
    return (
        <div>
            <div className="card custom-shadow mb-4">
                <div className="row g-3">
                    <div className="col-xl-9 col-md-8">
                        
                        <div className="flight-flow w-100 d-flex justify-content-between align-items-center">
                            {/* icon */}
                            <div className="from d-flex">
                                <span className="text-secondary">
                                    From
                                </span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_764_2583)">
                                        <rect x="10" y="5" width="12" height="12" rx="6" fill="white"/>
                                        <rect x="11" y="6" width="10" height="10" rx="5" stroke="#222222" strokeWidth="2"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_764_2583" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="5"/>
                                            <feGaussianBlur stdDeviation="5"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.0862745 0 0 0 0 0.364706 0 0 0 0 0.192157 0 0 0 0.3 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_764_2583"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_764_2583" result="shape"/>
                                        </filter>
                                    </defs>
                                </svg>
                            </div>

                            {/* line */}
                            <div className="flight-line w-100"></div>

                            {/* center plane */}
                            <div className="text-center plane-center mx-4">
                                <div className="flight-line-circle">
                                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.783042 10.9349C1.21529 10.5048 1.88185 10.3282 2.75276 10.2555L1.90432 6.48829C1.82193 6.27965 1.91395 6.19406 2.10332 6.17373L3.00954 6.24542C3.15291 6.27965 3.2706 6.35027 3.34443 6.47973L5.71108 9.80931L10.6541 9.61245L8.86199 0.324493C8.80422 0.10195 8.88553 -0.00290208 9.13803 0.0334752L10.5749 0.195033L15.7672 9.44661L20.1817 9.29896C21.517 9.39526 22.4895 9.81359 22.8918 10.4791C23.1133 10.8461 23.1293 11.0376 22.9442 11.4046C22.5794 12.1225 21.578 12.5761 20.1817 12.6778L15.7672 12.5301L10.5749 21.7817L9.13803 21.9433C8.8866 21.9786 8.80528 21.8737 8.86199 21.6522L10.652 12.3643L5.71001 12.1663L3.34335 15.4959C3.2706 15.6243 3.15398 15.696 3.00847 15.7302L2.10225 15.8019C1.91394 15.7827 1.82086 15.696 1.90324 15.4874L2.75169 11.7202C1.87757 11.6464 1.21101 11.4698 0.777692 11.0365C0.739174 10.9959 0.744524 10.9734 0.783042 10.9349Z" fill="#B09255"/>
                                    </svg>
                                </div>
                                <div className='small text-secondary' style={{width: '100px'}}>5h 30m - Direct</div>
                            </div>

                            {/* line */}
                            <div className="flight-line w-100"></div>

                            {/* icon */}
                            <div className="from d-flex">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_764_2583)">
                                        <rect x="10" y="5" width="12" height="12" rx="6" fill="white"/>
                                        <rect x="11" y="6" width="10" height="10" rx="5" stroke="#222222" strokeWidth="2"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_764_2583" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="5"/>
                                            <feGaussianBlur stdDeviation="5"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.0862745 0 0 0 0 0.364706 0 0 0 0 0.192157 0 0 0 0.3 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_764_2583"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_764_2583" result="shape"/>
                                        </filter>
                                    </defs>
                                </svg>
                                <span className="text-secondary">
                                    To
                                </span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            
                            <div className="source">
                                <h5 className="title text-uppercase text-success">Med</h5>
                                <p className="text-secondary small">Medina</p>
                                <div className="time-date">
                                    <span className='time fs-5'>
                                        03:30 PM
                                        <svg className='mx-2' width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.5 4.07995C9.98528 4.07995 12 6.09468 12 8.57995C12 9.39963 11.7806 10.1682 11.3978 10.83H13.5C13.9142 10.83 14.25 11.1657 14.25 11.58C14.25 11.9942 13.9142 12.33 13.5 12.33H1.5C1.08579 12.33 0.75 11.9942 0.75 11.58C0.75 11.1657 1.08579 10.83 1.5 10.83H3.60233C3.2195 10.1682 3 9.3997 3 8.57995C3 6.09468 5.01472 4.07995 7.5 4.07995ZM14.25 7.82995C14.6642 7.82995 15 8.16573 15 8.57995C15 8.96459 14.7105 9.28159 14.3375 9.32491L14.25 9.32996H13.5C13.0858 9.32996 12.75 8.99418 12.75 8.57995C12.75 8.19532 13.0395 7.87832 13.4125 7.835L13.5 7.82995H14.25ZM1.5 7.82995C1.91421 7.82995 2.25 8.16573 2.25 8.57995C2.25 8.96459 1.96047 9.28159 1.58747 9.32491L1.5 9.32996H0.75C0.33579 9.32996 0 8.99418 0 8.57995C0 8.19532 0.289533 7.87832 0.662535 7.835L0.75 7.82995H1.5ZM3.25734 3.27661L3.78767 3.80693C4.08056 4.09984 4.08056 4.57473 3.78767 4.86761C3.49478 5.16048 3.0199 5.16048 2.72701 4.86761L2.19668 4.33729C1.90378 4.04437 1.90378 3.5695 2.19668 3.27661C2.48957 2.98371 2.96445 2.98371 3.25734 3.27661ZM11.7427 3.27661C12.0356 2.98372 12.5104 2.98372 12.8033 3.27661C13.0737 3.54698 13.0945 3.9724 12.8657 4.26663L12.8033 4.33729L12.273 4.86761C11.9801 5.16048 11.5052 5.16048 11.2124 4.86761C10.9419 4.59726 10.9211 4.17182 11.1499 3.8776L11.2124 3.80695L11.7427 3.27661Z" fill="#222222"/>
                                            <path d="M7.76518 0.670029C7.35092 0.670071 7.01517 1.00582 7.01518 1.42002L7.01519 2.17002L7.02102 2.26411C7.06727 2.63395 7.38282 2.92007 7.76519 2.92002C8.17938 2.92002 8.51513 2.58427 8.51518 2.17003V1.42004L8.50934 1.32596C8.46304 0.956156 8.14752 0.670043 7.76518 0.670029Z" fill="#222222"/>
                                        </svg>
                                    </span>
                                    <span className="date text-secondary small">
                                        Jan 23, 2023
                                    </span>
                                </div>
                            </div>
                            <div className="destination text-end">
                                <h5 className="title text-uppercase text-success">ISB</h5>
                                <p className="text-secondary small">Islamabad</p>
                                <div className="time-date">
                                    <span className="date text-secondary small">
                                        Jan 23, 2023
                                    </span>
                                    
                                    <span className='time fs-5'>
                                        <svg className="mx-2" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.5 13C10.0898 13 13 10.0898 13 6.5C13 6.19925 12.5492 6.14952 12.3937 6.40692C11.6538 7.63139 10.31 8.45 8.775 8.45C6.44156 8.45 4.55 6.55843 4.55 4.225C4.55 2.68999 5.36861 1.34618 6.59308 0.606294C6.85048 0.450755 6.80075 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0898 2.91015 13 6.5 13Z" fill="#222222"/>
                                        </svg>
                                        03:30 PM
                                    </span>
                                    
                                </div>

                            </div>
                        </div>

                        {/* amenities */}
                        <Amenities hide={amenity} />

                    </div>
                    <div className="col-1 d-flex justify-content-center">
                        <div className="cut-border"></div>
                    </div>
                    <div className="col-xl-2 col-md-3 d-flex flex-column justify-content-end align-items-start">
                        <div className="">
                            <div className="badge bg-secondary-subtle text-secondary fw-normal p-2">
                                Economy
                            </div>
                            <div className='text-secondary mt-4 small'>
                                Staring From
                            </div>
                            <h3 className="title text-success">
                                300 SAR
                            </h3>
                            
                            <button type="button" className={amenity ? `btn btn-shadow btn-success` : `btn btn-shadow btn-primary` }>
                                {!amenity ? 'See Info' : 'Book Now'}
                            </button>
                        
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};


FlightCard.protoTypes = {
    amenity: ProtoTypes.bool.isRequired
}



export default FlightCard;
