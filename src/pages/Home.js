import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";

const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title='Luxurious Rooms'
          subtitle='Deluxe rooms starting from $150'
        >
          <Link to='/rooms/' className='btn-primary'>
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </React.Fragment>
  );
};

export default Home;
