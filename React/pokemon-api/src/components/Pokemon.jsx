import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Pokemon = () => {

const [num,setNum] = useState(0);
useEffect(()=>{
  const getPokemonData = async()=>{
    try{
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`
      );
      setDetails({...details, pokemon:res.data});
      }catch(err){
        console.log('error', err)
        };
        getPokemonData();
  }
})
  return (
    <>
    <h1>You selected {num}</h1>
    <div>
        <select name="" id="" value={num} onChange={(event)=>{setNum(event.target.value)}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
    </div>
    </>
  )
}

export default Pokemon
