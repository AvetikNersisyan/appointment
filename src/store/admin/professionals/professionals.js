import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  baseData: {
    name: '',
    lastName: '',
    id: null,
  }
}

export const profSlice  = createSlice({
  name: 'profs',
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

export const { reducer: profReducer} = profSlice;
export const selectProfSlice = state => state.admin.profs;

const { baseDataRefresh, listRefresh } = profSlice.actions;

export const profActions = {
  baseDataRefresh,
  listRefresh,
}

