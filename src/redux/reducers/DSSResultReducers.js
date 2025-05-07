import { createSlice } from '@reduxjs/toolkit';

// initial state

const initialState = {
  DSSResults: [],
  DSSResult: null,
};

// define the slice
const DSSResultReducers = createSlice({
  name: 'DSSResult',
  initialState,
  reducers: {
    setDSSResults: (state, action) => {
      state.DSSResults = action.payload;
    },
    setDSSResult: (state, action) => {
      state.DSSResult = action.payload;
    },
  },
});

// export the setter function
export const { setDSSResults, setDSSResult } = DSSResultReducers.actions;

// export the reducer
export default DSSResultReducers.reducer;
