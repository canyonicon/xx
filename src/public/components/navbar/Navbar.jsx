import React, { useEffect } from 'react';
import './Navbar.css';
import Logo from '/assets/images/logo.png';
import LogoWhite from '/assets/images/logo-white.png';
import {Link, NavLink} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


const Navbar = () => {
    const { t } = useTranslation();

    const changeLanguage = code => e => {
        localStorage.setItem('language', code);
        window.location.reload();
    }

    return (
        <>
            {/* Your navbar content goes here */}
            <section className="front">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-fixed">
                        <Link to={"/"} className="navbar-brand" >
                            <img src={LogoWhite} alt="logo" width="100px" hidden={window.location.pathname !== '/'} />
                            <img src={Logo} alt="logo" width="100px" hidden={window.location.pathname == '/'} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav flex-grow-1 gap-5 mb-2 mb-lg-0 d-flex justify-content-center">
                                <li className="nav-item">
                                    <NavLink to="/flights" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
                                        {t("Flights")}
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/flights-schedule" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
                                        {t("Flight Schedule")}
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
                                        {t("About")}
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
                                        {t("Blog")}
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
                                        {t("Gallery")}
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
                                        {t("Contact")}
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#" onClick={changeLanguage('en')} hidden={i18next.language === 'en'}>
                                        <i className="bi bi-translate me-2"></i>
                                        English
                                    </a>
                                    <a className="nav-link text-dark font-ar" href="#" onClick={changeLanguage('ar')}  hidden={i18next.language === 'ar'}>
                                        <i className="bi bi-translate me-2"></i>
                                        العربية
                                    </a>
                                    {/* dropdown */}
                                    {/* <div className="dropdown">
                                        <button className="nav-link dropdown-toggle font-ar" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-globe me-2"></i>
                                            { i18next.language === 'en' ? 'العربية' : 'English'}
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item text-dark" href="#" onClick={changeLanguage('en')} hidden={i18next.language === 'en'}>English</a></li>
                                            <li><a className="dropdown-item text-dark font-ar" href="#" onClick={changeLanguage('ar')}  hidden={i18next.language === 'ar'}>العربية</a></li>
                                        </ul>
                                    </div> */}
                                </li>
                            </ul>
                            
                            <form className="d-flex gap-5 align-items-center" role="search">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/register" className="btn nav-link" aria-current="page">Register</Link>
                                    </li>
                                </ul>
                                <Link to="/login" className="btn btn-dark text-bg-dark" aria-current="page">
                                    Login
                                    <svg className="ms-2" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.10352 10.3011V15.4756L13.3172 6.40942L5.10352 10.3011Z" fill="#484848" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M6.17285 11.1088L17.9983 1.42676L12.6029 15.6905L6.17285 11.1088Z" fill="#222222" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M1 7.37L6.17454 11.0654L18 1.30945L1 7.37Z" fill="#222222" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                </Link>
                            </form>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    );
};

export default Navbar;
