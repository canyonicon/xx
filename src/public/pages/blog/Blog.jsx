import React from 'react';
import {Link} from "react-router-dom";

// styles
import './Blog.css';

// components
import Navbar from '../../components/navbar/Navbar';
import Subscribe from '../../components/common/subscribe/Subscribe';
import Footer from '../../components/common/footer/Footer';
import HomeBlog from '../../components/homepage/blog/HomeBlog';

const Blog = () => {
    return (
        <div>
            
            <div className="bg-light">
                <Navbar />
            </div>

            <section className='bg-light border-top pt-5 main-blog'>
                {/* header */}
                <div className="page-header">
                    <div className="container py-md-5">
                        <h1 className="title">
                            Recent blogs
                        </h1>
                    </div>
                </div>

                {/* content */}
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-8">
                            <div className="card text-start blog-card">
                                <div className="card-img-top rounded overflow-hidden">
                                    <img className="w-100 rounded-4 main-img" src="/assets/images/deal4.png" alt="Title" />
                                </div>
                                <div className="card-body px-0">
                                    <h5 className="card-title">
                                        Wild Horse Event
                                    </h5>
                                    <p className="card-text text-secondary mb-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptate.
                                    </p>
                                    {/* link to read more with arrow */}
                                    <Link to="/blog-detail" href="#" className="">
                                        Read More
                                        <i className="ms-2 bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
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
                    

                    {/* pagination */}
                    {/* <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center mt-5">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li className="page-item active" aria-current="page">
                                <a className="page-link" href="#">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav> */}
                </div>

                <HomeBlog header={false} />

            </section>

            <Subscribe />
            <Footer />

        </div>
    );
};

export default Blog;