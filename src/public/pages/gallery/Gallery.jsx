import {React, useState} from 'react';

// components
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/common/footer/Footer';
import Subscribe from '../../components/common/subscribe/Subscribe';
import ImageModal from '../../components/global/ImageModal/ImageModal';

// plugins
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

// styles
import './Gallery.css';

// images
import image1 from '/assets/images/gallery/image (1).png';
import image2 from '/assets/images/gallery/image (2).png';
import image3 from '/assets/images/gallery/image (3).png';
import image4 from '/assets/images/gallery/image (4).png';
import image5 from '/assets/images/gallery/image (5).png';
import image6 from '/assets/images/gallery/image (6).png';
import image7 from '/assets/images/gallery/image (7).png';
import image8 from '/assets/images/gallery/image (8).png';
import image9 from '/assets/images/gallery/image (9).png';
import image10 from '/assets/images/gallery/image (10).png';
import image11 from '/assets/images/gallery/image (11).png';
import image12 from '/assets/images/gallery/image (12).png';
import image13 from '/assets/images/gallery/image (13).png';
import image14 from '/assets/images/gallery/image (14).png';
import image15 from '/assets/images/gallery/image (15).png';
import image16 from '/assets/images/gallery/image (16).png';





const Gallery = () => {

    // images array
    const images = [
        image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
        image11, image12, image13, image14, image15, image16,
        'https://cdn.pixabay.com/photo/2016/11/22/22/39/golf-1850984_1280.jpg',
        'https://cdn.pixabay.com/photo/2017/08/02/14/31/golf-2571826_1280.jpg'
    ]

    // create state to hide and show modal
    const [show, setShow] = useState(false);
    const [activeIndex, setActiveIndex] = useState(false);

    const handleModal = (newState, index) => {
        setShow(newState);
        setActiveIndex(index);
    };
   
    return (
        <div>
            <div className="bg-light">
                <Navbar />
            </div>

            <section className='bg-light border-top py-5 gallery'>
                
                {/* header start */}
                <div className="page-header">
                    <div className="container py-md-5">
                        <h1 className="title">
                            Gallery
                        </h1>
                        <p className="text-secondary fs-5 mt-3">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                {/* header end */}

                {/* gallery start */}
                <div className="container pb-5 mb-5">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200: 4}}
                        >
                        <Masonry>
                            {
                                images.map((image, index) => (
                                    <div className="image-container rounded-4 m-2" key={index}>
                                        <img src={image} className="gallery-image w-100" alt="" onClick={() => handleModal(true, index)}/>
                                    </div>
                                ))
                            }
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
                {/* start end */}
                
            </section>
            
            <Subscribe/>
            <Footer/>

            {/* render this component when click is true */}
            <ImageModal modal={handleModal} display={show} index={activeIndex} images={images} />
            
        </div>

    );
};

export default Gallery;