import React from 'react';

// styles
import './Dashboard.css';
import DashCard from './DashCard';
import FlightState from './FlightState';

const Dashboard = () => {

    // console.log(Math.random(), "random");

    const data = [
        {
            source: "Islamabad",
            destination: "Karachi",
            departure_time: "15:30",
            departure_date: "2024-01-21",
            arrival_time: "19:00",
            arrival_date: "2024-01-21",
            flight_duration: "3h 30m",
            flight_number: "PK-123",
            flight_name: "PIA",
            status: "On time",
            booking_percent: 0
        },
        {
            source: "Medina",
            destination: "Dubai-Al Makhtoum",
            departure_time: "15:30",
            departure_date: "2024-01-21",
            arrival_time: "19:00",
            arrival_date: "2024-01-21",
            flight_duration: "3h 30m",
            flight_number: "PK-123",
            flight_name: "PIA",
            status: "On time",
            booking_percent: 50
        },
        {
            source: "Medina",
            destination: "Dubai-Al Makhtoum",
            departure_time: "15:30",
            departure_date: "2024-01-21",
            arrival_time: "19:00",
            arrival_date: "2024-01-21",
            flight_duration: "3h 30m",
            flight_number: "PK-123",
            flight_name: "PIA",
            status: "On time",
            booking_percent: 90
        }
    ]

    return (
        
            <div className="row g-4">
                <div className="col-md-6 col-lg-8">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4">
                            <DashCard title="booking" value="7k" percent="-11"/>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <DashCard title="passengers" value="23k" percent="+20"/>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <DashCard title="flights" value="536" percent="+10"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 flight-states">
                    <div className="card text-start">
                        <div className="card-body p-4">
                            <h4 className="card-title mb-4">Upcoming Flights</h4>
                            {
                                data.map((item, index) => (
                                    <FlightState key={index} data={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Dashboard;