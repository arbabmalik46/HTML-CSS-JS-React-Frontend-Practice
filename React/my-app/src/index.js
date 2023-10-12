import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import User from './User';
import Button from './Button';
import App from './App';

const fname = "arbab";
const lname = "Malik";

const main = {
  margin: 0,
  padding: 0,
  backgroundColor: "teal",
  height: "100vh",
  widhth: "100%"
}


var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
<App/>
<Header/>
<br/>
<Button/>
<User name="arbab" expert="developer"/>
  <div style={main}>
    <h1 style={{ color: 'violet' }}>
      {`Hi my name is ${fname} ${lname}`}
    </h1>
  </div>
</>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

