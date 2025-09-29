// generate overall faqs component
import React from 'react';

// styles
import './Faqs.css';

const Faqs = () => {
    return (
        <>
            <section className="faqs py-5 my-md-5">
                <div className="container mt-5">
                    <div className="row gy-5">
                        <div className="col-md-4">
                            <h2 className="title mb-md-5 w-md-50">
                                Frequently asked questions
                            </h2>
                        </div>
                        <div className="col-md-8">
                            {/* generate bootstrap 5 collapse with 3 items */}
                            <div className="accordion accordion-flush" id="faqsAccordion">
                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#faqsAccordion">
                                        <div className="accordion-body text-secondary pt-0 pe-5">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#faqsAccordion">
                                        <div className="accordion-body text-secondary pt-0 pe-5">
                                            It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#faqsAccordion">
                                        <div className="accordion-body text-secondary pt-0 pe-5">
                                            It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}


export default Faqs;