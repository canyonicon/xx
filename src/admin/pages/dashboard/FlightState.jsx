import {useState} from 'react';



const FlightState = ({data, layout = 'small'}) => {
    
    const [percentage, setPercentage] = useState(0); // Set the initial percentage here

    let dynamicWidth = '100%';
    if (layout === 'small') {
      dynamicWidth = '70px';
    }

    return (
        <div>
            <div className="row g-4">
                <div className="col-lg-9 col-md-12">
                    <div className="row g-md-0">
                        <div className="col-md-12 col-lg-10">
                            <div className="route d-flex align-items-center gap-1">
                                <span>{data.source}</span>
                                <span className='bi bi-dash-lg'></span>
                                <span>{data.destination}</span>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-2 text-secondary small text-md-end">
                            {data.flight_duration}
                        </div>
                    </div>

                    <div className="row g-md-0 mt-2">
                        <div className="col-md-12 d-flex align-items-center gap-1">
                            <span className='fw-semibold'>{data.departure_time}</span>
                            <span className='bi bi-brightness-high-fill'></span>
                            <span className='text-secondary'>{data.departure_date}</span>
                        </div>
                        <div className="col-md-12 d-flex align-items-center gap-1">
                            <span className='fw-semibold'>{data.arrival_time}</span>
                            <span className='bi bi-moon-fill'></span>
                            <span className='text-secondary'>{data.arrival_date}</span>
                        </div>
                    </div>                    
                </div>
                <div className="col-lg-3 col-md-12">
                    <div className="flight-pie d-flex align-items-center justify-content-center text-success" style={{width: dynamicWidth}}>
                        <div className="border-main"></div>
                        <div className="overlay" style={{ '--p': `${data.booking_percent}%` }}></div>
                        {data.booking_percent}%
                    </div>
                </div>
                <div className="col-12 m-0">
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default FlightState;
