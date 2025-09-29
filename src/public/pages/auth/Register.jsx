import React from 'react';
import { Link } from 'react-router-dom';

//styles
import './Auth.css';

const Register = () => {
    return (
        <div className='register bg position-relative' style={{backgroundImage: `url('/assets/images/auth-bg.png')`}}>
            <div className="overlay"></div>
            <div className="position-relative">
                <div className="row g-0">

                    {/* image */}
                    <div className="col-md-6 p-5 d-none d-md-block">
                        <div className="logo p-5">
                            <Link to={"/"} className="navbar-brand" >
                                <img src="/assets/images/logo-white.png" alt="" />
                            </Link>
                        </div>
                        <h1 className="title p-5">
                            Let's start your journey
                        </h1>
                        <div className="description p-5 col-md-10">
                            Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>

                    {/* form */}
                    <div className="col-md-6 p-md-5 position-relative">
                        <div className="overlay-side"></div>
                        <h1 className="title position-relative px-5 pt-5">
                            Register
                        </h1>

                        <div className="row g-4 position-relative p-5">
                            <div className="col-md-6">
                                <label className='small' htmlFor="floatingInput">First name</label>
                                <input type="text" className="form-control form-control-lg custom-input" id="floatingInput" placeholder="" />
                            </div>
                            <div className="col-md-6">
                                <label className='small' htmlFor="floatingInput">Last name</label>
                                <input type="text" className="form-control form-control-lg custom-input" id="floatingInput" placeholder="" />
                            </div>
                            <div className="col-md-6">
                                <label className='small' htmlFor="floatingInput">Passport number</label>
                                <input type="text" className="form-control form-control-lg custom-input" id="floatingInput" placeholder="" />
                            </div>
                            <div className="col-md-6">
                                <label className='small' htmlFor="floatingInput">Date of birth</label>
                                <input type="date" className="form-control form-control-lg custom-input" id="floatingInput" placeholder="" />
                            </div>
                            <div className="col-md-6">
                                <label className='small' htmlFor="floatingInput">Email</label>
                                <input type="email" className="form-control form-control-lg custom-input" id="floatingInput" placeholder="" />
                            </div>
                            <div className="col-md-6">
                                <label className='small' htmlFor="floatingInput">Phone number</label>
                                <input type="email" className="form-control form-control-lg custom-input" id="floatingInput" placeholder="" />
                            </div>
                            <div className="col-md-12 position-relative">
                                {/* input group with eye-fill */}
                                <label className='small' htmlFor="floatingInput">Password</label>
                                <input type="password" className="form-control form-control-lg custom-input" id="floatingInput" placeholder="" />
                            </div>
                            <div className="col-md-12 position-relative">
                                {/* input group with eye-fill */}
                                <label className='small' htmlFor="floatingInput">Confirm password</label>
                                <input type="password" className="form-control form-control-lg custom-input" id="floatingInput" placeholder="" />
                            </div>

                            <div className="col-md-6">
                                <button className="btn btn-dark" type="submit">
                                    Register
                                    <svg className="ms-2" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.10352 10.3011V15.4756L13.3172 6.40942L5.10352 10.3011Z" fill="#484848" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M6.17285 11.1088L17.9983 1.42676L12.6029 15.6905L6.17285 11.1088Z" fill="#222222" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M1 7.37L6.17454 11.0654L18 1.30945L1 7.37Z" fill="#222222" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                </button>
                            </div>
                            <div className="col-md-6 d-flex gap-3 align-items-center justify-content-md-end">
                                <span className='fw-normal'>Already have an account?</span> <Link to="/login" className='text-decoration-underline text-dark fw-semibold'>Login</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;