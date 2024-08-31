import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setFilterValue(state, action) {
      return action.payload;
    },
  },
});

export const { setFilterValue } = filtersSlice.actions;
export const selectFilter = (state) => state.filters;
export const filtersReducer = filtersSlice.reducer;
