'use client'

import React, { useState,useEffect } from 'react'

const DynamicRoute = ({params}:{params:any}) => {
    const [number,setNumber] = useState('')
    useEffect(()=>{
        
    },[number]);
    console.log(number);
  return (
    <div>
        <input className='text-gray-200' placeholder='enter something' type="text" onChange={(e)=>setNumber(e.target.value)}></input>
        <h1>{JSON.stringify(params)}</h1>
      This is Dynamic Route
    </div>
  )
}

export default DynamicRoute
