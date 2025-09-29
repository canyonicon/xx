// generate by react snippets
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './HomeBlog.css';

import deal1 from '/assets/images/deal1.png';
import deal2 from '/assets/images/deal2.png';
import deal3 from '/assets/images/deal3.png';
import deal4 from '/assets/images/deal4.png';

const HomeBlog = ({header}) => {
    return (
        <>
            <section className="blog py-5 pt-md-5">
                <div className="container mt-5">
                    <div className="row mb-4" hidden={!header}>
                        <div className="col-lg-9 col-md-8 text-md-start text-center">
                            <h2 className="title">
                                Recent articles and news 
                            </h2>
                        </div>
                        <div className="col-lg-3 col-md-4 text-center text-md-end">
                            <a href="#" className="btn btn-primary btn-primary-light">
                                See All
                                <i className="ms-3 bi-send"></i>
                            </a>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* col start */}
                        <div className="col-lg-3 col-md-4">
                            <div className="card text-start blog-card">
                                <div className="card-img-top rounded overflow-hidden">
                                    <img className="w-100" src={deal4} alt="Title" />
                                </div>
                                <div className="card-body px-0">
                                    <h5 className="card-title">
                                        Wild Horse Event
                                    </h5>
                                    <p className="card-text text-secondary mb-3">
                                        Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                                    </p>

                                    {/* link to read more with arrow */}
                                    <a href="#" className="">
                                        Read More
                                        <i className="ms-2 bi-arrow-right"></i>
                                    </a>
                                </div>
                                    
                            </div>
                            
                        </div>
                        {/* col end */}
                        {/* col start */}
                        <div className="col-lg-3 col-md-4">
                            <div className="card text-start blog-card">
                                <div className="card-img-top rounded overflow-hidden">
                                    <img className="w-100" src={deal4} alt="Title" />
                                </div>
                                <div className="card-body px-0">
                                    <h5 className="card-title">
                                        Blog Title
                                    </h5>
                                    <p className="card-text text-secondary mb-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Nemo, voluptate.
                                    </p>

                                    {/* link to read more with arrow */}
                                    <a href="#" className="">
                                        Read More
                                        <i className="ms-2 bi-arrow-right"></i>
                                    </a>
                                </div>
                                    
                            </div>
                            
                        </div>
                        {/* col end */}
                        {/* col start */}
                        <div className="col-lg-3 col-md-4">
                            <div className="card text-start blog-card">
                                <div className="card-img-top rounded overflow-hidden">
                                    <img className="w-100" src={deal4} alt="Title" />
                                </div>
                                <div className="card-body px-0">
                                    <h5 className="card-title">
                                        Blog Title
                                    </h5>
                                    <p className="card-text text-secondary mb-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Nemo, voluptate.
                                    </p>

                                    {/* link to read more with arrow */}
                                    <a href="#" className="">
                                        Read More
                                        <i className="ms-2 bi-arrow-right"></i>
                                    </a>
                                </div>
                                    
                            </div>
                            
                        </div>
                        {/* col end */}
                        {/* col start */}
                        <div className="col-lg-3 col-md-4">
                            <div className="card text-start blog-card">
                                <div className="card-img-top rounded overflow-hidden">
                                    <img className="w-100" src={deal4} alt="Title" />
                                </div>
                                <div className="card-body px-0">
                                    <h5 className="card-title">
                                        Blog Title
                                    </h5>
                                    <p className="card-text text-secondary mb-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Nemo, voluptate.
                                    </p>

                                    {/* link to read more with arrow */}
                                    <a href="#" className="">
                                        Read More
                                        <i className="ms-2 bi-arrow-right"></i>
                                    </a>
                                </div>
                                    
                            </div>
                            
                        </div>
                        {/* col end */}

                    </div>
                </div>
            </section>
        </>
    );

}


// defin prop types
HomeBlog.propTypes = {
    header: PropTypes.bool,
};

// set default props
HomeBlog.defaultProps = {
    header: true,
};

export default HomeBlog;