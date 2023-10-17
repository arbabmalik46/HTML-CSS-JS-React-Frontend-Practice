import React from "react";
import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    if (
      event.target.value === "AC" ||
      event.target.value === "C" ||
      event.target.value === "CE"
    ) {
      setResult("");
    } else {
      setResult(result.concat(event.target.value));
    }
  };
  const calculate = () => {
    try {
      let resultValue = eval(result);
      setResult(`${result}=${resultValue}`);
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <>
      <div className="calculator">
        <input type="text" placeholder="0" id="answer" value={result} />
        <input
          type="button"
          value="CE"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="C"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="AC"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="~"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="0"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="9"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="8"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="7"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="6"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="5"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="4"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="3"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="2"
          className="button"
          onClick={handleClick}
        />
        <input
          type="button"
          value="1"
          className="button"
          onClick={handleClick}
        />
        {/* Operands */}
        <input type="button" value="0" className="button" onClick={handleClick}/>
        <input type="button" value="+" className="button" onClick={handleClick}/>
        <input type="button" value="-" className="button" onClick={handleClick}/>
        <input type="button" value="/" className="button" onClick={handleClick}/>
        <input type="button" value="*" className="button" onClick={handleClick}/>
        <input type="button" value="%" className="button" onClick={handleClick}/>
        <input type="button" value="=" className="button1" onClick={calculate} />
        <input type="button" value="." className="button2" />
      </div>
    </>
  );
};

export default Calculator;
