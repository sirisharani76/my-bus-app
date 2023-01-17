
import { updateLocation, updateBus, updatePassengerDetails } from './cartSlice';

// import cartSlice from './cartSlice'

// const{actions} = cartSlice;

// export const busSelection = (selectedOption) => (dispatch) => {
// dispatch(actions.busDetails(selectedOption));
// };

export const locationSelection = (selectedOption) => (dispatch) => {
  dispatch(updateLocation(selectedOption));
};

export const busSelection = (selectedOption) => (dispatch) => {
  dispatch(updateBus(selectedOption));
}

export const passengersData = (selectedOption) => (dispatch) => {
  dispatch(updatePassengerDetails(selectedOption));
};