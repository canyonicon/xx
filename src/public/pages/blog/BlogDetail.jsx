import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/common/footer/Footer';
import Subscribe from '../../components/common/subscribe/Subscribe';

const BlogDetail = () => {
    return (
        <div>
            <div className="bg-light">
                <Navbar />
            </div>

            {/* header */}
            <div className="page-header">
                <div className="container py-md-5">
                    <h1 className="title">
                        Wild Horse Event
                    </h1>
                    <small>Apr 15, 2020 · 4 min read</small>
                </div>
            </div>

            {/* content */}
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-12">
                        <img className="w-100 rounded-4 main-img" src="/assets/images/deal4.png" alt="Title" />
                    </div>

                    <div className="row gx-4">
                        <div className="col-md-8 text-secondary fs-5 py-5 pe-md-5">
                            Eenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.Eenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                            Eenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                            <br/>
                            <br/>
                            Eenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.Eenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                            Eenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                            <br/>
                            <br/>
                            <br/>
                            Eenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.Eenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                            Eenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                            <br/>
                            <br/>
                            <br/>
                            Eenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.Eenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                            Eenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                            <br/>


                            <div className="share-buttons d-flex gap-5 py-5">
                                <a href="#" className="btn btn-primary btn-primary-light">
                                    <i className="me-3 bi bi-facebook"></i>
                                    Share on Facebook
                                </a>
                                <a href="#" className="btn btn-primary btn-primary-light">
                                    <i className="me-3 bi bi-twitter"></i>
                                    Share on Twitter
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 py-5">
                            <h3 className="title">
                                Similar blogs
                            </h3>
                            <div className="mt-4">
                                <div className="row gy-4">
                                    
                                    <div className="col-12">
                                        <div className="card text-start blog-card">
                                            <div className="card-img-top rounded overflow-hidden">
                                                <img className="w-100 rounded-4" src="/assets/images/deal4.png" alt="Title" />
                                            </div>
                                            <div className="card-body px-0">
                                                <h5 className="card-title">
                                                    Wild Horse Event
                                                </h5>
                                                <p className="card-text text-secondary mb-3">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptate.
                                                </p>

                                                {/* link to read more with arrow */}
                                                <a href="#" className="">
                                                    Read More
                                                    <i className="ms-2 bi-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12">
                                        <div className="card text-start blog-card">
                                            <div className="card-img-top rounded overflow-hidden">
                                                <img className="w-100 rounded-4" src="/assets/images/deal4.png" alt="Title" />
                                            </div>
                                            <div className="card-body px-0">
                                                <h5 className="card-title">
                                                    Wild Horse Event
                                                </h5>
                                                <p className="card-text text-secondary mb-3">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptate.
                                                </p>

                                                {/* link to read more with arrow */}
                                                <a href="#" className="">
                                                    Read More
                                                    <i className="ms-2 bi-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="card text-start blog-card">
                                            <div className="card-img-top rounded overflow-hidden">
                                                <img className="w-100 rounded-4" src="/assets/images/deal4.png" alt="Title" />
                                            </div>
                                            <div className="card-body px-0">
                                                <h5 className="card-title">
                                                    Wild Horse Event
                                                </h5>
                                                <p className="card-text text-secondary mb-3">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptate.
                                                </p>

                                                {/* link to read more with arrow */}
                                                <a href="#" className="">
                                                    Read More
                                                    <i className="ms-2 bi-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* subscribe */}
            <Subscribe />

            {/* footer */}
            <Footer />


        </div>
    );
};

export default BlogDetail;
