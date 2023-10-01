import { combineReducers } from '@reduxjs/toolkit';
import { profReducer } from './professionals/professionals';


export const adminSlice = combineReducers({

  profs: profReducer,
})
