import React from 'react';
import { Link } from 'react-router-dom';

const BookingListRow = () => {
    return (
        <tr>
            <td>
                <div className="form-check">
                    <input className="form-check-input" name="" id="" type="checkbox" value="checkedValue" />
                </div>
            </td>
            <td>546789</td>
            <td>Airbus A320</td>
            <td>
                <small className='fw-semibold'>
                    Islamabad - Medina
                </small><br/>
                <small className='text-secondary'>
                    Fri, 8 Dec - 11:30 AM  ---  Fri, 8 Dec - 04:00 PM
                </small>
            </td>
            <td>Pakistan - Saudi Arabia</td>
            <td>Pakistan - Saudi Arabia</td>
            <td>
                <div className="dropdown">
                    <button className="btn-table" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <b className="bi bi-three-dots"></b>
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link to="/admin/flight/booking/12" className="dropdown-item" href="#">Edit</Link></li>
                        <li><Link to="/admin/customer/12" className="dropdown-item" href="#">Move to Trash</Link></li>
                    </ul>
                </div>
            </td>
        </tr>
    );
};

export default BookingListRow;