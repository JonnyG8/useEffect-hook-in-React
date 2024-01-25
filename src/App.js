
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [number, setNumber] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [plusResult, setPlusResult] = useState(null);

  let firstValue = (event) => {
    setNumber(event.target.value);
  };

  let secondValue = (event) => {
    setNumber2(event.target.value);
  }

  let plusNumbers = () => {
    setPlusResult(parseFloat(number) + parseFloat(number2));
  }


  useEffect(() => {
    if(parseFloat(number) === 0 && parseFloat(number2) === 0) {
      alert('The inputted numbers can not be 0')
    }
  }, [number, number2]);

  return (
    <div className="App">
      <input
        onChange={firstValue}
        placeholder='input the number'
      >
      </input>
      <input
        onChange={secondValue}
        placeholder='input the number'
      >
      </input>
      <button onClick={plusNumbers}>
        +
      </button>
      <div>
        <h2>{plusResult}</h2>
      </div>
    </div>
  );
}

export default App;
