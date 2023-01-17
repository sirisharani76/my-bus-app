import React from 'react';
import BusDetails from './BusDetails';

const AllBuses = () => {
  return (
    <section>
      <div className="title">
        <h3>ALL BUSES</h3>
      </div>
      <div>
        <BusDetails />
      </div>
    </section>
  );
};

export default AllBuses;
