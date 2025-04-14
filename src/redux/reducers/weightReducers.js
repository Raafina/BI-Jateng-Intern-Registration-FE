import { createSlice } from '@reduxjs/toolkit';

// initial state

const initialState = {
  weights: [],
  weight: null,
};

// define the slice
const weightSlice = createSlice({
  name: 'weight',
  initialState,
  reducers: {
    setWeights: (state, action) => {
      state.weights = action.payload;
    },
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
  },
});

// export the setter function
export const { setWeights, setWeight } = weightSlice.actions;

// export the reducer
export default weightSlice.reducer;
