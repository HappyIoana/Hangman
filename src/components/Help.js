/* 
The function component Help gives instructions to the user on how to play the game.
It can be hidden or shown using a button in the Header.
The component returns a div with an h3 and a numbered list of instructions:
*/
const Help = () => {
  return (
    <div>
      <h3>Playing Hangman</h3>

      <div className="help-list">
        <ol>
          <li>
            Hangman is an old school favorite, a word game where the goal is
            simply to find the missing word.
          </li>
          <li>
            You will be presented with a number of blank spaces representing the
            missing letters you need to find.
          </li>
          <li>
            Use the keyboard to guess a letter (I recommend starting with
            vowels).
          </li>
          <li>
            If your chosen letter exists in the answer, then all places in the
            answer where that letter appear will be revealed.
          </li>
          <li>
            After you've revealed several letters, you may be able to guess what
            the answer is and fill in the remaining letters.
          </li>
          <li>
            Be warned, every time you guess a letter wrong you lose a life and
            the hangman begins to appear, piece by piece.
          </li>
          <li>You are allowed 10 mistakes.</li>
          <li>Solve the puzzle before the hangman dies!</li>
        </ol>
      </div>
    </div>
  );
};
// Export the component so it can be imported into the Header component:
export default Help;
