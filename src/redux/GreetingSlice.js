import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/greetings/random';
const initialState = {
  greeting: [],
  status: 'idle',
  error: null,
};
export const fetchRandomGreeting = createAsyncThunk('greeting/fetchRandomGreeting', async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching greeting:', error);
    throw error;
  }
});

const GreetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.greeting = action.payload.greeting;
      })
      .addCase(fetchRandomGreeting.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      });
  },
});
export default GreetingSlice.reducer;
