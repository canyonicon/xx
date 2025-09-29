import { Link } from 'react-router-dom';

const SMSListRow = ({host, handleSendModal}) => {
    
    return (
        <tr>
            <td>{host.name}</td>
            <td>{host.status}</td>
            <td className='d-flex gap-2'>
                <button className="btn-table ms-auto" type="button" onClick={handleSendModal}>
                    <b className="bi bi-chat-text"></b>
                </button>
                <button className="btn-table" type="button">
                    <b className="bi bi-pencil text-success"></b>
                </button>
                <div className="dropdown">
                    <button className="btn-table" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <b className="bi bi-trash text-danger"></b>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link to="/admin/customer/12" className="dropdown-item" href="#">Move to Trash</Link></li>
                    </ul>
                </div>
            </td>
        </tr>
    );
};

export default SMSListRow;