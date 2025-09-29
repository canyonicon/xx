import React, {useState} from 'react';
import AsyncSelect from 'react-select/async';
import { colourOptions } from '../../../Data';
import { toast } from 'react-hot-toast';

//import styles
import './AdminBooking.css';
import FlightState from '../dashboard/FlightState';

const AdminBooking = () => {

    const seats = {
        "cabins": [
          {
            "class": "economy",
            "rows": [
              {
                "rowNumber": 1,
                "seats": [
                  {"id": "1A", "available": true, "empty": false},
                  {"id": "1B", "available": true, "empty": false},
                  {"id": "1C", "available": true, "empty": true},
                  {"id": "1D", "available": false, "empty": false},
                  {"id": "1E", "available": true, "empty": false},
                  {"id": "1F", "available": true, "empty": false}
                ]
              },
              {
                "rowNumber": 2,
                "seats": [
                  {"id": "2A", "available": true, "empty": true},
                  {"id": "2B", "available": true, "empty": true},
                  {"id": "2C", "available": true, "empty": true},
                  {"id": "2D", "available": false, "empty": false},
                  {"id": "2E", "available": true, "empty": false},
                  {"id": "2F", "available": true, "empty": false}
                ]
              },
              {
                "rowNumber": 3,
                "seats": [
                  {"id": "3A", "available": true, "empty": false},
                  {"id": "3B", "available": true, "empty": false},
                  {"id": "3C", "available": true, "empty": false},
                  {"id": "3D", "available": true, "empty": false},
                  {"id": "3E", "available": false, "empty": false},
                  {"id": "3F", "available": true, "empty": false}
                ]
              },
              {
                "rowNumber": 4,
                "seats": [
                  {"id": "4A", "available": true, "empty": false},
                  {"id": "4B", "available": false, "empty": false},
                  {"id": "4C", "available": true, "empty": false},
                  {"id": "4D", "available": true, "empty": false},
                  {"id": "4E", "available": true, "empty": false},
                  {"id": "4F", "available": true, "empty": false}
                ]
              },
              {
                "rowNumber": 5,
                "seats": [
                  {"id": "5A", "available": true, "empty": false},
                  {"id": "5B", "available": false, "empty": false},
                  {"id": "5C", "available": true, "empty": false},
                  {"id": "5D", "available": true, "empty": false},
                  {"id": "5E", "available": true, "empty": false},
                  {"id": "5F", "available": true, "empty": false}
                ]
              }
              // Add more rows as needed
            ]
          },
          {
            "class": "business",
            "rows": [
              {
                "rowNumber": 6,
                "seats": [
                  {"id": "6A", "available" : true},
                  {"id": "6B", "available" : true},
                  {"id": "6C", "available" : true},
                  {"id": "6D", "available" : true},
                  {"id": "6E", "available" : true},
                  {"id": "6F", "available" : true}
                ]
              },
              {
                "rowNumber": 7,
                "seats": [
                  {"id": "7A", "available" : true},
                  {"id": "7B", "available" : true},
                  {"id": "7C", "available" : true},
                  {"id": "7D", "available" : true},
                  {"id": "7E", "available" : true},
                  {"id": "7F", "available" : true}
                ]
              }
              // Add more rows as needed
            ]
          }
          // Add more cabins as needed
        ]
    };

    const filterColors = (inputValue) => {
        return colourOptions.filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };
    
    const promiseOptions = (inputValue) =>
        new Promise((resolve) => {
            setTimeout(() => {
            resolve(filterColors(inputValue));
        }, 1000);
    });

    let [selectedSeats, setSelectedSeats] = useState([]);
    let [selectedCustomers, setSelectedCustomers] = useState([]);

    // write code to handle seat selection array
    const handleSeatChange = (e) => {

        // check if customers count is greater than selected seats
        if (e.target.checked) {
            if (selectedCustomers.length <= selectedSeats.length) {
                e.target.checked = false;
                toast.error('Please select more customers')
                return;

            }else{
                // add seat to selectedSeats array but use customer id as index
                setSelectedSeats([...selectedSeats, e.target.id]);
            }
            
        } else {
            // remove seat from selectedSeats array
            setSelectedSeats(selectedSeats.filter((seat) => seat !== e.target.id));
        }
    }
    const handleCustomerChange = (e, context) => {
        // console.log(e);
        if (context.action === "remove-value") {
            // console.log(context.removedValue.value);
            
            // find the index of removed customer
            let index = selectedCustomers.findIndex((customer) => customer.value === context.removedValue.value);

            // check and get value from selectedSeats array at index and remove it

            if (selectedSeats[index]) {
                let newSeats = selectedSeats.filter((seat, i) => i !== index);
                let input = document.getElementById(selectedSeats[index]);
                input.checked = false;
                setSelectedSeats(newSeats);
            }
            
        }
        
        setSelectedCustomers(e);

        // check if selectedCustomers count is 0
        if (e.length === 0) {
            // uncheck all seats
            selectedSeats.forEach((seat) => {
                let input = document.getElementById(seat);
                input.checked = false;
            });
            setSelectedSeats([]);
        }

        
    }

    return (
        
        <div className="row">
            <div className="col-md-5">
                <h3 className="title mb-3">
                    Booking
                    <button className="btn btn-outline-danger float-end">Cancel Booking</button>
                </h3>

                <div className="card text-start flight-states">
                    <div className="card-body p-4">
                        <FlightState key="0" data={{
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
                            booking_percent: 10
                        }} />

                        <div className="info row">
                            <div className="col-md-4 seat d-flex align-items-center  gap-2">
                                <div className="seat-label-dummy border"></div>
                                Empty Seats
                            </div>
                            <div className="col-md-4 seat d-flex align-items-center  gap-2">
                                <div className="seat-label bg-primary border"></div>
                                Booked Seats
                            </div>
                            <div className="col-md-4 seat d-flex align-items-center  gap-2">
                                <div className="seat-label-dummy bg-success border"></div>
                                Selected Seats
                            </div>

                        </div>
                        <hr/>

                        {/* show selected customers name with seat number */}
                        {selectedCustomers.map((customer, index) => (
                            <div key={index} className="selected-customer d-flex align-items-center gap-2 pb-3">
                                <div className="seat-number">
                                    <div className="seat-label-dummy border">
                                        {selectedSeats[selectedSeats.indexOf(selectedSeats[index])]}
                                    </div>
                                </div>
                                <div className="customer-name flex-grow-1">
                                    <div key={index} className="customer fw-semibold">
                                        {customer.label}
                                    </div>
                                </div>                                    
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* buttons */}
                <div className={ (selectedSeats.length == 0 || selectedSeats.length != selectedCustomers.length)  ? 'd-none' : 'd-flex gap-3 mt-3'}>
                    <button className="btn btn-success flex-grow-1 py-2 fs-5">Book Only</button>
                    <button className="btn btn-primary flex-grow-1 py-2 fs-5">Book & Confirm</button>
                </div>

            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4">
                <div className="customer-selection">
                    <h3 className="title mb-3">
                        Select Passenger
                    </h3>
                    <div className="d-flex gap-2">
                        <AsyncSelect
                            className='flex-grow-1'
                            isMulti
                            cacheOptions
                            defaultOptions
                            onChange={handleCustomerChange}
                            loadOptions={promiseOptions}
                        />
                        {/* <input type="text" className="form-control" placeholder="Search customers" /> */}
                        <button className="btn btn-success">New</button>
                    </div>
                </div>

                <div className="plan-layout  overflow-auto">
                    {/* <div className="cabin-name">Economy</div> */}

                    <div className="cabin d-flex align-items-center gap-3">
                        <div className="row-container d-flex gap-2 align-items-center">
                            <label className='seat-label-dummy'>A</label>                                
                            <label className='seat-label-dummy'>B</label>                                
                            <label className='seat-label-dummy'>C</label>                                
                            <label className='seat-label-dummy'></label>
                            <label className='seat-label-dummy'>D</label>
                            <label className='seat-label-dummy'>E</label>                                
                            <label className='seat-label-dummy'>F</label>
                        </div>
                    </div>


                    {/* loop through on seats array */}
                    {seats.cabins.map((cabin, cindex) => (
                        
                        <div  key={cindex} className="cabin mb-3 d-flex flex-column gap-2">
                            cabin class 
                            {cabin.rows.map((row, pindex) => (
                                <div key={pindex} className="row-container d-flex gap-2 align-items-center">
                                {row.seats.map((seat, index) => (
                                    <React.Fragment key={index} >
                                        
                                        {index === 3 && <label className='seat-label-dummy'>{row.rowNumber}</label>}
                                        
                                        {seat.empty
                                        ? <label className='seat-label-dummy empty'></label>
                                        :
                                        <div>
                                            <input
                                                onChange={handleSeatChange}
                                                type="checkbox"
                                                className='seat-input'
                                                id={seat.id}
                                                disabled={!seat.available}
                                            />
                                            <label
                                                htmlFor={seat.id}
                                                className={`seat-label ${seat.available ? '' : 'unavailable'}`}
                                            >
                                                {seat.id}
                                            </label>
                                        </div> }
                                    </React.Fragment>
                                ))}
                                </div>
                            ))}
                        </div>
                    ))}

                </div>

            </div>
        
            
        </div>
        
    );
};

export default AdminBooking;