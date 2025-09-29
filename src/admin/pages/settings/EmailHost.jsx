import React, {useState, useEffect} from 'react';

// styles
// import './Flight.css';

// imporrt components
import EmailHostRow from './EmailHostRow';

import { Offcanvas } from '../../../portals/Offcanvas';
import {useModal} from '../../../providers/ModalProvider';
import AddEmailHostModal from '../../components/modal/AddEmailHostModal';
import SendEmailModal from '../../components/modal/SendEmailModal';

import { useTranslation } from 'react-i18next';
import faker from 'faker';

const EmailHost = () => {
    // translation
    const { t } = useTranslation();

    // modals
    const { isModalOpen: isModal1Open, openModal: openModal1, closeModal: closeModal1 } = useModal('modal1');
    const { isModalOpen: isModal2Open, openModal: openModal2, closeModal: closeModal2 } = useModal('modal2');

    // states
    const [emailHost, setEmailHost] = useState([]);
    const [data, setData] = useState([]);

    // handle send modal
    const sendEmailModal = (data) => {
        setEmailHost(data);
        openModal1();
    }

    const fetchData = async () => {
        setData([
            {"id": faker.datatype.uuid(), "name": faker.name.findName(), "host": faker.internet.email(), "username": faker.name.firstName(), "password": faker.password, "port": 123, "security": "TLS"},
            {"id": faker.datatype.uuid(), "name": faker.name.findName(), "host": faker.internet.email(), "username": faker.name.firstName(), "password": faker.password, "port": 123, "security": "TLS"},
            {"id": faker.datatype.uuid(), "name": faker.name.findName(), "host": faker.internet.email(), "username": faker.name.firstName(), "password": faker.password, "port": 123, "security": "TLS"},
            {"id": faker.datatype.uuid(), "name": faker.name.findName(), "host": faker.internet.email(), "username": faker.name.firstName(), "password": faker.password, "port": 123, "security": "TLS"},
            {"id": faker.datatype.uuid(), "name": faker.name.findName(), "host": faker.internet.email(), "username": faker.name.firstName(), "password": faker.password, "port": 123, "security": "TLS"},
            {"id": faker.datatype.uuid(), "name": faker.name.findName(), "host": faker.internet.email(), "username": faker.name.firstName(), "password": faker.password, "port": 123, "security": "TLS"},
            {"id": faker.datatype.uuid(), "name": faker.name.findName(), "host": faker.internet.email(), "username": faker.name.firstName(), "password": faker.password, "port": 123, "security": "TLS"},
            {"id": faker.datatype.uuid(), "name": faker.name.findName(), "host": faker.internet.email(), "username": faker.name.firstName(), "password": faker.password, "port": 123, "security": "TLS"},
        ]);
    }

    useEffect(() => {
        fetchData();
    }, []);

    
    
    return (
        <div>
            {/* header */}
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h5 className="title">{t('Email Hosts')}</h5>
                </div>
                <div className="col-md-6 text-end">
                    <button className="btn btn-success" onClick={openModal2}>
                        <svg className='me-2' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.875 1.375C7.875 1.02982 7.59518 0.75 7.25 0.75C6.90482 0.75 6.625 1.02982 6.625 1.375V6.375H1.625C1.27982 6.375 1 6.65482 1 7C1 7.34518 1.27982 7.625 1.625 7.625H6.625V12.625C6.625 12.9702 6.90482 13.25 7.25 13.25C7.59518 13.25 7.875 12.9702 7.875 12.625V7.625H12.875C13.2202 7.625 13.5 7.34518 13.5 7C13.5 6.65482 13.2202 6.375 12.875 6.375H7.875V1.375Z" fill="white" stroke="white" strokeWidth="0.5" strokeLinecap="round"/>
                        </svg>
                        {t('Add Email Host')}
                    </button>
                </div>
            </div>

            {/* search */}
            <div className="bg-white p-2 rounded-3 my-3 control-header">
                <div className="row d-flex align-items-center">
                    <div className="col-md-3">
                        <div className="search">
                            <input type="search" className='ps-4 form-control form-control-sm search-bg' placeholder='Search' />
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="d-flex gap-1 align-items-center">
                            
                            {/* delete */}
                            <button className="button ms-auto invisible" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.625 6C14.625 6.20365 14.5592 6.39896 14.4419 6.54296C14.3247 6.68696 14.1658 6.76786 14 6.76786H4C3.83424 6.76786 3.67527 6.68696 3.55806 6.54296C3.44085 6.39896 3.375 6.20365 3.375 6C3.375 5.79635 3.44085 5.60104 3.55806 5.45704C3.67527 5.31304 3.83424 5.23214 4 5.23214H14C14.1658 5.23214 14.3247 5.31304 14.4419 5.45704C14.5592 5.60104 14.625 5.79635 14.625 6ZM17.125 0.625H0.875C0.70924 0.625 0.550268 0.705899 0.433058 0.8499C0.315848 0.993901 0.25 1.18921 0.25 1.39286C0.25 1.59651 0.315848 1.79181 0.433058 1.93581C0.550268 2.07982 0.70924 2.16071 0.875 2.16071H17.125C17.2908 2.16071 17.4497 2.07982 17.5669 1.93581C17.6842 1.79181 17.75 1.59651 17.75 1.39286C17.75 1.18921 17.6842 0.993901 17.5669 0.8499C17.4497 0.705899 17.2908 0.625 17.125 0.625ZM10.875 9.83929H7.125C6.95924 9.83929 6.80027 9.92018 6.68306 10.0642C6.56585 10.2082 6.5 10.4035 6.5 10.6071C6.5 10.8108 6.56585 11.0061 6.68306 11.1501C6.80027 11.2941 6.95924 11.375 7.125 11.375H10.875C11.0408 11.375 11.1997 11.2941 11.3169 11.1501C11.4342 11.0061 11.5 10.8108 11.5 10.6071C11.5 10.4035 11.4342 10.2082 11.3169 10.0642C11.1997 9.92018 11.0408 9.83929 10.875 9.83929Z" fill="#1C1C1C"/>
                                </svg>
                            </button>

                            {/* filter */}
                            <div className="dropdown filter">
                                <button className="button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.625 6C14.625 6.20365 14.5592 6.39896 14.4419 6.54296C14.3247 6.68696 14.1658 6.76786 14 6.76786H4C3.83424 6.76786 3.67527 6.68696 3.55806 6.54296C3.44085 6.39896 3.375 6.20365 3.375 6C3.375 5.79635 3.44085 5.60104 3.55806 5.45704C3.67527 5.31304 3.83424 5.23214 4 5.23214H14C14.1658 5.23214 14.3247 5.31304 14.4419 5.45704C14.5592 5.60104 14.625 5.79635 14.625 6ZM17.125 0.625H0.875C0.70924 0.625 0.550268 0.705899 0.433058 0.8499C0.315848 0.993901 0.25 1.18921 0.25 1.39286C0.25 1.59651 0.315848 1.79181 0.433058 1.93581C0.550268 2.07982 0.70924 2.16071 0.875 2.16071H17.125C17.2908 2.16071 17.4497 2.07982 17.5669 1.93581C17.6842 1.79181 17.75 1.59651 17.75 1.39286C17.75 1.18921 17.6842 0.993901 17.5669 0.8499C17.4497 0.705899 17.2908 0.625 17.125 0.625ZM10.875 9.83929H7.125C6.95924 9.83929 6.80027 9.92018 6.68306 10.0642C6.56585 10.2082 6.5 10.4035 6.5 10.6071C6.5 10.8108 6.56585 11.0061 6.68306 11.1501C6.80027 11.2941 6.95924 11.375 7.125 11.375H10.875C11.0408 11.375 11.1997 11.2941 11.3169 11.1501C11.4342 11.0061 11.5 10.8108 11.5 10.6071C11.5 10.4035 11.4342 10.2082 11.3169 10.0642C11.1997 9.92018 11.0408 9.83929 10.875 9.83929Z" fill="#1C1C1C"/>
                                    </svg>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">All</a></li>
                                    <li><a className="dropdown-item" href="#">Active</a></li>
                                    <li><a className="dropdown-item" href="#">Inactive</a></li>
                                </ul>
                            </div>

                            {/* sort */}
                            <div className="dropdown sort">
                                <button className="button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.19194 10.3081C1.07473 10.1908 0.91576 10.125 0.75 10.125C0.58424 10.125 0.425269 10.1908 0.308058 10.3081C0.190848 10.4253 0.125 10.5842 0.125 10.75C0.125 10.9158 0.190848 11.0747 0.308058 11.1919L2.80806 13.6919C2.92527 13.8092 3.08424 13.875 3.25 13.875C3.41576 13.875 3.57473 13.8092 3.69194 13.6919L6.19171 11.1922C6.30892 11.075 6.375 10.9158 6.375 10.75C6.375 10.5842 6.30915 10.4253 6.19194 10.3081C6.07473 10.1908 5.91576 10.125 5.75 10.125C5.58424 10.125 5.42527 10.1908 5.30806 10.3081L3.25 12.3661L1.19194 10.3081Z" fill="#1C1C1C"/>
                                        <path d="M2.625 0.75V13.25C2.625 13.5952 2.90482 13.875 3.25 13.875C3.59518 13.875 3.875 13.5952 3.875 13.25V0.75C3.875 0.404822 3.59518 0.125 3.25 0.125C2.90482 0.125 2.625 0.404822 2.625 0.75Z" fill="#1C1C1C"/>
                                        <path d="M12.8077 3.69162C12.9249 3.80883 13.0842 3.875 13.25 3.875C13.4158 3.875 13.5747 3.80915 13.6919 3.69194C13.8092 3.57473 13.875 3.41576 13.875 3.25C13.875 3.08424 13.8092 2.92527 13.6919 2.80806L11.1919 0.308058C11.0747 0.190848 10.9158 0.125 10.75 0.125C10.5842 0.125 10.4253 0.190848 10.3081 0.308058L7.80806 2.80806C7.69085 2.92527 7.625 3.08424 7.625 3.25C7.625 3.26001 7.62524 3.27002 7.62572 3.28002C7.63318 3.43522 7.69819 3.58207 7.80806 3.69194C7.92527 3.80915 8.08424 3.875 8.25 3.875C8.41576 3.875 8.57473 3.80915 8.69194 3.69194L10.75 1.63388L12.8077 3.69162Z" fill="#1C1C1C"/>
                                        <path d="M11.375 13.25V0.75C11.375 0.404822 11.0952 0.125 10.75 0.125C10.4048 0.125 10.125 0.404822 10.125 0.75V13.25C10.125 13.5952 10.4048 13.875 10.75 13.875C11.0952 13.875 11.375 13.5952 11.375 13.25Z" fill="#1C1C1C"/>
                                    </svg>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">None</a></li>
                                    <li><a className="dropdown-item" href="#">ASC</a></li>
                                    <li><a className="dropdown-item" href="#">DESC</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* content */}

            {/* table */}
            <div className="table-responsive">
                <table className="table align-middle table-hover mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Host</th>
                            <th scope="col">Username</th>
                            <th scope="col">Port</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(
                            data.map((host, index) => (
                                <EmailHostRow key={index} host={host} handleSendModal={() => sendEmailModal(host)}/>
                            ))
                        )}
                    </tbody>

                </table>
            </div>
                
            {/* pagination */}
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end mt-4">
                    <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li className="page-item active" aria-current="page">
                        <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>

            {/* offcanvas */}
            <Offcanvas isOpen={isModal1Open} title="Send Test Email" handleClose={closeModal1}>
                <SendEmailModal data={emailHost} />
            </Offcanvas>
            
            <Offcanvas isOpen={isModal2Open} title="New Email Host" handleClose={closeModal2}>
                <AddEmailHostModal />
            </Offcanvas>

        </div>
    );
};

export default EmailHost;
