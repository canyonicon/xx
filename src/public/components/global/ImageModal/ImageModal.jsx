import React, {useState} from 'react';

// styles
import './ImageModal.css';

const ImageModal = ({display, modal, images, index}) => {

    const [image, setImage] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleModalState = () => {
        // Perform some logic and then update the parent state
        modal(false);
        
    };

    // componentDidMount
    React.useEffect(() => {
        setImage(images[index]);
    }, [index]);

    
    // function to handle next and previous image with infinite loop
    const handleNextImage = () => {
        if(currentIndex === images.length - 1) {
            setCurrentIndex(0);
            setImage(images[0]);
        } else {
            setCurrentIndex(currentIndex + 1);
            setImage(images[currentIndex + 1]);
        }
    };


    return (
        <div>
            
            <div className={`image-modal modal fade ${display ? 'show d-block' : ''}`} tabIndex="-1">
                <div className="modal-dialog modal-lg modal-dialog-centered justify-content-center">
                    <div className="modal-content rounded-4">
                        <div className="modal-body p-0 rounded-4">
                            <div className="d-flex align-items-center justify-content-center px-3">
                                
                                <div className="me-3 arrow-left" onClick={handleNextImage}>
                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 1L1 7M1 7L7 13M1 7H15" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="image position-relative">
                                    <button type='button' className='close d-flex align-items-center justify-content-center'
                                        onClick={handleModalState}
                                        >
                                        <i className="bi bi-x text-white"></i>
                                    </button>
                                    
                                    <img src={image} className="w-100" alt=""/>
                                </div>
                                <div className="ms-3 arrow-right" onClick={handleNextImage}>
                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1L15 7M15 7L9 13M15 7H1" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ImageModal;