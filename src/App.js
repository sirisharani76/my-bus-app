import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import BusDetails from './components/BusDetails';
import Home from './components/Home';
import AllBuses from './components/AllBuses';
import SingleBus from './components/SingleBus';
import SharedLayout from './components/SharedLayout';
import PassengerDetails from './components/PassengerDetails';
import Buses from './components/Buses';
import DisplayTicket from './components/DisplayTicket';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/allBuses" element={<AllBuses />} />
          <Route path="/busDetails/:busID" element={<SingleBus />} />
          <Route path="/passengerDetails" element={<PassengerDetails />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/displayTicket" element={<DisplayTicket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
