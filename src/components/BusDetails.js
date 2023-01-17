import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import busData from '../busData';

const BusDetails = () => {

  const { droppingPoint, pickupPoint } = useSelector((state) => state.bus);

  const newBuses = busData.filter((bus) =>{
    return bus.from === pickupPoint;
  });


  return (
    <div className="section-center">
      {newBuses.map((product) => {
        const {
          id,
          title,
          image,
          price,
          quantity,
          from,
          to,
          arrivalTime,
          deptTime,
        } = product;
        return (
          <article key={id} className="card-one">
            <div className="img-cta">
              <img src={image} alt={title} />
            </div>
            <div className="info">
              <h4>{title}</h4>
              <p>
                {from} <FaArrowRight /> {to}
              </p>
              <h3>₹ {price}-/</h3>
              <p>Available Seats {quantity}</p>
              <span>
                <p>Dept Time: {deptTime} PM</p>
                <p>Arrival Time: {arrivalTime} AM</p>
              </span>
            </div>
            <button
              className="view-seats-btn"
            >
              <Link className="more-info" to={`/busDetails/${id}`}>
                view seats{' '}
              </Link>
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default BusDetails;
