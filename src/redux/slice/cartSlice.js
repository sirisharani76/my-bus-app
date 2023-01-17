import { createSlice } from '@reduxjs/toolkit';
import busData from '../../busData';

const initialServiceState = {
  busDetails: busData,
  pickupPoint: null,
  droppingPoint: null,
  date: null,
  selectedBus: null,
  selectedSeat: [],
  passengerDetails: null,
};


const cartSlice = createSlice({
  name: 'bus',
  initialState: initialServiceState,

  reducers: {
    updateLocation: (state, action) => {
      const { pickupPoint, droppingPoint, date } = action.payload;
      state.pickupPoint = pickupPoint;
      state.droppingPoint = droppingPoint;
      state.date = date;
    },
    updateBus: (state, action) => {
      const { selectedBus, selectedSeat } = action.payload;
      state.selectedBus = selectedBus;
      state.selectedSeat = selectedSeat;
    },
    updatePassengerDetails:(state,action) => {
      // const {userData} = action.payload;
      state.passengerDetails = action.payload;
    },
    clearData: (state) => {
      state.pickupPoint = null;
      state.droppingPoint= null;
      state.date= null;
      state.selectedBus= null;
      state.selectedSeat= [];
      state.passengerDetails= null;
},
},
});

export const { updateLocation, updateBus, updatePassengerDetails, clearData } = cartSlice.actions;

export default cartSlice.reducer;
