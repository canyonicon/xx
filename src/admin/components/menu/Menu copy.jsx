import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useTranslation } from 'react-i18next';
// styles
import './Menu.css'

import { Link } from 'react-router-dom';

const Menu = () => {
    const { t } = useTranslation();
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 admin-sidebar border-end">
            <Link to={"/admin"} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <div className="d-flex justify-content-center">
                    <img src="/assets/images/logo.png" className='w-50' alt="" />
                </div>
            </Link>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto gap-2">
                <li className="nav-item">
                    <Link to="/admin" className="nav-link active d-flex align-items-center" aria-current="page">
                        <i className="bi bi-house-fill pe-2"></i>
                        <span className='flex-grow-1'>{t("Dashboard")}</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/customers" className="nav-link d-flex align-items-center" aria-current="page">
                        <i className="bi bi-people-fill pe-2"></i>
                        <span className='flex-grow-1'>{t('Customers')}</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/bookings" className="nav-link d-flex align-items-center" aria-current="page">
                        <i className="bi bi-ticket-perforated-fill pe-2"></i>
                        <span className='flex-grow-1'>{t('Bookings')}</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/flights" className="nav-link d-flex align-items-center" aria-current="page">
                        <i className="bi bi-airplane-fill pe-2"></i>
                        <span className='flex-grow-1'>{t('Flights')}</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="#" className="nav-link d-flex align-items-center" aria-current="page">
                        <i className="bi bi-badge-ad-fill pe-2"></i>
                        <span className='flex-grow-1'>{t('Frequent')} Flyers</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <a href="#" className="btn-toggle nav-link d-flex align-items-center collapsed" data-bs-toggle="collapse" data-bs-target="#customer-collapse" aria-expanded="false">
                        <i className="bi bi-house-gear-fill pe-2"></i>
                        <span className='flex-grow-1'>{t('Manage')}</span>
                        <i className="bi bi-chevron-right menu-chevron-right"></i>
                        <i className="bi bi-chevron-down menu-chevron-down"></i>
                    </a>
                    <div className="collapse" id="customer-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <Link to="/admin/planes" className="nav-link d-flex align-items-center" aria-current="page">
                                <i className="bi bi-airplane-engines-fill pe-2"></i>
                                <span className='flex-grow-1'>{t('Airplanes')}</span>
                            </Link>
                            <Link to="/admin/airports" className="nav-link d-flex align-items-center" aria-current="page">
                                <i className="bi bi-flag-fill pe-2"></i>
                                <span className='flex-grow-1'>{t('Airports')}</span>
                            </Link>
                            <Link to="/admin/routes" className="nav-link d-flex align-items-center" aria-current="page">
                                <i className="bi bi-compass-fill pe-2"></i>
                                <span className='flex-grow-1'>{t('Routes')}</span>
                            </Link>
                            <Link to="/admin/employees" className="nav-link d-flex align-items-center" aria-current="page">
                                <i className="bi bi-person-badge-fill pe-2"></i>
                                <span className='flex-grow-1'>{t('Employees')}</span>
                            </Link>
                            <Link to="/admin/designations" className="nav-link d-flex align-items-center" aria-current="page">
                                <i className="bi bi-briefcase-fill pe-2"></i>
                                <span className='flex-grow-1'>{t('Designations')}</span>
                            </Link>
                        </ul>
                    </div>
                </li>

                <li className="nav-item">
                    <a href="#" className="btn-toggle nav-link d-flex align-items-center collapsed" data-bs-toggle="collapse" data-bs-target="#setting-collapse" aria-expanded="false">
                        <i className="bi bi-gear-fill pe-2"></i>
                        <span className='flex-grow-1'>{t('Settings')}</span>
                        <i className="bi bi-chevron-right menu-chevron-right"></i>
                        <i className="bi bi-chevron-down menu-chevron-down"></i>
                    </a>
                    <div className="collapse" id="setting-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <Link to="/admin/ehost" className="nav-link d-flex align-items-center" aria-current="page">
                                <i className="bi bi-envelope-exclamation-fill pe-2"></i>
                                <span className='flex-grow-1'>{t('SMTP')}</span>
                            </Link>
                            <Link to="/admin/sms" className="nav-link d-flex align-items-center" aria-current="page">
                                <i className="bi bi-chat-right-dots-fill pe-2"></i>
                                <span className='flex-grow-1'>{t('SMS')}</span>
                            </Link>
                            
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
            <div className="dropdown">
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
            </div>
        </div>
    );
};

export default Menu;
