// store.js
import { configureStore } from '@reduxjs/toolkit';
import GreetingReducer from './GreetingSlice';

const store = configureStore({
  reducer: {
    greeting: GreetingReducer,
  },
});

export default store;
