import { createPortal } from 'react-dom';
const Modal = ({ children, isOpen, title, handleClose}) => {
    const el = document.getElementById('modal-root');
    return createPortal(
        <div>
            <div className={isOpen ? 'modal fade show d-block' : 'modal fade'} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title fs-5" id="exampleModalLabel">
                                {title}
                            </div>
                            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show" hidden={!isOpen}></div>
        </div>
    , el);
}



const Body = ({ children }) => (
    <div className="modal-body">
        {children}
    </div>
);

const Footer = ({ children }) => (
    <div className="modal-footer">
        {children}
    </div>
);

export { Modal, Body, Footer };