import { createSlice } from '@reduxjs/toolkit';

// initial state

const initialState = {
  SAWResults: [],
  SAWResult: null,
};

// define the slice
const SAWResultSlice = createSlice({
  name: 'SAWResult',
  initialState,
  reducers: {
    setSAWResults: (state, action) => {
      state.SAWResults = action.payload;
    },
    setSAWResult: (state, action) => {
      state.SAWResult = action.payload;
    },
  },
});

// exoirt the setter function
export const { setSAWResults, setSAWResult } = SAWResultSlice.actions;

// export the reducer
export default SAWResultSlice.reducer;
