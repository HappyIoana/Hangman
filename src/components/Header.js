// Import the useState hook and the Help component:
import { useState } from "react";
import Help from "./Help";

// Create a functional component to show the title, Help button, and Help component on toggle:
const Header = () => {
  // Use the useState hook to store a boolean which will show or hide the Help component:
  const [showHelp, setShowHelp] = useState(false);

  // An onClick function that toggles the true/false state of the button:
  const displayHelp = () => {
    setShowHelp(!showHelp);
  };
  /* The component returns a header containing a h2 and a "Help" button.
    The Help component is shown below the header when the state is "true". 
    On a click the "Help" button calls the displayHelp function and also 
    toggles the button text. */
  return (
    <div>
      <header>
        <h2>Guess the word - HangMAN</h2>
        <button className="btn" onClick={displayHelp}>
          {showHelp ? "Hide Help" : "Help"}
        </button>
      </header>
      {showHelp && <Help />}
    </div>
  );
};
// Export the header to be used in the App component:
export default Header;
