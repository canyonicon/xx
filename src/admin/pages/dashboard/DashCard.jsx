import React from 'react';

const DashCard = ({title, value, percent}) => {
    return (
        <div>
            <div className="card overflow-hidden dash-card">
                <div className="card-body d-flex flex-column gap-3 justify-content-between p-4 bg-success-light">
                    
                    <h4 className="title fw-normal text-capitalize">{title}</h4>
                    <div className="info d-flex justify-content-between align-items-center">
                        <div className="number fw-semibold m-0">{value}</div>
                        <div className='percent'>
                            <span className='me-1'>{percent}%</span>
                            
                            <svg hidden={percent > 0} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.45488 10.3922L14 12L12.6198 6.3939L10.898 8.0468L8.12069 5.15373C8.02641 5.05552 7.89615 5 7.76 5C7.62385 5 7.49359 5.05552 7.39931 5.15373L5.36 7.27801L2.36069 4.15373C2.16946 3.95453 1.85294 3.94807 1.65373 4.13931C1.45453 4.33054 1.44807 4.64706 1.63931 4.84627L4.99931 8.34627C5.09359 8.44448 5.22385 8.5 5.36 8.5C5.49615 8.5 5.62641 8.44448 5.72069 8.34627L7.76 6.22199L10.1766 8.73933L8.45488 10.3922Z" fill="#1C1C1C"/>
                            </svg>
                            <svg hidden={percent < 0} width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.45488 1.60777L13 0L11.6198 5.6061L9.89804 3.9532L7.12069 6.84627C7.02641 6.94448 6.89615 7 6.76 7C6.62385 7 6.49359 6.94448 6.39931 6.84627L4.36 4.72199L1.36069 7.84627C1.16946 8.04547 0.85294 8.05193 0.653735 7.86069C0.454529 7.66946 0.44807 7.35294 0.639307 7.15373L3.99931 3.65373C4.09359 3.55552 4.22385 3.5 4.36 3.5C4.49615 3.5 4.62641 3.55552 4.72069 3.65373L6.76 5.77801L9.17665 3.26067L7.45488 1.60777Z" fill="#1C1C1C"/>
                            </svg>

                            <div className="month">
                                <span className='text-primary small'>Last month</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default DashCard;
