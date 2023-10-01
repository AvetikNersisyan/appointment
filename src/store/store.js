import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import { adminSlice } from './admin/admin';


const rootReducer = combineReducers({
  admin: adminSlice,
})

export const store = configureStore({
  reducer: rootReducer
})
