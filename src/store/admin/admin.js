import { combineReducers } from '@reduxjs/toolkit';
import { hoursReducer } from './availableHours/services';
import { profReducer } from './professionals/professionals';
import { serviceReducer } from './services/services';


export const adminSlice = combineReducers({
  profs: profReducer,
  services: serviceReducer,
  hours: hoursReducer,
})
