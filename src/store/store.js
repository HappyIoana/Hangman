// import the configureStore() function that automatically sets up an empty store:
import { configureStore } from "@reduxjs/toolkit";
// Import the reducers from tasksSlice.js:
import wordReducer from "./wordSlice";

// Add the reducers from wordSlice.js to the store and export the store:
export default configureStore({
    reducer: {
        word: wordReducer
    }
})