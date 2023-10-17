import React, { useEffect, useState } from 'react';
import Test from './Test'
const App2 = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(()=>{
    window.alert("I am clicked")
  })
  return (
    <>

      <button onClick={() => { setToggle(!toggle) }}>
        Toggle Me
      </button>
      {toggle && <Test/>}
      
    </>
  )
}

export default App2



