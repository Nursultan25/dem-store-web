import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = configureStore({
  reducer: {
    reducer: reducer
  }
})

window.store = store

export default store