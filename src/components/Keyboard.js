/* The functional component creates each of the 26 letters one by one.
The props "alphabet" (an alphabetical array of all 26 letters) and "evaluateResponse"
(a function that checks if the letter is in the word or not) are sent to the component.
Each letter is a button that calls the function when clicked.  */ 
const Keyboard = ({ alphabet, evaluateResponse }) => {
    return (
        <div>
            <div className='icon'>
                <button
                    className="button" 
                    id={alphabet} 
                    name='icon-button' 
                    onClick={() => evaluateResponse(alphabet)}>{alphabet}
                </button>
            </div>
        </div>
    );
}
// Export the component to be used by the Body component:
export default Keyboard;
