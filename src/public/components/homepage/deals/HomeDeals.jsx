// generate react component skeleton
import React from 'react';

// styles
import './HomeDeals.css';

// images
import deal1 from '/assets/images/deal1.png';
import deal2 from '/assets/images/deal2.png';
import deal3 from '/assets/images/deal3.png';
import deal4 from '/assets/images/deal4.png';

const HomeDeals = () => {
    return (
        <>
            <section className="deals mt-5 pt-md-5">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-lg-9 col-md-8 text-md-start text-center">
                            <h2 className="title">
                                <span className="">Flight deals at best till </span> 
                                <span className="text-primary">Jan 21, 2024</span> 
                            </h2>
                        </div>
                        <div className="col-lg-3 col-md-4 text-center text-md-end">
                            <a href="#" className="btn btn-primary btn-primary-light">
                                View All
                                <i className="ms-2 bi-send"></i>
                            </a>
                        </div>
                    </div>

                    <div className="row g-3">
                        <div className="col-md-8">
                            <div className="card text-white">

                                <div className="card-body d-flex flex-column justify-content-end">
                                    <h5 className="card-title d-flex gap-2 m-0">
                                        <span className='source'>Islamabad</span>
                                        <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.410246 14.3873C0.0463891 14.538 -0.109262 14.9834 0.0827413 15.3245L2.70449 19.982C2.94405 20.4075 3.45435 20.5823 3.90835 20.3943L27.5104 10.6192C28.6489 10.1477 29.2261 8.82813 28.7996 7.67197C28.3555 6.46818 27.0055 5.92547 25.8477 6.48528L19.0237 9.78486L9.37074 0.385103C8.97827 0.00293108 8.39938 -0.105217 7.88547 0.107627C7.04237 0.456808 6.70485 1.50626 7.18983 2.2706L13.4282 12.1023L3.962 16.6442L1.01091 14.4581C0.838524 14.3304 0.612073 14.3037 0.410246 14.3873ZM29.9993 24.8448H1.5986V27.1595H29.9993V24.8448Z" fill="#C8B388"/>
                                        </svg>
                                        <span className='source'>Jeddah</span>
                                    </h5>
                                    <small className="card-date mb-3">
                                        Fri, 8 Dec
                                    </small>
                                    <div className="card-pricing">
                                        Starting from 
                                        <span className="price ms-2">
                                            200 <sup> SAR </sup>
                                        </span>
                                    </div>
                                </div>
                                <div className="overlay"></div>
                                <div className="overlay-image" style={{backgroundImage: `url("${deal1}")`}}></div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card text-white">
                                <div className="card-body d-flex flex-column justify-content-end">
                                    <h5 className="card-title d-flex gap-2 m-0">
                                        <span className='source'>Islamabad</span>
                                        <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.410246 14.3873C0.0463891 14.538 -0.109262 14.9834 0.0827413 15.3245L2.70449 19.982C2.94405 20.4075 3.45435 20.5823 3.90835 20.3943L27.5104 10.6192C28.6489 10.1477 29.2261 8.82813 28.7996 7.67197C28.3555 6.46818 27.0055 5.92547 25.8477 6.48528L19.0237 9.78486L9.37074 0.385103C8.97827 0.00293108 8.39938 -0.105217 7.88547 0.107627C7.04237 0.456808 6.70485 1.50626 7.18983 2.2706L13.4282 12.1023L3.962 16.6442L1.01091 14.4581C0.838524 14.3304 0.612073 14.3037 0.410246 14.3873ZM29.9993 24.8448H1.5986V27.1595H29.9993V24.8448Z" fill="#C8B388"/>
                                        </svg>
                                        <span className='source'>Jeddah</span>
                                    </h5>
                                    <small className="card-date mb-3">
                                        Fri, 8 Dec
                                    </small>
                                    <div className="card-pricing">
                                        Starting from 
                                        <span className="price ms-2">
                                            200 <sup> SAR </sup>
                                        </span>
                                    </div>
                                </div>
                                <div className="overlay"></div>
                                <div className="overlay-image" style={{backgroundImage: `url("${deal2}")`}}></div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card text-white">
                                <div className="card-body d-flex flex-column justify-content-end">
                                    <h5 className="card-title d-flex gap-2 m-0">
                                        <span className='source'>Islamabad</span>
                                        <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.410246 14.3873C0.0463891 14.538 -0.109262 14.9834 0.0827413 15.3245L2.70449 19.982C2.94405 20.4075 3.45435 20.5823 3.90835 20.3943L27.5104 10.6192C28.6489 10.1477 29.2261 8.82813 28.7996 7.67197C28.3555 6.46818 27.0055 5.92547 25.8477 6.48528L19.0237 9.78486L9.37074 0.385103C8.97827 0.00293108 8.39938 -0.105217 7.88547 0.107627C7.04237 0.456808 6.70485 1.50626 7.18983 2.2706L13.4282 12.1023L3.962 16.6442L1.01091 14.4581C0.838524 14.3304 0.612073 14.3037 0.410246 14.3873ZM29.9993 24.8448H1.5986V27.1595H29.9993V24.8448Z" fill="#C8B388"/>
                                        </svg>
                                        <span className='source'>Jeddah</span>
                                    </h5>
                                    <small className="card-date mb-3">
                                        Fri, 8 Dec
                                    </small>
                                    <div className="card-pricing">
                                        Starting from 
                                        <span className="price ms-2">
                                            200 <sup> SAR </sup>
                                        </span>
                                    </div>
                                </div>
                                <div className="overlay"></div>
                                <div className="overlay-image" style={{backgroundImage: `url("${deal3}")`}}></div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="card text-white">
                                <div className="card-body d-flex flex-column justify-content-end">
                                    <h5 className="card-title d-flex gap-2 m-0">
                                        <span className='source'>Islamabad</span>
                                        <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.410246 14.3873C0.0463891 14.538 -0.109262 14.9834 0.0827413 15.3245L2.70449 19.982C2.94405 20.4075 3.45435 20.5823 3.90835 20.3943L27.5104 10.6192C28.6489 10.1477 29.2261 8.82813 28.7996 7.67197C28.3555 6.46818 27.0055 5.92547 25.8477 6.48528L19.0237 9.78486L9.37074 0.385103C8.97827 0.00293108 8.39938 -0.105217 7.88547 0.107627C7.04237 0.456808 6.70485 1.50626 7.18983 2.2706L13.4282 12.1023L3.962 16.6442L1.01091 14.4581C0.838524 14.3304 0.612073 14.3037 0.410246 14.3873ZM29.9993 24.8448H1.5986V27.1595H29.9993V24.8448Z" fill="#C8B388"/>
                                        </svg>
                                        <span className='source'>Jeddah</span>
                                    </h5>
                                    <small className="card-date mb-3">
                                        Fri, 8 Dec
                                    </small>
                                    <div className="card-pricing">
                                        Starting from 
                                        <span className="price ms-2">
                                            200 <sup> SAR </sup>
                                        </span>
                                    </div>
                                </div>
                                <div className="overlay"></div>
                                <div className="overlay-image" style={{backgroundImage: `url("${deal4}")`}}></div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );

}

export default HomeDeals;