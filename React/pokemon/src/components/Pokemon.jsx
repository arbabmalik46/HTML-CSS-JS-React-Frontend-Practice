import React from "react";
import { useState, useEffect } from "react";



const Pokemon = () => {
    const [num,setNum] = useState();
    const [name, setName] = useState('');
    const [ability,setAbility] = useState('');
    const [moves,setMoves] = useState();
    useEffect(()=>{
        async function getdata(){
            const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
            const res = await url.json();
            setName(res.name);
            setAbility(res.abilities[0].ability.name);
            setMoves(res.moves.length)
            
        }
       getdata();
    });
    
  return (
    <>
      <div>
      <h1>My Name is <span style={{color:'red'}}>{name}</span></h1>
      <h1>My ability is <span style={{color:'darkgray'}}>{ability}</span></h1>
      <h1>I have total {moves} moves</h1>
        <h1>You selected {num}</h1>
        <select name="" id="" value={num} onChange={(event)=>{setNum(event.target.value)}}>
            <option value="0">Please Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
      </div>
    </>
  );
};

export default Pokemon;
