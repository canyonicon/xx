import React, { useState } from 'react';

// styles
import './Hero.css';

// components
import Navbar from "../../../../public/components/navbar/Navbar"
import HeroSlider from './slider/HeroSlider';
import HeroSearch from './search/HeroSearch';

const Hero = () => {
    // const [state, setState] = useState({
    //     // your state variables here
    // });

    return (
        <>
            <section className="hero position-relative">
                <div className="overlay"></div>
                
                {/* Navbar */}
                <Navbar />

                {/* Headings */}
				<div className="container position-relative mt-5 pt-md-5">
					<div className="row gy-4 align-items-center">
						<div className="col-12">
                            <h1 className='title col-md-8 text-white'>A journey to remember with Fly Taibah</h1>
						</div>
					</div>
				</div>
                
                {/* slider section */}
                <HeroSlider />

                {/* search form section */}
                <HeroSearch />

			</section>
        </>
    );
}

export default Hero;