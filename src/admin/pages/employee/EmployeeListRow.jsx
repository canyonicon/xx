import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeListRow = () => {
    return (
        <tr>
            <td>
                <div className="form-check">
                    <input className="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" />
                </div>
            </td>
            <td>#874585</td>
            <td>
                <div className="flex">
                    <div className="d-flex align-items-center">
                        <span>
                            <img className='rounded-circle flag me-2' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
                        </span>
                        <span>John Doe</span>
                    </div>
                </div>
            </td>
            <td>AB4567899</td>
            <td>Flight Crew</td>
            <td>966553396357</td>
            <td>john@email.com</td>
            <td>Saudi Arabia</td>
            <td>
                <div className="dropdown">
                    <button className="btn-table" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <b className="bi bi-three-dots"></b>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><Link to="/admin/flight/booking/12" className="dropdown-item" href="#">Edit</Link></li>
                        <li><Link to="/admin/customer/12" className="dropdown-item" href="#">Delete</Link></li>
                    </ul>
                </div>
            </td>
        </tr>
    );
};

export default EmployeeListRow;