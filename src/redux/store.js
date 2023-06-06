import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greeting';

const store = configureStore({ reducer: greetingsReducer });

export default store;
