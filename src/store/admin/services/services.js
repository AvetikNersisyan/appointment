import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  baseData: {
    name: '',
    duration: 30,
    price: 0,
    professionalID: [],
    id: null,
  }
}

export const serviceSlice  = createSlice({
  name: 'services',
  initialState,
  reducers: {
    baseDataRefresh (state, action)  {
      return void(state.baseData = action.payload);
    },
    listRefresh (state, action)  {
      return void(state.list = action.payload);
    },

  }
})

export const { reducer: serviceReducer} = serviceSlice;
export const selectServiceSlice = state => state.admin.services;

const { baseDataRefresh, listRefresh } = serviceSlice.actions;

export const serviceActions = {
  baseDataRefresh,
  listRefresh,
}

