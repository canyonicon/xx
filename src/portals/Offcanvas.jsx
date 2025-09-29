import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
const Offcanvas = ({ children, isOpen, title, direction = 'end', handleClose, width}) => {

    const { t } = useTranslation();
    if (i18next.language === "ar" || localStorage.getItem('language') === null) {
        direction = 'start';
    }

    const el = document.getElementById('modal-root');
    return createPortal(
        <div>
            <div className={isOpen ? `offcanvas offcanvas-${direction} show d-block ${width ? width : 'w-50'}` : `offcanvas offcanvas-${direction}` } id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="offcanvasLabel" aria-hidden="true">
                <div className="offcanvas-header">
                    <h5 hidden={title == null} className="offcanvas-title" id="offcanvasExampleLabel">{t(title)}</h5>
                    <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                </div>
                <div className="offcanvas-body px-5">
                    <div className="modal-close cursor" onClick={handleClose}>
                        <svg width="11" height="11" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.66942 1.71443C9.91349 1.47036 9.91349 1.07463 9.66942 0.83055C9.42534 0.586473 9.02961 0.586472 8.78553 0.83055L5.25 4.36608L1.71447 0.83055C1.47039 0.586472 1.07466 0.586473 0.830583 0.83055C0.586505 1.07463 0.586505 1.47036 0.830583 1.71443L4.36612 5.24997L0.830582 8.7855C0.586505 9.02958 0.586505 9.42531 0.830582 9.66938C1.07466 9.91346 1.47039 9.91346 1.71447 9.66938L5.25 6.13385L8.78553 9.66938C9.02961 9.91346 9.42534 9.91346 9.66942 9.66938C9.91349 9.42531 9.91349 9.02958 9.66942 8.7855L6.13388 5.24997L9.66942 1.71443Z" strokeWidth="0.5" strokeLinecap="round"/>
                        </svg>
                    </div>
                    {children}
                </div>
            </div>
            <div className="offcanvas-backdrop fade show" hidden={!isOpen}></div>
        </div>
    , el);
}

const CanvasFooter = ({ children }) => (
    <div className="offcanvas-footer">
        {children}
    </div>
);

export { Offcanvas, CanvasFooter };