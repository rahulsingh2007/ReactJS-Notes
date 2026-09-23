import { useState, useCallback } from "react"
import Navbar from "./Components/Navbar"

const App = () => {
  const [count, setCount] = useState(0);
  const [adjective, setAdjective] = useState("good");
  const getAdjective = useCallback(() => {
    return "another" + count
  }, [count])

  return (
    <div>
      <Navbar adjective={"Hey"} getAdjective={getAdjective} />
      <button onClick={() => setCount(count + 1)}>{count} Click</button>
    </div>
  )
}

export default App