import React from 'react';
import { Link } from 'react-router-dom';

const PlaneListRow = () => {
    return (
        <tr>
            <td>
                <div className="form-check">
                    <input className="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" />
                </div>
            </td>
            <td>N45678</td>
            <td>Airbus</td>
            <td>A320</td>
            <td>1</td>
            <td>
                <div className="dropdown">
                    <button className="btn-table" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <b className="bi bi-three-dots"></b>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link to="/admin/flight/booking/12" className="dropdown-item" href="#">Edit</Link></li>
                        <li><Link to="/admin/customer/12" className="dropdown-item" href="#">Move to Trash</Link></li>
                    </ul>
                </div>
            </td>
        </tr>
    );
};

export default PlaneListRow;