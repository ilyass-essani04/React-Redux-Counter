import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/compteur/countSlice';

const store = configureStore({
    reducer: {
        counter:counterReducer,

    }
});

export default store;
