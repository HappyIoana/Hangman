/* This file is a "slice" that contains all the reducers to manage the state of the app.
 The createSlice() function is therefore imported from the toolkit. */
import { createSlice } from "@reduxjs/toolkit";
// Import the array of words:
import dictionary from "../dictionary";

/* Name and export the slice. The function wordSlice() accepts a slice name,
 an initial state, and an object containing the four reducer functions. */
export const wordSlice = createSlice({
  // The slice name
  name: "word",
  // The initial state:
  initialState: {
    newWord: "",
    count: 0,
    result: "",
  },
  // Name the four reducers & describe how each function will change the state of the app:
  reducers: {
    // The reducer gets a new word from the word list:
    getNewWord: (state) => {
      // Use Math.floor & Math.random to get a random word from the array:
      let newWord = dictionary[Math.floor(Math.random() * dictionary.length)];
      // Make the word upper case, and update the store with the new word:
      newWord = newWord.trim().toUpperCase();
      state.newWord = newWord;
    },

    // The reducer increases the count by 1 with every incorrect guess:
    increaseCount: (state) => {
      state.count += 1;
    },

    // The reducer resets the count to zero:
    initialiseCount: (state) => {
      state.count = 0;
    },

    // The reducer displays the correct result message: either DisplayImages.js returns 0
    // as the payload, or Body.js returns 1 as the payload. Else the message is set to blank:
    setResult: (state, action) => {
      switch (action.payload) {
        case 0:
          state.result = `Sorry, you lost this time! The correct word is ${state.newWord}`;
          break;
        case 1:
          state.result = "Well done - you won this time!";
          break;
        default:
          state.result = "";
          break;
      }
    },
  },
});

// Export the reducers and ensure action creators are generated:
export const { getNewWord, increaseCount, initialiseCount, setResult } =
  wordSlice.actions;
// Export the reducer function that will be used by the store:
export default wordSlice.reducer;
