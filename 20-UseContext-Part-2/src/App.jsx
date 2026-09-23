import { useState } from "react"
import Navbar from "./Component/Navbar"
import { counterContext } from "./Context/context";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <counterContext.Provider value={{ count, setCount }}>
        <Navbar />
        <button onClick={() => {
          setCount(count + 1)
        }}>Count is {count}</button>
      </counterContext.Provider>
    </div>
  )
}

export default App