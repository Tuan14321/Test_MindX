import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

const App = () => {

  const convertToRoman = (num) => {
    var roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    var str = '';

    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }

    return str;
  }

  const [number, setNumber] = useState(0);
  const [result, setResult] = useState("where magic happens");

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
    setResult(convertToRoman(event.target.value));
    console.log(event.target.value)
  }


  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="h-50 col-md-12 border d-flex  align-items-center flex-column mt-5">
        <h1 className="mt-md-3">Decimal to ROMAN </h1>
        <p>Enter your decimal number and magic will happens</p>
        <form className="my-auto w-50">
          <div className="form-group w-100">
            <input onChange={handleChangeNumber} id="decimal" className="form-control w-100 h-100" placeholder="Enter your decimal number" />
          </div>
          <div className="form-group">
            <h1 id="num" className="text-center">{result}</h1>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
