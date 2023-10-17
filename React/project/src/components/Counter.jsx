import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
    const [num,setNum] = useState(0);
    const oncliked =()=>{
        setNum(num + 1)
    }
  return (
    <>
    <div className="couterparent">
      <div className="counter">
        <h3>This Is Counter</h3>
        <button onClick={()=>{oncliked()}}>{num}</button>
      </div>
      </div>
    </>
  );
};

export default Counter;
