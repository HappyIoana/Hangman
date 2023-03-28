// Import the useSelector and useDispatch hooks to select the required slices of state.
import { useSelector, useDispatch } from "react-redux";
// Import the setResult reducer:
import { setResult } from "../store/wordSlice";
// Import the useEffect hook:
import { useEffect } from "react";

// Import all the images representing the different stages:
import state1 from "../images/state1.GIF";
import state2 from "../images/state2.GIF";
import state3 from "../images/state3.GIF";
import state4 from "../images/state4.GIF";
import state5 from "../images/state5.GIF";
import state6 from "../images/state6.GIF";
import state7 from "../images/state7.GIF";
import state8 from "../images/state8.GIF";
import state9 from "../images/state9.GIF";
import state10 from "../images/state10.gif";
import state11 from "../images/state11.GIF";

/* Create a functional component to display different images if an incorrect letter is 
guessed. The component is sent the "disableButtons" function from the Body as props. */
const DisplayImages = ({ disableButtons }) => {
  // Get the number of incorrect guesses from the store:
  const count = useSelector((state) => state.word.count);
  // Set the dispatch hook to a variable:
  const dispatch = useDispatch();
  // Get the image:
  let img = document.getElementById("state-img");
  // Use switch statements to match the image to the current number of incorrect guesses:
  if (img) {
    switch (count) {
      case 0:
        img.src = state1;
        break;
      case 1:
        img.src = state2;
        break;
      case 2:
        img.src = state3;
        break;
      case 3:
        img.src = state4;
        break;
      case 4:
        img.src = state5;
        break;
      case 5:
        img.src = state6;
        break;
      case 6:
        img.src = state7;
        break;
      case 7:
        img.src = state8;
        break;
      case 8:
        img.src = state9;
        break;
      case 9:
        img.src = state10;
        break;
      case 10:
        img.src = state11;
        // As the game is over (and the user has lost), call the function that stops the keyboard working:
        disableButtons();
        break;
      default:
        img.src = state1;
        break;
    }
  }
  // Update the store with the result if the user has had 10 guesses:
  useEffect(() => {
    if (count === 10) {
      dispatch(setResult(0));
    }
  }, [count, dispatch]);

  // The component returns a div with the image that matches the number of incorrect guesses:
  return (
    <div>
      <img
        className="state-img"
        id="state-img"
        src={state1}
        alt="hangman drawing"
      />
      <div>
        <p>You have {count}/10 mistakes so far. </p>
      </div>
    </div>
  );
};
// Export the component to be used by the Body component:
export default DisplayImages;
