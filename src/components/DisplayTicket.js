import React from 'react';
import { useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {clearData} from '../redux/slice/cartSlice';
import { Link } from 'react-router-dom';

const DisplayTicket = () => {
  const { date, selectedBus, selectedSeat, passengerDetails } = useSelector(
    (state) => state.bus
  );

  const { fullName, number, email, gender } = passengerDetails;
  const { title, price, from, to, arrivalTime, deptTime } = selectedBus;

  const dispatch = useDispatch();

  console.log(passengerDetails);
  console.log(selectedBus, 'BUS');

  return (
    <div>
      <div className="confirmation-title">
        <h1>CONFIRM TICKET</h1>
      </div>
      <section className="ticket-details">
        <div className="bus-details">
          <h3>{title}</h3>
          <p>
            {from} <FaArrowRight /> {to}
          </p>
          <div>
            {selectedSeat.map((seat) => {
              return (
                <span>
                  <h4>Seat Number:</h4>
                  <p> {seat}</p>
                </span>
              );
            })}
          </div>
          <span>
            <h4>DeptTime: </h4>
            <p>{deptTime} PM</p>
          </span>
          <span>
            <h4>ArrivalTime: </h4>
            <p>{arrivalTime} AM</p>
          </span>
          <span>
            <h4>DATE: </h4>
            <p>{date}</p>
          </span>
          <span>
            <h4>PRICE: </h4>
            <p>₹{price}</p>
          </span>
        </div>
        <div className="passenger-details">
          <span>
            <h4>Name:</h4>
            <p> {fullName}</p>
          </span>
          <span>
            <h4>Mobile Number:</h4>
            <p> +91 {number}</p>
          </span>
          <span>
            <h4>Email ID: </h4>
            <p> {email}</p>
          </span>
          <span>
            <h4>Gender: </h4>
            <p>{gender}</p>
          </span>
        </div>
      </section>
      <div className="back-to-home-btn">
        <button onClick={() => dispatch(clearData)}>
          <Link to='/'>Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default DisplayTicket;
