import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { updateLocation } from '../redux/slice/cartSlice';
import { locationSelection } from '../redux/slice/serviceAction';


const Home = () => {

const [pickupPoint, setpickupPoint] = useState('')
const [droppingPoint, setDroppingPoint] = useState('')
const [date, setDate] = useState('')


const dispatch = useDispatch();
const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'pickupPoint') {
      setpickupPoint(e.target.value);
    } else if (e.target.name === 'droppingPoint') {
      setDroppingPoint(e.target.value);
    }else if(e.target.name === 'date') {
      setDate(e.target.value)
    }
  };

  // Show Error Message
//   const showError = function (input, message) {
//     let formControl = input.parentElement;
//     formControl.querySelectorAll = 'form_control error';
//     let span = formControl.querySelector('span');
//     span.innerText = message;
//   };

  // const error = document.querySelectorAll('error')

  const submitHandler = () => {

    if (!pickupPoint || !droppingPoint || !date) {
      alert('Enter All Values')
    } else {
      dispatch(
        locationSelection({
          pickupPoint: pickupPoint,
          droppingPoint: droppingPoint,
          date: date,
        })
      );
      navigate('./allBuses');
    }
};

  return (
    <main className="home-page">
      <div className="get-location">
        <div className="title">
          <h2>Book Your Ticket</h2>
        </div>
        <form action="#" className="form" onSubmit={submitHandler}>
          <div className="form-control">
            {/* <label htmlFor="from">From</label> */}
            {/* <input
              type="text"
              placeholder="Pick Up Point"
              id="from"
              name="pickUpPoint"
              value={location.pickUpPoint}
              onChange={handelChange}
            /> */}

            <select
              id="select_page"
              className="operator"
              value={pickupPoint}
              onChange={handleChange}
              name="pickupPoint"
            >
              <option value="">Pick Up Point</option>
              <option value="chennai">chennai</option>
              <option value="Kerala">Kerala</option>
              <option value="coimbatore">coimbatore</option>
              <option value="kumuli">kumuli</option>
              <option value="Theni">Theni</option>
              <option value="Salem">Salem</option>
            </select>
            <span className="error"></span>
          </div>
          <div className="form-control">
            {/* <label htmlFor="to">To</label> */}
            <select
              id="select_page"
              className="operator"
              value={droppingPoint}
              onChange={handleChange}
              name="droppingPoint"
            >
              <option value="">Dropping Point</option>
              <option value="bangalore">bangalore</option>
              <option value="chennai">chennai</option>
              <option value="kumuli">kumuli</option>
              <option value="coimbatore">coimbatore</option>
              <option value="Kerala">Kerala</option>
              <option value="Theni">Theni</option>
            </select>
            <span className="error"></span>
          </div>
          <div className="form-control">
            {/* <label htmlFor="date">Onward Date</label> */}
            <input
              type="date"
              placeholder="Date"
              id="date"
              name="date"
              value={date}
              onChange={handleChange}
            />
            <span className="error"></span>
          </div>
          <div className="home-submit-btn-cta">
            <button type="submit" className="home-btn">
              Search Buses
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Home;
