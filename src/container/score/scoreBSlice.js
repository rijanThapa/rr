import { createSlice } from '@reduxjs/toolkit';
export const scoreBSlice = createSlice({
    name: 'scoreB',
    initialState: {
        value: 0,
    },
    reducers: {
        scoreB: (state) => {
            state.value += 1;
        },
    },
});

// Export the action creator
export const { scoreB } = scoreBSlice.actions;

// Export the reducer
export default scoreBSlice.reducer;
