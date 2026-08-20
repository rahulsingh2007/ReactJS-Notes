import { useState } from "react"

const App = () => {
  const [num, setNum] = useState(20)
  const [username, setUsername] = useState('Rahul');
  const [users, setUsers] = useState([10, 20, 30]);
  function change() {
    setNum(21)
    setUsername('Rehan')
    setUsers([20, 30, 40])

  }
  return (
    <>
      <div>
        <h1>Value of num is {num}</h1>
        <h1>Your name is {username}</h1>
        <h1>Array is {users}</h1>
        <button onClick={change}>Change</button>
      </div>
    </>
  )
}
export default App
