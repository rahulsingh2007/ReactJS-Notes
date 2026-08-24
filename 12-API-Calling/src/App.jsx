import axios from "axios"
import { useState } from "react";
import UserList from "./API";

const App = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data);
  }


  return (
    <>
      <div>
        <button onClick={getData}>Get Data</button>
      </div>
      <div>
        {data.map(function (elem, idx) {
          return <h3>Hello, {elem.author} , {idx}</h3>
        })}
      </div>
      <div>
        <UserList />
      </div>
    </>
  )
}

export default App

/* async function getData(){
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(response);
} */
/* const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json()
  console.log(response);
  console.log(data);
} */

/* const getData = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  console.log(response.data);
} */