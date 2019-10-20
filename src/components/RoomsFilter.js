import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
import getUniqueValues from "../utils/GlobalFunctions";

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  //get unique types
  let types = getUniqueValues(rooms, "type");
  // add all
  types = ["all", ...types];
  // map types to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  // map number of guests to jsx
  let guests = getUniqueValues(rooms, "capacity");
  guests = guests.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form'>
        {/* type */}
        <div className='form-group'>
          <label htmlFor='type'>Room Type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* type end */}
        {/* guests */}
        <div className='form-group'>
          <label htmlFor='capacity'>Guest</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={handleChange}
          >
            {guests}
          </select>
        </div>
        {/* guests end */}
        {/* price */}
        <div className='form-group'>
          <label htmlFor='price'>Room Price ${price}</label>
          <input
            type='range'
            name='price'
            id='price'
            min={minPrice}
            value={price}
            max={maxPrice}
            className='form-control'
            onChange={handleChange}
          />
        </div>
        {/* price end */}
        {/* price */}
        <div className='form-group'>
          <label htmlFor='size'>Room Size</label>
          <div className='size-inputs'>
            <input
              type='number'
              name='minSize'
              id='size'
              value={minSize}
              className='size-input'
              onChange={handleChange}
            />
            <input
              type='number'
              name='maxSize'
              id='size'
              value={maxSize}
              className='size-input'
              onChange={handleChange}
            />
          </div>
        </div>
        {/* price end */}
        {/* extras */}
        <div className='form-group'>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='breakfast'
              id='breakfast'
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor='breakfast'>Breakfast</label>
          </div>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='pets'
              id='pets'
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor='pets'>Pets</label>
          </div>
        </div>
        {/* extras end */}
      </form>
    </section>
  );
}
