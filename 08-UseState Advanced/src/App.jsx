import { useState } from "react";

const App = () => {
  // const [num, setNum] = useState(0);
  const [users, setUsers] = useState({ user: 'Rahul', age: 20 });
  const btnClicked = () => {
    // setNum(num+1)

    /* const newUsers = {...users}
    newUsers.user = 'Rehan'
    setUsers(newUsers)
    console.log(newUsers); */

    // setUsers(prev => ({ ...prev, age: 30 }))
  }
  return (
    <>
      {/* <h1>{num}</h1> */}
      <h1>{users.user},{users.age}</h1>
      <button onClick={btnClicked}>Click Me</button>
    </>
  )
}

export default App