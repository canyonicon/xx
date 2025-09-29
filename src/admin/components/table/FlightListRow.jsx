import React from 'react';
import { Link } from 'react-router-dom';

const FlightListRow = () => {
    return (
        <tr>
            <td>
                <div className="form-check">
                    <input className="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" />
                </div>
            </td>
            <td>#874585</td>
            <td>123565</td>
            <td className=''>
                <small className='fw-semibold'>Islamabad - Jeddah</small>
                <br/>
                <small className='small'> Fri, 8 Dec - 11:30 AM <b className="bi bi-arrow-right"></b> Fri, 8 Dec - 04:00 PM</small>
            </td>
            <td>966553396357</td>
            <td>
                <span className="badge rounded-pill bg-success">
                    85%
                </span>
            </td>
            <td>
                <div className="dropdown">
                    <button className="btn-table" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <b className="bi bi-three-dots"></b>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link to="/admin/flight/booking/12" className="dropdown-item" href="#">Add Booking</Link></li>
                        <li><Link to="/admin/customer/12" className="dropdown-item" href="#">Booking Map</Link></li>
                    </ul>
                </div>
            </td>
        </tr>
    );
};

export default FlightListRow;