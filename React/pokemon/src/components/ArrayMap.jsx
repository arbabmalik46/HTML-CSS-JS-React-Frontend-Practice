import React from 'react';
import AdbTwoToneIcon from '@mui/icons-material/AdbTwoTone';
import AddToQueueTwoToneIcon from '@mui/icons-material/AddToQueueTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import NoCrashTwoToneIcon from '@mui/icons-material/NoCrashTwoTone';

const ArrayObj = [
    {
        name:"Arbab",
        id:"1",
        gender:"Male",
        age:25,
        email:"arbabmalik46@gmail.com",
        icon: <AdbTwoToneIcon/>
    },
    {
        name:"Ali",
        id:"2",
        gender:"Female",
        age:30,
        email:"ali@gmail.com",
        icon: <AddToQueueTwoToneIcon/>
    }, 
    {
        name:"Rizwan",
        id:"3",
        gender:"Male",
        age:28,
        email:"rizwan@gmail.com",
        icon: <LocalMallTwoToneIcon/>
    },
    {
        name:"Sara",
        id:"4",
        gender:"Female",
        age:27,
        email:"sara@gmail.com",
        icon: <NoCrashTwoToneIcon/>
    }
]

const ArrayMap = () => {
  return (
    <>
    <h1>Array Map</h1>
    {/* map function is used to iterate over an array and create a new array of the same length */}
    <ul className="list-group">
       <h1> {
            ArrayObj.map((item)=>{
                return <><li key={item.id} className="list-group-item">
                {item.icon}{item.id}
            </li>
            <li key={item.name}>{item.name}</li>
            <li key={item.gender}>Gender : {item.gender}</li>
            <li key={item.age}>Age : {item.age}</li>
            <li key={item.email}>Email : {item.email}</li>            
            </>
            })
        }</h1>
    </ul>
      {/* <ul className="list-group">
        {ArrayObj.map(item=>{
              return(
                <li key={item.id} className="list-group-item">
                    Name : {item.name}, Gender:{item.gender}, Age:{item.age}, Email:{item.email}
                </li>
              )
        })}    
      </ul> */}
    </>
  )
}

export default ArrayMap
