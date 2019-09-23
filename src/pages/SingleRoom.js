import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import defaultBcg from "../images/room-1.jpeg";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = RoomContext;

  // componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className='error'>
          <h3>No such room could be found...</h3>
          <Link to='/rooms' className='btn-primary'>
            Back to Rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    return (
      <React.Fragment>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} Room`}>
            <Link to='/rooms' className='btn-primary'>
              Back to Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className='single-room'>
          <div className='single-room-images'>
            {images.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
