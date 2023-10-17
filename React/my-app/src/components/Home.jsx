import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/about")
    }
  return (
    <div>
      <>
      <p>This is Home Page</p>
      <button onClick={handleClick}>Home Button</button>
      </>
    </div>
  )
}

export default Home
