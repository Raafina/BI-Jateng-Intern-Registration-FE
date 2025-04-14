import { createSlice } from '@reduxjs/toolkit';

// initial state

const initialState = {
  applications: [],
  application: null,
};

// define the slice
const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setApplications: (state, action) => {
      state.applications = action.payload;
    },
    setApplication: (state, action) => {
      state.application = action.payload;
    },
  },
});

// export the setter function
export const { setApplications, setApplication } = applicationSlice.actions;

// export the reducer
export default applicationSlice.reducer;
