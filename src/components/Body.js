// Import the useSelector and useDispatch redux hooks and all the reducers:
import { useSelector, useDispatch } from "react-redux";
import {
  getNewWord,
  increaseCount,
  initialiseCount,
  setResult,
} from "../store/wordSlice";
// Import the useState and useEffect react hooks and the two components used in this component:
import { useState, useEffect } from "react";
import Keyboard from "./Keyboard";
import DisplayImages from "./DisplayImages";

// Create the function component that holds the logic that make the app work.
const Body = () => {
  // Retrieve the randomly selected word from the store by using useSelector, and assign it to a variable:
  const word = useSelector((state) => state.word.newWord);
  // Use the useState hook to be able to add the correctly guessed letters in an array:
  const [correctLetter, setCorrectLetter] = useState([]);
  // Assign the useDispatch function to a variable:
  const dispatch = useDispatch();

  // Define the functions:

  /* When the 'New Game' button is clicked, use the dispatch hook to get a new word,
    set the counter to 0, reset the correctLetter array to be empty, and reset the result
    message to an empty string: */
  const newGame = () => {
    dispatch(getNewWord());
    dispatch(initialiseCount());
    setCorrectLetter([]);
    dispatch(setResult(""));

    /* Get the buttons from the keyboard by name, iterate through and set them to be enabled 
    and add the classname to change styling to active keys: */
    const keyboardButtons = document.getElementsByName("icon-button");
    Array.from(keyboardButtons).forEach((btn) => {
      btn.disabled = false;
      btn.className = "button";
    });
  };

  // After each keyboard button press, evaluate whether the guess was correct or not:
  const evaluateResponse = (alphabet) => {
    // Use the id when the button was created to get the element
    let btn = document.getElementById(alphabet);
    // If the letter is in the word, change the button to green & add the letter to the correctLetter array:
    if (word.includes(alphabet)) {
      btn.className = "button-green";
      setCorrectLetter([...correctLetter, alphabet]);
      //Otherwise, make the button red and increment the counter to change the image:
    } else {
      btn.className = "button-red";
      dispatch(increaseCount());
      btn.disabled = true;
    }
  };

  /* If the player wins or loses, get all the buttons, iterate through 
    and disable each one, and change the classname to make them grey: */
  const disableButtons = () => {
    const keyboardButtons = document.getElementsByName("icon-button");
    Array.from(keyboardButtons).forEach((btn) => {
      btn.disabled = true;
      btn.className = "button-grey";
    });
  };

  // Variables and logic to manage the results:

  /* Create an array of letters using the UNICODE numbers. This will be mapped over below to create 
    each key in the keyboard: */
  let alphabet = [];
  for (let i = 65; i < 91; i++) {
    let char = String.fromCharCode(i);
    alphabet.push(char);
  }

  /* Split the random word into characters, and change them to underscores. 
    If the real character is in the correctLetter array, display it instead: */
  const guessWord = word
    .split("")
    .map((char) => (correctLetter.includes(char) ? char : "_"))
    .join(" ");

  useEffect(() => {
    // If the word has been generated and includes no underscores, the user has won:
    if (!guessWord.includes("_") && word !== "") {
      // Tell the store the result, which will update the message:
      dispatch(setResult(1));
      // Call the disableButton function:
      disableButtons();
    }
  });

  // Get the result from the store so the right message can be displayed:
  const result = useSelector((state) => state.word.result);

  /* When the "New Game" button has been clicked and a new word selected, 
    the component shows a result bar, which will display whether the user has won or lost. 
    It also has a container for the images, with the function disableButtons sent as a prop
    to the DisplayImages component. Beneath this is the word to be guessed.
    The keyboard is shown beneath that.
    Finally, there is the "New Game" button which is always displayed:
    */
  return (
    <div>
      {word && (
        <div className="results">
          <p> {result}</p>
        </div>
      )}

      {word && (
        <div className="state-container">
          <DisplayImages disableButtons={disableButtons} />
          <p className="state-dash">{guessWord}</p>
        </div>
      )}
      {/* Map over the alphabet array, sending each letter to the Keyboard component to make each
            letter key in the keyboard: */}
      {word && (
        <div className="alpha-container">
          {alphabet.map((alphabet, index) => (
            <Keyboard
              key={index}
              alphabet={alphabet}
              evaluateResponse={evaluateResponse}
            />
          ))}
        </div>
      )}

      <div id="newGame">
        <button className="btn" onClick={newGame}>
          New Game
        </button>
      </div>
    </div>
  );
};
// Export the component to be used in App.js:
export default Body;
