import { useState } from "react";
import "./App.css";
import Dic from "./dic1x.json";
import H1 from "./img/state1.gif";
import H2 from "./img/state2.gif";
import H3 from "./img/state3.gif";
import H4 from "./img/state4.gif";
import H5 from "./img/state5.gif";
import H6 from "./img/state6.gif";
import H7 from "./img/state7.gif";
import H8 from "./img/state8.gif";
import H9 from "./img/state9.gif";
import H10 from "./img/state10.gif";
import H11 from "./img/state11.gif";
const Hx = [H1, H2, H3, H4, H5, H6, H7, H8, H9, H10, H11];

function App() {
  //state={worda_x:[], worda_ini:[], word_x:'', word_ini:''};
  const [worda_ini, setWorda_ini] = useState([]);
  const [worda_x, setWorda_x] = useState([]);
  const [word_ini, setWord_ini] = useState("");
  const [word_x, setWord_x] = useState("");
  const [words_ini, setWords_ini] = useState("");
  const [words_x, setWords_x] = useState("");
  const [showWordIni, setShowWordIni] = useState(false);
  var [countWrong, setCountWrong] = useState(0);

  function getRandomInt() {
    return Math.floor(Math.random() * Dic.length);
  }

  // worda_ini - initial array with letters
  // worda_x - current array with correct letters
  // words_ini - initial string with letters and space
  // words_x - current string with correct letters and space
  // word_ini - initial string
  // word_x - current string with correct letters
  // showWordIni - show generate Word
  function WordInit() {
    //window.location.reload(false);
    //GenerateW();
    //generate a random integer number
    const r = getRandomInt();
    //take word at r position from array
    const sx = Dic[r].val;
    // convert string to array
    const wworda_ini = [...sx];
    // compact word -> string
    const wword_ini = wworda_ini.join("");
    const wwords_ini = wworda_ini.join(" ");
    //generate initial pattern word with underline _
    const wworda_x = wworda_ini.map(() => "_");
    const wword_x = wworda_x.join("");
    const wwords_x = wworda_x.join(" ");
    setWorda_ini(wworda_ini);
    setWord_ini(wword_ini);
    setWords_ini(wwords_ini);
    setWorda_x(wworda_x);
    setWord_x(wword_x);
    setWords_x(wwords_x);
    setCountWrong(0);
    // alert(` worda_ini:${worda_ini}  worda_x:${worda_x}  `);
    // alert(window.words_ini);
  }
  function ShowHideWordIni() {
    setShowWordIni(!showWordIni);
  }
  function PressBx(letter) {
    const wi = worda_ini;
    const wx = worda_x;
    let zip = wi.map((val, i) => {
      let xc = wx[i].toLowerCase();
      let ic = val.toLowerCase();
      let lc = letter.toLowerCase();
      return ic === lc ? lc : xc;
    });
    if (zip.join("").toLowerCase() === word_x) {
      //    alert('Wrong');
      let c = countWrong + 1;
      setCountWrong(c);
      if (c === 11) {
        alert(`Sorry, you lost the game! Correct word is ${word_ini}`);
        window.location.reload(false);
      }
    }
    const wword_x = zip.join("");
    const wwords_x = zip.join(" ");
    // alert(zip);
    setWorda_x(zip);
    setWord_x(wword_x);
    setWords_x(wwords_x);
    if (wword_x === word_ini) {
      setWord_x(wword_x);
      alert("You won!");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p> Guess the hidden word - hangMAN</p>

        <div>
          <p>
            WORD :{words_x} : {showWordIni ? words_ini : null}
          </p>
        </div>
        <button id="b_ini" onClick={WordInit}>
          GENERATE NEW WORD
        </button>
        <p id="wcrt">
          <button id="b_x" onClick={ShowHideWordIni}>
            SHOW/HIDE CURRENT WORD
          </button>
        </p>
        <div className="container">
          <div className="image-container">
            <img src={Hx[countWrong]} alt="Loading..." />
          </div>
          <table className="keyboard">
            <tbody>
              <tr>
                <td>
                  <button value="A" onClick={(e) => PressBx(e.target.value)}>
                    A
                  </button>
                </td>
                <td>
                  <button value="B" onClick={(e) => PressBx(e.target.value)}>
                    B
                  </button>
                </td>
                <td>
                  <button value="C" onClick={(e) => PressBx(e.target.value)}>
                    C
                  </button>
                </td>
                <td>
                  <button value="D" onClick={(e) => PressBx(e.target.value)}>
                    D
                  </button>
                </td>
                <td>
                  <button value="E" onClick={(e) => PressBx(e.target.value)}>
                    E
                  </button>
                </td>
                <td>
                  <button value="F" onClick={(e) => PressBx(e.target.value)}>
                    F
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button value="G" onClick={(e) => PressBx(e.target.value)}>
                    G
                  </button>
                </td>
                <td>
                  <button value="H" onClick={(e) => PressBx(e.target.value)}>
                    H
                  </button>
                </td>
                <td>
                  <button value="I" onClick={(e) => PressBx(e.target.value)}>
                    I
                  </button>
                </td>
                <td>
                  <button value="J" onClick={(e) => PressBx(e.target.value)}>
                    J
                  </button>
                </td>
                <td>
                  <button value="K" onClick={(e) => PressBx(e.target.value)}>
                    K
                  </button>
                </td>
                <td>
                  <button value="L" onClick={(e) => PressBx(e.target.value)}>
                    L
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button value="M" onClick={(e) => PressBx(e.target.value)}>
                    M
                  </button>
                </td>
                <td>
                  <button value="N" onClick={(e) => PressBx(e.target.value)}>
                    N
                  </button>
                </td>
                <td>
                  <button value="O" onClick={(e) => PressBx(e.target.value)}>
                    O
                  </button>
                </td>
                <td>
                  <button value="P" onClick={(e) => PressBx(e.target.value)}>
                    P
                  </button>
                </td>
                <td>
                  <button value="Q" onClick={(e) => PressBx(e.target.value)}>
                    Q
                  </button>
                </td>
                <td>
                  <button value="R" onClick={(e) => PressBx(e.target.value)}>
                    R
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button value="S" onClick={(e) => PressBx(e.target.value)}>
                    S
                  </button>
                </td>
                <td>
                  <button value="T" onClick={(e) => PressBx(e.target.value)}>
                    T
                  </button>
                </td>
                <td>
                  <button value="U" onClick={(e) => PressBx(e.target.value)}>
                    U
                  </button>
                </td>
                <td>
                  <button value="V" onClick={(e) => PressBx(e.target.value)}>
                    V
                  </button>
                </td>
                <td>
                  <button value="W" onClick={(e) => PressBx(e.target.value)}>
                    W
                  </button>
                </td>
                <td>
                  <button value="X" onClick={(e) => PressBx(e.target.value)}>
                    X
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button value="Y" onClick={(e) => PressBx(e.target.value)}>
                    Y
                  </button>
                </td>
                <td>
                  <button value="Z" onClick={(e) => PressBx(e.target.value)}>
                    Z
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
