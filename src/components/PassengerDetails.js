import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { passengersData } from '../redux/slice/serviceAction';
import { updatePassengerDetails } from '../redux/slice/cartSlice';
// import { useSelector } from 'react-redux';

const PassengerDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { selectedSeat } = useSelector((state) => state.bus);

  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    number: '',
    gender: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const submitHandler = () => {
    if (
      userData.fullName === '' ||
      userData.email === '' ||
      userData.number === '' ||
      userData.number === ''
    ) {
      alert('MUST Enter all details');
    } else {
      dispatch(updatePassengerDetails(userData));
      navigate('/displayTicket');
    }

    console.log(userData);
  };


  return (
    <div className="passenger-form">
      <div className="passenger-form-title">
        <h3>Passenger Details</h3>
      </div>
      <form action="#">
        <div className="form-control">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            placeholder="Enter Full Name *"
            name="fullName"
            id="fullName"
            value={userData.fullName}
            onChange={handleChange}
            // onChange={(e) => {
            //   e.persist();
            //   const { value } = e.target;
            //   setUserData((prev) => ({
            //     ...prev,
            //     fullName: value,
            //   }));
            // }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email ID *"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleChange}
            // onChange={(e) => {
            //   e.persist();
            //   const { value } = e.target;
            //   setUserData((prev) => ({
            //     ...prev,
            //     email: value,
            //   }));
            // }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Mobile Number</label>
          <input
            type="text"
            placeholder="Enter Your Mobile Number *"
            name="number"
            id="number"
            value={userData.number}
            onChange={handleChange}
            // onChange={(e) => {
            //   e.persist();
            //   const { value } = e.target;
            //   setUserData((prev) => ({
            //     ...prev,
            //     number: value,
            //   }));
            // }}
          />
        </div>
        <div className="form-control">
          <h3>Gender *</h3>
          <span className="gender">
            <input
              type="radio"
              name="gender"
              id="male"
              // checked={userData.gender === 'male'}
              value="Male"
              onChange={handleChange}
              // onChange={(e) => {
              //   e.persist();
              //   const { value } = e.target;
              //   setUserData((prev) => ({
              //     ...prev,
              //     gender: value,
              //   }));
              // }}
            />
            <label htmlFor="female">Male</label>
          </span>
          <span className="gender">
            <input
              type="radio"
              name="gender"
              id="female"
              // checked={userData.gender === 'female'}
              value="Female"
              onChange={handleChange}
              // onChange={(e) => {
              //   e.persist();
              //   const { value } = e.target;
              //   setUserData((prev) => ({
              //     ...prev,
              //     gender: value,
              //   }));
              // }}
            />
            <label htmlFor="female">Female</label>
          </span>
        </div>
        <div className="passenger-btn">
          <button
            type="submit"
            className="passenger-booking-btn"
            onClick={() => submitHandler()}
          >
            Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default PassengerDetails;
