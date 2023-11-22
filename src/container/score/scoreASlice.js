import { createSlice } from '@reduxjs/toolkit';
export const scoreASlice = createSlice({
  name: 'scoreA',
  initialState: {
    value: 0,
  },
  reducers: {
    scoreA: (state) => {
      state.value += 1;
    },
  },
});

// Export the action creator
export const { scoreA } = scoreASlice.actions;

// Export the reducer
export default scoreASlice.reducer;
