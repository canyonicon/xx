// generate react component code skeleton
import React from 'react';

// styles
import './Footer.css';

// components
import Marquee from 'react-fast-marquee';

// images
import logo from '/assets/images/logo.png';
import Social from '../social/Social';
import { Link } from 'react-router-dom';

const Footer = () => {
    
    return (
        <>
        <Marquee autoFill="true" className='py-5' style={{backgroundColor: '#fff'}}>
            <svg className="mx-4 text-primary-fill" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.6536 23.7363C3.6558 22.8508 4.15898 21.9851 4.97857 21.0161L0.239006 18.019C-0.0598266 17.8893 -0.0532347 17.707 0.120352 17.4916L1.12452 16.6347C1.30689 16.5226 1.50025 16.4743 1.709 16.5314L7.5582 17.5202L12.4318 12.2423L1.0542 4.54515C0.766357 4.37596 0.742187 4.18479 1.03882 3.96287L2.6802 2.65328L17.5119 6.82155L21.8934 2.13691C23.3633 0.86468 24.7916 0.29558 25.888 0.565847C26.4923 0.715264 26.7054 0.895442 26.8922 1.46234C27.2548 2.57418 26.6923 4.06834 25.3629 5.60644L20.6783 9.98785L24.8465 24.8196L23.5369 26.461C23.315 26.7554 23.1238 26.7313 22.9547 26.4456L15.2553 15.0702L9.97742 19.9416L10.9662 25.7908C11.0233 25.9974 10.9772 26.1907 10.8629 26.3753L10.006 27.3795C9.79285 27.553 9.60828 27.5596 9.47864 27.2608L6.48152 22.5212C5.50812 23.343 4.64239 23.8462 3.75248 23.8462C3.67118 23.844 3.6536 23.8154 3.6536 23.7363Z"/>
            </svg>
            <h6 className="title text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h6>
        </Marquee>

        <footer className="footer position-relative bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 bg-success text-white footer-1 py-5">
                        <h2 className="title">
                            Fly Taibah
                        </h2>
                        <p className="mt-4 slogan col-md-10">
                            Nunc vel metus cursus, tempor ipsum sit amet, rutrum justo. Maecenas tincidunt imperdiet magna.
                        </p>
                        <Link to="/contact" className='btn btn-dark my-4'>
                            Contact Us
                            <i className="bi-send ms-3"></i>
                        </Link>

                        <div className="sub-text mt-4">
                            info@flytaibah.com
                        </div>
                        <div className="sub-text">
                            +966 55 555 5555
                        </div>
                    </div>
                    <div className="col-md-8 footer-2 p-md-5 py-5">
                        <div className="row gy-5">
                            <div className="col-md-8">
                                <img src={logo} alt="logo" style={{width: "130px"}} />
                            </div>
                            <div className="col-md-4">
                                <Social />
                            </div>

                            <div className="col-md-4">
                                <h4 className="title text-uppercase">
                                    Quick Links
                                </h4>
                                <ul className="list-unstyled mt-4 d-flex flex-column gap-3">
                                    <li>
                                        <a href="#" className='footer-link'>Home</a>
                                    </li>
                                    <li>
                                        <a href="#" className='footer-link'>About Us</a>
                                    </li>
                                    <li>
                                        <a href="#" className='footer-link'>Services</a>
                                    </li>
                                    <li>
                                        <a href="#" className='footer-link'>Contact Us</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-4">
                                <h4 className="title text-uppercase">
                                    Company
                                </h4>
                                <ul className="list-unstyled mt-4 d-flex flex-column gap-3">
                                    <li>
                                        <a href="#" className='footer-link'>Terms & conditions</a>
                                    </li>
                                    <li>
                                        <a href="#" className='footer-link'>Privacy policy</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-4">
                                <h4 className="title text-uppercase">
                                    Learn More
                                </h4>
                                <p className="mt-4">
                                    <i className="bi-phone me-3"></i>
                                    +966 55 555 5555
                                </p>
                                <p>
                                    <i className="bi-geo-alt me-3"></i>
                                    Riyadh, Saudi Arabia
                                </p>
                            </div>

                            <div className="col-12">
                                © Copyright 2023, All Rights Reserved by Fly Taibah <br/>
                                Design & Developed By <a className="company" href='https://creativecloudsit.com' target='_blank'>Creative Clouds IT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}


export default Footer;