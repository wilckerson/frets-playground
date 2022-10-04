import { useState } from "react";
import "./App.css";

function App() {
  // const initialRatioArray = [9/8,4/3,3/2,16/9];
  const initialRatioArray = [1, 1, 1, 10 / 9, 5 / 4, 10 / 7, 5 / 3];

  const fretBoardLength = 650;
  const [ratiosArray, setRatiosArray] = useState(initialRatioArray);

  function onChangeRatio(value, index) {
    const newArray = [...ratiosArray];
    newArray[index] = value;
    setRatiosArray(newArray);
  }

  // function getRatioValueFromPosition(position) {
  //   return fretBoardLength / (fretBoardLength - position);
  // }

  function getPositionFromRatioValue(ratioValue) {
    return fretBoardLength - fretBoardLength / ratioValue;
  }

  return (
    <div className="App">
      <div className="fretboard" style={{ width: fretBoardLength + "px" }}>
        <div className="fret"></div>
        {ratiosArray.map((ratio, index) =>
          ratio === 1 ? null : (
            <div
              key={"fret" + index}
              className="fret"
              style={{ left: getPositionFromRatioValue(ratio) + "px" }}
            ></div>
          )
        )}
      </div>

      {ratiosArray.map((ratio, index) => (
        <div>
          <span>Fret {index + 1}: </span>
          <input
            type="number"
            min="1"
            step="0.005"
            value={ratio}
            onChange={(ev) => onChangeRatio(ev.target.value, index)}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
