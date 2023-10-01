import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  list    : [],
  baseData: {
    startTime     : '',
    professionalID: null,
    serviceID     : null,
    id            : null,
  }
};

export const hoursSlice  = createSlice({
  name: 'hours',
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

export const { reducer: hoursReducer} = hoursSlice;
export const selectHoursSlice = state => state.admin.hours;

const { baseDataRefresh, listRefresh } = hoursSlice.actions;

export const hoursActions = {
  baseDataRefresh,
  listRefresh,
}

