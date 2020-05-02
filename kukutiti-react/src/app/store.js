import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import chaPostReducer from '../features/chaPostSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    chaPost: chaPostReducer,
  },
});
