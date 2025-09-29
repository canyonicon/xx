import React from 'react';
import { Link } from 'react-router-dom';

const CustomerRow = ({customer, handleChildCheck}) => {

    return (
        <tr>
            <td>
                <div className="form-check">
                    <input className="form-check-input" name="child" type="checkbox" value={customer.id} onChange={handleChildCheck} />
                </div>
            </td>
            <td>#{customer.id}</td>
            <td>{customer.full_name}</td>
            <td>
                <div className="d-flex align-items-center">
                    {/* <span>
                        <img className='flag me-2' src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" alt="" />
                    </span> */}
                    <span>{customer.passport}</span>
                </div>
            </td>
            <td>{customer.dob}</td>
            <td>{customer.mobile}</td>
            <td>{customer.email}</td>
            <td>
                <div className="dropdown">
                    <button className="btn-table" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <b className="bi bi-three-dots"></b>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link to="/admin/customer/12" className="dropdown-item" href="#">View Profile</Link></li>
                        <li><Link to="/admin/customer/12" className="dropdown-item" href="#">Edit</Link></li>
                        <li><a className="dropdown-item" href="#">Delete</a></li>
                    </ul>
                </div>
            </td>
        </tr>
    );
};

export default CustomerRow;
