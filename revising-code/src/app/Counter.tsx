'use client'
import { useState } from 'react';
import Header from './Header';

export default function Counter() {
    const [number, setNumber] = useState(0);
    const [mess,setMessage] = useState({c:0, message:"Hello"});

    return (
        <>
            <h1>{mess.c}</h1>
            <h1>{mess.message}</h1>
            <button className='bg-red-500 m-1 p-1' onClick={() => {
                setNumber(number+1);
                setMessage({c:10,message:"HelloWorld"});
                alert(mess.message);
            }}>Add Number</button>
            <Header title='Hello'/>
            <Header title='World'/>
            <Header title='Ja'/>
            <button className='bg-green-300 m-1 p-1 ml-5 ' 
            onClick={() => { setNumber(number - 1); alert(number) }}>Decriment</button>
        </>
    )
}