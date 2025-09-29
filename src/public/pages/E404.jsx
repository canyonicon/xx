import React from 'react';
import image from '/assets/images/404.gif';
const E404 = () => {
    return (
        <div>
            <section class="d-flex align-items-center min-vh-100 py-5">
                <div class="container py-5">
                    <div class="row align-items-center">
                        
                        <div class="col-md-7 text-center text-md-start ">
                            <div class="lc-block mb-3">
                                <div editable="rich">
                                    <h1 class="fw-bold h4">PAGE NOT FOUND!<br/></h1>
                                </div>
                            </div>
                            <div class="lc-block mb-3">
                                <div editable="rich">
                                    <h1 class="display-1 fw-bold text-muted">Error 404</h1>

                                </div>
                            </div>
                            <div class="lc-block mb-5">
                                <div editable="rich">
                                    <p class="rfs-11 fw-light">The page you are looking for was moved, removed or might never existed.</p>
                                </div>
                            </div>
                            <div class="lc-block">
                                <a class="btn btn-lg btn-primary" href="/admin/dashboard" role="button">Back to homepage</a>
                            </div>
                        </div>
                        <div class="col-md-5 text-center">
                            <img src={image} alt="404" class="w-100" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default E404;
