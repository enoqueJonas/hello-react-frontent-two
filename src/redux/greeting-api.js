import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GREETINGS_RETRIEVED } from './greeting';

const getGreetings = createAsyncThunk(GREETINGS_RETRIEVED, async () => {
  const res = await axios.get('http://localhost:3000/greetings/random')
    .catch((err) => console.error(err));
  return res.data.message;
});

export default getGreetings;
