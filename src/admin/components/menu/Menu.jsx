import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useTranslation } from 'react-i18next';
// styles
import './Menu.css'

import { Link, NavLink } from 'react-router-dom';



const Menu = () => {
    const { t } = useTranslation();
    
    const [collapse, setCollapse] = useState('');

    // hide admin-menu when user click on menu
    const hideAdminMenu = () => {
        const adminMenu = document.querySelector('.admin-menu .collapse.show');
        adminMenu.classList.remove('show');
    }
    

    return (
        
        <nav className="navbar navbar-expand-lg flex-column">
            <Link to={"/"} className="navbar-brand mb-0">
                <div className="d-flex justify-content-center">
                    <img src="/assets/images/logo.png" className='admin-menu-logo' alt="" />
                </div>
            </Link>
            
            <div className="admin-menu collapse navbar-collapse align-items-start" id="navbarSupportedContent">
                <ul className="navbar-nav flex-grow-1 mb-2 mb-lg-0 flex-column">
                    <li className="nav-item">
                        <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? 'active nav-link d-flex align-items-center' : 'nav-link d-flex align-items-center')} aria-current="page">
                            <i className="bi bi-house-fill pe-2"></i>
                            <span className='flex-grow-1'>{t("Dashboard")}</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/customers" className={({ isActive }) => (isActive ? 'active nav-link d-flex align-items-center' : 'nav-link d-flex align-items-center')} aria-current="page">
                            <i className="bi bi-people-fill pe-2"></i>
                            <span className='flex-grow-1'>{t("Customers")}</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/bookings" className={({ isActive }) => (isActive ? 'active nav-link d-flex align-items-center' : 'nav-link d-flex align-items-center')} aria-current="page">
                            <i className="bi bi-ticket-perforated-fill pe-2"></i>
                            <span className='flex-grow-1'>{t("Bookings")}</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/flights" className={({ isActive }) => (isActive ? 'active nav-link d-flex align-items-center' : 'nav-link d-flex align-items-center')} aria-current="page">
                            <i className="bi bi-airplane-fill pe-2"></i>
                            <span className='flex-grow-1'>{t("Flights")}</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/flyers" className={({ isActive }) => (isActive ? 'active nav-link d-flex align-items-center' : 'nav-link d-flex align-items-center')} aria-current="page">
                            <i className="bi bi-bell-fill pe-2"></i>
                            <span className='flex-grow-1'>{t("Frequent")}</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <a href="#" onClick={() => setCollapse('manage')} className={`btn-toggle nav-link d-flex align-items-center ` + (collapse == 'manage' ? '' : 'collapsed') } data-bs-toggle="collapse" data-bs-target="#customer-collapse" aria-expanded="false">
                            <i className="bi bi-house-gear-fill pe-2"></i>
                            <span className='flex-grow-1'>{t('Manage')}</span>
                            <i className="bi bi-chevron-right menu-chevron-right"></i>
                            <i className="bi bi-chevron-down menu-chevron-down"></i>
                        </a>
                        <div className={`collapse ` + (collapse == 'manage' ? 'show' : '') } id="customer-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                
                                <NavLink to="/admin/planes" className="nav-link d-flex align-items-center" aria-current="page">
                                    <i className="bi bi-airplane-engines-fill pe-2"></i>
                                    <span className='flex-grow-1'>{t('Airplanes')}</span>
                                </NavLink>

                                <NavLink to="/admin/airports" className="nav-link d-flex align-items-center" aria-current="page">
                                    <i className="bi bi-flag-fill pe-2"></i>
                                    <span className='flex-grow-1'>{t('Airports')}</span>
                                </NavLink>

                                <NavLink to="/admin/routes" className="nav-link d-flex align-items-center" aria-current="page">
                                    <i className="bi bi-compass-fill pe-2"></i>
                                    <span className='flex-grow-1'>{t('Routes')}</span>
                                </NavLink>
                                <NavLink to="/admin/employees" className="nav-link d-flex align-items-center" aria-current="page">
                                    <i className="bi bi-person-badge-fill pe-2"></i>
                                    <span className='flex-grow-1'>{t('Employees')}</span>
                                </NavLink>
                                <NavLink to="/admin/designations" className="nav-link d-flex align-items-center" aria-current="page">
                                    <i className="bi bi-briefcase-fill pe-2"></i>
                                    <span className='flex-grow-1'>{t('Designations')}</span>
                                </NavLink>
                            </ul>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a href="#" onClick={() => setCollapse('settings')} className={`btn-toggle nav-link d-flex align-items-center ` + (collapse == 'settings' ? '' : 'collapsed') } data-bs-toggle="collapse" data-bs-target="#setting-collapse" aria-expanded="false">
                            <i className="bi bi-gear-fill pe-2"></i>
                            <span className='flex-grow-1'>{t('Settings')}</span>
                            <i className="bi bi-chevron-right menu-chevron-right"></i>
                            <i className="bi bi-chevron-down menu-chevron-down"></i>
                        </a>
                        <div className={`collapse ` + (collapse == 'settings' ? 'show' : '') } id="setting-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <NavLink to="/admin/ehost" className="nav-link d-flex align-items-center" aria-current="page">
                                    <i className="bi bi-envelope-exclamation-fill pe-2"></i>
                                    <span className='flex-grow-1'>{t('SMTP')}</span>
                                </NavLink>
                                <NavLink to="/admin/sms" className="nav-link d-flex align-items-center" aria-current="page">
                                    <i className="bi bi-chat-right-dots-fill pe-2"></i>
                                    <span className='flex-grow-1'>{t('SMS')}</span>
                                </NavLink>
                                
                            </ul>
                        </div>
                    </li>
                    {/* <div className="d-none">
                        <li className="nav-item">
                            <Link to="#" className="nav-link d-flex align-items-center" aria-current="page">
                                <i className="bi bi-bell-fill pe-2"></i>
                                <span className='flex-grow-1'>{t('Notifications')}</span>
                            </Link>
                        </li>
                    </div> */}
                    
                </ul>
                <hr/>
                {/* <div className="dropdown">
                    <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                        <span>Mohammad</span>
                    </a>
                    <ul className="dropdown-menu text-small shadow">
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div> */}
            </div>
        </nav>

    );

    
};

export default Menu;
