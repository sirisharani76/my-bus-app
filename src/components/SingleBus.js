import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import busData from '../busData';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { busSelection } from '../redux/slice/serviceAction';

const SingleBus = () => {
  const { busID } = useParams();
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [userSelectedBus, setUserSelectedBus] = useState('');

  const single = busData.find((bus) => bus.id === busID);

  const { title, image, price, from, to, deptTime, arrivalTime } = single;

  useEffect(() => {
    setUserSelectedBus(single);
  }, [userSelectedBus]);

  const handleChange = (e) => {
    let value = e.target.value;
    setSelectedSeat([...selectedSeat, value]);
  };

  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(
      busSelection({
        selectedSeat: selectedSeat,
        selectedBus: userSelectedBus,
      })
    );
  };

  return (
    <section className="single-bus">
      <div className="single-bus-img-cta">
        <img src={image} alt={title} />
      </div>
      <div className="bus-details">
        <h1>{title}</h1>
        <h3 className="location">
          {from} <FaArrowRight /> {to}
        </h3>
        <h3>PRICE: ₹ {price}-/</h3>
        <span className="time">
          <p>
            Dept Time: <span>{deptTime} PM</span>
          </p>
          <p>
            Arrival Time: <span>{arrivalTime} AM</span>
          </p>
        </span>
      </div>
      <div className="available-seats">
        <div className="seats">
          <div className="select-seat">
            <label htmlFor="seat-one">1A</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="1A"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">2A</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="2A"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">3A</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="3A"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">4A</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="4A"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">5A</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="5A"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">6A</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="6A"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">7A</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="7A"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">8A</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="8A"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">9A</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="9A"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">10A</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="10A"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="seats">
          <div className="select-seat">
            <label htmlFor="seat-one">1B</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="1B"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">2B</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="2B"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">3B</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="3B"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">4B</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="4B"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">5B</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="5B"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">6B</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="6B"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">7B</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="7B"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">8B</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="8B"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">9B</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="9B"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
          <div className="select-seat">
            <label htmlFor="seat-one">10B</label>
            <input
              type="radio"
              className="checkbox"
              id="seat-one"
              value="10B"
              name='seatNum'
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="get-passenger-details"
        onClick={() => submitHandler()}
      >
        <Link className="get-passenger-details-link" to="/passengerDetails">
          Book
        </Link>
      </button>
    </section>
  );
};

export default SingleBus;
