import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

const Rooms = () => {
  return (
    <Hero className='rooms-hero'>
      <Banner title='Our Rooms'>
        <Link to='/' className='btn-primary'>
          Return to Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Rooms;
