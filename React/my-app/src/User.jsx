import { React } from "react";

function User(props) {
  return(<>
    <h1>My Name is {props.name}</h1>
    <p>I am a full Stack {props.expert}</p>
  </>)
}
export default User;
