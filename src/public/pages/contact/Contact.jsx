import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/common/footer/Footer';
import Social from '../../components/common/social/Social';

// styles
import './Contact.css';


const Contact = () => {
    return (
        <div>
            <div className="bg-light">
                <Navbar />
            </div>

            <section className='py-5 contact position-relative'>
                <div className="overlay"></div>
                <div className="container py-md-5 my-md-5">
                    <div className="row py-md-5 gy-5">
                        <div className="col-md-6">
                            <div className='d-flex flex-column justify-content-between gx-md-5 text-white position-relative'>
                                <div className="text">
                                    <h1 className="title mb-4">
                                        Always here to help
                                    </h1>
                                    <p className="mb-5">
                                        Eenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat.
                                    </p>
                                    <div className="contact-info d-flex flex-column gap-3">
                                        <div className="email d-flex align-items-center gap-3">
                                            <svg width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                                                <path  fill="white" fillRule="evenodd" clipRule="evenodd" d="M17.8068 4.37048C18.4742 4.85209 18.9454 5.59069 19.0745 6.44921C19.1197 6.75006 19.1605 7.05141 19.1967 7.35318C19.4768 9.95608 19.4643 12.9579 19.0745 15.5502C18.8588 16.9846 17.6881 18.0843 16.2431 18.2099L14.7328 18.3412C11.5838 18.6149 8.41691 18.6149 5.26787 18.3412L3.75763 18.2099C2.31257 18.0843 1.1419 16.9846 0.926198 15.5502C0.536374 12.9579 0.523887 9.95591 0.80403 7.35302C0.840242 7.05131 0.880965 6.75001 0.926198 6.44921C1.05512 5.59188 1.52519 4.85414 2.1911 4.37248L2.19034 4.36574L2.23759 4.33949C2.4101 4.21942 2.59518 4.11628 2.79041 4.03237L7.20636 1.57906C8.94299 0.614271 11.0546 0.61427 12.7913 1.57906L17.197 4.0267C17.4016 4.11353 17.5952 4.22142 17.7749 4.34778L17.8073 4.36578L17.8068 4.37048ZM16.9659 5.61424L12.0628 2.8903C10.7792 2.17719 9.21842 2.17719 7.93482 2.8903L3.04316 5.60789C2.70968 5.85951 2.47508 6.23626 2.40952 6.67227C2.39783 6.75004 2.38645 6.82784 2.37539 6.90568L7.93632 9.99509C9.21992 10.7082 10.7807 10.7082 12.0643 9.99509L17.6253 6.90564C17.6142 6.82782 17.6029 6.75002 17.5912 6.67227C17.5262 6.23991 17.2949 5.86582 16.9659 5.61424ZM17.7058 14.4803C17.9442 12.5013 17.9786 10.5039 17.8088 8.51962L12.7928 11.3063C11.0561 12.2711 8.94449 12.2711 7.20786 11.3063L2.19184 8.51966C2.02211 10.5039 2.05645 12.5013 2.29485 14.4803C2.32891 14.763 2.36713 15.0453 2.40952 15.3272C2.43352 15.4868 2.48015 15.6384 2.546 15.7789C2.7891 16.2975 3.29398 16.6639 3.88754 16.7155L5.39777 16.8468C8.46038 17.113 11.5403 17.113 14.6029 16.8468L16.1132 16.7155C16.5846 16.6745 17.0001 16.435 17.2729 16.0782C17.4366 15.8642 17.5489 15.608 17.5912 15.3272C17.6336 15.0453 17.6718 14.763 17.7058 14.4803Z"/>
                                            </svg>
                                            <span className="">
                                                info@flytaibah.com
                                            </span>
                                        </div>
                                        
                                        <div className="email d-flex align-items-center gap-3">
                                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.00092 7.00033C6.00092 5.89576 6.89635 5.00033 8.00092 5.00033C9.10548 5.00033 10.0009 5.89576 10.0009 7.00033C10.0009 8.1049 9.10548 9.00033 8.00092 9.00033C6.89635 9.00033 6.00092 8.1049 6.00092 7.00033Z" fill="white"/>
                                                <path d="M7.00092 10.5003C5.34406 10.5003 4.00092 11.8435 4.00092 13.5003C4.00092 14.0526 4.44863 14.5003 5.00092 14.5003H11.0009C11.5532 14.5003 12.0009 14.0526 12.0009 13.5003C12.0009 11.8435 10.6578 10.5003 9.00092 10.5003H7.00092Z" fill="white"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.54444 0.883009C6.50025 0.458268 9.5016 0.458268 12.4574 0.88301C13.9229 1.0936 15.052 2.28299 15.1861 3.75744L15.3131 5.15317C15.6064 8.37795 15.6064 11.6227 15.3131 14.8475L15.1861 16.2432C15.052 17.7177 13.9229 18.9071 12.4574 19.1176C9.5016 19.5424 6.50025 19.5424 3.54444 19.1176C2.07895 18.9071 0.94986 17.7177 0.815731 16.2432L0.688764 14.8475C0.395412 11.6227 0.395412 8.37795 0.688764 5.15318L0.815731 3.75744C0.94986 2.28299 2.07895 1.0936 3.54444 0.883009ZM12.244 2.36776C9.42975 1.96335 6.57209 1.96335 3.7578 2.36776C2.98001 2.47953 2.38075 3.11078 2.30956 3.89334L2.1826 5.28907C1.89747 8.42344 1.89747 11.5772 2.1826 14.7116L2.30956 16.1073C2.38075 16.8899 2.98 17.5211 3.7578 17.6329C6.57209 18.0373 9.42975 18.0373 12.2441 17.6329C13.0218 17.5211 13.6211 16.8899 13.6923 16.1073L13.8193 14.7116C14.1044 11.5772 14.1044 8.42343 13.8193 5.28906L13.6923 3.89333C13.6211 3.11078 13.0218 2.47953 12.244 2.36776Z" fill="white"/>
                                            </svg>
                                            <span className="">
                                                +0 12 457 4578 / +0 12 457 4578
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="socials mt-5">
                                    <Social />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card text-start border-0 shadow-sm rounded-3">
                                <div className="card-body p-4">
                                    <div className="row g-4 text-secondary">

                                        <div className="col-md-6">
                                            <label htmlFor="" className="form-label">First name</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <label htmlFor="" className="form-label">Last name</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="" className="form-label">Email</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="" className="form-label">Phone number</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="col-md-12">
                                            <div htmlFor="" className="form-label fs-6 text-dark">Subject</div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id='1'/>
                                                <label className="form-check-label" htmlFor="1">General Inquiry</label>
                                            </div>
                                            <div className="form-check form-check-inline mx-4">
                                                <input className="form-check-input" type="checkbox" id='2'/>
                                                <label className="form-check-label" htmlFor="2">General Inquiry</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id='3'/>
                                                <label className="form-check-label" htmlFor="3">General Inquiry</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="" className="form-label">Message</label>
                                            <textarea className="form-control" name="" id="" rows="6"></textarea>
                                        </div>

                                        <div className="col-12 text-md-end">
                                            <button className="btn btn-primary btn-shadow py-2 my-3">
                                                Send Message
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
