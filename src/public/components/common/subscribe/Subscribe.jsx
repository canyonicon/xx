// generate react component skeleton
import React from 'react';

// styles
import './Subscribe.css';

// images
import bg from '/assets/images/subscribe-bg.png';

const Subscribe = () => {

    return (
        <>
        <section className="subscribe" style={{backgroundImage: `url("${bg}")`}}>
            <div className="overlay"></div>
            <div className="container position-relative mt-5">
                <div className="row my-5">
                    <div className="col-lg-5 col-md-6 text-white">
                        <h2 className="title">
                            Subscribe to our newsletter
                        </h2>

                        <p className="mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nemo, voluptate.
                        </p>

                        <form action="" className="mt-4">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Enter your email" />
                                <button className="btn btn-primary" type="submit">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
        </>
    );

}

export default Subscribe;