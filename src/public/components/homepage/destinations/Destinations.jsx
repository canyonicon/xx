// generate react component skeleton
import React from 'react';

// plugins
import VerticalCarousel from '../../../../plugins/verticalslider/VerticalCarousel';

// styles
import './Destinations.css';

// images
import deal1 from '/assets/images/deal1.png';
import deal2 from '/assets/images/deal2.png';
import deal3 from '/assets/images/deal3.png';
import deal4 from '/assets/images/deal4.png';


const Destinations = () => {
    
   const data = {
        "heading": "Popular Destinations",
        "slides": [
            {
                "introline": "Madina",
                "id": "Madina",
                "content": {
                    "price_text": "Starting form ",
                    "price_amount": "600",
                        "image": `${deal1}`,
                        "copy": "Dog ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
                }
            },
            {
                "introline": "Jeddah",
                "id": "Jeddah",
                "content": {
                    "price_text": "Starting form ",
                    "price_amount": "600",
                    "image": `${deal2}`,
                    "copy": "Elephant ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
                }
            },
            {
                "introline": "Riyadh",
                "id": "Riyadh",
                "content": {
                    "price_text": "Starting form ",
                    "price_amount": "700",
                    "image": `${deal4}`,
                    "copy": "Bears ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
                }
            },
            {
                "introline": "Dammam",
                "id": "Damam",
                "content": {
                    "price_text": "Starting form ",
                    "price_amount": "600",
                    "image": `${deal3}`,
                    "copy": "Dog ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
                }
            }
        ]
    };
    
    return (
        <section className='destinations'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 py-5">
                        <VerticalCarousel data={data.slides} heading={data.heading} />
                    </div>
                </div>
            </div>
        </section>
    );
 

}

export default Destinations;