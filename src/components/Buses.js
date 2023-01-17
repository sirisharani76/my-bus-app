import React from 'react'
import { useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Buses = () => {

    const { busDetails } = useSelector(
      (state) => state.bus
    );
  return (
    <div className="section-center">
      {busDetails.map((product) => {
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
            <button className="view-seats-btn">
              <Link className="more-info" to={`/busDetails/${id}`}>
                view seats{' '}
              </Link>
            </button>
          </article>
        );
      })}
    </div>
  );
}

export default Buses