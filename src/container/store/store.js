import { configureStore } from '@reduxjs/toolkit';
import scoreAReducer from '../score/scoreASlice';
import scoreBReducer from '../score/scoreBSlice';

const store = configureStore({
  reducer: {

    scoreA: scoreAReducer,
    scoreB: scoreBReducer,
  },
});

export default store;
