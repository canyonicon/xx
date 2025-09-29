// generat react component skeleton
import React from 'react';

// components
import Hero from '../../components/homepage/hero/Hero';
import Destinations from '../../components/homepage/destinations/Destinations';
import HomeDeals from '../../components/homepage/deals/HomeDeals';
import HomeAbout from '../../components/homepage/about/HomeAbout';
import Testimonials from '../../components/homepage/testimonials/Testimonials';
import Faqs from '../../components/homepage/faqs/Faqs';
import HomeBlog from '../../components/homepage/blog/HomeBlog';
import Subscribe from '../../components/common/subscribe/Subscribe';
import Footer from '../../components/common/footer/Footer';

const Home = () => {
    return (
        <>
            <Hero />
            <Destinations />
            <HomeDeals />
            <HomeAbout />
            <Testimonials />
            <Faqs />
            <HomeBlog />
            <Subscribe />
            <Footer />
        </>
    );

}

export default Home;
