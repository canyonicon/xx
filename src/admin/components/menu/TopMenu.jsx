import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const TopMenu = () => {

    // toggle bootstrap dark mode
    const [darkMode, setDarkMode] = useState(false);
    const currentDarkMode =  localStorage.getItem('darkMode');

    useEffect(() => {
        if (currentDarkMode === 'true') {
            setDarkMode(true);
        }
    });

    const toggleDarkMode = () => {
        const html = document.querySelector('html');
        
        if (currentDarkMode === 'true') {
            localStorage.setItem('darkMode', 'false');
            html.setAttribute('data-bs-theme', 'light');
            
        } else {
            localStorage.setItem('darkMode', 'true');
            html.setAttribute('data-bs-theme', 'dark');
        }

        setDarkMode(!darkMode);
    };

    return (
        <div className='top-bar'>
            
            <div className="border-bottom p-4">
                <div className="row g-4">
                    <div className="col-md-6 d-flex gap-3 align-items-center">
                        <span className="side-menu-collapse d-block d-md-none cursor" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <span className="navbar-toggler-icon"></span>
                        </span>
                        <div className="favorite">
                            <i className="bi bi-star"></i>
                        </div>
                        <div className="breadcrumd d-flex gap-2 align-items-center">
                            <Link to="" className="text-secondary">Dashboard</Link>
                            <i className="bi bi-arrow-right-short"></i>
                            <span className="">Home</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex gap-3 align-items-center justify-content-md-end">
                            <div className="search">
                                <input type="search" className='ps-4 form-control form-control-sm search-bg' placeholder='Search' />
                            </div>
                            <span className="cursor light-dark" onClick={toggleDarkMode}>
                                <i className={`bi bi-` + (darkMode ? 'brightness-high-fill text-warning' : 'moon-stars-fill')}></i>
                            </span>
                            <span className="cursor notification">
                                <i className="bi bi-bell"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopMenu;
